import { skillGroups } from "../data/portfolioData";
import Section from "./Section";

const Skills = () => {
  return (
    <Section id="skills" label="Toolbox" title="What I work with">
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="flex flex-col rounded-md border border-line bg-surface p-6 md:last:odd:col-span-2"
          >
            <h3 className="font-medium text-ink">{group.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{group.desc}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-full border border-line bg-paper px-3 py-1 text-sm text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
