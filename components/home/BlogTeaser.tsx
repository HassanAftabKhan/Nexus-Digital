"use client";

import { BLOG_POSTS } from "@/lib/constants";
import { ArrowRight, Clock } from "lucide-react";

export default function BlogTeaser() {
  return (
    <section id="blog" className="section-pad section-slate" aria-labelledby="blog-heading">
      <div className="container-site">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "3.5rem" }}>
          <div>
            <span className="eyebrow">Blog</span>
            <h2 id="blog-heading" style={{ marginTop: "0.5rem" }}>Straight-talking marketing insights</h2>
            <p style={{ marginTop: "0.75rem", maxWidth: "460px" }}>No fluff, no recycled advice — just actionable tactics from our team&apos;s real work.</p>
          </div>
          <a href="/blog" className="btn btn-secondary">All articles <ArrowRight size={14} /></a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1px", backgroundColor: "var(--color-border)" }} className="blog-grid">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} style={{ backgroundColor: "var(--color-slate-bg)", padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, padding: "0.2rem 0.625rem", border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)", color: "var(--color-ink-light)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{post.category}</span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.6875rem", color: "var(--color-ink-muted)" }}>
                  <Clock size={11} /> {post.readTime}
                </span>
              </div>
              <h3 style={{ marginBottom: "0.75rem", lineHeight: 1.35 }}>
                <a href={`/blog/${post.slug}`} style={{ color: "var(--color-ink)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-blue)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-ink)")}
                >
                  {post.title}
                </a>
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>{post.excerpt}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <time dateTime={post.date} style={{ fontSize: "0.75rem", color: "var(--color-ink-muted)" }}>{post.date}</time>
                <a href={`/blog/${post.slug}`} className="btn btn-ghost" aria-label={`Read: ${post.title}`}>Read article <ArrowRight size={12} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media(min-width:768px) { .blog-grid { grid-template-columns: repeat(3,1fr) !important; } }
      `}</style>
    </section>
  );
}
