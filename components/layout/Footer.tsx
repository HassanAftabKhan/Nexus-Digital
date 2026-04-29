"use client";

import { Linkedin, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { SITE, SERVICES } from "@/lib/constants";

const SOCIAL_LINKS = [
  { icon: Linkedin,  href: "https://linkedin.com",  label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook,  href: "https://facebook.com",  label: "Facebook" },
  { icon: Twitter,   href: "https://twitter.com",   label: "X (Twitter)" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" style={{ backgroundColor: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
      <div className="container-site" style={{ paddingTop: "5rem", paddingBottom: "3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", marginBottom: "4rem" }} className="footer-grid">

          {/* Brand */}
          <div style={{ maxWidth: "300px" }}>
            <a href="/" className="flex items-center gap-2 mb-5" aria-label={`${SITE.name} — Home`}>
              <div style={{ width: "28px", height: "28px", borderRadius: "var(--radius-sm)", background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-end) 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px -2px rgba(96,65,232,0.3)" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.875rem", color: "#fff" }}>N</span>
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "var(--color-text)", letterSpacing: "-0.02em" }}>{SITE.name}</span>
            </a>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>
              Full-service digital growth agency helping ambitious businesses build stronger brands and acquire customers at scale.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "var(--radius-sm)", color: "var(--color-text-secondary)", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-accent)";
                    e.currentTarget.style.backgroundColor = "var(--color-accent-subtle)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="label-eyebrow" style={{ marginBottom: "1.25rem" }}>Services</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", listStyle: "none" }}>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href={`/services/${s.id}`} style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", transition: "color 0.3s ease" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-accent)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text-secondary)")}
                  >{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="label-eyebrow" style={{ marginBottom: "1.25rem" }}>Company</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", listStyle: "none" }}>
              {[{ label: "About", href: "/about" }, { label: "Our Work", href: "/work" }, { label: "Blog", href: "/blog" }, { label: "Contact", href: "/contact" }, { label: "Privacy", href: "/privacy" }].map((link) => (
                <li key={link.label}>
                  <a href={link.href} style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", transition: "color 0.3s ease" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-accent)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text-secondary)")}
                  >{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="label-eyebrow" style={{ marginBottom: "1.25rem" }}>Get in touch</h3>
            <address style={{ fontStyle: "normal", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <a href={`mailto:${SITE.email}`} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "0.875rem", color: "var(--color-text-secondary)", transition: "color 0.3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
              >
                <Mail size={15} style={{ marginTop: "2px", flexShrink: 0, opacity: 0.5 }} />{SITE.email}
              </a>
              <a href={`tel:${SITE.phone}`} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "0.875rem", color: "var(--color-text-secondary)", transition: "color 0.3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
              >
                <Phone size={15} style={{ marginTop: "2px", flexShrink: 0, opacity: 0.5 }} />{SITE.phone}
              </a>
              <p style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>
                <MapPin size={15} style={{ marginTop: "2px", flexShrink: 0, opacity: 0.5 }} />{SITE.address}
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", paddingTop: "2rem", borderTop: "1px solid var(--color-border)", fontSize: "0.75rem", color: "var(--color-text-secondary)" }}>
          <p>&copy; {year} {SITE.name}. All rights reserved.</p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>Google Partner</span>
            <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>Meta Partner</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width:768px) { .footer-grid { grid-template-columns: 1.5fr 1fr 1fr 1fr !important; } }
      `}</style>
    </footer>
  );
}
