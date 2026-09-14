import { useState, useEffect } from "react";
import "./Navbar.css";
import { navLinks, navCTA } from "@/config/navigation";
import { eventConfig } from "@/config/event";
import ieeeLogo from "@/assets/ieee-logo-white.png";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={["navbar", scrolled ? "navbar--scrolled" : ""].filter(Boolean).join(" ")}>
        <div className="navbar__container">
          {/* Logo / Brand */}
          <a href="#" className="navbar__brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <img src={ieeeLogo} alt="IEEE" className="navbar__ieee-logo" />
            <div className="navbar__brand-text">
              <span className="navbar__event-name">{eventConfig.name}</span>
              <span className="navbar__edition">{eventConfig.edition}</span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="navbar__links" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={["navbar__link", activeSection === link.href.replace("#", "") ? "navbar__link--active" : ""].filter(Boolean).join(" ")}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="navbar__actions">
            <a
              href={navCTA.href}
              className="navbar__cta"
              onClick={(e) => handleNavClick(e, navCTA.href)}
            >
              {navCTA.label}
            </a>
            <button
              className={["navbar__hamburger", menuOpen ? "navbar__hamburger--open" : ""].filter(Boolean).join(" ")}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={["mobile-menu", menuOpen ? "mobile-menu--open" : ""].filter(Boolean).join(" ")} aria-hidden={!menuOpen}>
        <ul className="mobile-menu__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="mobile-menu__link"
                onClick={(e) => handleNavClick(e, link.href)}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={navCTA.href}
              className="mobile-menu__cta"
              onClick={(e) => handleNavClick(e, navCTA.href)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {navCTA.label}
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="mobile-menu__overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;

