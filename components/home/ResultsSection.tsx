"use client";

import StatCounter from "@/components/ui/StatCounter";

const RESULTS = [
  { value:312, suffix:"%",  label:"Average traffic growth",      period:"In under 6 months",    color:"#4F46E5", bg:"rgba(79,70,229,0.06)",   border:"rgba(79,70,229,0.15)"  },
  { value:2.8, suffix:"x",  label:"Average ROAS on paid ads",    period:"Across all ad accounts", color:"#0EA5E9", bg:"rgba(14,165,233,0.06)",  border:"rgba(14,165,233,0.15)" },
  { value:98,  suffix:"%",  label:"Client retention rate",       period:"Year over year",         color:"#10B981", bg:"rgba(16,185,129,0.06)",  border:"rgba(16,185,129,0.15)" },
  { value:500, suffix:"+",  label:"Brands we've grown",          period:"Since our founding",     color:"#F43F5E", bg:"rgba(244,63,94,0.06)",   border:"rgba(244,63,94,0.15)"  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="section-pad section-teal" aria-labelledby="results-heading">
      <div className="container-site">
        <div style={{ textAlign:"center", maxWidth:"640px", margin:"0 auto 4rem" }}>
          <span className="label-eyebrow-accent" style={{ display:"block", marginBottom:"1rem" }}>Real Results</span>
          <h2>The numbers don't <span style={{ color:"#10B981" }}>lie</span></h2>
          <p style={{ marginTop:"1rem", fontSize:"1.05rem" }}>
            These aren't vanity metrics. Every figure comes from real client accounts, verified and tracked.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"1.25rem" }} className="results-grid">
          {RESULTS.map((r) => (
            <div
              key={r.label}
              style={{ padding:"2rem", borderRadius:"22px", border:`1px solid ${r.border}`, background:r.bg, transition:"all 0.35s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.boxShadow=`0 16px 40px -8px ${r.border}`; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}
            >
              <p style={{ fontFamily:"var(--font-display)", fontSize:"clamp(2.5rem,5vw,3.75rem)", fontWeight:800, color:r.color, letterSpacing:"-0.04em", lineHeight:1, marginBottom:"0.75rem" }}>
                <StatCounter value={r.value} suffix={r.suffix} decimals={r.value % 1 !== 0 ? 1 : 0} />
              </p>
              <p style={{ fontSize:"1rem", color:"var(--color-text)", fontWeight:600, marginBottom:"0.25rem" }}>{r.label}</p>
              <p style={{ fontSize:"0.75rem", color:"var(--color-text-secondary)" }}>{r.period}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(min-width:768px){ .results-grid{ grid-template-columns:repeat(4,1fr) !important; } }
      `}</style>
    </section>
  );
}
