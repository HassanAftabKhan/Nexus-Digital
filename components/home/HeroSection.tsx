"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { STATS } from "@/lib/constants";
import StatCounter from "@/components/ui/StatCounter";

const WORDS = [
  { text: "Revenue",   color: "#4F46E5" },
  { text: "Traffic",   color: "#0EA5E9" },
  { text: "Authority", color: "#7C3AED" },
  { text: "Leads",     color: "#10B981" },
  { text: "Growth",    color: "#F43F5E" },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  useEffect(() => {
    const t = setInterval(() => setWordIdx((p) => (p + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);

  const word = WORDS[wordIdx];

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
        paddingTop: "8rem",
        paddingBottom: "4rem",
        background: "linear-gradient(145deg, #FFFFFF 0%, #F5F3FF 40%, #EFF6FF 70%, #F0FDFA 100%)",
      }}
    >
      {/* Decorative blobs — light & colorful */}
      <div aria-hidden="true" style={{ position:"absolute", top:"-8%", right:"-5%", width:"520px", height:"520px", borderRadius:"50%", background:"radial-gradient(ellipse, rgba(79,70,229,0.12) 0%, transparent 65%)", pointerEvents:"none" }} />
      <div aria-hidden="true" style={{ position:"absolute", bottom:"-5%", left:"-5%", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(ellipse, rgba(14,165,233,0.1) 0%, transparent 65%)", pointerEvents:"none" }} />
      <div aria-hidden="true" style={{ position:"absolute", top:"40%", left:"55%", width:"300px", height:"300px", borderRadius:"50%", background:"radial-gradient(ellipse, rgba(16,185,129,0.08) 0%, transparent 65%)", pointerEvents:"none" }} />

      {/* Grid lines overlay */}
      <div aria-hidden="true" style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(79,70,229,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.04) 1px, transparent 1px)", backgroundSize:"48px 48px", pointerEvents:"none" }} />

      <div className="container-site" style={{ position:"relative", zIndex:1 }}>

        {/* Badge */}
        <div
          style={{
            display:"inline-flex", alignItems:"center", gap:"0.625rem",
            padding:"0.4rem 1rem 0.4rem 0.5rem",
            borderRadius:"9999px",
            background:"linear-gradient(135deg, rgba(79,70,229,0.08), rgba(124,58,237,0.08))",
            border:"1px solid rgba(79,70,229,0.18)",
            marginBottom:"2rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition:"all 0.8s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div style={{ display:"flex", gap:"3px" }}>
            {["#4F46E5","#10B981","#F59E0B"].map((c) => (
              <span key={c} style={{ width:"6px", height:"6px", borderRadius:"50%", backgroundColor:c, display:"block" }} />
            ))}
          </div>
          <span style={{ fontSize:"0.75rem", fontWeight:600, color:"var(--color-accent)" }}>
            Google &amp; Meta Certified · 500+ Brands Grown
          </span>
        </div>

        {/* Heading */}
        <h1
          id="hero-heading"
          style={{
            maxWidth:"880px",
            marginBottom:"1.5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition:"all 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s",
          }}
        >
          Your brand deserves{" "}
          <br className="hidden md:block" />
          more{" "}
          <span
            key={wordIdx}
            style={{
              color: word.color,
              display:"inline-block",
              animation:"wordFade 0.45s ease forwards",
            }}
          >
            {word.text}
          </span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize:"1.2rem",
            maxWidth:"560px",
            marginBottom:"2.5rem",
            lineHeight:1.7,
            color:"var(--color-text-secondary)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition:"all 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s",
          }}
        >
          Nexus Digital builds bold digital presences — from stunning websites to ROI-obsessed ad campaigns — that turn browsers into buyers.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 items-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition:"all 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s",
          }}
        >
          <Button href="/contact" variant="primary" showArrow>Get a Free Strategy Call</Button>
          <Button href="/work" variant="secondary">See Our Work</Button>
        </div>

        {/* Trust logos row */}
        <div
          style={{
            display:"flex", flexWrap:"wrap", gap:"1rem", alignItems:"center",
            marginTop:"2.5rem",
            opacity: visible ? 1 : 0,
            transition:"all 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s",
          }}
        >
          <span style={{ fontSize:"0.6875rem", color:"var(--color-text-muted)", letterSpacing:"0.06em", textTransform:"uppercase" }}>Trusted by:</span>
          {["Google Partner","Meta Partner","HubSpot Certified","Shopify Experts"].map((l) => (
            <span key={l} style={{ padding:"0.375rem 0.875rem", borderRadius:"9999px", border:"1px solid var(--color-border-strong)", fontSize:"0.6875rem", fontWeight:600, color:"var(--color-text-secondary)", background:"rgba(255,255,255,0.7)" }}>{l}</span>
          ))}
        </div>

        {/* Stats */}
        <div
          style={{
            display:"grid", gridTemplateColumns:"repeat(2,1fr)",
            gap:"0",
            marginTop:"4rem",
            paddingTop:"2.5rem",
            borderTop:"1px solid rgba(79,70,229,0.12)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition:"all 0.9s cubic-bezier(0.16,1,0.3,1) 0.55s",
          }}
          className="hero-stats-grid"
        >
          {STATS.map((stat, i) => {
            const colors = ["#4F46E5","#10B981","#F59E0B","#F43F5E"];
            return (
              <div key={stat.label} className="stat-card">
                <p style={{ fontFamily:"var(--font-display)", fontSize:"clamp(2rem,4vw,2.75rem)", color: colors[i % colors.length], letterSpacing:"-0.03em", lineHeight:1, marginBottom:"0.4rem", fontWeight:800 }}>
                  <StatCounter value={stat.value} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                </p>
                <p style={{ fontSize:"0.8125rem", color:"var(--color-text-secondary)" }}>{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes wordFade {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @media(min-width:768px){
          .hero-stats-grid { grid-template-columns:repeat(4,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
