"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { BLOG_POSTS } from "@/lib/constants";
import { ArrowRight, Clock } from "lucide-react";

export default function BlogTeaser() {
  return (
    <section
      id="blog"
      className="section-pad"
      aria-labelledby="blog-heading"
    >
      <div className="container-site">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          <SectionHeading
            eyebrow="From Our Blog"
            title="Insights That Drive Growth"
            className="mb-0"
          />
          <a
            href="/blog"
            className="btn btn-secondary text-sm shrink-0"
            style={{ borderRadius: "9999px" }}
          >
            View All Posts <ArrowRight size={14} />
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="blog-card">
              {/* Category color band */}
              <div
                style={{
                  height: "4px",
                  backgroundColor: "var(--color-accent)",
                  opacity: 0.7,
                }}
                aria-hidden="true"
              />

              <div style={{ padding: "1.75rem" }}>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <Badge variant="accent">{post.category}</Badge>
                  <span
                    className="flex items-center gap-1 text-xs"
                    style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
                  >
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold leading-snug mb-3"
                  style={{ color: "var(--color-text)" }}
                >
                  <a
                    href={`/blog/${post.slug}`}
                    style={{ color: "inherit" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--color-accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--color-text)")
                    }
                  >
                    {post.title}
                  </a>
                </h3>

                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--color-muted)" }}
                >
                  {post.excerpt}
                </p>

                <div
                  className="flex items-center justify-between flex-wrap gap-2"
                  style={{ paddingTop: "1rem", borderTop: "1px solid var(--color-surface-high)" }}
                >
                  <time
                    dateTime={post.date}
                    className="text-xs"
                    style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
                  >
                    {post.date}
                  </time>
                  <a
                    href={`/blog/${post.slug}`}
                    className="btn btn-ghost text-xs inline-flex items-center gap-1"
                    aria-label={`Read: ${post.title}`}
                  >
                    Read <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
