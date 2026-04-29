"use client";

import { CASE_STUDIES } from "@/lib/constants";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function CaseStudies() {
  return (
    <section id="work" className="section-pad section-purple" aria-labelledby="work-heading">
      <div className="container-site">
        <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:"1.5rem", marginBottom:"3.5rem" }}>
          <div>
            <span className="label-eyebrow-accent" style={{ display:"block", marginBottom:"0.75rem" }}>Case Studies</span>
            <h2>Proof is in the <span className="gradient-text">results</span></h2>
            <p style={{ marginTop:"0.75rem", maxWidth:"440px" }}>Real campaigns. Real clients. Real numbers that changed the game.</p>
          </div>
          <a href="/work" className="btn btn-secondary">View all projects <ArrowRight size={14} /></a>
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}>
          {CASE_STUDIES.map((study, i) => {
            const accent = i % 2 === 0 ? "#4F46E5" : "#10B981";
            const accentBg = i % 2 === 0 ? "rgba(79,70,229,0.06)" : "rgba(16,185,129,0.06)";
            const accentBorder = i % 2 === 0 ? "rgba(79,70,229,0.15)" : "rgba(16,185,129,0.15)";
            return (
              <article
                key={study.slug}
                style={{ background:"var(--color-surface)", border:`1px solid ${accentBorder}`, borderRadius:"22px", padding:"2.5rem", display:"grid", gridTemplateColumns:"1fr", gap:"2rem", transition:"all 0.4s ease", cursor:"pointer", boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}
                className="case-study-item"
                onMouseEnter={(e) => { e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.boxShadow=`0 20px 60px -12px ${accentBorder}`; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.04)"; }}
              >
                <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", flexWrap:"wrap" }}>
                  <span style={{ padding:"0.25rem 0.75rem", borderRadius:"9999px", background:accentBg, border:`1px solid ${accentBorder}`, fontSize:"0.6875rem", fontWeight:700, color:accent, letterSpacing:"0.08em", textTransform:"uppercase" }}>{study.industry}</span>
                  {study.tags.map((tag) => (
                    <span key={tag} style={{ fontSize:"0.6875rem", color:"var(--color-text-muted)", letterSpacing:"0.06em", textTransform:"uppercase" }}>{tag}</span>
                  ))}
                </div>

                <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:"2rem", alignItems:"center" }} className="case-study-content">
                  <div>
                    <p style={{ fontFamily:"var(--font-display)", fontSize:"clamp(3rem,6vw,5rem)", fontWeight:800, color:accent, letterSpacing:"-0.04em", lineHeight:1 }}>{study.metric}</p>
                    <p style={{ fontSize:"0.875rem", color:"var(--color-text-secondary)", marginTop:"0.5rem", fontWeight:500 }}>{study.metricLabel}</p>
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}>
                    <div>
                      <p style={{ fontSize:"0.6875rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--color-text-muted)", marginBottom:"0.5rem" }}>The Challenge</p>
                      <p style={{ fontSize:"0.9375rem", lineHeight:1.65 }}>{study.challenge}</p>
                    </div>
                    <div style={{ padding:"1rem 1.25rem", borderRadius:"12px", background:accentBg, borderLeft:`3px solid ${accent}` }}>
                      <p style={{ fontSize:"0.6875rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:accent, marginBottom:"0.375rem" }}>✓ What we delivered</p>
                      <p style={{ fontSize:"0.9375rem", color:"var(--color-text)", fontWeight:600, lineHeight:1.5 }}>{study.result}</p>
                    </div>
                  </div>
                </div>

                <a href="/work" className="btn btn-ghost" style={{ color:accent, justifyContent:"flex-start", gap:"0.5rem" }}>
                  Read full case study <ArrowRight size={14} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
      <style>{`
        @media(min-width:768px){ .case-study-content{ grid-template-columns:auto 1fr !important; } }
      `}</style>
    </section>
  );
}
