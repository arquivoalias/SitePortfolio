import { useState } from "react";
import MagneticButton from "./MagneticButton";

type FilterTagProps = {
  label: string;
  active: boolean;
  variant: "category" | "tool";
  onClick: () => void;
};

export default function FilterTag({
  label,
  active,
  variant,
  onClick,
}: FilterTagProps) {
  const [hovered, setHovered] = useState(false);

  const btnStyle =
    variant === "tool"
      ? {
          fontFamily: "'Inconsolata', monospace",
          fontSize: "0.75rem",
          letterSpacing: "0.06em",
          background: active
            ? "var(--foreground)"
            : hovered
            ? "rgba(58,89,66,0.15)"
            : "transparent",
          color: active
            ? "var(--primary-foreground)"
            : "var(--foreground)",
          border: `1px solid ${
            active
              ? "var(--foreground)"
              : "rgba(58,89,66,0.25)"
          }`,
        }
      : {
          fontFamily: "'Inconsolata', monospace",
          fontSize: "0.75rem",
          letterSpacing: "0.06em",
          background: active
            ? "#b84d6a"
            : hovered
            ? "rgba(184,77,106,0.12)"
            : "transparent",
          color: active ? "#e8eee0" : "#b84d6a",
          border: `1px solid ${
            active
              ? "#b84d6a"
              : "rgba(184,77,106,0.2)"
          }`,
        };

  return (
    <MagneticButton strength={0.2}>
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="px-4 py-1.5 transition-all duration-200"
        style={btnStyle}
      >
        {label}
      </button>
    </MagneticButton>
  );
}