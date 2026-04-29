"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { BLOG_POSTS } from "@/lib/constants";
import { ArrowRight, Clock } from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function BlogTeaser() {
  return (
    <section
      id="blog"
      className="section-pad"
      aria-labelledby="blog-heading"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="container-site">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          <SectionHeading
            eyebrow="Insights"
            title="Latest from the blog"
            className="mb-0"
          />
          <a href="/blog" className="btn btn-secondary text-sm shrink-0">
            All articles <ArrowRight size={14} />
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.25rem",
          }}
          className="blog-grid"
        >
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="blog-card">
              <div style={{ padding: "2rem" }}>
                {/* Category + Read time */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <Badge variant="accent">{post.category}</Badge>
                  <span
                    className="flex items-center gap-1"
                    style={{
                      fontSize: "0.6875rem",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ marginBottom: "0.75rem" }}>
                  <a
                    href={`/blog/${post.slug}`}
                    style={{ color: "var(--color-text)", transition: "color 0.3s ease" }}
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

                {/* Excerpt */}
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  {post.excerpt}
                </p>

                {/* Bottom */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--color-border)",
                  }}
                >
                  <time
                    dateTime={post.date}
                    style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)" }}
                  >
                    {post.date}
                  </time>
                  <a
                    href={`/blog/${post.slug}`}
                    className="btn btn-ghost"
                    style={{ gap: "0.35rem" }}
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

      <style>{`
        @media (min-width: 768px) {
          .blog-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
