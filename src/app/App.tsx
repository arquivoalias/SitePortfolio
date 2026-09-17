import StarCursor from "./components/StarCursor";
import { useState, useEffect} from "react";
import {
  ArrowUpRight,
  X,
  Mail,
  Instagram,
  Linkedin,
} from "lucide-react";
import profilePhoto from "@/imports/image-1.png";
import contactStarPaths from "@/imports/Container-1/svg-9u2cjo38cc";
import MagneticButton from "./components/MagneticButton";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import { Document, Page, pdfjs } from "react-pdf";
import Ticker from "./components/Ticker";


pdfjs.GlobalWorkerOptions.workerSrc =
  `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;




// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  
  const [menuOpen, setMenuOpen] = useState(false);


  const [cvOpen, setCvOpen] = useState(false);
const [starOffset, setStarOffset] = useState({ x: 0, y: 0 });

const [pdfScale, setPdfScale] = useState(0.8);
const [canHover, setCanHover] = useState(false);
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
  const updateScale = () => setPdfScale(window.innerWidth < 1024 ? 0.6 : 0.8);
  updateScale();
  window.addEventListener("resize", updateScale);
  return () => window.removeEventListener("resize", updateScale);
}, []);

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
  error="Não foi possível carregar o currículo. Tente o botão de download abaixo."
  onLoadError={(err) => console.error("Erro ao carregar PDF:", err)}
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
  download="Curriculo_Valentina-Real.pdf"
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
        @media (hover: hover) and (pointer: fine) {
  * {
    cursor: none !important;
  }
}

@media (hover: hover) and (pointer: fine) {
  .contact-email:hover {
    color: #b84d6a !important;
  }
}
        
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

    <Hero />

      <Ticker />
      

     <Projects />

<About
  profilePhoto={profilePhoto}
  setCvOpen={setCvOpen}
/>
      
           
    

      {/* ── CONTACT ── */}
      <section
  id="contato"
  style={{ scrollMarginTop: 100 }}
  className="px-8 sm:px-10 md:px-12 py-16 md:py-24"
>
        <div className="max-w-3xl mx-auto">
          <div
  className="
    group
    relative
    overflow-hidden
    flex
flex-col
sm:flex-row
items-start
gap-6
    transition-all
    duration-500
    ease-out
  "
 onMouseMove={(e) => {
  if (!canHover) return;

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
            style={{ background: "#D6DDC8",
transition: "background .45s ease",
             borderRadius: 0,
              border: "1px solid rgba(58,89,66,.14)",
               padding: "clamp(32px,6vw,80px)" }}>
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
                Vamos criar{" "}
                <span style={{
                   fontWeight: 400,
                    color: "#b84d6a",
                     fontStyle: "normal" }}>juntos?</span>
              </h2>
              <p
  style={{
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 400,
    fontSize: "1rem",
    color: "#5e7e67",
    lineHeight: 1.625,
    marginBottom: 40,
    textWrap: "pretty",
  }}
>
  Tem uma ideia, projeto ou quer conversar sobre design?
</p>
              <MagneticButton strength={0.2}>
  <a
    href="mailto:valentinareal2005@gmail.com?subject=Oi%20Valentina%2C%20vamos%20trabalhar%20juntos%3F"
    className="group contact-email inline-flex flex-col items-start"
    style={{
      fontFamily: "'Outfit', sans-serif",
      color: "#3a5942",
      textDecoration: "none",
    }}
  >
    <span
      className="inline-flex items-center gap-2"
      style={{
        fontWeight: 400,
        fontSize: "clamp(1.15rem, 2.2vw, 1.6rem)",
        letterSpacing: "-0.025em",
        lineHeight: 1.1,
      }}
    >
      FALA COMIGO!
      <ArrowUpRight
        size={22}
        strokeWidth={1.5}
        className="
          transition-all
          duration-300
          group-hover:translate-x-1
          group-hover:-translate-y-1
          group-hover:rotate-12
        "
      />
    </span>

    <span
      style={{
        marginTop: 7,
        fontSize: "clamp(0.82rem, 1.2vw, 0.95rem)",
        fontWeight: 400,
        color: "#5e7e67",
        letterSpacing: "0.01em",
      }}
    >
      valentinareal2005@gmail.com
    </span>
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
             style={{
  width: "clamp(130px, 22vw, 180px)",
  height: "clamp(130px, 22vw, 180px)",
  opacity: 0.58,
}}>
              <svg
  viewBox="0 0 355 366"
  fill="none"
  width="100%"
  height="100%"
>
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



