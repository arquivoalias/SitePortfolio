import { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import type React from "react";
import type { Project } from "../types/Project";

type Props = {
  project: Project;
  large: boolean;
  onImageClick: (
    images: string[],
    idx: number,
    project: Project
  ) => void;
};

export default function ProjectCard({
  project,
  large,
  onImageClick,
}: Props) {
  const [imgIdx, setImgIdx] = useState(0);
  const [visible, setVisible] = useState(false);

const ref = useRef<HTMLDivElement>(null);
const [changing, setChanging] = useState(false);
const [touchStart, setTouchStart] = useState<number | null>(null);
const [touchEnd, setTouchEnd] = useState<number | null>(null);
const touchMoved = useRef(false);

const minSwipeDistance = 50;
const changeTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

const changeImage = (next: number) => {
  setChanging(true);

  changeTimeout.current = setTimeout(() => {
    setImgIdx(next);
    setChanging(false);
  }, 180);
};

useEffect(() => {
  return () => {
    if (changeTimeout.current) clearTimeout(changeTimeout.current);
  };
}, []);
const onTouchStart = (e: React.TouchEvent) => {
  setTouchEnd(null);
  setTouchStart(e.targetTouches[0].clientX);
};

const onTouchMove = (e: React.TouchEvent) => {
  touchMoved.current = true;
  setTouchEnd(e.targetTouches[0].clientX);
};
const onTouchEnd = () => {
  if (touchStart === null || touchEnd === null) return;

  const distance = touchStart - touchEnd;

  if (distance > minSwipeDistance && imgIdx < images.length - 1) {
    changeImage(imgIdx + 1);
  }

  if (distance < -minSwipeDistance && imgIdx > 0) {
    changeImage(imgIdx - 1);
  }

  setTouchStart(null);
  setTouchEnd(null);
};
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    },
    {
      threshold: 0.15,
    }
  );

  if (ref.current) observer.observe(ref.current);

  return () => observer.disconnect();
}, []);

  const { images } = project;
  const hasMultiple = images.length > 1;
  const currentFile = images[imgIdx];

const isVideo =
  currentFile.toLowerCase().endsWith(".mp4") ||
  currentFile.toLowerCase().endsWith(".webm") ||
  currentFile.toLowerCase().endsWith(".mov");

  return (
   <div
  ref={ref}
  className="
group
cursor-pointer
transition-transform
duration-700
ease-[cubic-bezier(.22,1,.36,1)]
hover:-translate-y-2
"
  style={{
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translateY(0)"
      : "translateY(30px)",
    transition:
      "opacity .7s ease, transform .7s cubic-bezier(.22,.61,.36,1)",
  }}
>
      <div
  className={`relative overflow-hidden transition-all duration-500 ease-out shadow-sm group-hover:shadow-2xl ${
    large ? "aspect-[16/10]" : "aspect-[4/3]"
  }`}
        style={{
          background: project.cardBg ?? "var(--secondary)",
        }}
        onClick={() => {
  if (touchMoved.current) {
    touchMoved.current = false;
    return;
  }
  onImageClick(images, imgIdx, project);
}}
        onTouchStart={onTouchStart}
onTouchMove={onTouchMove}
onTouchEnd={onTouchEnd}
      >
       {isVideo ? (
  <video
    src={currentFile}
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className={`
absolute
h-full
w-auto
max-w-none
left-1/2
-translate-x-1/2
transition-all
duration-200
group-hover:scale-[1.015]
${changing ? "opacity-0" : "opacity-100"}
`}
  />
) : (
  <img
    src={currentFile}
    alt={project.title}
    className={`
absolute
h-full
w-auto
max-w-none
left-1/2
-translate-x-1/2
transition-all
duration-200
group-hover:scale-[1.015]
${changing ? "opacity-0" : "opacity-100"}
`}
  />
)}

        <div
  className="
  absolute
  top-4
  right-4
  flex
  items-center
  gap-2
  opacity-0
  translate-x-2
  group-hover:opacity-100
  group-hover:translate-x-0
  transition-all
  duration-300
  z-20
  "
>
  <span
    style={{
      fontFamily: "'Inconsolata', monospace",
      fontSize: ".68rem",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "white",
    }}
  >
    Ver projeto
  </span>

  <ArrowUpRight
    size={24}
    strokeWidth={1.8}
    color="white"
    className="
      transition-transform
      duration-300
      group-hover:translate-x-1
      group-hover:-translate-y-1
    "
  />
</div>
        {hasMultiple && imgIdx > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              changeImage(imgIdx - 1);
            }}
            aria-label="Imagem anterior"
            className="
hidden
md:flex
absolute
left-1
top-1/2
-translate-y-1/2
z-10
opacity-0
group-hover:opacity-100
transition-opacity

items-center
justify-center

w-12
h-12
"
          >
            <ArrowUpRight
              size={20}
              strokeWidth={1.5}
              color="white"
              style={{ transform: "rotate(225deg)",}}
            />
          </button>
        )}

        {hasMultiple && imgIdx < images.length - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              changeImage(imgIdx + 1);
            }}
            aria-label="Próxima imagem"
            className="
hidden
md:flex
absolute
right-1
top-1/2
-translate-y-1/2
z-10
opacity-0
group-hover:opacity-100
transition-opacity

items-center
justify-center

w-12
h-12
"
          >
            <ArrowUpRight
              size={20}
              strokeWidth={1.5}
              color="white"
              style={{ transform: "rotate(45deg)" }}
            />
          </button>
        )}
      </div>

      <div className="pt-4">
        <h3
          className="text-foreground tracking-tight mb-1 transition-colors duration-500 group-hover:text-accent"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: large ? "1.3rem" : "1.05rem",
            fontWeight: 600,
            letterSpacing: "-0.025em",
          }}
        >
          {project.title}
        </h3>

        <p
          className="text-muted-foreground leading-relaxed"
          style={
            {
              fontSize: ".85rem",
              textWrap: "balance",
            } as React.CSSProperties
          }
        >
          {project.description}
        </p>
      </div>

      <div className="mt-3 pb-5 border-b border-accent/30">
        <div className="flex gap-2 flex-wrap mb-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1"
              style={{
                fontFamily: "'Inconsolata', monospace",
                fontSize: ".65rem",
                color: "#b84d6a",
                background: "rgba(184,77,106,.12)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-2.5 py-1"
              style={{
                fontFamily: "'Inconsolata', monospace",
                fontSize: ".65rem",
                color: "var(--foreground)",
                background: "rgba(58,89,66,.12)",
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}