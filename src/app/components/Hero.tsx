import HeroBento from "./HeroBento";
import { useEffect, useState, useRef, memo } from "react";
import TypewriterText from "./TypewriterText";
import nome from "@/imports/nome.png";

const MemoHeroBento = memo(HeroBento);

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  
const [canHover, setCanHover] = useState(false);
  const bentoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | undefined>(undefined);

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
useEffect(() => {
  if (!canHover) return;

  const handleMove = (e: MouseEvent) => {
    if (rafId.current) return;

    rafId.current = requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      if (bentoRef.current) {
        bentoRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      if (textRef.current) {
        textRef.current.style.transform = `translate3d(${-x * 0.18}px, ${-y * 0.18}px, 0)`;
      }

      rafId.current = undefined;
    });
  };

  window.addEventListener("mousemove", handleMove, { passive: true });

  return () => {
    window.removeEventListener("mousemove", handleMove);

    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = undefined;
    }
  };
}, [canHover]);
const scrollToProjects = () => {
  const section = document.getElementById("projetos");

  if (!section) return;

  const target =
    section.getBoundingClientRect().top +
    window.scrollY -
    60;

  window.scrollTo({
    top: target,
    behavior: "smooth",
  });
};
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        paddingTop: 64,
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
  ref={bentoRef}
  className="hidden lg:block shrink-0 overflow-hidden"
  style={{
    width: 340,
    position: "relative",
    alignSelf: "stretch",
    willChange: "transform",
    background: "#CDD4BF",
  }}
>
  <MemoHeroBento />
</div>


        {/* Texto */}
        <div
  ref={textRef}
  className="flex flex-col items-end text-right justify-center flex-1 hero-text"
  style={{
    gap: "0.2rem",
    willChange: "transform",
    transform: "translateY(-4vh)",
  }}
>
          <p
            className="text-accent"
            style={{
              fontFamily: "'Inconsolata', monospace",
              fontWeight: 400,
              fontSize: "clamp(.95rem,1.5vw,1.15rem)",
              letterSpacing: ".12em",
              marginBottom: "1.2rem",
              textTransform: "uppercase",
              opacity: visible ? 1 : 0,
    transform: visible
      ? "translateY(0)"
      : "translateY(24px)",
    transition:
      "opacity .7s ease, transform .7s ease",
            }}
          >
           DESIGNER GRÁFICA & ILUSTRADORA
          </p>

          <div
  style={{
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translateY(0)"
      : "translateY(30px)",
    transition:
      "opacity .8s ease .25s, transform .8s ease .25s",
  }}
>
  <img
    src={nome}
    alt="Valentina Real"
    style={{
      width: "clamp(260px, 78vw, 650px)",
      height: "auto",
      display: "block",
      objectFit: "contain",
    }}
  />
</div>

          <p
            className="text-accent"
            style={{
              fontFamily: "Inconsolata, monospace",
              fontWeight: 500,
              fontSize: "clamp(.75rem,1.3vw,0.95rem)",
              letterSpacing: "0em",
              marginTop: "0.7rem",
              color: "#5e7e67",
transform: visible
  ? "translateY(0)"
  : "translateY(24px)",
transition:
  "opacity .7s ease .6s, transform .7s ease .6s",
            }}
          >
            IDENTIDADE VISUAL · EDITORIAL · COMUNICAÇÃO DIGITAL
          </p>
          <button
  type="button"
  onClick={scrollToProjects} className="hero-projects-cta"
  style={{
    marginTop: "1.4rem",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    background: "transparent",
    border: "none",
    padding: 0,
    cursor: "pointer",
    fontFamily: "'Inconsolata', monospace",
    fontSize: "clamp(.8rem, 1.2vw, .95rem)",
    fontWeight: 500,
    letterSpacing: ".04em",
    color: "#b84d6a",
    opacity: visible ? 1 : 0,
    transform: visible
  ? "translateY(0)"
  : "translateY(24px)",
    transition:
      "opacity .7s ease .8s, transform .25s ease, color .25s ease",
  }}
>
  <span
    style={{
      borderBottom: "1px solid transparent",
      transition: "border-color .25s ease",
    }}
  >
    Vem ver meus projetos
  </span>

  <span
    aria-hidden="true"
    style={{
      display: "inline-block",
      transform: "translateY(0)",
      transition: "transform .25s ease",
      fontSize: "1rem",
    }}
  >
    ↓
  </span>
</button>
        </div>
      </div>
    </section>
  );
}