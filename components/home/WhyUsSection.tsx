"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_US_POINTS } from "@/lib/constants";
import { Award, User, BarChart3, Shield, type LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Award,
  User,
  BarChart3,
  Shield,
};

export default function WhyUsSection() {
  return (
    <section
      id="about"
      className="section-pad"
      aria-labelledby="why-us-heading"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="container-site">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="why-us-grid"
        >
          {/* Left — Heading + statement */}
          <div>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="We Treat Your Budget Like It Is Our Own"
              subtitle="Most agencies charge more and deliver less. We built our agency around a different promise — complete transparency, measurable outcomes, and a team that cares about your growth as much as you do."
              className="mb-8"
            />

            <div className="flex flex-col gap-1">
              {[
                { number: "500+", label: "Clients Served" },
                { number: "98%", label: "Retention Rate" },
                { number: "$40M+", label: "Client Revenue Generated" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 py-4"
                  style={{ borderBottom: "1px solid var(--color-surface-high)" }}
                >
                  <span
                    className="text-2xl font-black"
                    style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}
                  >
                    {item.number}
                  </span>
                  <span className="text-sm" style={{ color: "var(--color-muted)" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Feature points */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
            }}
          >
            {WHY_US_POINTS.map((point) => {
              const Icon = ICON_MAP[point.icon] ?? Award;
              return (
                <div
                  key={point.title}
                  style={{
                    background: "var(--color-bg)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "1.5rem",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "var(--color-accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "var(--color-border)")
                  }
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl mb-4"
                    style={{ backgroundColor: "rgba(37,99,235,0.1)" }}
                  >
                    <Icon size={20} style={{ color: "var(--color-accent)" }} strokeWidth={1.75} />
                  </div>
                  <h3
                    className="text-sm font-bold mb-2 leading-snug"
                    style={{ color: "var(--color-text)" }}
                  >
                    {point.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .why-us-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
