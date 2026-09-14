import "./Announcements.css";
import { announcements } from "@/config/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/motion/Reveal";

const Announcements: React.FC = () => {
  if (announcements.length === 0) return null;

  return (
    <section className="announcements section" id="announcements" aria-labelledby="announcements-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            label="Latest"
            title="Announcements"
          />
        </Reveal>

        <div className="announcements__grid">
          {announcements.map((item, index) => (
            <Reveal key={item.id} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <article className="announcement-card" aria-label={item.title}>
                <header className="announcement-card__header">
                  <Badge variant={item.badge.toLowerCase() as "new" | "upcoming" | "update" | "important"}>
                    {item.badge}
                  </Badge>
                  <time className="announcement-card__date text-label">{item.date}</time>
                </header>
                <h3 className="announcement-card__title">{item.title}</h3>
                <p className="announcement-card__desc">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    className="announcement-card__link"
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.linkLabel || "Learn more"} →
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;

