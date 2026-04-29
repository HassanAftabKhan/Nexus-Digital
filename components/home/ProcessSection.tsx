"use client";

import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessSection() {
  return (
    <section id="process" className="section-pad section-slate" aria-labelledby="process-heading">
      <div className="container-site">
        <span className="eyebrow">How It Works</span>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", marginBottom: "4rem", marginTop: "0.5rem" }} className="process-header">
          <h2>From first call to first results — here&apos;s our playbook</h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>
            We follow a repeatable 4-step framework built on 500+ successful campaigns. No guesswork — just a clear path to measurable growth.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1px", backgroundColor: "var(--color-border)" }} className="process-grid">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.number} style={{ backgroundColor: "var(--color-slate-bg)", padding: "2.5rem", display: "flex", gap: "2rem", alignItems: "flex-start" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 800, color: "var(--color-blue-mid)", lineHeight: 1, flexShrink: 0, userSelect: "none" }}>{String(i + 1).padStart(2,"0")}</span>
              <div>
                <h3 style={{ marginBottom: "0.625rem" }}>{step.title}</h3>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, maxWidth: "400px" }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(min-width:900px) { .process-header { grid-template-columns: 1fr 1fr !important; } }
        @media(min-width:768px) { .process-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
