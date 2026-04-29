"use client";

import StatCounter from "@/components/ui/StatCounter";

const RESULTS = [
  { value: 312,  suffix: "%", label: "Average organic traffic growth",    note: "Within 6 months" },
  { value: 2.8,  suffix: "x", label: "Return on ad spend (ROAS)",         note: "Across all paid accounts" },
  { value: 98,   suffix: "%", label: "Client retention rate",              note: "Year over year" },
  { value: 500,  suffix: "+", label: "Businesses scaled",                  note: "Since our founding" },
  { value: 40,   suffix: "M+", label: "Revenue generated for clients",     note: "USD, tracked & verified" },
  { value: 6,    suffix: " yrs", label: "Average team experience",         note: "Per specialist" },
];

export default function ResultsSection() {
  return (
    <section id="results" className="section-pad section-dark" aria-labelledby="results-heading">
      <div className="container-site">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", marginBottom: "4.5rem" }} className="results-header">
          <div>
            <span className="eyebrow" style={{ color: "var(--color-blue-mid)" }}>By The Numbers</span>
            <h2 style={{ color: "#fff", marginTop: "0.5rem" }}>Results you can take to the bank</h2>
          </div>
          <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: 1.75, alignSelf: "end" }}>
            Every number below is pulled directly from client dashboards — not case study cherry-picks or industry benchmarks.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} className="results-grid">
          {RESULTS.map((r) => (
            <div key={r.label} style={{ backgroundColor: "var(--color-ink-bg)", padding: "2.5rem" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem,4vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "0.75rem" }}>
                <StatCounter value={r.value} suffix={r.suffix} decimals={r.value % 1 !== 0 ? 1 : 0} />
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#E2E8F0", fontWeight: 600, marginBottom: "0.25rem" }}>{r.label}</p>
              <p style={{ fontSize: "0.75rem", color: "#64748B" }}>{r.note}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(min-width:900px) { .results-header { grid-template-columns: 1fr 1fr !important; } }
        @media(min-width:768px) { .results-grid { grid-template-columns: repeat(3,1fr) !important; } }
      `}</style>
    </section>
  );
}
