"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="section-pad"
      aria-labelledby="process-heading"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Process"
          title="Four steps to measurable growth"
          subtitle="No guesswork, no surprises. Every engagement follows a proven framework that keeps you informed and in control."
          centered
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.25rem",
          }}
          className="process-grid"
        >
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              style={{
                display: "flex",
                gap: "1.75rem",
                padding: "2rem 2.25rem",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
                background: "var(--color-bg)",
                alignItems: "flex-start",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(124,92,252,0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 32px -8px rgba(124,92,252,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Step number */}
              <span
                className="gradient-text"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  flexShrink: 0,
                }}
              >
                {step.number}
              </span>

              <div style={{ paddingTop: "0.25rem" }}>
                <h3
                  style={{
                    color: "var(--color-text)",
                    marginBottom: "0.5rem",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                    maxWidth: "480px",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
