import { NextResponse } from "next/server";
import { reviewInquiry, type Payload } from "./review";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
// The Claude review can take up to 15 seconds before the email goes out.
export const maxDuration = 30;

const RESEND_ENDPOINT = "https://api.resend.com/emails";

const MAX_LENGTHS = {
  company: 200,
  name: 100,
  email: 200,
  message: 5000,
} as const;

const MAX_PHONE_LENGTH = 40;

// Per-instance throttle. Serverless instances are short-lived, so this is a
// speed bump against casual abuse, not a hard quota.
const RATE_LIMIT = { windowMs: 60 * 60 * 1000, max: 5 };
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) {
    for (const [key, stamps] of hits) {
      if (stamps.every((t) => now - t >= RATE_LIMIT.windowMs)) hits.delete(key);
    }
  }
  return recent.length > RATE_LIMIT.max;
}

function clientIp(req: Request) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function parse(body: unknown): { data?: Payload; error?: string } {
  if (typeof body !== "object" || body === null) return { error: "invalid_body" };
  const raw = body as Record<string, unknown>;

  // Honeypot: real visitors never see this field.
  if (typeof raw.website === "string" && raw.website.trim() !== "") {
    return { error: "spam" };
  }

  const fields: Payload = {
    company: String(raw.company ?? "").trim(),
    name: String(raw.name ?? "").trim(),
    email: String(raw.email ?? "").trim(),
    message: String(raw.message ?? "").trim(),
    phone: String(raw.phone ?? "").trim(),
  };

  for (const [key, limit] of Object.entries(MAX_LENGTHS)) {
    const value = fields[key as keyof Payload];
    if (!value) return { error: `missing_${key}` };
    if (value.length > limit) return { error: `too_long_${key}` };
  }
  // Phone is optional, so it is only length-checked.
  if (fields.phone.length > MAX_PHONE_LENGTH) return { error: "too_long_phone" };
  if (!isEmail(fields.email)) return { error: "invalid_email" };
  if (fields.message.length < 2) return { error: "missing_message" };

  return { data: fields };
}

function addressList(value: string | undefined) {
  return (value ?? "")
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function buildMessage(data: Payload, receivedAt: string, review: string) {
  const lines = [
    ["Company", data.company],
    ["Name", data.name],
    ["E-mail", data.email],
    ...(data.phone ? [["Contact Number", data.phone]] : []),
    ["Received", receivedAt],
  ];

  const html = `<div style="font-family:Arial,'Malgun Gothic',sans-serif;font-size:14px;color:#1a1a1a;line-height:1.7">
<p style="margin:0 0 16px">[Auto Forwarding]</p>
<p style="margin:0 0 4px;font-weight:700">주의 / 참고사항</p>
<div style="margin:0 0 20px;white-space:pre-wrap">${escapeHtml(review)}</div>
<p style="margin:0 0 16px;font-weight:700;font-size:16px">---- 접수 원문 ----</p>
<p style="margin:0 0 16px">pillos.co.kr 문의 양식으로 접수된 내용입니다.</p>
<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:20px">
${lines
  .map(
    ([label, value]) =>
      `<tr><td style="padding:4px 16px 4px 0;color:#666;white-space:nowrap">${label}</td><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`,
  )
  .join("")}
</table>
<div style="padding:16px;background:#f5f3ef;border-left:3px solid #f9441d;white-space:pre-wrap">${escapeHtml(data.message)}</div>
</div>`;

  const text = [
    "[Auto Forwarding]",
    "",
    "주의 / 참고사항",
    review,
    "",
    "---- 접수 원문 ----",
    "",
    ...lines.map(([label, value]) => `${label}: ${value}`),
    "",
    data.message,
  ].join("\n");

  const subject = `[필로스 웹사이트 문의] ${data.company} / ${data.name}`;
  // No default recipient on purpose: an unset INQUIRY_TO must fail loudly
  // rather than quietly mailing the company address.
  const to = addressList(process.env.INQUIRY_TO);
  const cc = addressList(process.env.INQUIRY_CC);

  return { subject, html, text, to, cc };
}

type Message = ReturnType<typeof buildMessage>;

async function sendViaResend(msg: Message, from: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: msg.to,
      ...(msg.cc.length > 0 ? { cc: msg.cc } : {}),
      subject: msg.subject,
      html: msg.html,
      text: msg.text,
    }),
  });

  if (!res.ok) {
    throw new Error(`resend_${res.status}: ${(await res.text()).slice(0, 200)}`);
  }
  return true;
}

async function sendEmail(data: Payload, receivedAt: string, review: string) {
  const from = process.env.INQUIRY_FROM;
  const msg = buildMessage(data, receivedAt, review);
  if (!from || msg.to.length === 0) throw new Error("email_not_configured");

  if (await sendViaResend(msg, from)) return;
  throw new Error("email_not_configured");
}

async function sendTelegram(data: Payload, receivedAt: string, review: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) throw new Error("telegram_not_configured");

  const text = [
    review,
    "",
    "필로스 웹사이트 문의 접수",
    `회사: ${data.company}`,
    `성함: ${data.name}`,
    `이메일: ${data.email}`,
    ...(data.phone ? [`연락처: ${data.phone}`] : []),
    `접수: ${receivedAt}`,
    "",
    data.message.slice(0, 2000),
  ].join("\n");

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
  });

  if (!res.ok) {
    throw new Error(`telegram_${res.status}: ${(await res.text()).slice(0, 200)}`);
  }
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const { data, error } = parse(body);
  if (!data) {
    // Silently accept honeypot hits so bots get no signal.
    if (error === "spam") return NextResponse.json({ ok: true, delivered: [] });
    return NextResponse.json({ ok: false, error }, { status: 400 });
  }

  if (isRateLimited(clientIp(req))) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const receivedAt = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Seoul",
  }).format(new Date());

  const review = await reviewInquiry(data, receivedAt);

  const results = await Promise.allSettled([
    sendEmail(data, receivedAt, review),
    sendTelegram(data, receivedAt, review),
  ]);

  const channels = ["email", "telegram"] as const;
  const delivered = channels.filter((_, i) => results[i].status === "fulfilled");
  const failures = results
    .map((result, i) =>
      result.status === "rejected" ? `${channels[i]}: ${String(result.reason?.message ?? result.reason)}` : null,
    )
    .filter(Boolean);

  if (failures.length > 0) {
    console.error("[inquiry] delivery problems ->", failures.join(" | "));
  }

  if (delivered.length === 0) {
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered });
}
