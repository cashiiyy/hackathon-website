import "./CTA.css";
import { eventConfig } from "@/config/event";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

const CTA: React.FC = () => {
  return (
    <section className="cta section" id="register" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta__inner">
          {/* Background accent */}
          <div className="cta__glow" aria-hidden="true" />

          <Reveal>
            <p className="cta__label text-label">Join Dhyuthi 7.0</p>
            <h2 className="cta__title" id="cta-heading">
              Ready to <span>Illuminate</span>?
            </h2>
            <p className="cta__subtitle">
              {eventConfig.registrationOpen
                ? "Registration is now open. Secure your spot at Dhyuthi 7.0."
                : "Registration for Dhyuthi 7.0 will open soon. Stay tuned for the official announcement."}
            </p>
          </Reveal>

          <Reveal delay={2}>
            <div className="cta__actions">
              {eventConfig.registrationOpen ? (
                <>
                  <Button variant="primary" size="lg" href={eventConfig.registrationUrl}>
                    Register Now
                  </Button>
                  <Button variant="ghost" size="lg" href={`mailto:${eventConfig.email}`} external>
                    Contact Us
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="lg" href={eventConfig.instagram} external>
                    Follow for Updates
                  </Button>
                  <Button variant="ghost" size="lg" href={`mailto:${eventConfig.email}`} external>
                    Contact Us
                  </Button>
                </>
              )}
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="cta__meta">
              <div className="cta__meta-item">
                <span className="cta__meta-label text-label">Organized by</span>
                <span className="cta__meta-value">{eventConfig.organizationShort}</span>
              </div>
              <div className="cta__meta-sep" aria-hidden="true" />
              <div className="cta__meta-item">
                <span className="cta__meta-label text-label">Location</span>
                <span className="cta__meta-value">{eventConfig.collegeLocation}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;

