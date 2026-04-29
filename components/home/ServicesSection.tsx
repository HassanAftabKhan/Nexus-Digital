"use client";

import { Monitor, TrendingUp, Share2, Target, Palette, ArrowRight, type LucideIcon } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = { Monitor, TrendingUp, Share2, Target, Palette };

const CARD_COLORS = [
  { bg:"rgba(79,70,229,0.08)",  icon:"#4F46E5",  num:"rgba(79,70,229,0.08)"  },
  { bg:"rgba(14,165,233,0.08)", icon:"#0EA5E9",  num:"rgba(14,165,233,0.08)" },
  { bg:"rgba(16,185,129,0.08)", icon:"#10B981",  num:"rgba(16,185,129,0.08)" },
  { bg:"rgba(245,158,11,0.08)", icon:"#F59E0B",  num:"rgba(245,158,11,0.08)" },
  { bg:"rgba(124,58,237,0.08)", icon:"#7C3AED",  num:"rgba(124,58,237,0.08)" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-pad section-blue" aria-labelledby="services-heading">
      <div className="container-site">
        {/* Heading */}
        <div style={{ textAlign:"center", maxWidth:"680px", margin:"0 auto 4rem" }}>
          <span className="label-eyebrow-accent" style={{ display:"block", marginBottom:"1rem" }}>What We Do</span>
          <h2>
            All the digital firepower<br />
            <span className="gradient-text">your brand needs</span>
          </h2>
          <p style={{ marginTop:"1rem", fontSize:"1.05rem" }}>
            One agency. Five powerful services. Infinite growth possibilities.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:"1.25rem" }} className="services-grid">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? Monitor;
            const col = CARD_COLORS[i % CARD_COLORS.length];
            return (
              <article key={service.id} className="service-card" aria-label={service.title}>
                <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"1.5rem" }}>
                  <div style={{ width:"52px", height:"52px", borderRadius:"14px", background:col.bg, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <Icon size={24} style={{ color:col.icon }} strokeWidth={1.75} />
                  </div>
                  <span style={{ fontFamily:"var(--font-display)", fontSize:"3rem", fontWeight:800, color:col.bg.replace("0.08","0.15"), lineHeight:1, letterSpacing:"-0.04em" }} aria-hidden="true">
                    {String(i + 1).padStart(2,"0")}
                  </span>
                </div>

                <h3 style={{ marginBottom:"0.75rem", fontSize:"1.2rem" }}>{service.title}</h3>
                <p style={{ fontSize:"0.9375rem", marginBottom:"1.5rem", lineHeight:1.7 }}>{service.shortDesc}</p>

                <ul style={{ display:"flex", flexDirection:"column", gap:"0.5rem", marginBottom:"2rem" }}>
                  {service.features.slice(0,4).map((f) => (
                    <li key={f} style={{ display:"flex", alignItems:"baseline", gap:"0.625rem", fontSize:"0.8125rem", color:"var(--color-text-secondary)" }}>
                      <span style={{ width:"6px", height:"6px", borderRadius:"50%", backgroundColor:col.icon, flexShrink:0, marginTop:"0.25rem" }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href={`/services/${service.id}`} className="btn btn-ghost mt-auto" style={{ color:col.icon, justifyContent:"flex-start", gap:"0.5rem" }} aria-label={`Learn more about ${service.title}`}>
                  Explore service <ArrowRight size={14} strokeWidth={2} />
                </a>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @media(min-width:640px){ .services-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(min-width:1024px){ .services-grid{ grid-template-columns:repeat(3,1fr) !important; } }
      `}</style>
    </section>
  );
}
