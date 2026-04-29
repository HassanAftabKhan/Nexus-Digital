import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      style={{
        position:"relative",
        overflow:"hidden",
        padding:"7rem 0",
        background:"linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #0EA5E9 100%)",
      }}
    >
      {/* Decorative circles */}
      <div aria-hidden="true" style={{ position:"absolute", top:"-30%", right:"-5%", width:"500px", height:"500px", borderRadius:"50%", border:"1px solid rgba(255,255,255,0.1)", pointerEvents:"none" }} />
      <div aria-hidden="true" style={{ position:"absolute", bottom:"-20%", left:"-5%", width:"380px", height:"380px", borderRadius:"50%", border:"1px solid rgba(255,255,255,0.08)", pointerEvents:"none" }} />
      <div aria-hidden="true" style={{ position:"absolute", top:"20%", left:"15%", width:"200px", height:"200px", borderRadius:"50%", background:"rgba(255,255,255,0.04)", pointerEvents:"none" }} />

      <div className="container-site" style={{ position:"relative", zIndex:1, display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", gap:"1.75rem" }}>
        <div style={{ padding:"0.375rem 1rem", borderRadius:"9999px", background:"rgba(255,255,255,0.15)", border:"1px solid rgba(255,255,255,0.25)", fontSize:"0.75rem", fontWeight:700, color:"#fff", letterSpacing:"0.06em", textTransform:"uppercase" }}>
          Limited spots available this month
        </div>

        <h2 id="cta-heading" style={{ maxWidth:"700px", color:"#fff", fontSize:"clamp(2.2rem,5vw,4rem)", lineHeight:1.05 }}>
          Ready to make your competitors <br />
          <span style={{ opacity:0.85 }}>nervous?</span> 🚀
        </h2>

        <p style={{ maxWidth:"500px", color:"rgba(255,255,255,0.8)", fontSize:"1.1rem", lineHeight:1.75 }}>
          Book your free 30-minute strategy call today. We&apos;ll analyse your brand, expose your growth gaps, and show you exactly how we&apos;ll fix them — no fluff, no obligation.
        </p>

        <div className="flex flex-wrap gap-4 justify-center" style={{ marginTop:"0.5rem" }}>
          <a href="/contact" className="btn" style={{ background:"#fff", color:"var(--color-accent)", boxShadow:"0 8px 30px rgba(0,0,0,0.2)", fontWeight:800 }}>
            Book My Free Strategy Call →
          </a>
          <a href="/work" className="btn" style={{ background:"rgba(255,255,255,0.12)", color:"#fff", border:"1.5px solid rgba(255,255,255,0.3)" }}>
            See Our Results
          </a>
        </div>

        <div style={{ display:"flex", flexWrap:"wrap", gap:"2rem", justifyContent:"center", marginTop:"1.5rem" }}>
          {["✓ No commitment required", "✓ 30-minute call", "✓ Response in 2 hours", "✓ Keep all our work"].map((t) => (
            <span key={t} style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.7)", fontWeight:500 }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
