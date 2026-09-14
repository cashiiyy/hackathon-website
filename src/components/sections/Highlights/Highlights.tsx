import "./Highlights.css";
import { highlights } from "@/config/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";

const Highlights: React.FC = () => {
  return (
    <section className="highlights section" id="highlights" aria-labelledby="highlights-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            label="Why Dhyuthi"
            title="What to Expect"
            subtitle="A multi-domain technical festival designed to challenge, inspire, and connect the next generation of engineers."
          />
        </Reveal>

        <div className="highlights__grid">
          {highlights.map((item, index) => (
            <Reveal key={item.id} delay={((index % 4) + 1) as 1 | 2 | 3 | 4}>
              <article className="highlight-card" aria-label={item.title}>
                <div className="highlight-card__icon" aria-hidden="true">{item.icon}</div>
                <h3 className="highlight-card__title">{item.title}</h3>
                <p className="highlight-card__desc">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;

