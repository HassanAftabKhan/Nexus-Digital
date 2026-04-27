"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE, FAQ, SERVICES } from "@/lib/constants";
import { Mail, Phone, MapPin, Clock, ChevronDown } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", service: "", budget: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, wire up to your form endpoint (e.g. Formspree, Resend, etc.)
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ── */}
        <section
          style={{ paddingTop: "10rem", paddingBottom: "5rem", position: "relative", overflow: "hidden" }}
          aria-labelledby="contact-heading"
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute", bottom: 0, left: "50%",
              transform: "translateX(-50%)",
              width: "600px", height: "400px",
              background: "radial-gradient(ellipse, rgba(249,115,22,0.1) 0%, transparent 70%)",
              filter: "blur(60px)", pointerEvents: "none",
            }}
          />
          <div className="container-site text-center" style={{ position: "relative", zIndex: 1 }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
              Get In Touch
            </p>
            <h1 id="contact-heading" style={{ maxWidth: "700px", margin: "0 auto 1.5rem" }}>
              Let&apos;s Talk About<br />
              <span style={{ color: "var(--color-accent)" }}>Your Growth</span>
            </h1>
            <p style={{ maxWidth: "500px", margin: "0 auto", fontSize: "1.05rem" }}>
              Book a free 30-minute strategy call. No sales pitch — just an honest audit of where your biggest growth opportunities are.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 justify-center mt-8 text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
              <span><span style={{ color: "var(--color-accent)" }}>//</span> Response within 2 hours</span>
              <span><span style={{ color: "var(--color-accent)" }}>//</span> Free 30-min strategy call</span>
              <span><span style={{ color: "var(--color-accent)" }}>//</span> No commitment required</span>
            </div>
          </div>
        </section>

        {/* ── Main Content ── */}
        <section className="section-pad" style={{ paddingTop: "2rem" }}>
          <div
            className="container-site"
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem", alignItems: "start" }}
            id="contact-grid"
          >
            {/* ── Left: Contact Info ── */}
            <div>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "2rem" }}>
                Talk to a Human
              </h2>

              {/* Contact details */}
              <div className="flex flex-col gap-5 mb-10">
                {[
                  { icon: Mail, label: "Email Us", value: SITE.email, href: `mailto:${SITE.email}` },
                  { icon: Phone, label: "Call Us", value: SITE.phone, href: `tel:${SITE.phone}` },
                  { icon: MapPin, label: "Our Office", value: SITE.address, href: "#" },
                  { icon: Clock, label: "Office Hours", value: "Mon – Fri, 9am – 6pm EST", href: "#" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      padding: "1.5rem",
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-md)",
                      textDecoration: "none",
                      transition: "border-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                  >
                    <div
                      className="flex items-center justify-center rounded-lg shrink-0"
                      style={{ width: "40px", height: "40px", backgroundColor: "rgba(249,115,22,0.1)" }}
                    >
                      <Icon size={18} style={{ color: "var(--color-accent)" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
                        {label}
                      </p>
                      <p className="text-sm font-medium" style={{ color: "var(--color-text)" }}>{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* FAQ section */}
              <h3 style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>
                Frequently Asked Questions
              </h3>
              <div className="flex flex-col gap-2">
                {FAQ.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      border: `1px solid ${openFaq === i ? "var(--color-accent)" : "var(--color-border)"}`,
                      borderRadius: "var(--radius-md)",
                      overflow: "hidden",
                      transition: "border-color 0.3s ease",
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "1.25rem 1.5rem",
                        background: "var(--color-surface)",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                      aria-expanded={openFaq === i}
                    >
                      <span className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
                        {item.question}
                      </span>
                      <ChevronDown
                        size={16}
                        style={{
                          color: "var(--color-muted)",
                          flexShrink: 0,
                          transition: "transform 0.3s ease",
                          transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                    </button>
                    <div
                      style={{
                        maxHeight: openFaq === i ? "300px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                      }}
                    >
                      <p
                        style={{
                          padding: "0 1.5rem 1.25rem",
                          fontSize: "0.875rem",
                          lineHeight: 1.8,
                          color: "var(--color-muted)",
                          background: "var(--color-surface)",
                        }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "2.5rem",
                position: "sticky",
                top: "6rem",
              }}
            >
              {submitted ? (
                <div className="text-center py-8">
                  <div
                    className="flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-6"
                    style={{ backgroundColor: "rgba(249,115,22,0.1)", border: "2px solid var(--color-accent)" }}
                  >
                    <span style={{ fontSize: "1.75rem" }}>✓</span>
                  </div>
                  <h3 style={{ color: "var(--color-text)", marginBottom: "1rem" }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: "var(--color-muted)", fontSize: "0.95rem" }}>
                    Thank you for reaching out. We will get back to you within 2 hours during business hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 style={{ color: "var(--color-text)", marginBottom: "0.5rem", fontSize: "1.35rem" }}>
                    Start With a Free Audit
                  </h3>
                  <p className="text-sm mb-6" style={{ color: "var(--color-muted)" }}>
                    Fill out the form below and we will reach out to schedule your strategy call.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
                        Full Name *
                      </label>
                      <input
                        type="text" required
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                      />
                    </div>

                    {/* Email + Company */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-2col">
                      <div>
                        <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
                          Email *
                        </label>
                        <input
                          type="email" required
                          placeholder="jane@company.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
                          Company
                        </label>
                        <input
                          type="text"
                          placeholder="Your Company"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
                        Service Interested In
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        style={{ ...inputStyle, cursor: "pointer" }}
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                        <option value="multiple">Multiple / Not Sure</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
                        Monthly Budget
                      </label>
                      <select
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        style={{ ...inputStyle, cursor: "pointer" }}
                      >
                        <option value="">Select a range...</option>
                        <option value="under-1k">Under $1,000/mo</option>
                        <option value="1k-3k">$1,000 – $3,000/mo</option>
                        <option value="3k-5k">$3,000 – $5,000/mo</option>
                        <option value="5k-plus">$5,000+/mo</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
                        Tell Us About Your Goals
                      </label>
                      <textarea
                        rows={4}
                        placeholder="What are you trying to achieve? What's not working right now?"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        style={{ ...inputStyle, resize: "vertical" }}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary w-full justify-center mt-2">
                      Send Message — It&apos;s Free
                    </button>

                    <p className="text-xs text-center" style={{ color: "var(--color-muted)" }}>
                      By submitting, you agree to our Privacy Policy. No spam — ever.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (min-width: 900px) {
          #contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .form-2col { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: #555; }
        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: var(--color-accent) !important;
        }
        select option { background: #0a0a0a; color: #fff; }
      `}</style>
    </>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.875rem 1.125rem",
  background: "var(--color-bg)",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-md)",
  color: "var(--color-text)",
  fontSize: "0.9rem",
  fontFamily: "var(--font-sans)",
  transition: "border-color 0.2s ease",
  boxSizing: "border-box",
};
