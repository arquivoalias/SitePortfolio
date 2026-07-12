import { useState, useRef, useCallback } from "react";

type MagneticButtonProps = {
  children: React.ReactNode;
  strength?: number;
};

export default function MagneticButton({
  children,
  strength = 0.28,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [xy, setXY] = useState({ x: 0, y: 0 });

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;

      const r = ref.current.getBoundingClientRect();

      setXY({
        x: (e.clientX - r.left - r.width / 2) * strength,
        y: (e.clientY - r.top - r.height / 2) * strength,
      });
    },
    [strength]
  );

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setXY({ x: 0, y: 0 })}
      style={{
        display: "inline-flex",
        transform: `translate(${xy.x}px, ${xy.y}px)`,
        transition: "transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
      }}
    >
      {children}
    </div>
  );
}

export const TESTE = true;