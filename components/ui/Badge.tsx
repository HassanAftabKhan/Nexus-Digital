import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "muted";
  className?: string;
}

export default function Badge({ children, variant = "accent", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium",
        className
      )}
      style={{
        backgroundColor:
          variant === "accent"
            ? "var(--color-accent-subtle)"
            : "rgba(139, 139, 158, 0.08)",
        color: variant === "accent" ? "var(--color-accent)" : "var(--color-text-secondary)",
        border: `1px solid ${variant === "accent" ? "rgba(124, 92, 252, 0.2)" : "rgba(139, 139, 158, 0.12)"}`,
        letterSpacing: "0.02em",
        fontSize: "0.6875rem",
      }}
    >
      {children}
    </span>
  );
}
