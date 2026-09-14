import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
  threshold?: number;
}

const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = "",
  threshold = 0.15,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const delayClass = delay > 0 ? `delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={["reveal", revealed ? "revealed" : "", delayClass, className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
};

export default Reveal;

