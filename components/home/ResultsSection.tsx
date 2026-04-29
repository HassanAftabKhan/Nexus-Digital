"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import StatCounter from "@/components/ui/StatCounter";

const RESULTS = [
  { value: 312, suffix: "%", label: "Average organic traffic growth", period: "within 6 months" },
  { value: 2.8,  suffix: "x",  label: "Return on ad spend",          period: "across all clients" },
  { value: 98,   suffix: "%",  label: "Client retention rate",        period: "year-on-year" },
  { value: 500,  suffix: "+",  label: "Businesses scaled",            period: "since 2020" },
];

export default function ResultsSection() {
  return (
    <section id="results" className="section-pad" aria-labelledby="results-heading" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="container-site">
        <SectionHeading
          eyebrow="Results"
          title="Numbers that speak for themselves"
          subtitle="Every metric below comes from real client accounts — not projections, not industry averages."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.25rem" }} className="results-grid">
          {RESULTS.map((result) => (
            <div
              key={result.label}
              style={{ padding: "2rem", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border)", background: "var(--color-surface)", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", transition: "all 0.35s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(96,65,232,0.22)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 32px -8px rgba(96,65,232,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
              }}
            >
              <p className="gradient-text" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "0.75rem" }}>
                <StatCounter value={result.value} suffix={result.suffix} decimals={result.value % 1 !== 0 ? 1 : 0} />
              </p>
              <p style={{ fontSize: "0.9375rem", color: "var(--color-text)", fontWeight: 500, marginBottom: "0.25rem" }}>{result.label}</p>
              <p style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)" }}>{result.period}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width:768px) { .results-grid { grid-template-columns: repeat(4,1fr) !important; } }
      `}</style>
    </section>
  );
}
