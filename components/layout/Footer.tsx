"use client";

import { Zap, Linkedin, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { SITE, SERVICES, NAV_LINKS } from "@/lib/constants";

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "X (Twitter)" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{ backgroundColor: "var(--color-surface)", borderTop: "1px solid var(--color-surface-high)" }}
    >
      <div className="container-site" style={{ paddingTop: "5rem", paddingBottom: "3rem" }}>
        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Brand column */}
          <div style={{ maxWidth: "280px" }}>
            <a
              href="/"
              className="flex items-center gap-2 font-bold text-xl mb-4"
              aria-label={`${SITE.name} — Home`}
              style={{ color: "var(--color-text)" }}
            >
              <span
                className="flex items-center justify-center w-8 h-8 rounded-lg"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                <Zap size={16} color="#fff" strokeWidth={2.5} />
              </span>
              {SITE.name}
            </a>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-muted)" }}>
              Full-service digital marketing agency helping businesses grow faster online with
              proven strategies and transparent results.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200"
                  style={{
                    backgroundColor: "var(--color-surface-high)",
                    color: "var(--color-muted)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.backgroundColor = "var(--color-accent)";
                    el.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.backgroundColor = "var(--color-surface-high)";
                    el.style.color = "var(--color-muted)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-sm font-semibold mb-5 tracking-wider uppercase"
              style={{ color: "var(--color-text)", fontFamily: "var(--font-mono)" }}
            >
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href={`/services/${service.id}`}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "var(--color-muted)" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--color-accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--color-muted)")
                    }
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="text-sm font-semibold mb-5 tracking-wider uppercase"
              style={{ color: "var(--color-text)", fontFamily: "var(--font-mono)" }}
            >
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Work", href: "/work" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "var(--color-muted)" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--color-accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--color-muted)")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-sm font-semibold mb-5 tracking-wider uppercase"
              style={{ color: "var(--color-text)", fontFamily: "var(--font-mono)" }}
            >
              Contact
            </h3>
            <address className="not-italic flex flex-col gap-4">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-start gap-3 text-sm transition-colors duration-200"
                style={{ color: "var(--color-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-muted)")
                }
              >
                <Mail size={16} className="mt-0.5 shrink-0" />
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-start gap-3 text-sm transition-colors duration-200"
                style={{ color: "var(--color-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-muted)")
                }
              >
                <Phone size={16} className="mt-0.5 shrink-0" />
                {SITE.phone}
              </a>
              <p className="flex items-start gap-3 text-sm" style={{ color: "var(--color-muted)" }}>
                <MapPin size={16} className="mt-0.5 shrink-0" />
                {SITE.address}
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-sm"
          style={{
            borderTop: "1px solid var(--color-surface-high)",
            color: "var(--color-muted)",
          }}
        >
          <p>
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold"
              style={{
                backgroundColor: "rgba(37,99,235,0.12)",
                color: "var(--color-accent)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Google Partner
            </span>
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold"
              style={{
                backgroundColor: "rgba(37,99,235,0.12)",
                color: "var(--color-accent)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Meta Business Partner
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
