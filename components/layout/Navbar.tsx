"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <header
        role="banner"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          backgroundColor: isScrolled ? "rgba(255,255,255,0.96)" : "transparent",
          borderBottom: isScrolled ? "1px solid var(--color-border)" : "1px solid transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          transition: "all 0.3s ease",
          padding: isScrolled ? "0.875rem 0" : "1.25rem 0",
        }}
      >
        <div className="container-site" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href="/" aria-label={`${SITE.name} home`} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "var(--color-blue)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1rem", color: "#fff", lineHeight: 1 }}>N</span>
            </div>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.0625rem", color: "var(--color-ink)", letterSpacing: "-0.02em" }}>{SITE.name}</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--color-ink-light)", padding: "0.5rem 0.875rem", borderRadius: "var(--radius-sm)", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-ink)"; e.currentTarget.style.backgroundColor = "var(--color-surface)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-ink-light)"; e.currentTarget.style.backgroundColor = "transparent"; }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="/contact" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--color-ink-light)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ink-light)")}
            >
              Contact
            </a>
            <Button href="/contact" variant="primary">Get a Free Audit</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMobileOpen(!isMobileOpen)}
            style={{ width: "40px", height: "40px", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-border)", background: "var(--color-bg)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-ink)", cursor: "pointer" }}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"} aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        role="dialog" aria-modal="true" aria-label="Mobile navigation"
        style={{
          position: "fixed", inset: 0, zIndex: 40,
          backgroundColor: "var(--color-bg)",
          opacity: isMobileOpen ? 1 : 0,
          pointerEvents: isMobileOpen ? "auto" : "none",
          transition: "opacity 0.25s ease",
          display: "flex", flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 1.5rem", borderBottom: "1px solid var(--color-border)" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "var(--color-blue)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1rem", color: "#fff" }}>N</span>
            </div>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.0625rem", color: "var(--color-ink)" }}>{SITE.name}</span>
          </a>
          <button onClick={() => setIsMobileOpen(false)} style={{ width: "40px", height: "40px", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-border)", background: "var(--color-bg)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-ink)", cursor: "pointer" }}>
            <X size={18} />
          </button>
        </div>
        <nav style={{ flex: 1, padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setIsMobileOpen(false)}
              style={{ display: "block", fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, color: "var(--color-ink)", padding: "0.875rem 0", borderBottom: "1px solid var(--color-border)", letterSpacing: "-0.02em" }}>
              {link.label}
            </a>
          ))}
        </nav>
        <div style={{ padding: "1.5rem" }}>
          <Button href="/contact" variant="primary" className="w-full justify-center" onClick={() => setIsMobileOpen(false)}>
            Get a Free Audit
          </Button>
        </div>
      </div>
    </>
  );
}
