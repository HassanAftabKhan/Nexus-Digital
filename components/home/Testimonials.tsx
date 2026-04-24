import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-pad"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Client Stories"
          title="What Our Clients Say"
          subtitle="Do not take our word for it. Here is what business owners and marketing directors say about working with us."
          centered
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {TESTIMONIALS.map((t, index) => (
            <figure key={index} className="testimonial-card">
              {/* Stars */}
              <div className="flex gap-1 mb-5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                    style={{ color: "#f59e0b" }}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="text-base leading-relaxed mb-6"
                style={{ color: "var(--color-text)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <figcaption className="flex items-center gap-3">
                {/* Avatar initials placeholder */}
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm shrink-0"
                  style={{
                    backgroundColor: "rgba(37,99,235,0.15)",
                    color: "var(--color-accent)",
                    border: "1.5px solid rgba(37,99,235,0.3)",
                  }}
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                    {t.role}, {t.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Trust bar below testimonials */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-center"
          style={{ color: "var(--color-muted)" }}
        >
          {[
            { label: "4.9/5 Average Rating", sub: "Across 127 verified reviews" },
            { label: "Google Partner", sub: "Certified agency since 2021" },
            { label: "Meta Business Partner", sub: "Certified agency since 2022" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1">
              <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
                {item.label}
              </p>
              <p className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
