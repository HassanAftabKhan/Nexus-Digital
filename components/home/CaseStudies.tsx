"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { CASE_STUDIES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function CaseStudies() {
  return (
    <section
      id="work"
      className="section-pad"
      aria-labelledby="work-heading"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="container-site">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          <SectionHeading
            eyebrow="Case Studies"
            title="Work that speaks for itself"
            className="mb-0"
          />
          <a href="/work" className="btn btn-secondary text-sm shrink-0">
            All case studies <ArrowRight size={14} />
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.25rem",
          }}
          className="case-grid"
        >
          {CASE_STUDIES.map((study) => (
            <article
              key={study.slug}
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "2.5rem",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "2rem",
                transition: "all 0.4s ease",
                cursor: "pointer",
              }}
              className="case-study-item"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(124,92,252,0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 40px -8px rgba(124,92,252,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Tags row */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                <span className="label-eyebrow">{study.industry}</span>
                <span style={{ color: "var(--color-border-strong)" }}>·</span>
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.6875rem",
                      color: "var(--color-text-secondary)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "2rem",
                  alignItems: "center",
                }}
                className="case-study-content"
              >
                {/* Metric */}
                <div>
                  <p
                    className="gradient-text"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(3rem, 6vw, 5rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                    }}
                  >
                    {study.metric}
                  </p>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--color-text-secondary)",
                      marginTop: "0.5rem",
                    }}
                  >
                    {study.metricLabel}
                  </p>
                </div>

                {/* Challenge + Result */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <p className="label-eyebrow" style={{ marginBottom: "0.5rem" }}>Challenge</p>
                    <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="label-eyebrow" style={{ marginBottom: "0.5rem", color: "var(--color-success)" }}>
                      Result
                    </p>
                    <p style={{ fontSize: "0.9375rem", color: "var(--color-text)", fontWeight: 500, lineHeight: 1.65 }}>
                      {study.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="/work"
                className="btn btn-ghost"
                style={{ justifyContent: "flex-start", gap: "0.5rem" }}
                aria-label={`Read ${study.industry} case study`}
              >
                Read case study <ArrowRight size={14} strokeWidth={2} />
              </a>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .case-study-content {
            grid-template-columns: 1fr 1.5fr !important;
          }
        }
      `}</style>
    </section>
  );
}
