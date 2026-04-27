"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { SERVICES, PROCESS_STEPS } from "@/lib/constants";
import {
  Monitor, TrendingUp, Share2, Target, Palette,
  ArrowRight, CheckCircle2, type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = { Monitor, TrendingUp, Share2, Target, Palette };

export default function ServicesPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ── */}
        <section
          style={{
            paddingTop: "10rem",
            paddingBottom: "6rem",
            position: "relative",
            overflow: "hidden",
          }}
          aria-labelledby="services-page-heading"
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -60%)",
              width: "700px", height: "700px",
              background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 65%)",
              filter: "blur(60px)", pointerEvents: "none",
            }}
          />
          <div className="container-site text-center" style={{ position: "relative", zIndex: 1 }}>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}
            >
              What We Offer
            </p>
            <h1 id="services-page-heading" style={{ maxWidth: "720px", margin: "0 auto 1.5rem" }}>
              Services Built to<br />
              <span style={{ color: "var(--color-accent)" }}>Grow Revenue</span>
            </h1>
            <p style={{ maxWidth: "560px", margin: "0 auto 2.5rem", fontSize: "1.1rem" }}>
              Five high-impact services. One agency. Fully integrated so every channel amplifies the others.
            </p>
            <Button href="/contact" variant="primary" showArrow>
              Book a Free Strategy Call
            </Button>
          </div>
        </section>

        {/* ── Service Cards ── */}
        <section className="section-pad" style={{ paddingTop: "2rem" }}>
          <div className="container-site">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {SERVICES.map((service, index) => {
                const Icon = ICON_MAP[service.icon] ?? Monitor;
                const isOpen = active === service.id;
                return (
                  <article
                    key={service.id}
                    id={service.id}
                    style={{
                      background: "var(--color-surface)",
                      border: `1px solid ${isOpen ? "var(--color-accent)" : "var(--color-border)"}`,
                      borderRadius: "var(--radius-lg)",
                      overflow: "hidden",
                      transition: "border-color 0.3s ease",
                    }}
                  >
                    {/* Accordion header */}
                    <button
                      onClick={() => setActive(isOpen ? null : service.id)}
                      style={{
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: "auto 1fr auto auto",
                        alignItems: "center",
                        gap: "1.5rem",
                        padding: "2rem 2.5rem",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                      aria-expanded={isOpen}
                    >
                      {/* Number */}
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.8rem",
                          color: "var(--color-muted)",
                          minWidth: "2rem",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Icon + Title */}
                      <div className="flex items-center gap-4">
                        <div
                          className="flex items-center justify-center rounded-xl shrink-0"
                          style={{
                            width: "44px", height: "44px",
                            backgroundColor: isOpen ? "rgba(249,115,22,0.15)" : "rgba(255,255,255,0.05)",
                            transition: "background-color 0.3s ease",
                          }}
                        >
                          <Icon size={20} style={{ color: isOpen ? "var(--color-accent)" : "var(--color-muted)" }} strokeWidth={1.75} />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold" style={{ color: "var(--color-text)", fontSize: "1.25rem" }}>
                            {service.title}
                          </h2>
                          {!isOpen && (
                            <p className="text-sm mt-0.5 hidden sm:block" style={{ color: "var(--color-muted)" }}>
                              {service.shortDesc}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Price */}
                      <span
                        className="hidden md:block text-sm font-semibold"
                        style={{ color: isOpen ? "var(--color-accent)" : "var(--color-muted)", fontFamily: "var(--font-mono)", whiteSpace: "nowrap" }}
                      >
                        {service.price}
                      </span>

                      {/* Toggle icon */}
                      <span
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "center",
                          width: "32px", height: "32px",
                          borderRadius: "50%",
                          border: "1px solid var(--color-border)",
                          color: "var(--color-text)",
                          fontSize: "1.2rem",
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                          flexShrink: 0,
                        }}
                      >
                        +
                      </span>
                    </button>

                    {/* Expanded content */}
                    <div
                      style={{
                        maxHeight: isOpen ? "1000px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
                      }}
                    >
                      <div
                        style={{
                          padding: "0 2.5rem 2.5rem",
                          display: "grid",
                          gridTemplateColumns: "1fr",
                          gap: "2rem",
                        }}
                        className="service-expand-grid"
                      >
                        <p className="text-base leading-relaxed" style={{ color: "var(--color-muted)", maxWidth: "680px" }}>
                          {service.longDesc}
                        </p>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="service-cols">
                          {/* Features */}
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
                              What&apos;s Included
                            </p>
                            <ul className="flex flex-col gap-2.5">
                              {service.features.map((f) => (
                                <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--color-text)" }}>
                                  <CheckCircle2 size={16} style={{ color: "var(--color-accent)", marginTop: "2px", flexShrink: 0 }} />
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Deliverables */}
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
                              Deliverables
                            </p>
                            <ul className="flex flex-col gap-2.5">
                              {service.deliverables.map((d) => (
                                <li key={d} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--color-muted)" }}>
                                  <span style={{ color: "var(--color-accent)", fontWeight: 700, flexShrink: 0 }}>→</span>
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="flex items-center justify-between flex-wrap gap-4" style={{ borderTop: "1px solid var(--color-surface-high)", paddingTop: "1.5rem" }}>
                          <div>
                            <p className="text-2xl font-black" style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
                              {service.resultStat}
                            </p>
                            <p className="text-xs" style={{ color: "var(--color-muted)" }}>{service.resultLabel}</p>
                          </div>
                          <Button href="/contact" variant="primary" showArrow>
                            Get Started
                          </Button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="section-pad" style={{ backgroundColor: "var(--color-surface)" }}>
          <div className="container-site">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
                How It Works
              </p>
              <h2 style={{ maxWidth: "560px", margin: "0 auto" }}>From First Call to Measurable Results</h2>
            </div>
            <ol style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", listStyle: "none", padding: 0 }}>
              {PROCESS_STEPS.map((step) => (
                <li key={step.number} style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: "2rem" }}>
                  <span className="block font-black mb-4" style={{ fontSize: "3rem", color: "var(--color-accent)", fontFamily: "var(--font-mono)", lineHeight: 1 }}>
                    {step.number}
                  </span>
                  <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-text)" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="section-pad" aria-label="Contact CTA">
          <div className="container-site text-center">
            <h2 style={{ maxWidth: "600px", margin: "0 auto 1.5rem" }}>
              Not Sure Which Service You Need?
            </h2>
            <p style={{ maxWidth: "480px", margin: "0 auto 2.5rem" }}>
              Book a free 30-minute call. We will audit your current presence and recommend exactly where to start.
            </p>
            <Button href="/contact" variant="primary" showArrow>
              Book a Free Strategy Call
            </Button>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 640px) {
          .service-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
