import { FiAward } from "react-icons/fi";
import { education } from "../data/portfolioData";
import Section from "./Section";

const Education = () => {
  return (
    <Section id="education" label="Education" title="School & a couple of medals">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col rounded-md border border-line bg-surface p-6 md:p-8">
          <p className="font-mono text-xs text-muted">Graduated {education.graduated}</p>
          <h3 className="mt-4 font-serif text-2xl leading-snug tracking-tight text-ink">{education.degree}</h3>
          <p className="mt-1 text-[15px] text-accent">{education.school}</p>
          <p className="mt-0.5 text-sm text-muted">{education.location}</p>

          <div className="min-h-7 flex-1" />

          <p className="flex items-baseline gap-2 border-t border-line pt-5">
            <span className="font-serif text-3xl text-ink">{education.gpa}</span>
            <span className="text-sm text-muted">GPA out of 4.00</span>
          </p>
        </div>

        <ul className="flex flex-col gap-4">
          {education.awards.map((award) => (
            <li key={award.event} className="flex flex-1 gap-4 rounded-md border border-line bg-surface p-6">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <FiAward size={18} aria-hidden="true" />
              </span>
              <div>
                <p className="font-medium text-ink">{award.title}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-muted">{award.event}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Education;
