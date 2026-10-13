import { profile } from "../data/portfolioData";
import Section from "./Section";

const About = () => {
  return (
    <Section id="about" label="About" title="A bit about me">
      <div className="grid gap-6 text-lg leading-relaxed text-muted md:grid-cols-2 md:gap-12">
        {profile.about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
};

export default About;
