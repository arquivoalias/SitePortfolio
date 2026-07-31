import { useEffect, useRef, useState } from "react";
import type React from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { Project } from "../types/Project";

type Props = {
  lightbox: {
    images: string[];
    idx: number;
    project: Project;
  };

  setLightbox: React.Dispatch<
    React.SetStateAction<{
      images: string[];
      idx: number;
      project: Project;
    } | null>
  >;
};

export default function Lightbox({
  lightbox,
  setLightbox,
}: Props) {
  const hasPrev = lightbox.idx > 0;
  const hasNext = lightbox.idx < lightbox.images.length - 1;
  const [touchStart, setTouchStart] = useState<number | null>(null);
const [touchEnd, setTouchEnd] = useState<number | null>(null);
const [dragX, setDragX] = useState(0);

const minSwipeDistance = 50;
  const currentFile = lightbox.images[lightbox.idx];

const isVideo =
  currentFile.toLowerCase().endsWith(".mp4") ||
  currentFile.toLowerCase().endsWith(".webm") ||
  currentFile.toLowerCase().endsWith(".mov");

 const prevImage = (e?: React.MouseEvent) => {
  e?.stopPropagation();

  if (!hasPrev) return;

  setLightbox((lb) =>
    lb && {
      ...lb,
      idx: lb.idx - 1,
    }
  );
};

const nextImage = (e?: React.MouseEvent) => {
  e?.stopPropagation();

  if (!hasNext) return;

  setLightbox((lb) =>
    lb && {
      ...lb,
      idx: lb.idx + 1,
    }
  );
};
const onTouchStart = (e: React.TouchEvent) => {
  setTouchEnd(null);
  setTouchStart(e.targetTouches[0].clientX);
};

const onTouchMove = (e: React.TouchEvent) => {
  const current = e.targetTouches[0].clientX;

  setTouchEnd(current);

  if (touchStart !== null) {
    setDragX(current - touchStart);
  }
};

const onTouchEnd = () => {
  if (touchStart === null || touchEnd === null) return;

  const distance = touchStart - touchEnd;

  if (distance > minSwipeDistance && hasNext) {
    nextImage();
  } else if (distance < -minSwipeDistance && hasPrev) {
    prevImage();
  }

  setDragX(0);

  setTouchStart(null);
  setTouchEnd(null);
};
const closeBtnRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightbox(null);
      }

      if (e.key === "ArrowLeft") {
        setLightbox((lb) => {
          if (!lb || lb.idx === 0) return lb;

          return {
            ...lb,
            idx: lb.idx - 1,
          };
        });
      }

      if (e.key === "ArrowRight") {
        setLightbox((lb) => {
          if (!lb || lb.idx >= lb.images.length - 1) return lb;

          return {
            ...lb,
            idx: lb.idx + 1,
          };
        });
      }
    };

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
closeBtnRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [setLightbox]);

  return (
    <div
  role="dialog"
  aria-modal="true"
  aria-label={lightbox.project.title}
  className="fixed inset-0 z-[999] flex justify-center overflow-y-auto overflow-x-hidden"
  onClick={() => setLightbox(null)}
      style={{
  padding: "32px 24px",
  background: "rgba(20,20,20,.55)",
  backdropFilter: "blur(22px)",
  WebkitBackdropFilter: "blur(22px)",
  animation: "fadeIn .25s ease",
}}
    >
              <div
        className="relative w-full max-w-[90vw] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: "fadeIn .3s ease",
        }}
      >
        {/* Botão fechar */}
        <button
          ref={closeBtnRef}
          onClick={() => setLightbox(null)}
          className="
absolute
top-0
right-0
flex
items-center
justify-center
rounded-none
transition-all
duration-200
hover:scale-110
z-20
"
          style={{
            width: 48,
            height: 48,
            background: "rgba(255,255,255,.08)",
            border: "1px solid rgba(255,255,255,.18)",
            color: "#fff",
          }}
          aria-label="Fechar"
        >
          <X size={20} strokeWidth={2} />
        </button>
       

        {/* Navegação esquerda */}
        {hasPrev && (
          <button
            onClick={prevImage}
            className="hidden lg:flex absolute left-0 top-[40%] -translate-y-1/2 rounded-none transition-all duration-200 hover:scale-110"
            style={{
  width: 48,
  height: 48,
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  background: "rgba(255,255,255,.04)",
  border: "1px solid rgba(255,255,255,.25)",
}}
            aria-label="Imagem anterior"
          >
            <ArrowLeft size={20} strokeWidth={1.8} color="#fff"/>
          </button>
        )}

        {/* Navegação direita */}
        {hasNext && (
          <button
            onClick={nextImage}
            className="hidden lg:flex absolute right-0 top-[40%] -translate-y-1/2 rounded-none transition-all duration-200 hover:scale-110"
            style={{
  width: 48,
  height: 48,
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  background: "rgba(255,255,255,.04)",
  border: "1px solid rgba(255,255,255,.25)",
}}
            aria-label="Próxima imagem"
          >
            <ArrowRight size={20} strokeWidth={1.8} color="#fff"/>
          </button>
        )}
<div
  style={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "64px",
  }}
>
        {/* Imagem */}
        {isVideo ? (
  <video
  onTouchStart={onTouchStart}
onTouchMove={onTouchMove}
onTouchEnd={onTouchEnd}
  key={lightbox.idx}
  src={currentFile}
  controls
  autoPlay
  muted
  loop
  playsInline
  style={{
    maxWidth: "100%",
    maxHeight: "calc(100vh - 180px)",
    width: "auto",
    height: "auto",
    boxShadow: "0 28px 80px rgba(0,0,0,.35)",
    transform: `translateX(${dragX}px)`,
transition: touchStart
  ? "none"
  : "transform .25s ease",
  }}
/>
) : (
  <img
    key={lightbox.idx}
    src={currentFile}
    alt={lightbox.project.title}
    onTouchStart={onTouchStart}
onTouchMove={onTouchMove}
onTouchEnd={onTouchEnd}
    className="object-contain rounded-sm"
    style={{
      maxWidth: "100%",
      maxHeight: "calc(100vh - 180px)",
      width: "auto",
      height: "auto",
      boxShadow: "0 28px 80px rgba(0,0,0,.35)",
      transform: `translateX(${dragX}px)`,
transition: touchStart
  ? "none"
  : "transform .25s ease",
    }}
  />
)}
</div>
        {/* Contador */}
        {lightbox.images.length > 1 && (
          <p
            className="mt-2"
            style={{
              color: "rgba(255,255,255,.75)",
              fontFamily: "'Inconsolata', monospace",
              fontSize: ".78rem",
              letterSpacing: ".08em",

            }}
          >
            {lightbox.idx + 1} / {lightbox.images.length}
          </p>
        )}

        {/* Painel de informações */}
<div
  className="w-full max-w-3xl mt-6"
  style={{
    color: "#fff",
  }}
>

          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "2rem",
              fontWeight: 600,
              letterSpacing: "-.03em",
              marginBottom: 10,
              lineHeight: 1.1,
            }}
          >
            {lightbox.project.title}
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,.82)",
              fontSize: ".95rem",
              lineHeight: 1.55,
              maxWidth: 720,
              marginBottom: 16,
            }}
          >
            {lightbox.project.description}
          </p>

          {/* Tags */}
          <div
            className="flex flex-wrap gap-2"
            style={{ marginBottom: 12 }}
          >
            {lightbox.project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-0.5"
                style={{
                  fontFamily: "'Inconsolata', monospace",
                  fontSize: ".72rem",
                  letterSpacing: ".04em",
                  borderRadius: 0,
                  padding: "7px 14px",
                  background: "rgba(184,77,106,.18)",
                  color: "#ff8faa",
                  border: "1px solid rgba(184,77,106,.35)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Ferramentas */}
          <div className="flex flex-wrap gap-2">
            {lightbox.project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-0.5"
                style={{
                  fontFamily: "'Inconsolata', monospace",
                  fontSize: ".72rem",
                  letterSpacing: ".04em",
                  borderRadius: 0,
                  padding: "7px 14px",
                  background: "rgba(58, 89, 66, .18)",
                  color: "#B7C1AD",
                  border: "1px solid rgba(58, 89, 66, .35)",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}