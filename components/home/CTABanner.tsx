"use client";

import Button from "@/components/ui/Button";
import { ArrowRight, Mail, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="contact" aria-labelledby="cta-heading" className="section-dark" style={{ padding: "7rem 0" }}>
      <div className="container-site">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem", alignItems: "center" }} className="cta-grid">
          {/* Left */}
          <div>
            <span style={{ display: "inline-block", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-blue-mid)", marginBottom: "1rem" }}>
              Free Audit — No Obligation
            </span>
            <h2 id="cta-heading" style={{ color: "#fff", marginBottom: "1.25rem" }}>
              Ready to see what&apos;s holding your brand back?
            </h2>
            <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "520px" }}>
              Book a free 30-minute strategy session. We&apos;ll audit your current digital presence and hand you a clear roadmap — whether you work with us or not.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="primary">Book Free Audit <ArrowRight size={14} /></Button>
              <a href="/work" className="btn btn-outline-white">View our work</a>
            </div>
          </div>

          {/* Right — contact info card */}
          <div style={{ backgroundColor: "var(--color-ink-surface)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "var(--radius-lg)", padding: "2.5rem" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: "2rem" }}>Prefer to reach out directly?</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
              <a href="mailto:hello@nexusdigital.agency" style={{ display: "flex", alignItems: "center", gap: "0.875rem", fontSize: "0.9375rem", color: "#94A3B8", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
              >
                <div style={{ width: "36px", height: "36px", borderRadius: "var(--radius-sm)", backgroundColor: "rgba(37,99,235,0.2)", border: "1px solid rgba(37,99,235,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mail size={16} style={{ color: "var(--color-blue-mid)" }} />
                </div>
                hello@nexusdigital.agency
              </a>
              <a href="tel:+15550000000" style={{ display: "flex", alignItems: "center", gap: "0.875rem", fontSize: "0.9375rem", color: "#94A3B8", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
              >
                <div style={{ width: "36px", height: "36px", borderRadius: "var(--radius-sm)", backgroundColor: "rgba(37,99,235,0.2)", border: "1px solid rgba(37,99,235,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Phone size={16} style={{ color: "var(--color-blue-mid)" }} />
                </div>
                +1 (555) 000-0000
              </a>
            </div>
            <div style={{ paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <p style={{ fontSize: "0.8125rem", color: "#64748B", marginBottom: "0.5rem" }}>Average response time</p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, color: "#fff" }}>Under 2 hours</p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media(min-width:900px) { .cta-grid { grid-template-columns: 1.2fr 1fr !important; } }
      `}</style>
    </section>
  );
}
