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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-3" : "py-5"
        )}
        style={{
          backgroundColor: isScrolled
            ? "rgba(249,249,251,0.92)"
            : "rgba(249,249,251,0.6)",
          backdropFilter: "blur(20px) saturate(1.8)",
          borderBottom: isScrolled
            ? "1px solid var(--color-border)"
            : "1px solid transparent",
        }}
        role="banner"
      >
        <div className="container-site flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2" aria-label={`${SITE.name} — Home`}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "var(--radius-sm)",
                background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-end) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px -2px rgba(96,65,232,0.35)",
              }}
            >
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "#fff", lineHeight: 1 }}>
                N
              </span>
            </div>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "var(--color-text)", letterSpacing: "-0.02em" }}>
              {SITE.name}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm px-4 py-2 rounded-full transition-all duration-300"
                style={{ color: "var(--color-text-secondary)", fontWeight: 500 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-text)";
                  e.currentTarget.style.backgroundColor = "var(--color-surface-high)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-text-secondary)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <Button href="/contact" variant="primary">Start a Project</Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full"
            style={{ color: "var(--color-text)", backgroundColor: "var(--color-surface-high)", border: "1px solid var(--color-border)" }}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 flex flex-col transition-all duration-500",
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ backgroundColor: "var(--color-surface)" }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-5 py-5" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <a href="/" className="flex items-center gap-2">
            <div style={{ width: "32px", height: "32px", borderRadius: "var(--radius-sm)", background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-end))", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "#fff" }}>N</span>
            </div>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "var(--color-text)" }}>{SITE.name}</span>
          </a>
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full"
            style={{ color: "var(--color-text)", backgroundColor: "var(--color-surface-high)", border: "1px solid var(--color-border)" }}
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-col flex-1 px-5 pt-4" aria-label="Mobile navigation">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "var(--color-text)",
                borderBottom: "1px solid var(--color-border)",
                padding: "1rem 0",
                letterSpacing: "-0.02em",
                opacity: isMobileOpen ? 1 : 0,
                transform: isMobileOpen ? "translateY(0)" : "translateY(16px)",
                transition: "all 0.4s ease",
                transitionDelay: isMobileOpen ? `${i * 80}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="px-5 pb-8 pt-4">
          <Button href="/contact" variant="primary" className="w-full justify-center" onClick={() => setIsMobileOpen(false)}>
            Start a Project
          </Button>
        </div>
      </div>
    </>
  );
}
