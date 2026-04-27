"use client";

import { use } from "react";
import { notFound, useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { BLOG_POSTS, SITE } from "@/lib/constants";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  const contentParts = post.content.split("\n\n");

  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ── */}
        <section
          style={{ paddingTop: "9rem", paddingBottom: "4rem", position: "relative", overflow: "hidden" }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute", top: "30%", left: "50%",
              transform: "translateX(-50%)",
              width: "500px", height: "400px",
              background: "radial-gradient(ellipse, rgba(249,115,22,0.08) 0%, transparent 70%)",
              filter: "blur(50px)", pointerEvents: "none",
            }}
          />
          <div className="container-site" style={{ maxWidth: "780px", position: "relative", zIndex: 1 }}>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-sm mb-8"
              style={{ color: "var(--color-muted)", textDecoration: "none", fontFamily: "var(--font-mono)" }}
            >
              <ArrowLeft size={14} /> Back to Blog
            </a>

            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: "rgba(249,115,22,0.1)", color: "var(--color-accent)", border: "1px solid rgba(249,115,22,0.2)" }}
              >
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
                <Clock size={12} /> {post.readTime}
              </span>
              <time dateTime={post.date} className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
                {post.date}
              </time>
            </div>

            <h1 style={{ marginBottom: "2rem", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              {post.title}
            </h1>

            <div className="flex items-center gap-3 pb-8" style={{ borderBottom: "1px solid var(--color-surface-high)" }}>
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm"
                style={{ backgroundColor: "rgba(249,115,22,0.12)", color: "var(--color-accent)", border: "1.5px solid rgba(249,115,22,0.2)" }}
              >
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>{post.author}</p>
                <p className="text-xs" style={{ color: "var(--color-muted)" }}>{post.authorRole}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Content ── */}
        <article style={{ paddingBottom: "5rem" }}>
          <div className="container-site" style={{ maxWidth: "780px" }}>
            <div style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-muted)" }}>
              {contentParts.map((part, i) => {
                const headingMatch = part.match(/^\*\*(.+?)\*\*/);
                if (headingMatch) {
                  const rest = part.replace(/^\*\*(.+?)\*\*/, "").trim();
                  return (
                    <div key={i} style={{ marginBottom: "1.5rem" }}>
                      <h3 style={{ color: "var(--color-text)", marginBottom: "0.75rem", fontSize: "1.15rem" }}>
                        {headingMatch[1]}
                      </h3>
                      {rest && <p>{rest}</p>}
                    </div>
                  );
                }
                return <p key={i} style={{ marginBottom: "1.5rem" }}>{part}</p>;
              })}
            </div>

            {/* In-article CTA */}
            <div
              style={{
                marginTop: "4rem",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "2.5rem",
                textAlign: "center",
              }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
                Ready to Implement This?
              </p>
              <h3 style={{ color: "var(--color-text)", marginBottom: "1rem" }}>Let Us Do It For You</h3>
              <p style={{ marginBottom: "1.5rem", maxWidth: "400px", margin: "0 auto 1.5rem" }}>
                Book a free strategy call and we will audit your setup and show you the exact growth opportunities.
              </p>
              <Button href="/contact" variant="primary" showArrow>Book a Free Call</Button>
            </div>
          </div>
        </article>

        {/* ── Related Posts ── */}
        {related.length > 0 && (
          <section className="section-pad" style={{ backgroundColor: "var(--color-surface)" }}>
            <div className="container-site">
              <h2 className="mb-10" style={{ fontSize: "1.75rem" }}>More From the Blog</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                {related.map((rel) => (
                  <a
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    style={{
                      display: "block",
                      background: "var(--color-bg)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-lg)",
                      padding: "2rem",
                      textDecoration: "none",
                      transition: "border-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                  >
                    <span
                      className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                      style={{ backgroundColor: "rgba(249,115,22,0.1)", color: "var(--color-accent)", border: "1px solid rgba(249,115,22,0.2)" }}
                    >
                      {rel.category}
                    </span>
                    <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-text)" }}>{rel.title}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-muted)" }}>{rel.excerpt}</p>
                    <span className="btn btn-ghost text-xs flex items-center gap-1">
                      Read <ArrowRight size={12} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
