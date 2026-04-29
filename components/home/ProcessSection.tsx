"use client";

import { PROCESS_STEPS } from "@/lib/constants";

const STEP_COLORS = [
  { num:"#4F46E5", bg:"rgba(79,70,229,0.06)",   border:"rgba(79,70,229,0.15)"  },
  { num:"#0EA5E9", bg:"rgba(14,165,233,0.06)",  border:"rgba(14,165,233,0.15)" },
  { num:"#10B981", bg:"rgba(16,185,129,0.06)",  border:"rgba(16,185,129,0.15)" },
  { num:"#F59E0B", bg:"rgba(245,158,11,0.06)",  border:"rgba(245,158,11,0.15)" },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-pad" aria-labelledby="process-heading" style={{ background:"var(--color-surface)" }}>
      <div className="container-site">
        {/* Heading */}
        <div style={{ textAlign:"center", maxWidth:"640px", margin:"0 auto 4rem" }}>
          <span className="label-eyebrow-accent" style={{ display:"block", marginBottom:"1rem" }}>How It Works</span>
          <h2>From zero to <span className="gradient-text">hero</span> in four steps</h2>
          <p style={{ marginTop:"1rem", fontSize:"1.05rem" }}>
            We've perfected our process over 500+ projects. Here's how we take your brand from unknown to unstoppable.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:"1.25rem" }} className="process-grid">
          {PROCESS_STEPS.map((step, i) => {
            const col = STEP_COLORS[i % STEP_COLORS.length];
            return (
              <div
                key={step.number}
                style={{ display:"flex", gap:"1.75rem", padding:"2rem 2.25rem", borderRadius:"22px", border:`1px solid ${col.border}`, background:col.bg, alignItems:"flex-start", transition:"all 0.35s ease" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = `0 16px 40px -8px ${col.border}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span style={{ fontFamily:"var(--font-display)", fontSize:"clamp(2.5rem,4vw,3.5rem)", fontWeight:800, lineHeight:1, letterSpacing:"-0.04em", flexShrink:0, color:col.num }}>
                  {step.number}
                </span>
                <div style={{ paddingTop:"0.375rem" }}>
                  <h3 style={{ fontSize:"1.2rem", fontWeight:700, marginBottom:"0.5rem" }}>{step.title}</h3>
                  <p style={{ fontSize:"0.9375rem", lineHeight:1.7, maxWidth:"440px" }}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media(min-width:768px){ .process-grid{ grid-template-columns:repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
