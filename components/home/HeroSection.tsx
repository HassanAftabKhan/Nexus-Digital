"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { STATS } from "@/lib/constants";
import StatCounter from "@/components/ui/StatCounter";

const ROTATING_WORDS = [
  "Growth",
  "Dominance",
  "Revenue",
  "Authority",
  "Results",
];

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);
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
        paddingTop: "8rem",
        paddingBottom: "4rem",
        overflow: "hidden",
      }}
    >
      {/* Background glow orbs */}
      <div
        aria-hidden="true"
        className="glow-orb"
        style={{
          width: "600px",
          height: "600px",
          top: "-10%",
          left: "-5%",
          opacity: 0.12,
        }}
      />
      <div
        aria-hidden="true"
        className="glow-orb"
        style={{
          width: "400px",
          height: "400px",
          bottom: "10%",
          right: "-5%",
          opacity: 0.08,
          background: "linear-gradient(135deg, #3B82F6 0%, #7C5CFC 100%)",
        }}
      />

      {/* Dot grid overlay */}
      <div
        aria-hidden="true"
        className="bg-dots"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
        {/* Eyebrow pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.625rem",
            padding: "0.5rem 1rem 0.5rem 0.625rem",
            borderRadius: "9999px",
            border: "1px solid var(--color-border-strong)",
            backgroundColor: "var(--color-surface)",
            marginBottom: "2.5rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-end))",
              display: "block",
              boxShadow: "0 0 8px rgba(124,92,252,0.6)",
            }}
          />
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--color-text-secondary)",
              letterSpacing: "0.02em",
            }}
          >
            Google & Meta Certified Agency
          </span>
        </div>

        {/* Main heading */}
        <h1
          id="hero-heading"
          style={{
            maxWidth: "820px",
            marginBottom: "2rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          We engineer{" "}
          <span className="gradient-text" style={{ display: "inline" }}>
            digital{" "}
            <span
              key={wordIndex}
              style={{
                display: "inline-block",
                animation: "wordFade 0.5s ease forwards",
              }}
            >
              {ROTATING_WORDS[wordIndex]}
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "1.15rem",
            maxWidth: "520px",
            marginBottom: "2.5rem",
            lineHeight: 1.7,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          Strategy, design, and performance marketing for ambitious brands.
          We turn companies into category leaders.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 items-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
          }}
        >
          <Button href="/contact" variant="primary" showArrow>
            Start a Project
          </Button>
          <Button href="/work" variant="secondary">
            View Our Work
          </Button>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            marginTop: "5rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid var(--color-border)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
          }}
          className="hero-stats-grid"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-card">
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  color: "var(--color-text)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                  fontWeight: 700,
                }}
              >
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                />
              </p>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--color-text-secondary)",
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes wordFade {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (min-width: 768px) {
          .hero-stats-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
