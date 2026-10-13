import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { imageUrl } from "../utils/imageUrl";
import ProjectLinks from "./ProjectLinks";


const SWIPE_THRESHOLD = 50;

const ProjectModal = ({ project, startIndex = 0, onClose }) => {
  const dialogRef = useRef(null);
  const pointerStart = useRef(null);
  const [index, setIndex] = useState(startIndex);

  const images = project.images ?? [];
  const total = images.length;
  const current = images[index];

  const go = useCallback(
    (step) => setIndex((i) => (i + step + total) % total),
    [total]
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (total < 2) return;
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    dialog.addEventListener("keydown", onKey);

    return () => {
      dialog.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [go, total]);

  const onPointerDown = (e) => {
    pointerStart.current = e.clientX;
  };

  const onPointerUp = (e) => {
    if (pointerStart.current === null || total < 2) return;
    const dx = e.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(dx) > SWIPE_THRESHOLD) go(dx < 0 ? 1 : -1);
  };

  const navButton =
    "absolute top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink shadow-sm ring-1 ring-line backdrop-blur transition-colors hover:bg-paper";

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-modal-title"
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && dialogRef.current.close()}
      className="m-auto max-h-[calc(100dvh-1.5rem)] w-[min(1100px,calc(100%-1.5rem))] overflow-y-auto rounded-lg border border-line bg-paper p-0 text-ink backdrop:bg-black/75 backdrop:backdrop-blur-sm motion-safe:animate-[modal-in_200ms_ease-out]"
    >
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-paper/95 px-5 py-3 backdrop-blur md:px-6">
        <p className="min-w-0 truncate font-mono text-xs text-muted">
          {current?.caption}
          {total > 1 && <span className="ml-2 text-ink">{index + 1} / {total}</span>}
        </p>
        <button
          type="button"
          onClick={() => dialogRef.current.close()}
          aria-label="Close"
          className="-mr-2 flex size-11 shrink-0 items-center justify-center rounded-full text-ink transition-colors hover:bg-line/60"
        >
          <FiX size={20} />
        </button>
      </div>

      {current && (
        <div className="bg-surface p-3 md:p-5">
          <div
            className="relative touch-pan-y select-none"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            <img
              key={current.file}
              src={imageUrl(current.file)}
              alt={`${project.title}: ${current.caption}`}
              draggable="false"
              className="mx-auto max-h-[62dvh] w-auto rounded-md object-contain motion-safe:animate-[fade-in_180ms_ease-out]"
            />

            {total > 1 && (
              <>
                <button type="button" onClick={() => go(-1)} aria-label="Previous image" className={`${navButton} left-2`}>
                  <FiChevronLeft size={20} />
                </button>
                <button type="button" onClick={() => go(1)} aria-label="Next image" className={`${navButton} right-2`}>
                  <FiChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {total > 1 && (
            <ul className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label="Screenshots">
              {images.map((img, i) => (
                <li key={img.file} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show image ${i + 1}: ${img.caption}`}
                    aria-current={i === index ? "true" : undefined}
                    className={`block overflow-hidden rounded-md ring-2 transition ${
                      i === index ? "ring-accent" : "opacity-60 ring-transparent hover:opacity-100"
                    }`}
                  >
                    <img
                      src={imageUrl(img.file, true)}
                      alt=""
                      loading="lazy"
                      className="h-14 w-24 object-cover object-top md:h-16 md:w-28"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="grid gap-8 px-5 py-8 md:grid-cols-12 md:px-8 md:py-10">
        <div className="md:col-span-5">
          <h2 id="project-modal-title" className="font-serif text-3xl leading-tight tracking-tight">
            {project.title}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.description}</p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech used">
            {project.tech.map((tech) => (
              <li key={tech} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm">
            <ProjectLinks project={project} tone="text-ink" />
          </div>
        </div>

        <div className="md:col-span-7">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">What I built</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-[15px] leading-relaxed text-muted">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="relative pl-5 before:absolute before:left-0 before:top-[0.75em] before:h-px before:w-2.5 before:bg-accent"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </dialog>
  );
};

export default ProjectModal;
