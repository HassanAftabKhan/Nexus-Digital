"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  { q: "How long before I see results?", a: "SEO typically shows meaningful progress in 90–120 days. Paid ads can generate leads from day one. We set clear 30/60/90-day milestones at the start of every engagement so you always know what to expect." },
  { q: "Do I need to sign a long-term contract?", a: "No. All our plans are month-to-month. We earn your business every month through results, not lock-in clauses. That said, most clients stay with us for 12+ months because the results compound over time." },
  { q: "What makes Nexus Digital different from other agencies?", a: "We don't hand your account to juniors. Every client gets a senior specialist who works directly on campaigns. We also provide full transparency — you own all accounts, data, and content we produce. No black boxes." },
  { q: "How much input do I need to give?", a: "After a thorough onboarding (typically one 2-hour session), we handle everything. You'll receive weekly updates and join one strategy call per month. We respect your time — you hired us so you don't have to manage this yourself." },
  { q: "Do you work with businesses outside the UK/US?", a: "Yes. We work with clients across North America, Europe, the Middle East, and Australia. Our campaigns are built for your target market, regardless of where your team is based." },
  { q: "What happens if I'm not happy with the results?", a: "We offer a 30-day money-back guarantee on all plans. If we're not hitting agreed KPIs after 90 days, we'll work for free until we do. Our track record speaks for itself — we've maintained a 98% client retention rate." },
  { q: "Can I start with just one service?", a: "Absolutely. Many clients start with SEO or paid ads alone, then expand once they see the results. Our Starter plan is designed for exactly this scenario." },
  { q: "Who owns the content, accounts, and data you create?", a: "You do — always. We never hold your accounts, data, or assets hostage. Everything we build belongs to you from day one. If you ever leave, you take everything with you." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-pad section-white" aria-labelledby="faq-heading">
      <div className="container-site">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem", alignItems: "start" }} className="faq-layout">
          {/* Left — sticky heading */}
          <div style={{ position: "sticky", top: "7rem" }}>
            <span className="eyebrow">FAQ</span>
            <h2 id="faq-heading" style={{ marginTop: "0.5rem", marginBottom: "1.25rem" }}>
              Questions we get<br />all the time
            </h2>
            <p style={{ lineHeight: 1.75, marginBottom: "2rem" }}>
              Can&apos;t find your answer here? We&apos;re always happy to have a real conversation.
            </p>
            <a href="/contact" className="btn btn-primary">Talk to a human</a>
          </div>

          {/* Right — accordion */}
          <div>
            {FAQS.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  style={{ width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1.5rem", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}
                >
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--color-ink)", lineHeight: 1.4 }}>{faq.q}</span>
                  <span style={{ flexShrink: 0, width: "28px", height: "28px", borderRadius: "50%", backgroundColor: open === i ? "var(--color-blue)" : "var(--color-surface)", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", color: open === i ? "#fff" : "var(--color-ink-light)", transition: "all 0.2s ease" }}>
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                {open === i && (
                  <p style={{ marginTop: "1rem", fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--color-ink-light)", maxWidth: "600px" }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(min-width:900px) { .faq-layout { grid-template-columns: 360px 1fr !important; } }
      `}</style>
    </section>
  );
}
