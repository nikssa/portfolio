import { profile } from "../data/resume";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="shell hero__inner">
        <p className="hero__eyebrow mono anim" style={{ "--d": "0.05s" } as React.CSSProperties}>
          Portfolio — {new Date().getFullYear()}
        </p>

        <h1 className="hero__title">
          <span className="anim" style={{ "--d": "0.12s" } as React.CSSProperties}>
            Nikša
          </span>
          <span className="anim hero__title-2" style={{ "--d": "0.22s" } as React.CSSProperties}>
            Volarević
          </span>
        </h1>

        <div className="hero__meta">
          <p className="hero__role anim" style={{ "--d": "0.34s" } as React.CSSProperties}>
            {profile.title}
            <span className="hero__role-tag">{profile.tagline}</span>
          </p>

          <p className="hero__blurb anim" style={{ "--d": "0.42s" } as React.CSSProperties}>
            12+ years building React applications at scale. Lead-level frontend —
            architecture, pods, and the fullstack work it takes to ship.
          </p>
        </div>

        <div className="hero__facts anim" style={{ "--d": "0.52s" } as React.CSSProperties}>
          <div className="hero__fact">
            <span className="mono">Based in</span>
            <strong>{profile.location}</strong>
          </div>
          <div className="hero__fact">
            <span className="mono">Currently</span>
            <strong>Ticketmaster</strong>
          </div>
          <div className="hero__fact">
            <span className="mono">Status</span>
            <strong className="hero__avail">
              <span className="hero__dot" /> {profile.availability}
            </strong>
          </div>
        </div>

        <a
          href="#work"
          className="hero__scroll anim"
          style={{ "--d": "0.64s" } as React.CSSProperties}
        >
          <span className="mono">Scroll — selected work</span>
          <span className="hero__arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>

      <div className="hero__rule" aria-hidden="true">
        <span className="anim" style={{ "--d": "0.7s" } as React.CSSProperties} />
      </div>
    </section>
  );
}
