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
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase",
        className
      )}
      style={{
        backgroundColor:
          variant === "accent"
            ? "rgba(37, 99, 235, 0.15)"
            : "rgba(161, 161, 170, 0.1)",
        color: variant === "accent" ? "var(--color-accent)" : "var(--color-muted)",
        border: `1px solid ${variant === "accent" ? "rgba(37, 99, 235, 0.3)" : "rgba(161, 161, 170, 0.2)"}`,
        fontFamily: "var(--font-mono)",
      }}
    >
      {children}
    </span>
  );
}
