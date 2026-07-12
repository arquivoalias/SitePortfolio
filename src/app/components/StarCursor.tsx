import { useEffect, useState } from "react";
import Star from "@/imports/Star/estrela";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function StarCursor() {
  const isMobile = useMediaQuery("(max-width:768px)");

  const [pos, setPos] = useState({
    x: -200,
    y: -200,
  });

  useEffect(() => {
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", onMove);

    return () => window.removeEventListener("mousemove", onMove);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%,-50%)",
        pointerEvents: "none",
        zIndex: 99999,
          width: 10,
  height: 10,
      }}
    >
      <Star
  width={30}
  height={30}
/>
    </div>
  );
}