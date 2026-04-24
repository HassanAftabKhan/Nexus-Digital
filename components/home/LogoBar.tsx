import { CLIENTS } from "@/lib/constants";

export default function LogoBar() {
  // Duplicate the array so the marquee loops seamlessly
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section
      aria-label="Clients and partners"
      style={{
        borderTop: "1px solid var(--color-surface-high)",
        borderBottom: "1px solid var(--color-surface-high)",
        backgroundColor: "var(--color-surface)",
        padding: "2rem 0",
        overflow: "hidden",
      }}
    >
      <div className="container-site mb-4 text-center">
        <p
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
        >
          Trusted by brands that demand results
        </p>
      </div>

      {/* Marquee overflow container */}
      <div
        style={{ overflow: "hidden", position: "relative" }}
        aria-hidden="true"
      >
        {/* Left fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(90deg, var(--color-surface), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(-90deg, var(--color-surface), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div className="marquee-track">
          {doubled.map((client, i) => (
            <div
              key={`${client}-${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 3rem",
                whiteSpace: "nowrap",
                minWidth: "max-content",
              }}
            >
              <span
                className="text-lg font-bold tracking-tight"
                style={{ color: "var(--color-surface-high)", fontSize: "1.1rem" }}
              >
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
