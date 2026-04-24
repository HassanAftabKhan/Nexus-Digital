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
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="bg-grid"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
        <SectionHeading
          eyebrow="What We Do"
          title="Every Service You Need to Dominate Online"
          subtitle="From building your website to running your ads and managing your brand — we handle it all under one roof, so you can focus on your business."
          centered
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon] ?? Monitor;
            return (
              <article key={service.id} className="service-card" aria-label={service.title}>
                {/* Icon */}
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                  style={{ backgroundColor: "rgba(37,99,235,0.12)" }}
                >
                  <Icon size={22} style={{ color: "var(--color-accent)" }} strokeWidth={1.75} />
                </div>

                {/* Index number */}
                <span
                  className="absolute top-6 right-6 text-5xl font-black select-none"
                  style={{
                    color: "var(--color-surface-high)",
                    fontFamily: "var(--font-mono)",
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-text)" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-muted)" }}>
                  {service.shortDesc}
                </p>

                {/* Feature list */}
                <ul className="flex flex-col gap-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "var(--color-muted)" }}
                    >
                      <span
                        style={{
                          color: "var(--color-accent)",
                          marginTop: "2px",
                          flexShrink: 0,
                          fontWeight: 700,
                        }}
                      >
                        +
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA link */}
                <a
                  href={`/services/${service.id}`}
                  className="btn btn-ghost inline-flex items-center gap-2 text-sm font-semibold"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More <ArrowRight size={15} strokeWidth={2.5} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
