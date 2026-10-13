import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiArrowRight, FiArrowUpRight, FiCheck, FiAlertCircle } from "react-icons/fi";
import { profile } from "../data/portfolioData";

const fieldClass =
  "w-full rounded-md border border-line bg-surface px-3.5 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-ink focus:outline-none";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      form.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setLoading(false);
  };

  const channels = [
    { label: "WhatsApp", value: profile.phone, href: profile.whatsapp },
    { label: "GitHub", value: `@${profile.githubHandle}`, href: profile.github },
  ];

  return (
    <section id="contact" className="border-t border-line py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Contact</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-ink md:text-5xl">
            Got a project or a role in mind? <span className="italic text-muted">Let&rsquo;s talk.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            I usually reply within a day. Email is best, but WhatsApp works too.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block break-all font-serif text-2xl text-ink underline decoration-accent decoration-1 underline-offset-[6px] transition-colors hover:text-accent"
          >
            {profile.email}
          </a>

          <ul className="mt-8 flex flex-col border-t border-line">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-12 items-center justify-between border-b border-line text-[15px]"
                >
                  <span className="text-muted">{c.label}</span>
                  <span className="flex items-center gap-1 text-ink transition-colors group-hover:text-accent">
                    {c.value}
                    <FiArrowUpRight size={15} aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5 rounded-md border border-line bg-surface p-6 md:col-span-7 md:p-8 print:hidden"
        >
          <p className="text-[15px] text-muted">Or drop a message here:</p>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-ink">
                Your name
              </label>
              <input id="name" type="text" name="name" autoComplete="name" required className={`${fieldClass} h-12 bg-paper`} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-ink">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="you@company.com"
                className={`${fieldClass} h-12 bg-paper`}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium text-ink">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              aria-describedby="message-hint"
              className={`${fieldClass} resize-y bg-paper py-3`}
            />
            <p id="message-hint" className="text-sm text-muted">
              A few lines about the role or project, plus a rough timeline if you have one.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[15px] font-medium text-paper transition-opacity hover:opacity-85 disabled:cursor-wait disabled:opacity-50"
            >
              {loading ? "Sending…" : "Send message"}
              {!loading && (
                <FiArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              )}
            </button>

            <div role="status" aria-live="polite" className="text-sm">
              {status === "sent" && (
                <p className="flex items-center gap-1.5 text-ok">
                  <FiCheck aria-hidden="true" /> Thanks! Your message is on its way.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-1.5 text-accent">
                  <FiAlertCircle aria-hidden="true" /> Something went wrong. Please email me directly instead.
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
