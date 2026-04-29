import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

const PLANS = [
  {
    name: "Starter",
    price: "$999",
    period: "/mo",
    description: "Perfect for small businesses ready to establish a serious online presence.",
    features: [
      "Website audit & optimisation",
      "Local SEO setup",
      "Google Business Profile management",
      "Monthly performance report",
      "Email support (48h response)",
      "1 landing page per month",
    ],
    cta: "Start with Starter",
    featured: false,
  },
  {
    name: "Growth",
    price: "$2,499",
    period: "/mo",
    description: "For established brands ready to scale traffic, leads, and revenue aggressively.",
    features: [
      "Everything in Starter",
      "Full SEO campaign (on & off-page)",
      "Google & Meta Ads management",
      "Content creation (4 blogs/mo)",
      "Social media management (3 platforms)",
      "Bi-weekly strategy calls",
      "Dedicated account manager",
      "Conversion rate optimisation",
    ],
    cta: "Start Growing",
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    description: "Enterprise-level campaigns for ambitious brands with big goals and bigger budgets.",
    features: [
      "Everything in Growth",
      "Custom web development",
      "Advanced analytics & attribution",
      "Influencer & PR outreach",
      "Video content production",
      "White-label reporting",
      "Priority 2h support",
      "Quarterly brand strategy sessions",
    ],
    cta: "Let's Talk",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-pad section-white" aria-labelledby="pricing-heading">
      <div className="container-site">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 4rem" }}>
          <span className="eyebrow">Pricing</span>
          <h2 id="pricing-heading" style={{ marginTop: "0.5rem" }}>Transparent pricing. No surprises.</h2>
          <p style={{ marginTop: "1rem", fontSize: "1.05rem" }}>
            All plans include a free onboarding audit and 30-day money-back guarantee. Cancel anytime.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem" }} className="pricing-grid">
          {PLANS.map((plan) => (
            <div key={plan.name} className={`pricing-card${plan.featured ? " featured" : ""}`}>
              {plan.featured && (
                <div style={{ position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)", backgroundColor: "var(--color-blue)", color: "#fff", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.3rem 0.875rem", borderRadius: "9999px" }}>
                  Most Popular
                </div>
              )}

              <div style={{ marginBottom: "2rem" }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "0.9375rem", fontWeight: 700, color: "var(--color-ink)", marginBottom: "0.75rem" }}>{plan.name}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 800, color: "var(--color-ink)", letterSpacing: "-0.03em", lineHeight: 1 }}>{plan.price}</span>
                  <span style={{ fontSize: "0.875rem", color: "var(--color-ink-light)" }}>{plan.period}</span>
                </div>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.65 }}>{plan.description}</p>
              </div>

              <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "2rem", listStyle: "none" }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "0.875rem", color: "var(--color-ink-mid)" }}>
                    <Check size={15} style={{ color: "var(--color-green)", flexShrink: 0, marginTop: "2px" }} />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={plan.featured ? "primary" : "secondary"}
                className="w-full justify-center"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: "2.5rem", fontSize: "0.875rem", color: "var(--color-ink-muted)" }}>
          Need something custom? <a href="/contact" style={{ color: "var(--color-blue)", fontWeight: 600 }}>Talk to us →</a>
        </p>
      </div>
      <style>{`
        @media(min-width:900px) { .pricing-grid { grid-template-columns: repeat(3,1fr) !important; } }
      `}</style>
    </section>
  );
}
