import {
  useState,
  useRef,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

type MagneticButtonProps = {
  children: ReactNode;
  strength?: number;
};

export default function MagneticButton({
  children,
  strength = 0.28,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const [canHover, setCanHover] = useState(false);

  // Detecta se o dispositivo possui hover real + ponteiro preciso
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const updateHoverCapability = () => {
      setCanHover(mediaQuery.matches);
    };

    updateHoverCapability();

    mediaQuery.addEventListener("change", updateHoverCapability);

    return () => {
      mediaQuery.removeEventListener("change", updateHoverCapability);
    };
  }, []);

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      // Em dispositivos touch, o efeito magnético fica completamente desativado
      if (!canHover || !ref.current) return;

      const r = ref.current.getBoundingClientRect();

      setXY({
        x: (e.clientX - r.left - r.width / 2) * strength,
        y: (e.clientY - r.top - r.height / 2) * strength,
      });
    },
    [strength, canHover]
  );

  const resetPosition = () => {
    if (!canHover) return;
    setXY({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={resetPosition}
      style={{
        display: "inline-flex",
        transform: canHover
          ? `translate(${xy.x}px, ${xy.y}px)`
          : "translate(0, 0)",
        transition: "transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
      }}
    >
      {children}
    </div>
  );
}