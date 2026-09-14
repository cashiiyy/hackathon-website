import "./Timeline.css";
import { timeline } from "@/config/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import Badge from "@/components/ui/Badge";

const Timeline: React.FC = () => {
  return (
    <section className="timeline section" id="timeline" aria-labelledby="timeline-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            label="Schedule"
            title="Event Timeline"
            subtitle="Key phases and milestones for Dhyuthi 7.0. Dates will be updated as they are confirmed."
          />
        </Reveal>

        <div className="timeline__track" role="list">
          {timeline.map((item, index) => (
            <Reveal key={item.id} delay={(Math.min(index + 1, 5)) as 1 | 2 | 3 | 4 | 5}>
              <div className="timeline__item" role="listitem">
                {/* Phase number + line */}
                <div className="timeline__left">
                  <div className="timeline__phase-num">{item.phase}</div>
                  {index < timeline.length - 1 && (
                    <div className="timeline__connector" aria-hidden="true" />
                  )}
                </div>

                {/* Content */}
                <div className="timeline__content">
                  <div className="timeline__header">
                    <h3 className="timeline__title">{item.title}</h3>
                    <div className="timeline__date-badge">
                      {item.status === "tba" ? (
                        <Badge variant="default">TBA</Badge>
                      ) : (
                        <span className="timeline__date">{item.date}</span>
                      )}
                    </div>
                  </div>
                  <p className="timeline__desc">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

