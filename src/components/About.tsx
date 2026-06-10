import { about, profile } from "../data/resume";
import { useReveal } from "../hooks/useReveal";
import "./About.css";

export default function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="shell about__grid">
        <header className="section__head about__head reveal">
          <span className="section__index">02 — About</span>
          <h2 className="section__title">
            Frontend craft,<br />
            structural thinking.
          </h2>
        </header>

        <div className="about__body">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`about__para reveal ${i === 0 ? "about__para--lead" : ""}`}
            >
              {p}
            </p>
          ))}

          <dl className="about__facts reveal">
            <div>
              <dt className="mono">Education</dt>
              <dd>{about.education}</dd>
            </div>
            <div>
              <dt className="mono">Certification</dt>
              <dd>{about.certifications[0]}</dd>
            </div>
            <div>
              <dt className="mono">Languages</dt>
              <dd>English (fluent) · Serbian (native)</dd>
            </div>
            <div>
              <dt className="mono">Experience</dt>
              <dd>{profile.yearsExperience}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
