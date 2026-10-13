import { FiArrowUp } from "react-icons/fi";
import { profile } from "../data/portfolioData";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line print:hidden">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>
          © {year} {profile.name}. Designed and built by me.
        </p>
        <a href="#top" className="inline-flex min-h-6 items-center gap-1 text-ink transition-colors hover:text-accent">
          Back to top
          <FiArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
