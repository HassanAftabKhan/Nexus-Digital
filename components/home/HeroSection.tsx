"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { STATS } from "@/lib/constants";
import StatCounter from "@/components/ui/StatCounter";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "var(--color-bg)",
        paddingTop: "8rem",
        paddingBottom: "5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid — very light, not AI-looking */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "64px 64px", opacity: 0.5, pointerEvents: "none" }} />

      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
        {/* Agency badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          padding: "0.375rem 0.875rem", borderRadius: "var(--radius-sm)",
          backgroundColor: "var(--color-blue-light)", border: "1px solid var(--color-blue-mid)",
          marginBottom: "2rem",
          opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(10px)",
          transition: "all 0.7s ease",
        }}>
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "var(--color-blue)", display: "block" }} />
          <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-blue)" }}>Google &amp; Meta Certified Agency</span>
        </div>

        {/* Heading */}
        <h1
          id="hero-heading"
          style={{
            maxWidth: "860px", marginBottom: "1.5rem",
            opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)",
            transition: "all 0.8s ease 0.08s",
          }}
        >
          We build brands that{" "}
          <span style={{ color: "var(--color-blue)", textDecoration: "underline", textDecorationThickness: "4px", textUnderlineOffset: "6px" }}>
            win online
          </span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: "1.175rem", maxWidth: "560px", marginBottom: "2.5rem", lineHeight: 1.75,
          opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)",
          transition: "all 0.8s ease 0.16s",
        }}>
          Nexus Digital is a full-service digital agency delivering measurable growth through websites, SEO, paid ads, and content — all under one roof.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 items-center" style={{
          marginBottom: "3rem",
          opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(14px)",
          transition: "all 0.8s ease 0.22s",
        }}>
          <Button href="/contact" variant="primary" showArrow>Get Your Free Audit</Button>
          <Button href="/work" variant="secondary">View Case Studies</Button>
        </div>

        {/* Trust signals */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "1.25rem",
          marginBottom: "4rem",
          opacity: visible ? 1 : 0, transition: "all 0.8s ease 0.3s",
        }}>
          {[
            "No long-term contracts",
            "Results in 90 days or your money back",
            "Dedicated account manager",
          ].map((t) => (
            <span key={t} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", color: "var(--color-ink-light)", fontWeight: 500 }}>
              <CheckCircle2 size={15} style={{ color: "var(--color-green)", flexShrink: 0 }} />
              {t}
            </span>
          ))}
        </div>

        {/* Stats row */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(2,1fr)",
          borderTop: "1px solid var(--color-border)", paddingTop: "2.5rem",
          opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(10px)",
          transition: "all 0.8s ease 0.4s",
        }}
          className="hero-stats"
        >
          {STATS.map((s) => (
            <div key={s.label} className="stat-card">
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.875rem,3.5vw,2.5rem)", fontWeight: 800, color: "var(--color-ink)", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "0.375rem" }}>
                <StatCounter value={s.value} suffix={s.suffix} decimals={s.value % 1 !== 0 ? 1 : 0} />
              </p>
              <p style={{ fontSize: "0.8125rem", color: "var(--color-ink-light)" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(min-width:768px) { .hero-stats { grid-template-columns: repeat(4,1fr) !important; } }
      `}</style>
    </section>
  );
}
