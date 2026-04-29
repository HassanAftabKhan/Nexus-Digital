"use client";

import { Linkedin, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { SITE, SERVICES } from "@/lib/constants";

const SOCIAL = [
  { icon:Linkedin,  href:"https://linkedin.com",  label:"LinkedIn" },
  { icon:Instagram, href:"https://instagram.com", label:"Instagram" },
  { icon:Facebook,  href:"https://facebook.com",  label:"Facebook" },
  { icon:Twitter,   href:"https://twitter.com",   label:"X (Twitter)" },
];

const SOCIAL_COLORS = ["#0A66C2","#E1306C","#1877F2","#1DA1F2"];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer role="contentinfo" style={{ backgroundColor:"var(--color-surface)", borderTop:"1px solid var(--color-border)" }}>
      <div className="container-site" style={{ paddingTop:"5rem", paddingBottom:"3rem" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:"3rem", marginBottom:"4rem" }} className="footer-grid">

          {/* Brand */}
          <div style={{ maxWidth:"300px" }}>
            <a href="/" className="flex items-center gap-2 mb-5" aria-label={`${SITE.name} — Home`}>
              <div style={{ width:"34px", height:"34px", borderRadius:"10px", background:"linear-gradient(135deg, #4F46E5, #7C3AED)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 14px rgba(79,70,229,0.4)" }}>
                <span style={{ fontFamily:"var(--font-display)", fontWeight:800, fontSize:"1rem", color:"#fff" }}>N</span>
              </div>
              <span style={{ fontFamily:"var(--font-display)", fontWeight:800, fontSize:"1.1rem", color:"var(--color-text)", letterSpacing:"-0.02em" }}>{SITE.name}</span>
            </a>
            <p style={{ fontSize:"0.875rem", lineHeight:1.75, color:"var(--color-text-secondary)", marginBottom:"1.5rem" }}>
              We build digital presences that drive real results — from world-class websites to high-ROI marketing campaigns.
            </p>
            <div style={{ display:"flex", gap:"0.5rem" }}>
              {SOCIAL.map(({ icon:Icon, href, label }, i) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                  style={{ display:"flex", alignItems:"center", justifyContent:"center", width:"36px", height:"36px", borderRadius:"10px", color:"var(--color-text-muted)", border:"1px solid var(--color-border)", transition:"all 0.3s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color=SOCIAL_COLORS[i]; e.currentTarget.style.borderColor=SOCIAL_COLORS[i]; e.currentTarget.style.background=`${SOCIAL_COLORS[i]}12`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color="var(--color-text-muted)"; e.currentTarget.style.borderColor="var(--color-border)"; e.currentTarget.style.background="transparent"; }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontSize:"0.75rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--color-text-muted)", marginBottom:"1.25rem" }}>Services</h3>
            <ul style={{ display:"flex", flexDirection:"column", gap:"0.75rem", listStyle:"none" }}>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href={`/services/${s.id}`} style={{ fontSize:"0.875rem", color:"var(--color-text-secondary)", transition:"color 0.3s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color="var(--color-accent)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color="var(--color-text-secondary)")}
                  >{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ fontSize:"0.75rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--color-text-muted)", marginBottom:"1.25rem" }}>Company</h3>
            <ul style={{ display:"flex", flexDirection:"column", gap:"0.75rem", listStyle:"none" }}>
              {[{label:"About",href:"/about"},{label:"Our Work",href:"/work"},{label:"Blog",href:"/blog"},{label:"Contact",href:"/contact"},{label:"Privacy",href:"/privacy"}].map((l) => (
                <li key={l.label}>
                  <a href={l.href} style={{ fontSize:"0.875rem", color:"var(--color-text-secondary)", transition:"color 0.3s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color="var(--color-accent)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color="var(--color-text-secondary)")}
                  >{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontSize:"0.75rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--color-text-muted)", marginBottom:"1.25rem" }}>Get in Touch</h3>
            <address style={{ fontStyle:"normal", display:"flex", flexDirection:"column", gap:"0.875rem" }}>
              {[{Icon:Mail,val:SITE.email,href:`mailto:${SITE.email}`},{Icon:Phone,val:SITE.phone,href:`tel:${SITE.phone}`}].map(({Icon,val,href}) => (
                <a key={val} href={href} style={{ display:"flex", alignItems:"flex-start", gap:"0.625rem", fontSize:"0.875rem", color:"var(--color-text-secondary)", transition:"color 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color="var(--color-accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color="var(--color-text-secondary)")}
                >
                  <Icon size={15} style={{ marginTop:"2px", flexShrink:0, opacity:0.5 }} />{val}
                </a>
              ))}
              <p style={{ display:"flex", alignItems:"flex-start", gap:"0.625rem", fontSize:"0.875rem", color:"var(--color-text-secondary)" }}>
                <MapPin size={15} style={{ marginTop:"2px", flexShrink:0, opacity:0.5 }} />{SITE.address}
              </p>
            </address>
          </div>
        </div>

        <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"1rem", paddingTop:"2rem", borderTop:"1px solid var(--color-border)", fontSize:"0.75rem", color:"var(--color-text-muted)" }}>
          <p>&copy; {year} {SITE.name}. Built with ❤️ for ambitious brands.</p>
          <div style={{ display:"flex", gap:"1rem" }}>
            {["Google Partner","Meta Partner"].map((p) => (
              <span key={p} style={{ padding:"0.25rem 0.75rem", borderRadius:"9999px", background:"rgba(79,70,229,0.08)", border:"1px solid rgba(79,70,229,0.15)", color:"var(--color-accent)", fontSize:"0.6875rem", fontWeight:700 }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(min-width:768px){ .footer-grid{ grid-template-columns:1.5fr 1fr 1fr 1fr !important; } }
      `}</style>
    </footer>
  );
}
