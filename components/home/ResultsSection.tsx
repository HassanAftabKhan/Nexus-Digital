import SectionHeading from "@/components/ui/SectionHeading";
import StatCounter from "@/components/ui/StatCounter";
import { STATS } from "@/lib/constants";

const RESULTS = [
  { value: 312, suffix: "%", label: "Average organic traffic growth", period: "within 6 months" },
  { value: 2.8, suffix: "x", label: "Return on ad spend", period: "across all clients" },
  { value: 98, suffix: "%", label: "Client retention rate", period: "year-on-year" },
  { value: 500, suffix: "+", label: "Businesses scaled", period: "since 2020" },
];

export default function ResultsSection() {
  return (
    <section
      id="results"
      className="section-pad"
      aria-labelledby="results-heading"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
        <SectionHeading
          eyebrow="Proven Results"
          title="Real Numbers. Real Clients. Real Growth."
          subtitle="Every stat below is drawn from actual client accounts — not projections, not industry averages."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {RESULTS.map((result) => (
            <div key={result.label} className="stat-card text-left">
              <p
                className="font-black mb-1"
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                <StatCounter
                  value={result.value}
                  suffix={result.suffix}
                  decimals={result.value % 1 !== 0 ? 1 : 0}
                />
              </p>
              <p
                className="text-base font-semibold mb-1"
                style={{ color: "var(--color-text)" }}
              >
                {result.label}
              </p>
              <p className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
                {result.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
