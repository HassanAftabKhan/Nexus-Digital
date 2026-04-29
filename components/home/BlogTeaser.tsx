"use client";

import { BLOG_POSTS } from "@/lib/constants";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

const POST_COLORS = ["#4F46E5","#10B981","#F59E0B"];

export default function BlogTeaser() {
  return (
    <section id="blog" className="section-pad section-blue" aria-labelledby="blog-heading">
      <div className="container-site">
        <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:"1.5rem", marginBottom:"3.5rem" }}>
          <div>
            <span className="label-eyebrow-accent" style={{ display:"block", marginBottom:"0.75rem" }}>Free Knowledge</span>
            <h2>Grow smarter with our <span className="gradient-text">insights</span></h2>
            <p style={{ marginTop:"0.75rem", maxWidth:"440px" }}>Actionable tips, case studies, and strategies used by top-performing brands.</p>
          </div>
          <a href="/blog" className="btn btn-secondary">All articles <ArrowRight size={14} /></a>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:"1.25rem" }} className="blog-grid">
          {BLOG_POSTS.map((post, i) => {
            const color = POST_COLORS[i % POST_COLORS.length];
            return (
              <article key={post.slug} className="blog-card">
                {/* Colored top stripe */}
                <div style={{ height:"4px", background:`linear-gradient(90deg, ${color}, ${color}80)`, borderRadius:"22px 22px 0 0" }} />
                <div style={{ padding:"2rem" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", marginBottom:"1.25rem" }}>
                    <span style={{ padding:"0.25rem 0.75rem", borderRadius:"9999px", background:`${color}12`, border:`1px solid ${color}22`, fontSize:"0.6875rem", fontWeight:700, color, letterSpacing:"0.08em", textTransform:"uppercase" }}>
                      {post.category}
                    </span>
                    <span style={{ display:"flex", alignItems:"center", gap:"0.3rem", fontSize:"0.6875rem", color:"var(--color-text-muted)" }}>
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>

                  <h3 style={{ marginBottom:"0.75rem", lineHeight:1.35 }}>
                    <a href={`/blog/${post.slug}`} style={{ color:"var(--color-text)", transition:"color 0.3s" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = color)}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text)")}
                    >
                      {post.title}
                    </a>
                  </h3>

                  <p style={{ fontSize:"0.9375rem", lineHeight:1.7, marginBottom:"1.5rem" }}>{post.excerpt}</p>

                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", paddingTop:"1rem", borderTop:"1px solid var(--color-border)" }}>
                    <time dateTime={post.date} style={{ fontSize:"0.75rem", color:"var(--color-text-muted)" }}>{post.date}</time>
                    <a href={`/blog/${post.slug}`} className="btn btn-ghost" style={{ color, gap:"0.35rem" }}>
                      Read <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <style>{`
        @media(min-width:768px){ .blog-grid{ grid-template-columns:repeat(3,1fr) !important; } }
      `}</style>
    </section>
  );
}
