"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { Star, Quote } from "lucide-react";

const CARD_ACCENT = ["#4F46E5","#10B981","#F43F5E","#F59E0B","#0EA5E9","#7C3AED"];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad" style={{ background:"var(--color-surface)" }} aria-labelledby="testimonials-heading">
      <div className="container-site">
        <div style={{ textAlign:"center", maxWidth:"600px", margin:"0 auto 4rem" }}>
          <span className="label-eyebrow-accent" style={{ display:"block", marginBottom:"1rem" }}>Client Love</span>
          <h2>Don&apos;t take our <span className="gradient-text">word for it</span></h2>
          <p style={{ marginTop:"1rem", fontSize:"1.05rem" }}>
            Real reviews from real clients who transformed their business with Nexus Digital.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:"1.25rem" }} className="testimonial-grid">
          {TESTIMONIALS.map((t, i) => {
            const accent = CARD_ACCENT[i % CARD_ACCENT.length];
            return (
              <figure key={i} className="testimonial-card" style={{ borderTop:`3px solid ${accent}` }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"1.25rem" }}>
                  <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} fill={accent} color={accent} aria-hidden="true" />
                    ))}
                  </div>
                  <Quote size={28} style={{ color:`${accent}20` }} aria-hidden="true" />
                </div>

                <blockquote style={{ fontFamily:"var(--font-display)", fontSize:"1.05rem", color:"var(--color-text)", lineHeight:1.6, marginBottom:"1.75rem", fontWeight:500, flex:1 }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <figcaption style={{ display:"flex", alignItems:"center", gap:"0.875rem", paddingTop:"1.25rem", borderTop:"1px solid var(--color-border)" }}>
                  <div style={{ width:"42px", height:"42px", borderRadius:"50%", background:`linear-gradient(135deg, ${accent}, ${accent}99)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.9rem", fontWeight:800, color:"#fff", flexShrink:0 }} aria-hidden="true">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontSize:"0.9rem", fontWeight:700, color:"var(--color-text)" }}>{t.name}</p>
                    <p style={{ fontSize:"0.75rem", color:"var(--color-text-muted)" }}>{t.role} · {t.company}</p>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>

        {/* Rating bar */}
        <div style={{ marginTop:"4rem", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center", gap:"2rem", padding:"2rem 2.5rem", borderRadius:"22px", background:"linear-gradient(135deg, rgba(79,70,229,0.05), rgba(124,58,237,0.05))", border:"1px solid rgba(79,70,229,0.1)" }}>
          {[
            { icon:"⭐", label:"4.9/5 Rating",      sub:"Across 127 verified reviews" },
            { icon:"🏆", label:"Google Partner",    sub:"Certified agency since 2021" },
            { icon:"📱", label:"Meta Partner",      sub:"Certified agency since 2022" },
            { icon:"🚀", label:"500+ Clients",      sub:"Brands grown worldwide" },
          ].map((item) => (
            <div key={item.label} style={{ textAlign:"center" }}>
              <p style={{ fontSize:"1.25rem", marginBottom:"0.25rem" }}>{item.icon}</p>
              <p style={{ fontSize:"0.9rem", fontWeight:700, color:"var(--color-text)", fontFamily:"var(--font-display)" }}>{item.label}</p>
              <p style={{ fontSize:"0.6875rem", color:"var(--color-text-muted)" }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(min-width:768px){ .testimonial-grid{ grid-template-columns:repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
