import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="section-dark"
      style={{ position: "relative", overflow: "hidden", padding: "7rem 0" }}
    >
      {/* Subtle glow on dark bg */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(96,65,232,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, borderTop: "1px solid var(--color-dark-border)", borderBottom: "1px solid var(--color-dark-border)", pointerEvents: "none" }} />

      <div className="container-site" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "1.75rem" }}>
        <span className="label-eyebrow-accent">Free Strategy Call</span>

        <h2 id="cta-heading" style={{ maxWidth: "640px", color: "var(--color-dark-text)" }}>
          Ready to outrank your{" "}
          <span className="gradient-text">competitors</span>?
        </h2>

        <p style={{ maxWidth: "480px", color: "var(--color-dark-muted)", fontSize: "1.05rem", lineHeight: 1.75 }}>
          Book a free 30-minute strategy call. We&apos;ll audit your current presence and show you exactly where the growth opportunities are.
        </p>

        <div className="flex flex-wrap gap-4 justify-center" style={{ marginTop: "0.5rem" }}>
          <Button href="/contact" variant="primary" showArrow>Book a Strategy Call</Button>
          <Button href="/work" variant="secondary">View Our Work</Button>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center", marginTop: "1.5rem" }}>
          {["No commitment required", "30-min call", "Response within 2 hrs"].map((text) => (
            <span key={text} style={{ fontSize: "0.6875rem", color: "var(--color-dark-muted)", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500 }}>
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
