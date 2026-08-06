"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { inquiryForm } from "@/data/content";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

const EMPTY = { name: "", company: "", email: "", message: "" };

export default function InquiryForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState(EMPTY);
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");

  const mailtoHref = () => {
    const subject = encodeURIComponent(`Enquiry from ${form.name} (${form.company})`);
    const body = encodeURIComponent(
      `${form.message}\n\n---\nFrom: ${form.name}, ${form.company}\nEmail: ${form.email}`,
    );
    return `mailto:${inquiryForm.recipient}?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website }),
      });
      if (!res.ok) throw new Error(`request failed: ${res.status}`);
      setStatus("sent");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative bg-[#f1ece3] text-[#0e2a47] py-16 lg:py-20 border-t border-[#0e2a47]/12">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-y-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <div className="eyebrow text-[#f9441d]">{t(inquiryForm.overline)}</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="tx-h3 balance mt-6 text-[#0e2a47]">{t(inquiryForm.heading)}</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 max-w-[360px] text-[14px] leading-[1.7] text-[#1a1a1a]/65">
                {t(inquiryForm.sub)}
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="col-span-12 md:col-span-8">
            <form
              onSubmit={onSubmit}
              className="bg-[#f8f6f3] p-8 lg:p-10 shadow-[0_1px_2px_rgba(14, 42, 71,0.03),0_12px_28px_-14px_rgba(14, 42, 71,0.10)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field
                  label={t(inquiryForm.fields.company)}
                  value={form.company}
                  onChange={(v) => setForm({ ...form, company: v })}
                  required
                />
                <Field
                  label={t(inquiryForm.fields.name)}
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  required
                />
              </div>
              <div className="mt-6">
                <Field
                  type="email"
                  label={t(inquiryForm.fields.email)}
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                />
              </div>
              <div className="mt-6">
                <Field
                  label={t(inquiryForm.fields.message)}
                  value={form.message}
                  onChange={(v) => setForm({ ...form, message: v })}
                  textarea
                  required
                />
              </div>
              <div
                aria-hidden
                className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
              >
                <label>
                  Website
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </label>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <button
                  type="submit"
                  className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? t(inquiryForm.sending) : t(inquiryForm.submit)}
                  <span aria-hidden className="btn-icon">
                    →
                  </span>
                </button>

                <p
                  role="status"
                  aria-live="polite"
                  className="text-[13.5px] leading-[1.6] text-[#1a1a1a]/70"
                >
                  {status === "sent" && t(inquiryForm.success)}
                  {status === "error" && (
                    <span className="text-[#c1301a]">
                      {t(inquiryForm.error)}{" "}
                      <a href={mailtoHref()} className="underline underline-offset-4">
                        {t(inquiryForm.errorAction)}
                      </a>
                    </span>
                  )}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  textarea,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[13px] uppercase tracking-[0.18em] text-[#1a1a1a]/65 font-medium">
        {label}
        {required && <span className="text-[#f9441d] ml-1">*</span>}
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          rows={6}
          className="border-b border-[#0e2a47]/25 bg-transparent py-2.5 text-[15px] text-[#0e2a47] outline-none focus:border-[#f9441d] resize-none"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="border-b border-[#0e2a47]/25 bg-transparent py-2.5 text-[15px] text-[#0e2a47] outline-none focus:border-[#f9441d]"
        />
      )}
    </label>
  );
}
