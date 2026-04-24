"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
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
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "py-3 border-b"
            : "py-5"
        )}
        style={{
          backgroundColor: isScrolled ? "rgba(9,9,11,0.92)" : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          borderColor: isScrolled ? "var(--color-surface-high)" : "transparent",
        }}
        role="banner"
      >
        <div className="container-site flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 font-bold text-xl"
            aria-label={`${SITE.name} — Home`}
            style={{ color: "var(--color-text)" }}
          >
            <span
              className="flex items-center justify-center w-8 h-8 rounded-lg"
              style={{ backgroundColor: "var(--color-accent)" }}
              aria-hidden="true"
            >
              <Zap size={16} color="#fff" strokeWidth={2.5} />
            </span>
            {SITE.name}
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--color-muted)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-text)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-muted)")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button href="#contact" variant="primary">
              Get a Free Audit
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors"
            style={{ color: "var(--color-text)" }}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 flex flex-col pt-24 px-6 pb-8 transition-all duration-300",
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ backgroundColor: "rgba(9,9,11,0.98)", backdropFilter: "blur(20px)" }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="flex flex-col gap-2 flex-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-2xl font-bold py-4 border-b transition-colors duration-200"
              style={{
                color: "var(--color-text)",
                borderColor: "var(--color-surface-high)",
                transitionDelay: isMobileOpen ? `${i * 60}ms` : "0ms",
                transform: isMobileOpen ? "translateY(0)" : "translateY(12px)",
                opacity: isMobileOpen ? 1 : 0,
                transition: "all 0.35s ease",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-6">
          <Button
            href="#contact"
            variant="primary"
            className="w-full justify-center"
            onClick={() => setIsMobileOpen(false)}
          >
            Get a Free Audit
          </Button>
        </div>
      </div>
    </>
  );
}
