"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-pad"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          centered
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.25rem",
          }}
          className="testimonial-grid"
        >
          {TESTIMONIALS.map((t, index) => (
            <figure key={index} className="testimonial-card">
              {/* Stars */}
              <div
                className="flex gap-0.5 mb-5"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="currentColor"
                    style={{ color: "var(--color-accent)" }}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  color: "var(--color-text)",
                  lineHeight: 1.6,
                  marginBottom: "2rem",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <figcaption
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid var(--color-border)",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-end))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--color-text)" }}>
                    {t.name}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)" }}>
                    {t.role}, {t.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Trust bar */}
        <div
          style={{
            marginTop: "4rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          {[
            { label: "4.9/5", sub: "Average rating · 127 reviews" },
            { label: "Google Partner", sub: "Certified since 2021" },
            { label: "Meta Partner", sub: "Certified since 2022" },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "var(--color-text)",
                  marginBottom: "0.25rem",
                  fontFamily: "var(--font-display)",
                }}
              >
                {item.label}
              </p>
              <p style={{ fontSize: "0.6875rem", color: "var(--color-text-secondary)" }}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .testimonial-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
