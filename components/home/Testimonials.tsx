"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad section-slate" aria-labelledby="testimonials-heading">
      <div className="container-site">
        <span className="eyebrow">Client Reviews</span>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", margin: "0.5rem 0 3.5rem" }} className="test-header">
          <h2>Heard it from our clients first</h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>
            Don&apos;t just take our word for it. Here&apos;s what business owners say after working with our team.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1px", backgroundColor: "var(--color-border)" }} className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} style={{ backgroundColor: "var(--color-slate-bg)", padding: "2.25rem", margin: 0, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: "2px", marginBottom: "1.25rem" }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="var(--color-blue)" color="var(--color-blue)" aria-hidden="true" />
                ))}
              </div>
              <blockquote style={{ fontFamily: "var(--font-display)", fontSize: "1.0625rem", color: "var(--color-ink)", lineHeight: 1.6, fontWeight: 500, flex: 1, marginBottom: "1.5rem" }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption style={{ display: "flex", alignItems: "center", gap: "0.75rem", paddingTop: "1.25rem", borderTop: "1px solid var(--color-border)" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "50%", backgroundColor: "var(--color-blue)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.875rem", fontWeight: 700, color: "#fff", flexShrink: 0 }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-ink)" }}>{t.name}</p>
                  <p style={{ fontSize: "0.6875rem", color: "var(--color-ink-muted)" }}>{t.role} · {t.company}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <style>{`
        @media(min-width:900px) { .test-header { grid-template-columns: 1fr 1fr !important; } }
        @media(min-width:768px) { .testimonials-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
