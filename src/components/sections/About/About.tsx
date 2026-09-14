import "./About.css";
import { eventConfig } from "@/config/event";
import { aboutStats } from "@/config/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import sctbLogo from "@/assets/sctb-logo-white.png";

const About: React.FC = () => {
  return (
    <section className="about section" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about__grid">
          {/* Text column */}
          <div className="about__text">
            <Reveal>
              <SectionHeading
                label="About the Event"
                title={`What is ${eventConfig.name}?`}
              />
            </Reveal>

            <Reveal delay={1}>
              <p className="about__body">
                Dhyuthi — derived from Sanskrit, meaning <em>radiance</em> and <em>brilliance</em> — is
                the annual technical symposium of the IEEE SCT Student Branch at Sree Chitra Thirunal
                College of Engineering, Trivandrum.
              </p>
            </Reveal>

            <Reveal delay={2}>
              <p className="about__body">
                Now in its 7th edition, Dhyuthi brings together students from colleges across the
                state for a two-day celebration of technology, innovation, and engineering culture.
                The event spans competitions, workshops, expert talks, and networking opportunities
                across multiple technical domains.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="about__org">
                <img src={sctbLogo} alt="IEEE SCT Student Branch" className="about__org-logo" />
                <div>
                  <p className="about__org-name">{eventConfig.organizationShort}</p>
                  <p className="about__org-college">{eventConfig.college}</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Stats column */}
          <Reveal delay={2} className="about__stats-wrapper">
            <div className="about__stats">
              <p className="about__stats-label text-label">Event Details</p>
              <dl className="about__stats-grid">
                {aboutStats.map((stat) => (
                  <div key={stat.label} className="about__stat">
                    <dt className="about__stat-label">{stat.label}</dt>
                    <dd className="about__stat-value">{stat.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="about__divider" aria-hidden="true" />

              <div className="about__venue-block">
                <p className="about__stats-label text-label">Location</p>
                <p className="about__venue-name">{eventConfig.college}</p>
                <p className="about__venue-location">{eventConfig.collegeLocation}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;

