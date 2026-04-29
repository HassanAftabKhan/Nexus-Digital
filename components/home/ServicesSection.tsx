"use client";

import { Monitor, TrendingUp, Share2, Target, Palette, ArrowRight, type LucideIcon } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = { Monitor, TrendingUp, Share2, Target, Palette };

export default function ServicesSection() {
  return (
    <section id="services" className="section-pad section-white" aria-labelledby="services-heading">
      <div className="container-site">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem", alignItems: "start", marginBottom: "4rem" }} className="services-header">
          <div>
            <span className="eyebrow">Services</span>
            <h2>Everything your brand needs to dominate online</h2>
          </div>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, alignSelf: "end" }}>
            Stop working with five different agencies. We handle your entire digital presence — from strategy to execution — so you see results faster.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }} className="services-grid">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? Monitor;
            return (
              <article key={service.id} className="service-card" aria-label={service.title}>
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "var(--radius-sm)", backgroundColor: "var(--color-blue-light)", border: "1px solid var(--color-blue-mid)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={20} style={{ color: "var(--color-blue)" }} strokeWidth={1.75} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.625rem" }}>
                      <h3>{service.title}</h3>
                      <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "var(--color-ink-muted)", letterSpacing: "0.05em" }}>0{i + 1}</span>
                    </div>
                    <p style={{ fontSize: "0.9375rem", marginBottom: "1.25rem", lineHeight: 1.7 }}>{service.shortDesc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
                      {service.features.slice(0, 3).map((f) => (
                        <span key={f} style={{ fontSize: "0.6875rem", fontWeight: 600, padding: "0.25rem 0.625rem", borderRadius: "var(--radius-sm)", backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-ink-light)" }}>{f}</span>
                      ))}
                    </div>
                    <a href={`/services/${service.id}`} className="btn btn-ghost" aria-label={`Learn about ${service.title}`}>
                      Learn more <ArrowRight size={13} strokeWidth={2.5} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <style>{`
        @media(min-width:900px) { .services-header { grid-template-columns: 1fr 1fr !important; } }
        @media(min-width:640px) { .services-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media(min-width:1024px) { .services-grid { grid-template-columns: repeat(3,1fr) !important; } }
      `}</style>
    </section>
  );
}
