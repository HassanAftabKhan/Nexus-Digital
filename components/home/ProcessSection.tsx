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
          eyebrow="How We Work"
          title="A Clear Process. Consistent Results."
          subtitle="No guesswork. No surprises. Every engagement follows a proven four-step framework that keeps you informed and in control."
          centered
        />

        <ol
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
            listStyle: "none",
            padding: 0,
          }}
        >
          {PROCESS_STEPS.map((step, index) => (
            <li
              key={step.number}
              style={{ position: "relative" }}
            >
              {/* Connector line between steps (desktop) */}
              {index < PROCESS_STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  style={{
                    display: "none",
                    position: "absolute",
                    top: "2rem",
                    left: "calc(100% - 1rem)",
                    width: "calc(100% - 2rem)",
                    height: "1px",
                    background: "linear-gradient(90deg, var(--color-accent), var(--color-border))",
                    zIndex: 0,
                  }}
                  className="connector-line"
                />
              )}

              <div
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2rem",
                  height: "100%",
                  position: "relative",
                  zIndex: 1,
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--color-accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--color-border)")
                }
              >
                {/* Step number */}
                <span
                  className="block text-5xl font-black mb-4"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-accent)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {step.number}
                </span>

                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "var(--color-text)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .connector-line { display: block !important; }
        }
      `}</style>
    </section>
  );
}
