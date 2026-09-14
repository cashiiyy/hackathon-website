import "./SectionHeading.css";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = "left",
  className = "",
}) => {
  return (
    <div className={["section-heading", `section-heading--${align}`, className].filter(Boolean).join(" ")}>
      {label && <span className="section-heading__label">{label}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;

