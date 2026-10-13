import { useState } from "react";
import { FiArrowRight, FiImage, FiMaximize2 } from "react-icons/fi";
import { projects } from "../data/portfolioData";
import { imageUrl } from "../utils/imageUrl";
import ProjectLinks from "./ProjectLinks";
import ProjectModal from "./ProjectModal";
import Section from "./Section";

const PREVIEW_COUNT = 3;

const Projects = () => {
  const [open, setOpen] = useState(null);

  return (
    <Section id="projects" label="Selected work" title="Things I've built">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => {
          const cover = project.images?.[0];
          const shown = project.features.slice(0, PREVIEW_COUNT);
          const more = project.features.length - shown.length;

          return (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-md border border-line bg-surface transition-colors duration-200 hover:border-muted/50"
            >
              {cover ? (
                <button
                  type="button"
                  onClick={() => setOpen({ project, startIndex: 0 })}
                  aria-label={`View screenshots of ${project.title}`}
                  className="group relative block aspect-[16/9] overflow-hidden border-b border-line bg-line"
                >
                  <img
                    src={imageUrl(cover.file, true)}
                    srcSet={`${imageUrl(cover.file, true)} 800w, ${imageUrl(cover.file)} 1600w`}
                    sizes="(min-width: 768px) 480px, 100vw"
                    alt=""
                    width="800"
                    height="420"
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-ink/80 px-3 py-1 font-mono text-xs text-paper backdrop-blur">
                    <FiImage size={12} aria-hidden="true" />
                    {project.images.length} {project.images.length === 1 ? "image" : "images"}
                  </span>
                  <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-paper/90 text-ink opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <FiMaximize2 size={15} aria-hidden="true" />
                  </span>
                </button>
              ) : (
                <div className="flex aspect-[16/9] flex-col items-center justify-center gap-2 border-b border-line bg-[repeating-linear-gradient(135deg,transparent_0_10px,var(--color-line)_10px_11px)] text-muted">
                  <FiImage size={22} aria-hidden="true" />
                  <p className="font-mono text-xs">Screenshots coming soon</p>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="flex items-baseline justify-between gap-4 font-mono text-xs text-muted">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-right">{project.tech.join(" · ")}</span>
                </div>

                <h3 className="mt-4 font-serif text-2xl leading-snug tracking-tight text-ink">{project.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{project.description}</p>

                <ul className="mt-5 flex flex-col gap-1.5 text-sm leading-relaxed text-muted">
                  {shown.map((feature) => (
                    <li
                      key={feature}
                      className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-accent"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm print:hidden">
                  <button
                    type="button"
                    onClick={() => setOpen({ project, startIndex: 0 })}
                    className="group inline-flex min-h-6 items-center gap-1.5 font-medium text-ink transition-colors hover:text-accent"
                  >
                    View details{more > 0 && <span className="font-normal text-muted"> (+{more} more)</span>}
                    <FiArrowRight
                      size={15}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </button>
                  <ProjectLinks project={project} />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {open && <ProjectModal project={open.project} startIndex={open.startIndex} onClose={() => setOpen(null)} />}
    </Section>
  );
};

export default Projects;
