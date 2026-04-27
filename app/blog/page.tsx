"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BLOG_POSTS } from "@/lib/constants";
import { Clock, ArrowRight } from "lucide-react";


export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ── */}
        <section
          style={{ paddingTop: "10rem", paddingBottom: "5rem", position: "relative", overflow: "hidden" }}
          aria-labelledby="blog-page-heading"
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute", top: "40%", right: "10%",
              width: "400px", height: "400px",
              background: "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 65%)",
              filter: "blur(60px)", pointerEvents: "none",
            }}
          />
          <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
              From the Agency
            </p>
            <h1 id="blog-page-heading" style={{ maxWidth: "700px", marginBottom: "1.5rem" }}>
              Insights That<br />
              <span style={{ color: "var(--color-accent)" }}>Drive Growth</span>
            </h1>
            <p style={{ maxWidth: "500px", fontSize: "1.05rem" }}>
              No fluff. No generic advice. Just the exact strategies and tactics our team uses for real clients.
            </p>
          </div>
        </section>

        {/* ── Featured Post ── */}
        <section style={{ paddingBottom: "4rem" }}>
          <div className="container-site">
            <a
              href={`/blog/${featured.slug}`}
              style={{
                display: "block",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "3rem",
                textDecoration: "none",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }} className="featured-post-grid">
                <div>
                  <div className="flex items-center gap-3 mb-5 flex-wrap">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: "rgba(249,115,22,0.1)", color: "var(--color-accent)", border: "1px solid rgba(249,115,22,0.2)" }}
                    >
                      Featured
                    </span>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: "rgba(255,255,255,0.04)", color: "var(--color-muted)", border: "1px solid var(--color-border)" }}
                    >
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
                      <Clock size={12} /> {featured.readTime}
                    </span>
                  </div>
                  <h2 className="mb-4" style={{ color: "var(--color-text)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                    {featured.title}
                  </h2>
                  <p style={{ color: "var(--color-muted)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "620px" }}>
                    {featured.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-4" style={{ borderTop: "1px solid var(--color-surface-high)", paddingTop: "1.5rem" }}>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center w-9 h-9 rounded-full font-bold text-sm"
                      style={{ backgroundColor: "rgba(249,115,22,0.12)", color: "var(--color-accent)", border: "1.5px solid rgba(249,115,22,0.2)" }}
                    >
                      {featured.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>{featured.author}</p>
                      <p className="text-xs" style={{ color: "var(--color-muted)" }}>{featured.authorRole}</p>
                    </div>
                  </div>
                  <time dateTime={featured.date} className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
                    {featured.date}
                  </time>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* ── Rest of Posts ── */}
        <section className="section-pad" style={{ paddingTop: "2rem" }}>
          <div className="container-site">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {rest.map((post) => (
                <article key={post.slug} className="blog-card" style={{ borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                  <div style={{ height: "4px", background: "var(--color-accent)", opacity: 0.7 }} aria-hidden="true" />
                  <div style={{ padding: "2rem" }}>
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ backgroundColor: "rgba(249,115,22,0.1)", color: "var(--color-accent)", border: "1px solid rgba(249,115,22,0.2)" }}
                      >
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold leading-snug mb-3" style={{ color: "var(--color-text)", fontSize: "1.15rem" }}>
                      <a href={`/blog/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                        {post.title}
                      </a>
                    </h2>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-muted)" }}>
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between flex-wrap gap-2" style={{ paddingTop: "1rem", borderTop: "1px solid var(--color-surface-high)" }}>
                      <time dateTime={post.date} className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
                        {post.date}
                      </time>
                      <a href={`/blog/${post.slug}`} className="btn btn-ghost text-xs flex items-center gap-1">
                        Read <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Newsletter CTA ── */}
        <section className="section-pad" style={{ backgroundColor: "var(--color-surface)" }}>
          <div className="container-site">
            <div
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "3rem",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "2rem",
                textAlign: "center",
              }}
            >
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
                  Newsletter
                </p>
                <h2 style={{ maxWidth: "500px", margin: "0 auto 1rem" }}>
                  Get the Insights in Your Inbox
                </h2>
                <p style={{ maxWidth: "420px", margin: "0 auto" }}>
                  One email every two weeks. No spam. Just the strategies that are working right now.
                </p>
              </div>
              <form
                style={{ display: "flex", gap: "0.75rem", maxWidth: "440px", margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  style={{
                    flex: 1,
                    minWidth: "200px",
                    padding: "0.875rem 1.25rem",
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "9999px",
                    color: "var(--color-text)",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (min-width: 768px) {
          .featured-post-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
