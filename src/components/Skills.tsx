import { skillGroups } from "../data/resume";
import { useReveal } from "../hooks/useReveal";
import "./Skills.css";

export default function Skills() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="shell">
        <header className="section__head reveal">
          <span className="section__index">03 — Capabilities</span>
          <h2 className="section__title">Tools &amp; practices.</h2>
          <p className="section__lead">
            The stack I reach for, and the way I work with a team.
          </p>
        </header>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div className="skills__group reveal" key={group.label}>
              <h3 className="skills__label mono">{group.label}</h3>
              <ul className="skills__items">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
