import "./Footer.css";
import { eventConfig } from "@/config/event";
import { navLinks } from "@/config/navigation";
import ieeeLogo from "@/assets/ieee-logo-white.png";
import sctbLogo from "@/assets/sctb-logo-white.png";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__top">
          {/* Brand column */}
          <div className="footer__brand">
            <div className="footer__logos">
              <img src={ieeeLogo} alt="IEEE" className="footer__logo footer__logo--ieee" />
              <div className="footer__logo-divider" aria-hidden="true" />
              <img src={sctbLogo} alt="IEEE SCT Student Branch" className="footer__logo footer__logo--sctb" />
            </div>
            <p className="footer__event-name">
              {eventConfig.name} <span>{eventConfig.edition}</span>
            </p>
            <p className="footer__tagline">{eventConfig.subTagline}</p>
          </div>

          {/* Nav column */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <p className="footer__nav-heading">Navigation</p>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer__nav-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          <div className="footer__contact">
            <p className="footer__nav-heading">Connect</p>
            <ul className="footer__social">
              <li>
                <a href={eventConfig.instagram} target="_blank" rel="noopener noreferrer" className="footer__social-link">
                  Instagram
                </a>
              </li>
              <li>
                <a href={eventConfig.linkedin} target="_blank" rel="noopener noreferrer" className="footer__social-link">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${eventConfig.email}`} className="footer__social-link">
                  {eventConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {year} {eventConfig.organizationShort}. All rights reserved.
          </p>
          <p className="footer__college">
            {eventConfig.college}, {eventConfig.collegeLocation}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

