"use client";

import {
  Monitor,
  TrendingUp,
  Share2,
  Target,
  Palette,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Monitor,
  TrendingUp,
  Share2,
  Target,
  Palette,
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-pad"
      aria-labelledby="services-heading"
      style={{ position: "relative" }}
    >
      {/* Subtle dot grid bg */}
      <div
        aria-hidden="true"
        className="bg-dots"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.25,
          pointerEvents: "none",
        }}
      />

      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to dominate online"
          subtitle="From building your website to running your ads — we handle it all under one roof so you can focus on growth."
          centered
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.25rem",
          }}
          className="services-grid"
        >
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon] ?? Monitor;
            return (
              <article key={service.id} className="service-card" aria-label={service.title}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "1.25rem",
                  }}
                >
                  {/* Icon with gradient border */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "var(--radius-md)",
                      background: "var(--color-surface-high)",
                      border: "1px solid var(--color-border-strong)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      size={22}
                      style={{ color: "var(--color-accent)" }}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Number */}
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.5rem",
                      fontWeight: 700,
                      color: "var(--color-surface-high)",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 style={{ marginBottom: "0.75rem", color: "var(--color-text)" }}>
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--color-text-secondary)",
                    marginBottom: "1.5rem",
                    lineHeight: 1.7,
                  }}
                >
                  {service.shortDesc}
                </p>

                {/* Features */}
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.75rem" }}>
                  {service.features.slice(0, 4).map((feature) => (
                    <li
                      key={feature}
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "0.625rem",
                        fontSize: "0.8125rem",
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-end))",
                          flexShrink: 0,
                          marginTop: "0.3rem",
                        }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`/services/${service.id}`}
                  className="btn btn-ghost mt-auto"
                  style={{ justifyContent: "flex-start", gap: "0.5rem" }}
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more <ArrowRight size={14} strokeWidth={2} />
                </a>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
