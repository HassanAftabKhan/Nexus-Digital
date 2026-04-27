"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { CASE_STUDIES, TESTIMONIALS } from "@/lib/constants";
import { ArrowRight, Star } from "lucide-react";


export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ── */}
        <section
          style={{ paddingTop: "10rem", paddingBottom: "5rem", position: "relative", overflow: "hidden" }}
          aria-labelledby="work-page-heading"
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute", top: "40%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "600px", height: "600px",
              background: "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 65%)",
              filter: "blur(60px)", pointerEvents: "none",
            }}
          />
          <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
              Proven Results
            </p>
            <h1 id="work-page-heading" style={{ maxWidth: "700px", marginBottom: "1.5rem" }}>
              Work That Speaks<br />
              <span style={{ color: "var(--color-accent)" }}>for Itself</span>
            </h1>
            <p style={{ maxWidth: "520px", fontSize: "1.1rem", marginBottom: "2.5rem" }}>
              Real clients. Real budgets. Real results — with the numbers to prove it.
            </p>
            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 mt-4">
              {[
                { value: "500+", label: "Clients Served" },
                { value: "312%", label: "Avg. SEO Traffic Lift" },
                { value: "2.8x", label: "Avg. ROAS on Ads" },
                { value: "98%", label: "Client Retention" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black" style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)", letterSpacing: "-0.03em" }}>
                    {s.value}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Case Studies ── */}
        <section className="section-pad" style={{ paddingTop: "2rem" }}>
          <div className="container-site">
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {CASE_STUDIES.map((study, index) => (
                <article
                  key={study.slug}
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-xl)",
                    padding: "3rem",
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "2.5rem",
                  }}
                  className="case-study-grid"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: "rgba(249,115,22,0.1)",
                            color: "var(--color-accent)",
                            fontFamily: "var(--font-mono)",
                            border: "1px solid rgba(249,115,22,0.2)",
                          }}
                        >
                          {study.industry}
                        </span>
                        {study.services.map((svc) => (
                          <span
                            key={svc}
                            className="text-xs font-semibold px-3 py-1 rounded-full"
                            style={{
                              backgroundColor: "rgba(255,255,255,0.04)",
                              color: "var(--color-muted)",
                              border: "1px solid var(--color-border)",
                            }}
                          >
                            {svc}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>
                        {study.client}
                      </h2>
                    </div>
                    <div
                      className="text-right"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      <p
                        className="font-black"
                        style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", color: "var(--color-accent)", letterSpacing: "-0.04em", lineHeight: 1 }}
                      >
                        {study.metric}
                      </p>
                      <p className="text-xs" style={{ color: "var(--color-muted)" }}>{study.metricLabel}</p>
                    </div>
                  </div>

                  {/* C/S/R grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem", borderTop: "1px solid var(--color-surface-high)", paddingTop: "2rem" }} className="csr-grid">
                    {[
                      { label: "Challenge", text: study.challenge },
                      { label: "Solution", text: study.solution },
                      { label: "Result", text: study.result },
                    ].map(({ label, text }) => (
                      <div key={label}>
                        <p
                          className="text-xs font-semibold uppercase tracking-widest mb-2"
                          style={{
                            color: label === "Result" ? "var(--color-accent)" : "var(--color-muted)",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {label}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: label === "Result" ? "var(--color-text)" : "var(--color-muted)" }}>
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between flex-wrap gap-4" style={{ borderTop: "1px solid var(--color-surface-high)", paddingTop: "1.5rem" }}>
                    <p className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
                      Duration: {study.duration}
                    </p>
                    <a
                      href="/contact"
                      className="btn btn-ghost flex items-center gap-2 text-xs"
                    >
                      Get Similar Results <ArrowRight size={13} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="section-pad" style={{ backgroundColor: "var(--color-surface)" }}>
          <div className="container-site">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
                Client Voices
              </p>
              <h2>What Clients Are Saying</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {TESTIMONIALS.map((t, i) => (
                <figure key={i} className="testimonial-card">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} fill="currentColor" style={{ color: "#f59e0b" }} />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-text)" }}>
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm shrink-0"
                      style={{ backgroundColor: "rgba(249,115,22,0.12)", color: "var(--color-accent)", border: "1.5px solid rgba(249,115,22,0.25)" }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>{t.name}</p>
                      <p className="text-xs" style={{ color: "var(--color-muted)" }}>{t.role}, {t.company}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-pad">
          <div className="container-site text-center">
            <h2 style={{ maxWidth: "600px", margin: "0 auto 1.5rem" }}>
              Ready to Become Our Next Case Study?
            </h2>
            <p style={{ maxWidth: "460px", margin: "0 auto 2.5rem" }}>
              Book a free strategy call. We will show you exactly how we would approach your growth.
            </p>
            <Button href="/contact" variant="primary" showArrow>Book a Free Strategy Call</Button>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .csr-grid { grid-template-columns: 1fr !important; }
          .case-study-grid { padding: 1.5rem !important; }
        }
      `}</style>
    </>
  );
}
