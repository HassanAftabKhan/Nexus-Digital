"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
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
            marginBottom: "4rem",
          }}
        >
          <SectionHeading
            eyebrow="Case Studies"
            title="Work That Speaks for Itself"
            className="mb-0"
          />
          <a
            href="/work"
            className="btn btn-secondary text-sm shrink-0"
            style={{ borderRadius: "9999px" }}
          >
            View All Work <ArrowRight size={14} />
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {CASE_STUDIES.map((study, index) => (
            <article
              key={index}
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                transition: "border-color 0.3s ease, transform 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="muted">{study.industry}</Badge>
                {study.tags.map((tag) => (
                  <Badge key={tag} variant="accent">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Big metric */}
              <div>
                <p
                  className="font-black"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 5rem)",
                    color: "var(--color-accent)",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  {study.metric}
                </p>
                <p
                  className="text-sm font-semibold mt-1"
                  style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
                >
                  {study.metricLabel}
                </p>
              </div>

              {/* Challenge and result */}
              <div
                style={{
                  borderTop: "1px solid var(--color-surface-high)",
                  paddingTop: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
                  >
                    Challenge
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "var(--color-success)", fontFamily: "var(--font-mono)" }}
                  >
                    Result
                  </p>
                  <p className="text-sm font-semibold leading-relaxed" style={{ color: "var(--color-text)" }}>
                    {study.result}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="/work"
                className="btn btn-ghost inline-flex items-center gap-2 text-sm font-semibold mt-auto"
                aria-label={`Read ${study.industry} case study`}
              >
                Read Case Study <ArrowRight size={15} strokeWidth={2.5} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
