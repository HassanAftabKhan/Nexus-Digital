"use client";

import { WHY_US_POINTS } from "@/lib/constants";
import { Award, User, BarChart3, Shield, CheckCircle2, type LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";

const ICON_MAP: Record<string, LucideIcon> = { Award, User, BarChart3, Shield };
const POINT_COLORS = ["#4F46E5","#10B981","#F59E0B","#F43F5E","#0EA5E9","#7C3AED"];

export default function WhyUsSection() {
  return (
    <section id="about" className="section-pad section-rose" aria-labelledby="why-us-heading">
      <div className="container-site">
        <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:"5rem", alignItems:"center" }} className="why-us-grid">

          {/* Left */}
          <div>
            <span className="label-eyebrow-accent" style={{ display:"block", marginBottom:"1rem" }}>Why Choose Us</span>
            <h2 style={{ marginBottom:"1.25rem" }}>
              We grow your business<br />
              <span className="gradient-text">like it&apos;s our own</span>
            </h2>
            <p style={{ fontSize:"1.05rem", lineHeight:1.75, marginBottom:"2rem" }}>
              Unlike agencies that disappear after onboarding, we become true partners. Transparent reporting, zero fluff, and a team that genuinely celebrates your wins.
            </p>

            {/* Checklist */}
            <div style={{ display:"flex", flexDirection:"column", gap:"0.875rem", marginBottom:"2.5rem" }}>
              {[
                "Dedicated account manager — always reachable",
                "Weekly performance reports with plain-English explanations",
                "No hidden fees, no lock-in contracts",
                "Strategy meetings every month — not just at signup",
                "Cancel anytime, keep everything we build",
              ].map((item) => (
                <div key={item} style={{ display:"flex", alignItems:"flex-start", gap:"0.75rem" }}>
                  <CheckCircle2 size={18} style={{ color:"#10B981", flexShrink:0, marginTop:"2px" }} />
                  <span style={{ fontSize:"0.9375rem", color:"var(--color-text-secondary)" }}>{item}</span>
                </div>
              ))}
            </div>

            <Button href="/about" variant="primary">Meet the team</Button>
          </div>

          {/* Right — colored feature cards */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:"1rem" }} className="why-us-features">
            {WHY_US_POINTS.map((point, i) => {
              const Icon = ICON_MAP[point.icon] ?? Award;
              const color = POINT_COLORS[i % POINT_COLORS.length];
              return (
                <div
                  key={point.title}
                  style={{ display:"flex", gap:"1.25rem", alignItems:"flex-start", padding:"1.5rem", borderRadius:"16px", border:`1px solid ${color}22`, background:`${color}08`, transition:"all 0.35s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background=`${color}12`; e.currentTarget.style.transform="translateX(6px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background=`${color}08`; e.currentTarget.style.transform="translateX(0)"; }}
                >
                  <div style={{ width:"44px", height:"44px", borderRadius:"12px", background:`${color}15`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <Icon size={20} style={{ color }} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 style={{ fontSize:"1rem", fontWeight:700, marginBottom:"0.375rem", color:"var(--color-text)" }}>{point.title}</h3>
                    <p style={{ fontSize:"0.8125rem", lineHeight:1.65 }}>{point.description}</p>
                  </div>
                </div>
              );
            })}

            {/* Big stat */}
            <div style={{ padding:"1.5rem 2rem", borderRadius:"16px", background:"linear-gradient(135deg, #4F46E5, #7C3AED)", color:"#fff" }}>
              <p style={{ fontFamily:"var(--font-display)", fontSize:"3rem", fontWeight:800, letterSpacing:"-0.04em", lineHeight:1 }}>$40M+</p>
              <p style={{ fontSize:"0.875rem", opacity:0.85, marginTop:"0.375rem" }}>Revenue generated for clients since 2020</p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media(min-width:960px){ .why-us-grid{ grid-template-columns:1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
