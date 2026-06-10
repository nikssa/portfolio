import { experience } from "../data/resume";
import { useReveal } from "../hooks/useReveal";
import "./Work.css";

export default function Work() {
  const ref = useReveal<HTMLElement>();

  const roles = experience.flatMap((job) =>
    job.roles.map((role, i) => ({
      job,
      role,
      isPrimary: i === 0,
    })),
  );

  return (
    <section id="work" className="section work" ref={ref}>
      <div className="shell">
        <header className="section__head reveal">
          <span className="section__index">01 — Selected Work</span>
          <h2 className="section__title">
            A decade of shipping<br />
            React at scale.
          </h2>
          <p className="section__lead">
            Lead and senior frontend roles across live entertainment, fintech, and
            enterprise — from architecture and reviews to the fullstack work in
            between.
          </p>
        </header>

        <div className="work__list">
          {roles.map(({ job, role, isPrimary }, index) => (
            <article
              key={`${job.company}-${role.client}`}
              className="work__item reveal"
            >
              <div className="work__num mono">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="work__head">
                <h3 className="work__client">{role.client}</h3>
                <div className="work__org mono">
                  <span>{job.company}</span>
                  {job.current && isPrimary && (
                    <span className="work__badge">Current</span>
                  )}
                </div>
                <p className="work__role">{role.title}</p>
              </div>

              <div className="work__body">
                {role.summary && <p className="work__summary">{role.summary}</p>}
                <ul className="work__points">
                  {role.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                {role.stack && (
                  <ul className="work__stack">
                    {role.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="work__aside">
                <span className="work__period mono">{role.period}</span>
                <span className="work__loc">{role.location}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
