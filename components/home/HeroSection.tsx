"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { STATS, SITE } from "@/lib/constants";
import StatCounter from "@/components/ui/StatCounter";

const ROTATING_WORDS = [
  "Website Development",
  "SEO",
  "Google Ads",
  "Social Media",
  "Graphic Design",
];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "7rem",
        paddingBottom: "4rem",
      }}
    >
      {/* Background cinematic orb */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          maxWidth: "800px",
          maxHeight: "800px",
          background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(249,115,22,0) 60%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          animation: "orbFloat 12s ease-in-out infinite",
        }}
      />
      {/* Film grain overlay for cinematic feel */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          background: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
          pointerEvents: "none",
        }}
      />

      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
        {/* Eyebrow badge */}
        <div
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-10"
          style={{
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "var(--color-text)",
            fontFamily: "var(--font-mono)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "var(--color-accent)",
              display: "inline-block",
              boxShadow: "0 0 10px var(--color-accent)",
              animation: "pulse 2s infinite",
            }}
          />
          Google &amp; Meta Certified Agency
        </div>

        {/* Main heading */}
        <h1
          id="hero-heading"
          style={{
            maxWidth: "900px",
            marginBottom: "1.5rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s ease 0.1s",
          }}
        >
          We Grow Businesses with{" "}
          <span
            key={wordIndex}
            style={{
              color: "var(--color-accent)",
              display: "inline-block",
              animation: "wordSlideIn 0.4s ease forwards",
            }}
          >
            {ROTATING_WORDS[wordIndex]}
          </span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "620px",
            marginBottom: "2.5rem",
            color: "var(--color-muted)",
            lineHeight: 1.75,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s ease 0.2s",
          }}
        >
          {SITE.name} is a results-first digital marketing agency. We combine strategy, creativity,
          and data to deliver growth that your competitors cannot match.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-5 items-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.9s cubic-bezier(0.25, 1, 0.5, 1) 0.3s",
          }}
        >
          <Button href="#contact" variant="primary" showArrow>
            Get a Free Audit
          </Button>
          <Button href="#work" variant="secondary">
            View Case Studies
          </Button>
        </div>

        {/* Trust micro-line */}
        <div
          className="mt-10 text-xs flex items-center gap-4 flex-wrap uppercase tracking-widest font-bold"
          style={{
            color: "var(--color-muted)",
            opacity: isVisible ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.25, 1, 0.5, 1) 0.4s",
            fontFamily: "var(--font-mono)",
          }}
        >
          <span className="flex items-center gap-2">
            <span style={{ color: "var(--color-accent)" }}>//</span> No Long-Term Contracts
          </span>
          <span className="hidden sm:inline-block text-white/20">|</span>
          <span className="flex items-center gap-2">
            <span style={{ color: "var(--color-accent)" }}>//</span> Direct Access to Partners
          </span>
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1.5rem",
            marginTop: "5rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.8s ease 0.5s",
          }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-card">
              <p
                className="text-4xl font-bold mb-1"
                style={{ color: "var(--color-text)", fontFamily: "var(--font-mono)" }}
              >
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                />
              </p>
              <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--color-muted)", animation: "bounce 2s infinite" }}
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
          Scroll
        </span>
        <ChevronDown size={16} />
      </div>

      <style>{`
        @keyframes wordSlideIn {
          from { opacity: 0; transform: translateY(20px) rotateX(-20deg); }
          to   { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.8); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
        @keyframes orbFloat {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          33%      { transform: translate(-45%, -55%) scale(1.05); }
          66%      { transform: translate(-55%, -45%) scale(0.95); }
        }
      `}</style>
    </section>
  );
}
