import { useState, useEffect } from "react";

import { projects } from "../data/projects";

import TypewriterText from "./TypewriterText";
import MagneticButton from "./MagneticButton";
import FilterTag from "./FilterTag";
import ProjectCard from "./ProjectCard";
import Lightbox from "./Lightbox";

function createProjectSlug(title: string) {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

const [lightbox, setLightbox] = useState<{
  images: string[];
  idx: number;
  project: (typeof projects)[0];
} | null>(null);
useEffect(() => {
  const projectPath = window.location.pathname
    .replace(/^\/+|\/+$/g, "");

  if (!projectPath.startsWith("projetos/")) {
    return;
  }

  const slug = projectPath.replace("projetos/", "");

  const project = projects.find(
    (p) => createProjectSlug(p.title) === slug
  );

  if (!project) {
    return;
  }

  setLightbox({
    images: project.images,
    idx: 0,
    project,
  });
}, []);
const openProject = (
  images: string[],
  idx: number,
  project: (typeof projects)[0]
) => {
  const slug = createProjectSlug(project.title);

  window.history.pushState(
    {},
    "",
    `/projetos/${slug}`
  );

  setLightbox({
    images,
    idx,
    project,
  });
};

  const allCategoryTags = Array.from(
    new Set(projects.flatMap((p) => p.tags))
  );

  const allToolTags = Array.from(
    new Set(projects.flatMap((p) => p.tools))
  );

  const filtered = activeTag
    ? projects.filter(
        (p) =>
          p.tags.includes(activeTag) ||
          p.tools.includes(activeTag)
      )
    : projects;

  const displayedProjects =
  activeTag !== null || showAll
    ? filtered
    : filtered.slice(0, 5);

  const hasMore =
  activeTag === null &&
  !showAll &&
  filtered.length > 5;

  return (
    <>
      <section
        id="projetos" style={{  scrollMarginTop: 60,}}
        className="max-w-7xl mx-auto px-6 py-28"
      >
        <div className="mb-10">
          <h2
            className="text-5xl md:text-6xl text-foreground tracking-tight mb-6"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              letterSpacing: "-0.04em",
            }}
          >
            <TypewriterText text="Projetos" />
          </h2>

          <p
            className="text-muted-foreground max-w-md"
            style={{
  maxWidth: "min(320px, 72vw)",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 400,
    marginTop: "clamp(2px, 1.4vw, 12px)",
    fontSize: "clamp(.88rem, 2.6vw, 1.05rem)",
    lineHeight: 1.55,
    color: "#5e7e67",
}}
          >
            Aqui estão alguns projetos que amei fazer,
            para você conhecer o meu estilo!
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          <FilterTag
            label="Todos"
            active={activeTag === null}
            variant="category"
            onClick={() => setActiveTag(null)}
          />

          {allCategoryTags.map((tag) => (
            <FilterTag
              key={tag}
              label={tag}
              active={activeTag === tag}
              variant="category"
              onClick={() =>
                setActiveTag(activeTag === tag ? null : tag)
              }
            />
          ))}

          {allToolTags.map((tag) => (
            <FilterTag
              key={tag}
              label={tag}
              active={activeTag === tag}
              variant="tool"
              onClick={() =>
                setActiveTag(activeTag === tag ? null : tag)
              }
            />
          ))}
        </div>
                {/* Grid */}
        {activeTag === null ? (
          <>
            <div className="grid grid-cols-2 gap-5 mb-5">
              {displayedProjects
                .filter((p) => p.featured)
                .map((p) => (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    large={true}
                    onImageClick={(images, idx, project) =>
  openProject(images, idx, project)
}
                  />
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {displayedProjects
                .filter((p) => !p.featured)
                .map((p) => (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    large={false}
                    onImageClick={(images, idx, project) =>
  openProject(images, idx, project)
}
                  />
                ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {displayedProjects.length > 0 ? (
              displayedProjects.map((p) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  large={false}
                  onImageClick={(images, idx, project) =>
  openProject(images, idx, project)
}
                />
              ))
            ) : (
              <p
                className="text-muted-foreground col-span-3"
                style={{
                  fontFamily: "'Inconsolata', monospace",
                  fontSize: "0.85rem",
                }}
              >
                Nenhum projeto com essa tag.
              </p>
            )}
          </div>
        )}

        {hasMore && (
          <div className="text-center mt-12">
            <MagneticButton>
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                style={{
                  fontFamily: "'Inconsolata', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Mostrar mais projetos
              </button>
            </MagneticButton>
          </div>
        )}
              </section>

{lightbox && (
  <Lightbox
    lightbox={lightbox}
    setLightbox={(value) => {
      if (value === null) {
        window.history.pushState({}, "", "/");
        setLightbox(null);
      } else {
        setLightbox(value);
      }
    }}
  />
)}
    </>
  );
}