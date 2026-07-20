import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  fullWidth = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${fullWidth ? "" : "container"} ${className}`}
    >
      <div className={fullWidth ? "container" : ""}>
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-foreground/70 text-lg max-w-2xl">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
