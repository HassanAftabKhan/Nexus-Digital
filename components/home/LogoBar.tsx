import { CLIENTS } from "@/lib/constants";

export default function LogoBar() {
  const doubled = [...CLIENTS, ...CLIENTS];
  return (
    <section aria-label="Trusted clients" style={{ backgroundColor: "var(--color-slate-bg)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", padding: "2.25rem 0", overflow: "hidden" }}>
      <div className="container-site" style={{ marginBottom: "1.25rem" }}>
        <p style={{ textAlign: "center", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ink-muted)" }}>
          Trusted by 500+ companies across 30 industries
        </p>
      </div>
      <div style={{ position: "relative", overflow: "hidden" }} aria-hidden="true">
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(90deg, var(--color-slate-bg), transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(-90deg, var(--color-slate-bg), transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div className="marquee-track">
          {doubled.map((client, i) => (
            <div key={`${client}-${i}`} style={{ padding: "0 2.5rem", display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "0.9375rem", fontWeight: 700, color: "var(--color-ink-muted)", letterSpacing: "-0.01em" }}>{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
