import { CLIENTS } from "@/lib/constants";

export default function LogoBar() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section
      aria-label="Clients and partners"
      style={{
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        padding: "2.5rem 0",
        overflow: "hidden",
        backgroundColor: "var(--color-surface-high)",
      }}
    >
      <div className="container-site mb-5">
        <p className="label-eyebrow" style={{ textAlign: "center" }}>
          Trusted by forward-thinking companies
        </p>
      </div>

      <div style={{ overflow: "hidden", position: "relative" }} aria-hidden="true">
        {/* Edge fades */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "100px", background: "linear-gradient(90deg, var(--color-surface-high), transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "100px", background: "linear-gradient(-90deg, var(--color-surface-high), transparent)", zIndex: 2, pointerEvents: "none" }} />

        <div className="marquee-track">
          {doubled.map((client, i) => (
            <div
              key={`${client}-${i}`}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 2.5rem", whiteSpace: "nowrap", minWidth: "max-content" }}
            >
              <span style={{ fontFamily: "var(--font-display)", fontSize: "0.9375rem", fontWeight: 600, color: "var(--color-text-secondary)", opacity: 0.6, letterSpacing: "-0.01em" }}>
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
