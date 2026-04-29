"use client";

import { WHY_US_POINTS } from "@/lib/constants";
import { Award, User, BarChart3, Shield, CheckCircle2, type LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";

const ICON_MAP: Record<string, LucideIcon> = { Award, User, BarChart3, Shield };

export default function WhyUsSection() {
  return (
    <section id="about" className="section-pad section-white" aria-labelledby="why-us-heading">
      <div className="container-site">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "5rem", alignItems: "start" }} className="why-grid">
          {/* Left */}
          <div>
            <span className="eyebrow">Why Nexus Digital</span>
            <h2 id="why-us-heading" style={{ marginTop: "0.5rem", marginBottom: "1.25rem" }}>
              Agencies are a dime a dozen.<br />Partners are rare.
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              We don&apos;t just run campaigns. We become embedded in your business — learning your customers, your margins, your goals — and building strategies around your specific situation.
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2.5rem" }}>
              {[
                "Senior specialists on every account — no juniors",
                "You own all accounts, data, and content",
                "Weekly updates — never left wondering",
                "No hidden fees. Flat monthly rate.",
                "30-day money-back guarantee",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", listStyle: "none" }}>
                  <CheckCircle2 size={17} style={{ color: "var(--color-green)", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontSize: "0.9375rem", color: "var(--color-ink-mid)" }}>{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/about" variant="primary">About our agency</Button>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {WHY_US_POINTS.map((point, i) => {
              const Icon = ICON_MAP[point.icon] ?? Award;
              return (
                <div key={point.title} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", padding: "1.75rem 0", borderBottom: i < WHY_US_POINTS.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "var(--radius-sm)", backgroundColor: "var(--color-blue-light)", border: "1px solid var(--color-blue-mid)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={18} style={{ color: "var(--color-blue)" }} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1rem", marginBottom: "0.375rem" }}>{point.title}</h3>
                    <p style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>{point.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style>{`
        @media(min-width:960px) { .why-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
