import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="relative">
      <Header />
      <section className="relative bg-[#f8f6f3] text-[#0e2a47] pt-[var(--header-h)]">
        <div className="mx-auto max-w-[1120px] px-6 sm:px-10 lg:px-16">
          <div className="grid min-h-[70vh] grid-cols-12 items-center gap-6 md:gap-10 py-24 lg:py-32">
            <div className="col-span-12 md:col-span-5">
              <div
                className="font-serif tabular leading-[0.85] text-[#0e2a47] tracking-[-0.05em]"
                style={{ fontSize: "clamp(8rem, 18vw, 16rem)" }}
              >
                4<span className="text-[#f9441d]">0</span>4
              </div>
              <div className="mt-4 eyebrow text-[#1a1a1a]/55">Off the chart</div>
            </div>
            <div className="col-span-12 md:col-span-7">
              <h1 className="tx-h2 balance text-[#0e2a47]">
                This page has drifted from the manifest.
              </h1>
              <p className="font-serif italic mt-6 max-w-[520px] text-[1.0625rem] leading-[1.7] text-[#1a1a1a]/70">
                Every cargo, eventually, finds its port. Let us return you to ours.
              </p>
              <p className="font-serif-kr mt-4 max-w-[520px] text-[15px] leading-[1.75] text-[#1a1a1a]/65">
                요청하신 페이지를 찾을 수 없습니다. 항로를 잠시 잃었을 뿐입니다 - 다시 출발점으로 안내합니다.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link href="/" className="btn-primary">
                  Back to home
                  <span aria-hidden className="btn-icon">→</span>
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Get in touch <span aria-hidden className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
