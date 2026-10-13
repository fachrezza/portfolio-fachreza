import { FiArrowUpRight, FiGithub, FiLock } from "react-icons/fi";

const linkClass = "inline-flex min-h-6 items-center gap-1.5 transition-colors hover:text-accent";

const ProjectLinks = ({ project, tone = "text-muted" }) => {
  if (project.private) {
    return (
      <span className={`inline-flex min-h-6 items-center gap-1.5 ${tone}`}>
        <FiLock size={14} aria-hidden="true" />
        Private client project
      </span>
    );
  }

  return (
    <>
      {project.links?.map((link) => (
        <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className={`${linkClass} ${tone}`}>
          {link.label}
          <FiArrowUpRight size={15} aria-hidden="true" />
          <span className="sr-only"> live site (opens in new tab)</span>
        </a>
      ))}
      {project.github && (
        <a href={project.github} target="_blank" rel="noreferrer" className={`${linkClass} ${tone}`}>
          <FiGithub size={15} aria-hidden="true" />
          GitHub
          <span className="sr-only"> for {project.title} (opens in new tab)</span>
        </a>
      )}
    </>
  );
};

export default ProjectLinks;
