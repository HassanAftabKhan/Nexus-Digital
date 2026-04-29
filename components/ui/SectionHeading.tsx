import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14",
        centered && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className="flex items-center gap-2.5 mb-4"
          style={{
            justifyContent: centered ? "center" : "flex-start",
          }}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-end))",
              borderRadius: "1px",
            }}
          />
          <span
            className="label-eyebrow-accent"
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        style={{
          color: light ? "var(--color-text-dark)" : "var(--color-text)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-5 max-w-xl"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: light ? "#55556A" : "var(--color-text-secondary)",
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
