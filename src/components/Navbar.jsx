import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data/portfolioData";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    ["top", ...links.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 print:hidden ${
        scrolled || open ? "border-b border-line bg-paper/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#top" className="font-serif text-xl tracking-tight text-ink">
          {profile.shortName}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`relative py-1 text-sm transition-colors ${
                active === id ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-accent transition-transform duration-200 ${
                  active === id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            className="hidden h-9 items-center gap-1 rounded-full border border-ink/80 px-4 text-sm text-ink transition-colors hover:bg-ink hover:text-paper sm:inline-flex"
          >
            Resume
            <FiArrowUpRight size={14} aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 flex size-11 items-center justify-center text-ink md:hidden"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-paper px-5 pb-6 md:hidden">
          <ul className="flex flex-col">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center border-b border-line font-serif text-2xl text-ink"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume}
            download
            className="mt-5 inline-flex h-11 items-center gap-1 rounded-full bg-ink px-5 text-sm text-paper"
          >
            Download resume
            <FiArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
