import { additionalExperiences, experiences } from "../data/portfolioData";
import Section from "./Section";

const Experience = () => {
  return (
    <Section id="experience" label="Experience" title="Where I've worked">
      <ol className="flex flex-col border-t border-line">
        {experiences.map((item) => (
          <li
            key={`${item.company}-${item.period}`}
            className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10"
          >
            <div className="flex flex-wrap gap-x-3 font-mono text-xs leading-5 text-muted md:col-span-3 md:flex-col">
              <p className="text-ink">{item.period}</p>
              <p>{item.location}</p>
            </div>

            <div className="md:col-span-9">
              <h3 className="text-xl font-medium leading-snug text-ink">{item.role}</h3>
              <p className="mt-1 text-[15px] text-accent">{item.company}</p>

              <ul className="mt-5 flex max-w-3xl flex-col gap-2.5 text-[15px] leading-relaxed text-muted">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="relative pl-5 before:absolute before:left-0 before:top-[0.75em] before:h-px before:w-2.5 before:bg-muted/60"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech used">
                {item.tech.map((tech) => (
                  <li key={tech} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-14">
        <h3 className="font-serif text-2xl text-ink">Outside of code</h3>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">
          Before and alongside development, I did a lot of design, photo and video work for campus and community events.
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {additionalExperiences.map((item) => (
            <li key={item.company} className="flex flex-col rounded-md border border-line bg-surface p-6">
              <p className="font-mono text-xs text-muted">{item.period}</p>
              <p className="mt-3 font-medium text-ink">{item.role}</p>
              <p className="mt-0.5 text-[15px] text-accent">{item.company}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.points[0]}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Experience;
