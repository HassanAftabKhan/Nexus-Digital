import { CLIENTS } from "@/lib/constants";

export default function LogoBar() {
  const doubled = [...CLIENTS, ...CLIENTS];
  return (
    <section aria-label="Clients and partners" style={{ borderTop:"1px solid var(--color-border)", borderBottom:"1px solid var(--color-border)", padding:"2.5rem 0", overflow:"hidden", background:"var(--color-surface)" }}>
      <div className="container-site mb-5">
        <p style={{ textAlign:"center", fontSize:"0.6875rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--color-text-muted)" }}>
          Powering growth for 500+ companies worldwide
        </p>
      </div>
      <div style={{ overflow:"hidden", position:"relative" }} aria-hidden="true">
        <div style={{ position:"absolute", left:0, top:0, bottom:0, width:"100px", background:"linear-gradient(90deg,white,transparent)", zIndex:2, pointerEvents:"none" }} />
        <div style={{ position:"absolute", right:0, top:0, bottom:0, width:"100px", background:"linear-gradient(-90deg,white,transparent)", zIndex:2, pointerEvents:"none" }} />
        <div className="marquee-track">
          {doubled.map((client, i) => (
            <div key={`${client}-${i}`} style={{ display:"flex", alignItems:"center", padding:"0 2.5rem", whiteSpace:"nowrap", minWidth:"max-content" }}>
              <span style={{ fontFamily:"var(--font-display)", fontSize:"1rem", fontWeight:700, color:"var(--color-text-muted)", letterSpacing:"-0.01em" }}>
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
