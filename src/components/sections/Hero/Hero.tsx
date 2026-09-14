import { useEffect, useState } from "react";
import "./Hero.css";
import { eventConfig } from "@/config/event";
import Button from "@/components/ui/Button";
import ieeeLogo from "@/assets/ieee-logo-white.png";
import sctbLogo from "@/assets/sctb-logo-white.png";

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Slight delay for entrance animation
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" aria-label="Hero">
      {/* Background grid */}
      <div className="hero__grid" aria-hidden="true">
        <div className="hero__grid-lines" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="hero__container container">
        <div className={["hero__content", mounted ? "hero__content--visible" : ""].filter(Boolean).join(" ")}>
          {/* Org logos */}
          <div className="hero__org">
            <img src={ieeeLogo} alt="IEEE" className="hero__org-logo" />
            <span className="hero__org-divider" aria-hidden="true" />
            <img src={sctbLogo} alt="IEEE SCT Student Branch" className="hero__org-logo hero__org-logo--sctb" />
          </div>

          {/* Pre-label */}
          <p className="hero__prelabel text-label">Annual Technical Symposium</p>

          {/* Main title */}
          <h1 className="hero__title">
            <span className="hero__title-dhyuthi">
              {"DHYUTHI".split("").map((char, i) => (
                <span
                  key={i}
                  className="hero__title-char"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {char}
                </span>
              ))}
            </span>
            <span className="hero__title-edition">{eventConfig.edition}</span>
          </h1>

          {/* Tagline */}
          <p className="hero__tagline">{eventConfig.tagline}</p>

          {/* Event meta */}
          <div className="hero__meta">
            <div className="hero__meta-item">
              <span className="hero__meta-label">Date</span>
              <span className="hero__meta-value">{eventConfig.dateDetail === "TBA" ? <span className="hero__tba">To Be Announced</span> : eventConfig.dateDetail}</span>
            </div>
            <div className="hero__meta-divider" aria-hidden="true" />
            <div className="hero__meta-item">
              <span className="hero__meta-label">Venue</span>
              <span className="hero__meta-value">{eventConfig.venueShort === "TBA" ? <span className="hero__tba">To Be Announced</span> : eventConfig.venueShort}</span>
            </div>
            <div className="hero__meta-divider" aria-hidden="true" />
            <div className="hero__meta-item">
              <span className="hero__meta-label">Edition</span>
              <span className="hero__meta-value">{eventConfig.edition_number}th</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero__actions">
            <Button
              variant="primary"
              size="lg"
              href={eventConfig.registrationUrl}
            >
              Register Now
            </Button>
            <a
              href="#about"
              className="btn btn--ghost btn--lg"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Event
            </a>
          </div>

          {/* Scroll hint */}
          <div className="hero__scroll-hint" aria-hidden="true">
            <span className="hero__scroll-line" />
            <span className="hero__scroll-label text-label">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

