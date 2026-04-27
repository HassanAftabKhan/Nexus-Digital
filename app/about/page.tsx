"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { TEAM, VALUES, STATS, TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";


export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ── */}
        <section
          style={{ paddingTop: "10rem", paddingBottom: "6rem", position: "relative", overflow: "hidden" }}
          aria-labelledby="about-heading"
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute", top: "30%", left: "30%",
              width: "500px", height: "500px",
              background: "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 65%)",
              filter: "blur(80px)", pointerEvents: "none",
            }}
          />
          <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem", alignItems: "center" }} className="about-hero-grid">
              {/* Left */}
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
                  Our Story
                </p>
                <h1 id="about-heading" style={{ marginBottom: "1.5rem" }}>
                  Built Different.<br />
                  <span style={{ color: "var(--color-accent)" }}>Run Differently.</span>
                </h1>
                <p style={{ fontSize: "1.1rem", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                  Nexus Digital was founded in 2020 with one belief: agencies should be judged on revenue, not reports. We were tired of seeing businesses pay thousands monthly for dashboards full of impressions and no real growth.
                </p>
                <p style={{ lineHeight: 1.85 }}>
                  So we built the agency we always wished existed. No long-term contracts. No vanity metrics. No account managers who disappear after the sale. Just a team of specialists who treat your budget like it is their own and show up every month ready to prove their worth.
                </p>
              </div>

              {/* Right — quick stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--color-border)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    style={{ background: "var(--color-surface)", padding: "2rem", textAlign: "center" }}
                  >
                    <p
                      className="font-black"
                      style={{ fontSize: "2.5rem", color: "var(--color-accent)", fontFamily: "var(--font-mono)", letterSpacing: "-0.03em", lineHeight: 1 }}
                    >
                      {stat.value}{stat.suffix}
                    </p>
                    <p className="text-xs mt-2" style={{ color: "var(--color-muted)" }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="section-pad" style={{ backgroundColor: "var(--color-surface)" }}>
          <div className="container-site">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
                What We Stand For
              </p>
              <h2>Our Values</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {VALUES.map((v) => (
                <div
                  key={v.number}
                  style={{
                    background: "var(--color-bg)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "2.5rem",
                  }}
                >
                  <span
                    className="block font-black mb-4"
                    style={{ fontSize: "3rem", color: "var(--color-accent)", fontFamily: "var(--font-mono)", lineHeight: 1 }}
                  >
                    {v.number}
                  </span>
                  <h3 className="text-base font-bold mb-3" style={{ color: "var(--color-text)" }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="section-pad">
          <div className="container-site">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
                The People
              </p>
              <h2>Meet the Team</h2>
              <p style={{ maxWidth: "500px", margin: "1rem auto 0" }}>
                A small team of specialists. No juniors running your accounts. No outsourcing.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {TEAM.map((member) => (
                <div
                  key={member.name}
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "2rem",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                >
                  {/* Avatar */}
                  <div
                    className="flex items-center justify-center w-14 h-14 rounded-2xl font-black text-xl mb-4"
                    style={{
                      backgroundColor: "rgba(249,115,22,0.12)",
                      color: "var(--color-accent)",
                      border: "1.5px solid rgba(249,115,22,0.2)",
                    }}
                  >
                    {member.initial}
                  </div>
                  <h3 className="text-base font-bold mb-0.5" style={{ color: "var(--color-text)" }}>{member.name}</h3>
                  <p className="text-xs font-semibold mb-4" style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>{member.role}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-muted)" }}>{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md"
                        style={{ backgroundColor: "rgba(255,255,255,0.04)", color: "var(--color-muted)", border: "1px solid var(--color-border)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials strip ── */}
        <section className="section-pad" style={{ backgroundColor: "var(--color-surface)" }}>
          <div className="container-site">
            <div className="text-center mb-12">
              <h2>Client Love</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {TESTIMONIALS.slice(0, 3).map((t, i) => (
                <figure key={i} className="testimonial-card">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} fill="currentColor" style={{ color: "#f59e0b" }} />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-text)" }}>
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full font-bold text-sm shrink-0"
                      style={{ backgroundColor: "rgba(249,115,22,0.12)", color: "var(--color-accent)", border: "1.5px solid rgba(249,115,22,0.2)" }}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>{t.name}</p>
                      <p className="text-xs" style={{ color: "var(--color-muted)" }}>{t.role}, {t.company}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-pad">
          <div className="container-site text-center">
            <h2 style={{ maxWidth: "600px", margin: "0 auto 1.5rem" }}>
              Let&apos;s Build Something Remarkable
            </h2>
            <p style={{ maxWidth: "460px", margin: "0 auto 2.5rem" }}>
              Book a free strategy call and let&apos;s talk about where your business should be 6 months from now.
            </p>
            <Button href="/contact" variant="primary" showArrow>Book a Free Strategy Call</Button>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (min-width: 900px) {
          .about-hero-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
