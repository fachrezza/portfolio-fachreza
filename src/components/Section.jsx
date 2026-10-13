const Section = ({ id, label, title, intro, children }) => {
  return (
    <section id={id} className="border-t border-line py-16 md:py-24">
      <header className="mb-10 max-w-2xl md:mb-14">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">{label}</p>
        <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-ink md:text-[2.75rem]">
          {title}
        </h2>
        {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
      </header>
      {children}
    </section>
  );
};

export default Section;
