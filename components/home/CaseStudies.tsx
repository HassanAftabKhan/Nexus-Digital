"use client";

import { CASE_STUDIES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function CaseStudies() {
  return (
    <section id="work" className="section-pad section-white" aria-labelledby="work-heading">
      <div className="container-site">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "3.5rem" }}>
          <div>
            <span className="eyebrow">Case Studies</span>
            <h2 style={{ marginTop: "0.5rem" }}>Work that speaks for itself</h2>
            <p style={{ marginTop: "0.75rem", maxWidth: "480px" }}>Real campaigns, real budgets, real results — documented in full.</p>
          </div>
          <a href="/work" className="btn btn-secondary">All case studies <ArrowRight size={14} /></a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {CASE_STUDIES.map((study, i) => (
            <article key={study.slug} style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", padding: "3rem 0", borderTop: "1px solid var(--color-border)", transition: "all 0.2s ease", cursor: "pointer" }} className="case-row"
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--color-surface)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.6875rem", color: "var(--color-ink-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {String(i + 1).padStart(2,"0")} — {study.industry}
                </span>
                {study.tags.slice(0,2).map((t) => (
                  <span key={t} style={{ fontSize: "0.6875rem", padding: "0.2rem 0.625rem", border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)", color: "var(--color-ink-light)" }}>{t}</span>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", alignItems: "center" }} className="case-content">
                <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, color: "var(--color-blue)", letterSpacing: "-0.04em", lineHeight: 1 }}>
                  {study.metric}
                  <span style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--color-ink-light)", letterSpacing: "0", marginTop: "0.25rem" }}>{study.metricLabel}</span>
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>{study.challenge}</p>
                  <p style={{ fontSize: "0.9375rem", color: "var(--color-ink)", fontWeight: 600, lineHeight: 1.5 }}>→ {study.result}</p>
                </div>
                <a href="/work" className="btn btn-ghost" style={{ justifySelf: "start" }}>Read case study <ArrowRight size={13} /></a>
              </div>
            </article>
          ))}
          <div style={{ borderTop: "1px solid var(--color-border)" }} />
        </div>
      </div>
      <style>{`
        @media(min-width:768px) { .case-content { grid-template-columns: 200px 1fr auto !important; align-items: center !important; } }
      `}</style>
    </section>
  );
}
