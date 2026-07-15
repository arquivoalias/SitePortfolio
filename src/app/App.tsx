import { Project } from "./types/Project";
import StarCursor from "./components/StarCursor";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  Mail,
  Instagram,
  Linkedin,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import profilePhoto from "@/imports/image-1.png";
import FotoDePerfil from "@/imports/FotoDePerfil-6/index";
import FotoDePerfilVerde from "@/imports/FotoDePerfil-5/index";
import FotoDePerfilHeader from "@/imports/FotoDePerfil-8/index";
import cvImage from "@/imports/image.png";
import FotoDePerfilDetalhe from "@/imports/FotoDePerfil-7/index";
import tickerPaths from "@/imports/Container-2/svg-4f1wn8qbk3";
import contactStarPaths from "@/imports/Container-1/svg-9u2cjo38cc";
import CursorIcon from "@/imports/Cursor/index";
import MagneticButton from "./components/MagneticButton";
import { projects } from "./data/projects";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import { Document, Page, pdfjs } from "react-pdf";
import Ticker from "./components/Ticker";

pdfjs.GlobalWorkerOptions.workerSrc =
  `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// ── Brand badge wrapper ───────────────────────────────────────────────────────
function LogoBadge({ size = 48 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size, flexShrink: 0 }} aria-label="Valentina Real — logo">
      <FotoDePerfil />
    </div>
  );
}


// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState<{ images: string[]; idx: number; project: (typeof projects)[0] } | null>(null);
  const [cvOpen, setCvOpen] = useState(false);
const [starOffset, setStarOffset] = useState({ x: 0, y: 0 });
  const allCategoryTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
  const allToolTags = Array.from(new Set(projects.flatMap((p) => p.tools)));

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag) || p.tools.includes(activeTag))
    : projects;

  const displayedProjects = activeTag !== null || showAll ? filtered : filtered.slice(0, 6);
  const hasMore = activeTag === null && !showAll && filtered.length > 6;
const [pdfScale, setPdfScale] = useState(
  window.innerWidth < 1024 ? 0.6 : 0.8
);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight" && lightbox.idx < lightbox.images.length - 1)
        setLightbox((lb) => lb && { ...lb, idx: lb.idx + 1 });
      if (e.key === "ArrowLeft" && lightbox.idx > 0)
        setLightbox((lb) => lb && { ...lb, idx: lb.idx - 1 });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const scrollTo = (id: string) => {
  const section = document.getElementById(id);

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  section.animate(
    [
      {
        opacity: 0.92,
      },
      {
        opacity: 1,
      },
    ],
    {
      duration: 450,
      easing: "ease-out",
    }
  );
};

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden" style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex flex-col md:flex-row items-center justify-center gap-6 p-6 md:p-12"
          style={{ backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", background: "rgba(0,0,0,.72)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 flex items-center justify-center transition-all hover:bg-foreground/10"
            style={{ width: 40, height: 40, color: "var(--foreground)", border: "1.5px solid var(--foreground)" }}
            onClick={() => setLightbox(null)} aria-label="Fechar"
          >
            <X size={18} strokeWidth={1.5} />
          </button>

          {/* Image */}
<div
  className="relative flex-shrink-0"
  onClick={(e) => e.stopPropagation()}
>
            <img
              src={lightbox.images[lightbox.idx]}
              alt={lightbox.project.title}
              className="object-contain"
              style={{ maxHeight: "75vh", maxWidth: "min(90vw, 600px)", boxShadow: "0 16px 60px rgba(0,0,0,0.18)" }}
            />
            {/* Prev/next arrows */}
            {lightbox.images.length > 1 && lightbox.idx > 0 && (
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all hover:opacity-100"
                style={{ width: 36, height: 36, background: "var(--background)", border: "1.5px solid var(--foreground)", opacity: 0.8 }}
                onClick={(e) => {
  e.stopPropagation();
  setLightbox((lb) => lb && { ...lb, idx: lb.idx - 1 });
}}
                aria-label="Imagem anterior"
              >
                <ArrowUpRight size={16} strokeWidth={1.5} style={{ transform: "rotate(225deg)" }} />
              </button>
            )}
            {lightbox.images.length > 1 && lightbox.idx < lightbox.images.length - 1 && (
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all hover:opacity-100"
                style={{ width: 36, height: 36, background: "var(--background)", border: "1.5px solid var(--foreground)", opacity: 0.8 }}
                onClick={(e) => {
  e.stopPropagation();
  setLightbox((lb) => lb && { ...lb, idx: lb.idx + 1 });
}}
                aria-label="Próxima imagem"
              >
                <ArrowUpRight size={16} strokeWidth={1.5} style={{ transform: "rotate(45deg)" }} />
              </button>
            )}
          </div>

          {/* Project info panel */}
          <div
            className="flex-shrink-0 max-w-xs w-full md:w-64"
            style={{ background: "var(--card)", padding: "24px", border: "1px solid var(--border)" }}
           
          >
            <p className="text-accent mb-1" style={{ fontFamily: "'Inconsolata', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              {lightbox.project.category}
            </p>
            <h3 className="text-foreground mb-3" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "1.05rem", letterSpacing: "-0.02em" }}>
              {lightbox.project.title}
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed" style={{ fontSize: "0.85rem", textWrap: "balance" } as React.CSSProperties}>
              {lightbox.project.description}
            </p>
            <div className="flex gap-1.5 flex-wrap mb-3">
              {lightbox.project.tags.map((t) => (
                <span key={t} className="px-2 py-0.5" style={{ fontFamily: "'Inconsolata', monospace", fontSize: "0.6rem", letterSpacing: "0.04em", color: "#b84d6a", background: "rgba(184,77,106,0.12)" }}>{t}</span>
              ))}
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {lightbox.project.tools.map((t) => (
                <span key={t} className="px-2 py-0.5" style={{ fontFamily: "'Inconsolata', monospace", fontSize: "0.6rem", letterSpacing: "0.04em", color: "var(--foreground)", background: "rgba(58,89,66,0.1)" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── CV MODAL ── */}
      {cvOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-6 md:p-12 gap-4"
          style={{ backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", background: "rgba(205,212,191,0.25)" }}
          onClick={() => setCvOpen(false)}
        >
          <button
            className="absolute top-5 right-5 flex items-center justify-center transition-all hover:bg-foreground/10"
            style={{ width: 40, height: 40, color: "var(--foreground)", border: "1.5px solid var(--foreground)" }}
            onClick={() => setCvOpen(false)}
            aria-label="Fechar"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
          <div
  onClick={(e) => e.stopPropagation()}
  style={{
    position: "relative",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
    <div
  style={{
    display: "flex",
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
    padding: "3px 10px",
    border: "1px solid #C4CCB5",
    backdropFilter: "blur(10px)",
    background: "rgba(58,89,66,0.2)",
    color: "var(--primary-foreground)", 
    fontFamily: "'Inconsolata', monospace",         
  }}
>
    <button
  onClick={() => setPdfScale((s) => Math.max(0.6, s - 0.1))}
  style={{
    width: 36,
    height: 36,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    color: "var(--primary-foreground)",
  }}
>
  −
</button>

<span
  style={{
    minWidth: 48,
    textAlign: "center",
    fontFamily: "'Inconsolata', monospace",
    fontSize: "20px",
  }}
>
  {Math.round(pdfScale * 100)}%
</span>

<button
  onClick={() => setPdfScale((s) => Math.min(2.5, s + 0.1))}
  style={{
    width: 36,
    height: 36,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    color: "var(--primary-foreground)",
  }}
>
  +
</button>
  </div>

  <div
    className="pdf-scroll"
    style={{
      width: "fit-content",
      maxHeight: "80vh",
      overflow: "auto",
      padding: "4px 10px 2px",
    }}
  >
  <Document
    file="/Curriculo_ValentinaReal.pdf"
    loading="Carregando currículo..."
  >
    <Page
      pageNumber={1}
      scale={pdfScale}
      renderTextLayer={false}
      renderAnnotationLayer={false}
    />
  </Document>
</div>

 
</div>
          <a
  href="/Curriculo_ValentinaReal.pdf"
  download="Curriculo-Valentina-Real.pdf"
  onClick={(e) => e.stopPropagation()}
  className="flex items-center gap-2 transition-colors hover:opacity-80"
  style={{
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: "translateX(-50%)",
    background: "var(--foreground)",
    color: "var(--primary-foreground)",
    fontFamily: "'Inconsolata', monospace",
    fontSize: "0.8rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: "10px 20px",
    zIndex: 20,
  }}
>
  Baixar PDF
  <ArrowUpRight size={14} />
</a>
        </div>
      )}
<Header
  menuOpen={menuOpen}
  setMenuOpen={setMenuOpen}
  scrollTo={scrollTo}
/>

      <StarCursor />

      {/* ── KEYFRAMES ── */}
      <style>{`
        * { cursor: none !important; }
        
        @keyframes tickerScroll {
  0% {
    transform: translate3d(0,0,0);
  }

  100% {
    transform: translate3d(-50%,0,0);
  }
}
        /* tickerScroll uses -50% of max-content width = exactly one copy width → seamless */
        @keyframes blink {
          0%, 100% { opacity: 1; } 50% { opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes floatStarA {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        @keyframes floatStarB {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-8deg); }
        }
          @keyframes tickerStar {
  0%,100%{
    transform:scale(1) rotate(0deg);
  }

  50%{
    transform:scale(1.15) rotate(18deg);
  }
}
      `}</style>
{/* <Hero /> */}
    <Hero />

      <Ticker />
      

     <Projects />

<About
  profilePhoto={profilePhoto}
  setCvOpen={setCvOpen}
/>
      
           
    

      {/* ── CONTACT ── */}
      <section id="contato" style={{    scrollMarginTop: 100,  }} className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div
  className="
    group
    relative
    overflow-hidden
    flex
    flex-col
    md:flex-row
    items-start
    gap-0
    transition-all
    duration-500
    ease-out
    hover:-translate-y-[3px]
    hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]
    hover:backdrop-blur-[10px]
    hover:border-foreground/30
    hover:bg-[#c9d1bb]
  "
  onMouseMove={(e) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  setStarOffset({
    x: (x - 0.5) * 20,
    y: (y - 0.5) * 20,
  });
}}

onMouseLeave={() => {
  setStarOffset({ x: 0, y: 0 });
}}
            style={{ background: "#c4ccb5",
transition: "background .45s ease",
             borderRadius: 0,
              border: "1px solid rgba(58,89,66,.14)",
               padding: "clamp(42px,6vw,72px)" }}>
            {/* Left — text content */}
            <div className="flex-1 min-w-0">
              <p style={{
                 fontFamily: "'Inconsolata', monospace",
                  fontWeight: 400,
                   fontSize: "0.9rem",
                    letterSpacing: "1.728px",
                     textTransform: "uppercase",
                      color: "#b84d6a",
                       marginBottom: 24 }}>
                Contato
              </p>
              <h2 style={{
                 fontFamily: "'Outfit', sans-serif",
                  fontWeight: 600,
                   fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    letterSpacing: "-0.03em",
                     color: "#3a5942",
                      lineHeight: 1.05,
                       marginBottom: 16 }}>
                Vamos trabalhar{" "}
                <span style={{
                   fontWeight: 400,
                    color: "#b84d6a",
                     fontStyle: "normal" }}>juntos?</span>
              </h2>
              <p style={{
                 fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400,
                   fontSize: "1rem",
                    color: "#5e7e67",
                     lineHeight: 1.625,
                      marginBottom: 32 }}>
                Estou disponível para projetos, colaborações e conversas.<br />
                Se você tem uma ideia, fala comigo!
              </p>
              <MagneticButton strength={0.2}>
                <a
                  href="mailto:valentinareal2005@gmail.com?subject=Oi%20Valentina%2C%20vamos%20trabalhar%20juntos%3F"
                  className="group inline-flex items-center gap-3 transition-colors"
                  style={{
                     fontFamily: "'Outfit', sans-serif",
                      fontWeight: 600,
                       fontSize: "clamp(1rem, 2vw, 1.5rem)",
                        letterSpacing: "-0.02em",
                         color: "#3a5942",
                          textDecoration: "underline",
                           textUnderlineOffset: "4px"
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#b84d6a"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#3a5942"; }}
                >
                  valentinareal2005@gmail.com
                  <ArrowUpRight size={20} strokeWidth={1.5} className="
transition-all
duration-300
group-hover:translate-x-1
group-hover:-translate-y-1
group-hover:rotate-12
" />
                </a>
              </MagneticButton>
            </div>
            {/* Right — decorative star (hidden on very small screens) */}
            <div
            
  className="
    hidden
    sm:block
    shrink-0
    self-center
    transition-transform
    duration-700
    ease-out
    group-hover:rotate-[8deg]
    group-hover:scale-105
"
             style={{ width: 200, height: 200, opacity: 0.7 }}>
              <svg viewBox="0 0 355 366" fill="none" width="200" height="200">
                <g clipPath="url(#contactClip)">
                  <g
  filter="url(#cf0)"
  style={{
    transform: `translate(${starOffset.x}px, ${starOffset.y}px)`,
    transition: "transform .25s ease-out",
  }}
>
                    <path d={contactStarPaths.pd237880} fill="#B84D6A" fillOpacity="0.3" />
                    <path d={contactStarPaths.p18159f00} stroke="#B84D6A" strokeOpacity="0.3" strokeWidth="4" />
                  </g>
                  <g
  filter="url(#cf1)"
  style={{
    transform: `translate(${starOffset.x * 0.6}px, ${starOffset.y * 0.6}px)`,
    transition: "transform .3s ease-out",
  }}
>
                    <path d={contactStarPaths.p5baf700} stroke="#B84D6A" strokeOpacity="0.3" strokeWidth="4" />
                  </g>
                  <g
  filter="url(#cf2)"
  style={{
    transform: `translate(${starOffset.x * 0.35}px, ${starOffset.y * 0.35}px)`,
    transition: "transform .35s ease-out",
  }}
>
                    <path d={contactStarPaths.p19537100} stroke="#B84D6A" strokeOpacity="0.3" strokeWidth="4" />
                  </g>
                </g>
                <defs>
                  <clipPath id="contactClip"><rect fill="white" height="366" width="355" /></clipPath>
                  <filter id="cf0" x="103" y="121" width="249" height="246" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="bg" /><feBlend in="SourceGraphic" in2="bg" result="shape" /><feGaussianBlur stdDeviation="4" />
                  </filter>
                  <filter id="cf1" x="70" y="127" width="94" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="bg" /><feBlend in="SourceGraphic" in2="bg" result="shape" /><feGaussianBlur stdDeviation="4" />
                  </filter>
                  <filter id="cf2" x="191" y="-15" width="155" height="150" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="bg" /><feBlend in="SourceGraphic" in2="bg" result="shape" /><feGaussianBlur stdDeviation="4" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-primary relative">
  <div
  className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
  style={{
  paddingRight: "clamp(0px, 10vw, 190px)",
}}
>
          <div>
            <p className="text-primary-foreground/90" style={{ fontFamily: "'Inconsolata', monospace", fontSize: "1rem", letterSpacing: "0.02em" }}>
              UFRJ — Escola de Belas Artes
            </p>
            <p className="text-primary-foreground/60" style={{ fontFamily: "'Inconsolata', monospace", fontSize: "1rem", letterSpacing: "0.02em" }}>
              Comunicação Visual Design
            </p>
          </div>
          <div className="flex items-center gap-5 shrink-0 xl:pr-40"/>
          <div className="flex items-center gap-5 shrink-0">
            {/* Instagram */}
            <MagneticButton><a href="https://www.instagram.com/arquivoalias" className="
text-primary-foreground/60
hover:text-primary-foreground
transition-all
duration-300
ease-out
hover:-translate-y-1
hover:scale-110
hover:rotate-6
inline-flex
" aria-label="Instagram"><Instagram size={17} /></a></MagneticButton>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/valentina-real" className="
text-primary-foreground/60
hover:text-primary-foreground
transition-all
duration-300
ease-out
hover:-translate-y-1
hover:scale-110
hover:rotate-6
inline-flex
" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
            {/* Behance */}
            <a href="https://www.behance.net/valentinareal" target="_blank" rel="noopener noreferrer" className="
text-primary-foreground/60
hover:text-primary-foreground
transition-all
duration-300
ease-out
hover:-translate-y-1
hover:scale-110
hover:rotate-6
inline-flex
" aria-label="Behance">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zm-7.719-4h4.908c-.212-1.807-1.272-2.516-2.426-2.516-1.143 0-2.288.702-2.482 2.516zM13 21.886H2v-1.171l1.313-1.27V10.13L2 8.96V7.789h5.016c1.609 0 2.978.344 4.018 1.033 1.037.687 1.557 1.765 1.557 3.237 0 .876-.23 1.618-.689 2.227a4.15 4.15 0 01-1.856 1.371c.9.264 1.607.736 2.117 1.416.51.68.763 1.503.763 2.464 0 1.57-.536 2.726-1.916 3.349zM5.44 11.943v3.829h1.845c.739 0 1.315-.181 1.725-.541.41-.36.614-.88.614-1.558 0-.679-.204-1.193-.614-1.543-.41-.35-.986-.524-1.725-.524L5.44 11.943zm0 5.85v4.143H7.7c.82 0 1.462-.201 1.924-.604.461-.402.693-.993.693-1.774 0-.78-.232-1.38-.697-1.8-.465-.419-1.102-.629-1.91-.629L5.44 17.793z"/>
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/5521968067924" target="_blank" rel="noopener noreferrer" className="
text-primary-foreground/60
hover:text-primary-foreground
transition-all
duration-300
ease-out
hover:-translate-y-1
hover:scale-110
hover:rotate-6
inline-flex
" aria-label="WhatsApp">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
            {/* Email */}
            <a href="mailto:valentinareal2005@gmail.com" className="
text-primary-foreground/60
hover:text-primary-foreground
transition-all
duration-300
ease-out
hover:-translate-y-1
hover:scale-110
hover:rotate-6
inline-flex
" aria-label="Email">
              <Mail size={17} />
            </a>
             </div>
             
        {/* assinatura desktop */}
    <div
  className="hidden 2xl:block absolute top-1/2 -translate-y-1/2"
  style={{
    right: "3rem",
    fontFamily: "'Inconsolata', monospace",
    fontSize: "clamp(0.50rem, 0.50vw, 0.62rem)",
    letterSpacing: "clamp(0.03em, 0.08vw, 0.08em)",
    textTransform: "uppercase",
    color: "rgba(232,238,224,.45)",
    textAlign: "right",
    lineHeight: 1.5,
    pointerEvents: "none",
  }}
>
  <div>Design &amp; dev por Valentina Real</div>
  <div>© 2026</div>
</div>

  </div>

  {/* assinatura mobile */}
  <div
    className="xl:hidden -mt-5 pb-2 text-center"
    style={{
      fontFamily: "'Inconsolata', monospace",
      fontSize: "0.55rem",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "rgba(232,238,224,.45)",
      lineHeight: 1.4,
    }}
  >
    <div>Design &amp; dev por Valentina Real</div>
    <div>© 2026</div>
  </div>

</footer>
    </div>
  );
}


// ── Typewriter Text ────────────────────────────────────────────────────────────
function TypewriterText({ text }: { text: string }) {
  const [len, setLen] = useState(0);
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setActive(true); io.disconnect(); } }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!active || len >= text.length) return;
    const t = setTimeout(() => setLen((l) => l + 1), 55);
    return () => clearTimeout(t);
  }, [active, len, text.length]);
  return (
    <span ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <span style={{ visibility: "hidden" }}>{text}</span>
      <span style={{ position: "absolute", left: 0, top: 0, whiteSpace: "nowrap" }}>
        {active ? text.slice(0, len) : ""}
        {active && len < text.length && (
          <span style={{ borderRight: "3px solid currentColor", animation: "blink 0.6s step-end infinite", marginLeft: "1px" }}>&nbsp;</span>
        )}
      </span>
    </span>
  );
}

// ── Filter Tag ────────────────────────────────────────────────────────────────
function FilterTag({
  label,
  active,
  variant,
  onClick,
}: {
  label: string;
  active: boolean;
  variant: "category" | "tool";
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  const btnStyle = variant === "tool"
    ? { fontFamily: "'Inconsolata', monospace", fontSize: "0.75rem", letterSpacing: "0.06em", background: active ? "var(--foreground)" : hovered ? "rgba(58,89,66,0.15)" : "transparent", color: active ? "var(--primary-foreground)" : "var(--foreground)", border: `1px solid ${active ? "var(--foreground)" : "rgba(58,89,66,0.25)"}` }
    : { fontFamily: "'Inconsolata', monospace", fontSize: "0.75rem", letterSpacing: "0.06em", background: active ? "#b84d6a" : hovered ? "rgba(184,77,106,0.12)" : "transparent", color: active ? "#e8eee0" : "#b84d6a", border: `1px solid ${active ? "#b84d6a" : "rgba(184,77,106,0.2)"}` };

  return (
    <MagneticButton strength={0.2}>
      <button onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="px-4 py-1.5 transition-all duration-200" style={btnStyle}>
        {label}
      </button>
    </MagneticButton>
  );
}

// ── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  large,
  onImageClick,
}: {
  project: (typeof projects)[0];
  large: boolean;
  onImageClick: (images: string[], idx: number, project: (typeof projects)[0]) => void;
}) {
  const [imgIdx, setImgIdx] = useState(0);
  const { images } = project;
  const hasMultiple = images.length > 1;
  const currentFile = images[imgIdx];

const isVideo =
  currentFile.toLowerCase().endsWith(".mp4") ||
  currentFile.toLowerCase().endsWith(".webm") ||
  currentFile.toLowerCase().endsWith(".mov");
  const cardBg = (project as any).cardBg as string | undefined;

  return (
    <div className="group cursor-pointer">
      <div
      onMouseMove={(e) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  
}}


        className={`relative overflow-hidden ${large ? "aspect-[16/10]" : "aspect-[4/3]"   }`}
        style={{ background: cardBg ?? "var(--secondary)" }}
        onClick={() => onImageClick(images, imgIdx, project)}
      >
        {isVideo ? (
  <video
    src={currentFile}
    autoPlay
    muted
    loop
    playsInline
    className="absolute h-full w-auto max-w-none left-1/2 -translate-x-1/2 transition-transform duration-700 group-hover:scale-[1.015]"
  />
) : (
  <img
    src={currentFile}
    alt={project.title}
    className="absolute h-full w-auto max-w-none left-1/2 -translate-x-1/2 transition-transform duration-700 group-hover:scale-[1.015]"
  />
)}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500" />

        {hasMultiple && imgIdx > 0 && (
          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10 text-foreground hover:text-accent"
            onClick={(e) => { e.stopPropagation(); setImgIdx((i) => i - 1); }}
            aria-label="Imagem anterior"
          >
            <ArrowUpRight size={20} strokeWidth={1.5} style={{ transform: "rotate(225deg)" }} />
          </button>
        )}
        {hasMultiple && imgIdx < images.length - 1 && (
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10 text-foreground hover:text-accent"
            onClick={(e) => { e.stopPropagation(); setImgIdx((i) => i + 1); }}
            aria-label="Próxima imagem"
          >
            <ArrowUpRight size={20} strokeWidth={1.5} style={{ transform: "rotate(45deg)" }} />
          </button>
        )}
      </div>

      <div className="pt-4">
        <h3
          className="text-foreground tracking-tight mb-1"
          style={{ fontFamily: "'Outfit', sans-serif", fontSize: large ? "1.3rem" : "1.05rem", fontWeight: 600, letterSpacing: "-0.025em" }}
        >
          {project.title}
        </h3>
        <p
          className="text-muted-foreground leading-relaxed"
          style={{ fontSize: "0.85rem", textWrap: "balance" } as React.CSSProperties}
        >
          {project.description}
        </p>
      </div>

      <div className="mt-3 pb-5 border-b border-accent/30">
        {/* Category tags (pink) */}
        <div className="flex gap-2 flex-wrap mb-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1"
              style={{ fontFamily: "'Inconsolata', monospace", fontSize: "0.65rem", letterSpacing: "0.02em", color: "#b84d6a", background: "rgba(184,77,106,0.12)" }}
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Tool tags (green) */}
        <div className="flex gap-2 flex-wrap">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-2.5 py-1"
              style={{ fontFamily: "'Inconsolata', monospace", fontSize: "0.65rem", letterSpacing: "0.02em", color: "var(--foreground)", background: "rgba(58,89,66,0.12)" }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
