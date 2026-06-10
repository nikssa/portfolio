import { profile } from "../data/resume";
import { useReveal } from "../hooks/useReveal";
import "./Contact.css";

export default function Contact() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="shell">
        <span className="section__index reveal">04 — Contact</span>

        <a href={`mailto:${profile.email}`} className="contact__headline reveal">
          Let’s build<br />
          <span>something good.</span>
        </a>

        <div className="contact__links reveal">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="contact__link"
            >
              <span className="mono">{link.label}</span>
              <span className="contact__handle">{link.handle}</span>
              <span className="contact__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      <footer className="contact__footer">
        <div className="shell contact__footer-inner">
          <span className="mono">© {new Date().getFullYear()} {profile.name}</span>
          <span className="mono">
            Built with React · Vite — designed &amp; coded from scratch
          </span>
          <a href="#top" className="mono contact__top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </section>
  );
}
