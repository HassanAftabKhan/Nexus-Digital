import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16",
        centered && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <p
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-4"
          style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}
        >
          <span
            style={{
              display: "inline-block",
              width: "24px",
              height: "2px",
              backgroundColor: "var(--color-accent)",
              borderRadius: "1px",
            }}
          />
          {eyebrow}
        </p>
      )}
      <h2 style={{ color: "var(--color-text)" }}>{title}</h2>
      {subtitle && (
        <p
          className="mt-4 text-lg leading-relaxed max-w-2xl"
          style={{
            color: "var(--color-muted)",
            marginLeft: centered ? "auto" : undefined,
            marginRight: centered ? "auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
