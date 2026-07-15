import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import MagneticButton from "./MagneticButton";
import FotoDePerfilHeader from "@/imports/FotoDePerfil-8";

type HeaderProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollTo: (id: string) => void;
};

export default function Header({
  menuOpen,
  setMenuOpen,
  scrollTo,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hovered, setHovered] = useState("");
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  setIsMobile(window.innerWidth < 1024);
}, []);
  useEffect(() => {
  const sections = ["home", "projetos", "sobre", "contato"];

  const onScroll = () => {
  const sections = ["home", "projetos", "sobre", "contato"];

  let current = "home";

  sections.forEach((id) => {
    const el = document.getElementById(id);

    if (!el) return;

    const rect = el.getBoundingClientRect();

    if (rect.top <= 180) {
      current = id;
    }
  });

  setActiveSection(current);
};

  window.addEventListener("scroll", onScroll);

  onScroll();

  return () => window.removeEventListener("scroll", onScroll);
}, []);

useEffect(() => {
  const onScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  window.addEventListener("scroll", onScroll);

  onScroll();

  return () => window.removeEventListener("scroll", onScroll);
}, []);
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
  return (
    <>
      {/* ── NAV ── */}
      <nav
  className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
  style={{
    background: isMobile
  ? "rgba(94,126,103,.92)"
  : scrolled
    ? "rgba(94,126,103,.82)"
    : "transparent",

    backdropFilter: isMobile || scrolled
      ? "blur(18px)"
      : "blur(0px)",

    WebkitBackdropFilter: isMobile || scrolled
      ? "blur(18px)"
      : "blur(0px)",

    borderBottom: isMobile || scrolled
      ? "1px solid rgba(58,89,66,.12)"
      : "1px solid transparent",
  }}
>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-4 group">
            <div style={{ width: 52, height: 52, flexShrink: 0 }} aria-label="Valentina Real — logo">
              <FotoDePerfilHeader />
            </div>
            <span
              className="transition-colors"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 200, fontSize: "clamp(1rem, 3.8vw, 1.3rem)", letterSpacing: "-0.01em", color: isMobile || scrolled
  ? "white"
  : "var(--foreground)",
  whiteSpace: "nowrap",

transition: "color .45s ease", }}
            >
              Valentina Real | Designer
            </span>
          </button>
          <div className="hidden lg:flex items-center gap-10">
            {[
              { label: "Projetos", id: "projetos" },
              { label: "Sobre", id: "sobre" },
              { label: "Contato", id: "contato" },
            ].map((item) => (
              <MagneticButton key={item.id}>
  <button
  onClick={() => scrollTo(item.id)}
  className="group relative transition-colors"
                  style={{ fontFamily: "'Inconsolata', monospace", 
                    fontSize: "0.82rem", 
                    letterSpacing: "0.1em", 
                    textTransform: "uppercase",
                    color: scrolled
  ? "white"
  : "var(--foreground)", opacity: .82,  transition: "color .45s ease",  position: "relative", }}
                  onMouseEnter={(e) => {
  setHovered(item.id);
  e.currentTarget.style.opacity = "1";
}}

onMouseLeave={(e) => {
  setHovered("");
  e.currentTarget.style.opacity = "0.7";
}}
                >
                  {item.label}
                 <span
  className="absolute left-1/2 -bottom-1 h-[2px] w-full bg-current transition-transform duration-300"
  style={{
    transform: `translateX(-50%) scaleX(${
      activeSection === item.id || hovered === item.id
        ? 1
        : 0
    })`,
    transformOrigin: "center",
  }}
/>
                </button>
              </MagneticButton>
            ))}
          </div>
          <button className="lg:hidden" style={{
 color: isMobile || scrolled
    ? "white"
    : "var(--foreground)",
  transition: "color .45s ease",
}} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
  <div
    className="lg:hidden px-6 py-7 flex flex-col gap-5"
    style={{
      background: "rgba(94,126,103,.92)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      borderBottom: "1px solid rgba(255,255,255,.08)",
    }}
  >
            {[
              { label: "Projetos", id: "projetos" },
              { label: "Sobre", id: "sobre" },
              { label: "Contato", id: "contato" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left transition-colors"
                style={{ fontFamily: "'Inconsolata', monospace",
  fontSize: "0.7rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
 color: isMobile || scrolled
  ? "white"
  : "var(--foreground)",
  opacity: 0.82,
  transition: "color .45s ease"}}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}