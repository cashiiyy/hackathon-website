import { useState } from "react";
import "./FAQ.css";
import { faqItems } from "@/config/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq section" id="faq" aria-labelledby="faq-heading">
      <div className="container">
        <div className="faq__layout">
          <Reveal>
            <SectionHeading
              label="Questions"
              title="Frequently Asked"
            />
          </Reveal>

          <div className="faq__list" role="list">
            {faqItems.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <Reveal key={item.id} delay={((index % 4) + 1) as 1 | 2 | 3 | 4}>
                  <div
                    className={["faq__item", isOpen ? "faq__item--open" : ""].filter(Boolean).join(" ")}
                    role="listitem"
                  >
                    <button
                      className="faq__question"
                      onClick={() => toggle(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      id={`faq-question-${item.id}`}
                    >
                      <span className="faq__question-text">{item.question}</span>
                      <span className="faq__chevron" aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className="faq__answer"
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${item.id}`}
                      hidden={!isOpen}
                    >
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

