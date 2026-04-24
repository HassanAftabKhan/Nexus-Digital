import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "6rem 0",
      }}
    >
      {/* Background gradient */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(9,9,11,0) 60%)",
          pointerEvents: "none",
        }}
      />
      {/* Border top and bottom */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderTop: "1px solid var(--color-surface-high)",
          borderBottom: "1px solid var(--color-surface-high)",
          pointerEvents: "none",
        }}
      />
      {/* Decorative right blob */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-100px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-site"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "2rem",
        }}
      >
        {/* Eyebrow */}
        <p
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}
        >
          Free Strategy Call
        </p>

        <h2
          id="cta-heading"
          style={{ maxWidth: "700px", color: "var(--color-text)" }}
        >
          Ready to Outrank Your Competitors?
        </h2>

        <p
          style={{
            maxWidth: "520px",
            color: "var(--color-muted)",
            fontSize: "1.1rem",
            lineHeight: 1.75,
          }}
        >
          Book a free 30-minute strategy call. We will audit your current online presence and
          show you exactly where the growth opportunities are — no commitment required.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="mailto:hello@nexusdigital.agency" variant="primary" showArrow>
            Book a Free Strategy Call
          </Button>
          <Button href="#services" variant="secondary">
            Explore Our Services
          </Button>
        </div>

        {/* Micro trust signals */}
        <div
          className="flex flex-wrap gap-6 justify-center text-xs"
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
        >
          <span>No credit card required</span>
          <span style={{ color: "var(--color-border)" }}>|</span>
          <span>30-min call, no sales pitch</span>
          <span style={{ color: "var(--color-border)" }}>|</span>
          <span>Response within 2 hours</span>
        </div>
      </div>
    </section>
  );
}
