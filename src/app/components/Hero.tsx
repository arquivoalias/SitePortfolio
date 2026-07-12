import HeroBento from "./HeroBento";
import { useEffect, useState } from "react";
import TypewriterText from "./TypewriterText";

      export default function Hero() {
        const [visible, setVisible] = useState(false);
        const [startTyping, setStartTyping] = useState(false);
        const [offset, setOffset] = useState({
  x: 0,
  y: 0,
});

useEffect(() => {
  const t = setTimeout(() => {
    setVisible(true);

    setTimeout(() => {
      setStartTyping(true);
    }, 550);

  }, 200);


  return () => clearTimeout(t);
}, []);

useEffect(() => {
  const handleMove = (e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    setOffset({
      x,
      y,
    });
  };

  window.addEventListener("mousemove", handleMove);

  return () =>
    window.removeEventListener("mousemove", handleMove);
}, []);

  return (
    <section
      id="home"
      style={{
        height: "100vh",
        paddingTop: 80,
        display: "flex",
        flexDirection: "column",
        
      }}
      className="max-w-7xl mx-auto px-6 md:px-12"
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          gap: "2rem",
          overflow: "hidden",
          minHeight: 0,
        }}
      >
{/* Bento */}
<div
  className="hidden md:block shrink-0 overflow-hidden"
  style={{
    width: 340,
    position: "relative",
    alignSelf: "stretch",

    transform: `translate(${offset.x}px, ${offset.y}px)`,
    transition: "transform .35s ease-out",
    willChange: "transform",
    background: "#CDD4BF",
  }}
>
  <HeroBento />


</div>


        {/* Texto */}
        <div
  className="flex flex-col items-end text-right justify-center flex-1"
  style={{
    gap: "0.5rem",

    transform: `translate(${-offset.x * 0.18}px, ${-offset.y * 0.18}px)`,

    transition: "transform .35s ease-out",

    willChange: "transform",
  }}
>
          <p
            className="text-accent"
            style={{
              fontFamily: "'Inconsolata', monospace",
              fontWeight: 400,
              fontSize: "clamp(.95rem,1.5vw,1.15rem)",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              opacity: visible ? 1 : 0,
    transform: visible
      ? "translateY(0)"
      : "translateY(24px)",
    transition:
      "opacity .7s ease, transform .7s ease",
            }}
          >
            Oi! Eu me chamo
          </p>

          <h1
            className="leading-none"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2.8rem,9vw,7.5rem)",
              fontWeight: 560,
              letterSpacing: "-0.08em",
              lineHeight: 0.95,
              color: "var(--foreground)",
              textShadow: "0 8px 24px rgba(0,0,0,.05)",
              opacity: visible ? 1 : 0,
transform: visible
  ? "translateY(0)"
  : "translateY(30px)",
transition:
  "opacity .8s ease .25s, transform .8s ease .25s",
            }}
          >
            <TypewriterText
  text="Valentina Real"
  start={startTyping}
/>
          </h1>

          <p
            className="text-accent"
            style={{
              fontFamily: "'Inconsolata', monospace",
              fontWeight: 400,
              fontSize: "clamp(.95rem,1.5vw,1.15rem)",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              opacity: visible ? 1 : 0,
transform: visible
  ? "translateY(0)"
  : "translateY(24px)",
transition:
  "opacity .7s ease .6s, transform .7s ease .6s",
            }}
          >
            e esse é o meu portfólio!
          </p>

          <p
  className=""
  style={{
    maxWidth: "min(460px, 72vw)",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 400,
    marginTop: "clamp(2px, 1.4vw, 12px)",
    fontSize: "clamp(.88rem, 2.6vw, 1.05rem)",
    lineHeight: 1.55,
    color: "#5e7e67",
    textAlign: "right",
    opacity: visible ? 1 : 0,
transform: visible
  ? "translateY(24px)"
  : "translateY(50px)",
transition:
  "opacity .9s ease .95s, transform .9s ease .95s",
  }}
>
            Sou uma designer carioca, moradora de Botafogo e há 21 anos sou
            obcecada por arte, cultura e design.{" "}
            <span
    style={{
      display: "block",
      marginTop: 16,
      fontWeight: 600,
      color: "var(--accent)",
    }}
  >
    Vem conhecer alguns dos meus projetos!
  </span>
</p>
        </div>
      </div>
    </section>
  );
}