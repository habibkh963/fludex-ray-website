import { ReactNode } from "react";

interface ProjectCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  details?: string[];
  highlight?: boolean;
  image?: string;
}

export default function ProjectCard({
  icon,
  title,
  description,
  details,
  highlight = false,
  image,
}: ProjectCardProps) {
  return (
    <div
      className={`glass-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/30 group ${
        highlight ? "border-accent/40" : ""
      }`}
    >
      {image && (
        <div className="mb-4 rounded-lg overflow-hidden h-48 bg-card/50">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {icon && (
        <div className="mb-4 text-accent text-3xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}

      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>

      <p className="text-sm text-foreground/70 mb-4">{description}</p>

      {details && details.length > 0 && (
        <ul className="space-y-2">
          {details.map((detail, idx) => (
            <li key={idx} className="text-xs text-foreground/60 flex items-start gap-2">
              <span className="text-accent mt-1">▸</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
