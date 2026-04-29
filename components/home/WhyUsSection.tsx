"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_US_POINTS } from "@/lib/constants";
import { Award, User, BarChart3, Shield, type LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = { Award, User, BarChart3, Shield };

export default function WhyUsSection() {
  return (
    <section id="about" className="section-pad" aria-labelledby="why-us-heading" style={{ backgroundColor: "var(--color-surface-high)" }}>
      <div className="container-site">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem", alignItems: "start" }} className="why-us-grid">

          {/* Left */}
          <div>
            <SectionHeading
              eyebrow="Why Nexus"
              title="We treat your budget like it's our own"
              subtitle="Most agencies charge more and deliver less. We built ours around complete transparency, measurable outcomes, and genuine care for your growth."
              className="mb-10"
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                { number: "500+", label: "Clients served" },
                { number: "98%",  label: "Retention rate" },
                { number: "$40M+", label: "Client revenue generated" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "baseline", gap: "1.25rem", padding: "1.25rem 0", borderBottom: "1px solid var(--color-border)" }}>
                  <span className="gradient-text" style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 700, letterSpacing: "-0.02em", minWidth: "80px" }}>
                    {item.number}
                  </span>
                  <span style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — features */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }} className="why-us-features">
            {WHY_US_POINTS.map((point) => {
              const Icon = ICON_MAP[point.icon] ?? Award;
              return (
                <div
                  key={point.title}
                  style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", padding: "1.5rem", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", background: "var(--color-surface)", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", transition: "all 0.35s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(96,65,232,0.25)";
                    e.currentTarget.style.transform = "translateX(4px)";
                    e.currentTarget.style.boxShadow = "0 4px 16px -4px rgba(96,65,232,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
                  }}
                >
                  <div style={{ width: "40px", height: "40px", borderRadius: "var(--radius-sm)", background: "var(--color-accent-subtle)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={18} style={{ color: "var(--color-accent)" }} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 style={{ color: "var(--color-text)", marginBottom: "0.375rem", fontSize: "1rem", fontWeight: 600 }}>{point.title}</h3>
                    <p style={{ fontSize: "0.8125rem", color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{point.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width:900px) { .why-us-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
