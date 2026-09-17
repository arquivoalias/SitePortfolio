import { useEffect, useRef, useState } from "react";
import type React from "react";
import { X, Copy } from "lucide-react";
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
function LazyVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {}); // navegador pode bloquear autoplay; ignora o erro
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      controls
      muted
      loop
      playsInline
      preload="metadata"
      style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }}
    />
  );
}
export default function Lightbox({
  lightbox,
  setLightbox,
}: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
const [copied, setCopied] = useState(false);
const handleCopyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  } catch {
    console.error("Não foi possível copiar o link.");
  }
};
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightbox(null);
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

  /*
   * Mesma proporção utilizada nos cards da seção de Projetos:
   *
   * featured → 16:10
   * normal   → 4:3
   */
  const aspectRatio = lightbox.project.featured
    ? "16 / 10"
    : "4 / 3";

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
        className="relative w-full max-w-5xl flex flex-col items-center"
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
            z-30
          "
          style={{
            width: 34,
            height: 34,
            background: "rgba(255,255,255,.08)",
            border: "1px solid rgba(255,255,255,.18)",
            color: "#fff",
          }}
          aria-label="Fechar"
        >
          <X size={16} strokeWidth={2} />
        </button>

        {/* Imagens do projeto */}
        <div
          className="w-full flex flex-col"
          style={{
            gap: "10px",
            paddingTop: "52px",
          }}
        >
          {lightbox.images.map((file, index) => {
            const isVideo =
              file.toLowerCase().endsWith(".mp4") ||
              file.toLowerCase().endsWith(".webm") ||
              file.toLowerCase().endsWith(".mov");

            return (
              <div
                key={`${file}-${index}`}
                style={{
                  width: "100%",
                  aspectRatio,
                  background:
                    lightbox.project.cardBg ?? "var(--secondary)",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isVideo ? (
  <LazyVideo src={file} />
) : (
                  <img
                    src={file}
                    alt={`${lightbox.project.title} — imagem ${index + 1}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Painel de informações */}
        <div
  className="w-full max-w-5xl"
  style={{
    color: "#fff",
    marginTop: "48px",
    paddingBottom: "80px",
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
            className="flex gap-2 flex-wrap"
            style={{
              marginBottom: 10,
            }}
          >
            {lightbox.project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Inconsolata', monospace",
                  fontSize: ".65rem",
                  letterSpacing: ".02em",
                  color: "#ffc3d3",
                  background: "rgba(184,77,106,.12)",
                  padding: "6px 10px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

                    {/* Ferramentas */}
          <div className="flex gap-2 flex-wrap">
            {lightbox.project.tools.map((tool) => (
              <span
                key={tool}
                style={{
                  fontFamily: "'Inconsolata', monospace",
                  fontSize: ".65rem",
                  letterSpacing: ".02em",
                  color: "#b7f5b9",
                  background: "rgba(58,89,66,.12)",
                  padding: "6px 10px",
                }}
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Copiar link */}
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 transition-all duration-200"
            style={{
              fontFamily: "'Inconsolata', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#fff",
              background: "rgba(255,255,255,.10)",
              border: "1px solid rgba(255,255,255,.25)",
            }}
          >
            <Copy size={14} strokeWidth={1.8} />
            {copied ? "Link copiado!" : "Copiar link do projeto"}
          </button>

        </div>
      </div>
    </div>
  );
}