import "./Badge.css";

interface BadgeProps {
  variant?: "default" | "accent" | "primary" | "warning" | "new" | "upcoming" | "update" | "important";
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  children,
  className = "",
}) => {
  return (
    <span className={["badge", `badge--${variant.toLowerCase()}`, className].filter(Boolean).join(" ")}>
      {children}
    </span>
  );
};

export default Badge;

