const TEAM = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    bio: "8 years building brands across e-commerce, SaaS, and professional services. Former Head of Growth at a $50M DTC brand.",
    initials: "AM",
    tags: ["Strategy", "Growth", "Partnerships"],
  },
  {
    name: "Sofia Chen",
    role: "Head of SEO & Content",
    bio: "Led organic growth from 0 to 2M monthly visitors for three companies. Google-certified specialist in technical SEO.",
    initials: "SC",
    tags: ["SEO", "Content", "Analytics"],
  },
  {
    name: "James Okafor",
    role: "Paid Media Director",
    bio: "Managed $8M+ in Google & Meta ad spend. Specialises in e-commerce performance marketing and lead gen funnels.",
    initials: "JO",
    tags: ["Google Ads", "Meta Ads", "CRO"],
  },
  {
    name: "Priya Sharma",
    role: "Lead Web Developer",
    bio: "Full-stack engineer with a design eye. Builds conversion-optimised websites using Next.js, React, and headless CMS.",
    initials: "PS",
    tags: ["Next.js", "UI/UX", "CMS"],
  },
  {
    name: "Marcus Webb",
    role: "Creative Director",
    bio: "Award-winning designer who has led visual identity projects for brands across retail, finance, and tech sectors.",
    initials: "MW",
    tags: ["Branding", "Design", "Video"],
  },
  {
    name: "Layla Hassan",
    role: "Social Media Strategist",
    bio: "Helped 40+ brands grow their social following organically. Certified Meta Business Manager and content systems expert.",
    initials: "LH",
    tags: ["Instagram", "TikTok", "LinkedIn"],
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="section-pad section-slate" aria-labelledby="team-heading">
      <div className="container-site">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem", marginBottom: "4rem" }} className="team-header">
          <div>
            <span className="eyebrow">Our Team</span>
            <h2 id="team-heading" style={{ marginTop: "0.5rem" }}>Specialists, not generalists</h2>
          </div>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>
            Every person on your account is a dedicated expert in their field — not a junior account manager reading from a playbook. You get senior-level work, every time.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1px", backgroundColor: "var(--color-border)" }} className="team-grid">
          {TEAM.map((member) => (
            <div key={member.name} style={{ backgroundColor: "var(--color-slate-bg)", padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "50%", backgroundColor: "var(--color-ink)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", fontWeight: 800, color: "#fff", flexShrink: 0, letterSpacing: "-0.02em", fontFamily: "var(--font-display)" }}>
                  {member.initials}
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "var(--color-ink)" }}>{member.name}</p>
                  <p style={{ fontSize: "0.8125rem", color: "var(--color-blue)", fontWeight: 600 }}>{member.role}</p>
                </div>
              </div>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>{member.bio}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                {member.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: "0.6875rem", fontWeight: 600, padding: "0.25rem 0.625rem", borderRadius: "var(--radius-sm)", backgroundColor: "var(--color-blue-light)", border: "1px solid var(--color-blue-mid)", color: "var(--color-blue)" }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(min-width:900px) { .team-header { grid-template-columns: 1fr 1fr !important; } }
        @media(min-width:640px) { .team-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media(min-width:1024px) { .team-grid { grid-template-columns: repeat(3,1fr) !important; } }
      `}</style>
    </section>
  );
}
