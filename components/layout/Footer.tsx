"use client";

import { Linkedin, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { SITE, SERVICES } from "@/lib/constants";

const SOCIAL = [
  { icon: Linkedin,  href: "https://linkedin.com",  label: "LinkedIn"   },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram"  },
  { icon: Facebook,  href: "https://facebook.com",  label: "Facebook"   },
  { icon: Twitter,   href: "https://twitter.com",   label: "X (Twitter)" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer role="contentinfo" style={{ backgroundColor: "var(--color-slate-bg)", borderTop: "1px solid var(--color-border)" }}>
      <div className="container-site" style={{ paddingTop: "4.5rem", paddingBottom: "2.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", paddingBottom: "3rem", borderBottom: "1px solid var(--color-border)", marginBottom: "2rem" }} className="footer-grid">

          {/* Brand */}
          <div>
            <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.25rem" }}>
              <div style={{ width: "30px", height: "30px", borderRadius: "7px", backgroundColor: "var(--color-blue)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.9375rem", color: "#fff" }}>N</span>
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.0625rem", color: "var(--color-ink)" }}>{SITE.name}</span>
            </a>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "var(--color-ink-light)", marginBottom: "1.5rem", maxWidth: "280px" }}>
              Full-service digital growth agency. Real specialists. Real results.
            </p>
            <div style={{ display: "flex", gap: "0.375rem" }}>
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                  style={{ width: "34px", height: "34px", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-ink-muted)", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--color-blue)"; e.currentTarget.style.color = "var(--color-blue)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.color = "var(--color-ink-muted)"; }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ink-muted)", marginBottom: "1.25rem" }}>Services</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href={`/services/${s.id}`} style={{ fontSize: "0.875rem", color: "var(--color-ink-light)", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-blue)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-ink-light)")}
                  >{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ink-muted)", marginBottom: "1.25rem" }}>Company</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[{label:"About",href:"/about"},{label:"Our Work",href:"/work"},{label:"Blog",href:"/blog"},{label:"Pricing",href:"/#pricing"},{label:"Contact",href:"/contact"}].map((l) => (
                <li key={l.label}>
                  <a href={l.href} style={{ fontSize: "0.875rem", color: "var(--color-ink-light)", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-blue)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-ink-light)")}
                  >{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ink-muted)", marginBottom: "1.25rem" }}>Contact</p>
            <address style={{ fontStyle: "normal", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[{ Icon: Mail, val: SITE.email, href: `mailto:${SITE.email}` }, { Icon: Phone, val: SITE.phone, href: `tel:${SITE.phone}` }].map(({ Icon, val, href }) => (
                <a key={val} href={href} style={{ display: "flex", gap: "0.625rem", fontSize: "0.875rem", color: "var(--color-ink-light)", transition: "color 0.2s", alignItems: "flex-start" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-blue)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ink-light)")}
                >
                  <Icon size={14} style={{ marginTop: "3px", flexShrink: 0, opacity: 0.6 }} />{val}
                </a>
              ))}
              <p style={{ display: "flex", gap: "0.625rem", fontSize: "0.875rem", color: "var(--color-ink-light)", alignItems: "flex-start" }}>
                <MapPin size={14} style={{ marginTop: "3px", flexShrink: 0, opacity: 0.6 }} />{SITE.address}
              </p>
            </address>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
          <p style={{ fontSize: "0.75rem", color: "var(--color-ink-muted)" }}>&copy; {year} {SITE.name}. All rights reserved.</p>
          <div style={{ display: "flex", gap: "1.25rem" }}>
            {["Google Partner", "Meta Partner"].map((p) => (
              <span key={p} style={{ fontSize: "0.6875rem", fontWeight: 700, color: "var(--color-blue)", border: "1px solid var(--color-blue-mid)", padding: "0.2rem 0.625rem", borderRadius: "var(--radius-sm)", backgroundColor: "var(--color-blue-light)" }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(min-width:768px) { .footer-grid { grid-template-columns: 1.5fr 1fr 1fr 1fr !important; } }
      `}</style>
    </footer>
  );
}
