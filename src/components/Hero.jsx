import { FiArrowRight, FiDownload } from "react-icons/fi";
import { profile, stats } from "../data/portfolioData";

const Hero = () => {
  return (
    <section id="top" className="pb-16 pt-24 md:pb-24 md:pt-36">
      <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <p className="text-sm text-muted">
            Open to full-time roles &amp; freelance projects
          </p>

          <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-[4.25rem]">
            Hi, I&rsquo;m {profile.shortName}.{" "}
            <span className="italic text-muted">I build web apps that people actually use.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3 print:hidden">
            <a
              href="#contact"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[15px] font-medium text-paper transition-opacity hover:opacity-85"
            >
              Get in touch
              <FiArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex h-12 items-center gap-2 rounded-full px-5 text-[15px] font-medium text-ink underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
            >
              <FiDownload size={16} aria-hidden="true" />
              Download resume
            </a>
          </div>
        </div>

        <figure className="hidden md:col-span-5 md:block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-line">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width="660"
              height="660"
              fetchPriority="high"
              className="size-full object-cover object-[72%_35%]"
            />
          </div>
          <figcaption className="mt-3 flex items-center justify-between font-mono text-xs text-muted">
            <span>{profile.name}</span>
            <span>{profile.role}</span>
          </figcaption>
        </figure>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 md:mt-20 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse">
            <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
            <dd className="font-serif text-4xl tracking-tight text-ink md:text-5xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Hero;
