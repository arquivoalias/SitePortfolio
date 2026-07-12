import { useState, useRef, useEffect } from "react";

export default function TypewriterText({
  text,
  start = true,
}: {
  text: string;
  start?: boolean;
}) {
  const [len, setLen] = useState(0);
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setActive(true); io.disconnect(); } }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!start || !active || len >= text.length) return;
    const t = setTimeout(() => setLen((l) => l + 1), 55);
    return () => clearTimeout(t);
  }, [active, len, text.length, start]);
  return (
    <span ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <span style={{ visibility: "hidden" }}>{text}</span>
      <span style={{ position: "absolute", left: 0, top: 0, whiteSpace: "nowrap" }}>
        {active && start ? text.slice(0, len) : ""}
        {active && start && len < text.length && (
          <span style={{ borderRight: "3px solid currentColor", animation: "blink 0.6s step-end infinite", marginLeft: "1px" }}>&nbsp;</span>
        )}
      </span>
    </span>
  );
}