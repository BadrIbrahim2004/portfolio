import React, { useState, useEffect } from "react";
import { scrollToSection, getActiveSection } from "../utils/scrollUtils";
import { portfolioData } from "../data/portfolioData";
import "../assets/components.css";

const Navbar = () => {
  const { personal } = portfolioData;
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sections = [
    "home",
    "about",
    "education",
    "skills",
    "projects",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Show scroll-to-top button after 500px
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Get active section
      const active = getActiveSection(sections);
      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    scrollToSection(section, 500);
    setShowMenu(false);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`navbar-custom ${scrolled ? "scrolled" : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-max navbar-content ">
          {/* Logo */}
          <div className="navbar-logo ">
            <button
              onClick={() => handleNavClick("home")}
              className="logo-btn"
              aria-label="Logo - Go to home"
            >
              <img
                src={personal.logo}
                alt="Logo"
                className="logo-image  "
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </button>
          </div>

          {/* Hamburger Toggle */}
          <button
            className={`hamburger ${showMenu ? "active" : ""}`}
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Toggle navigation menu"
            aria-expanded={showMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Links */}
          <div className={`navbar-links text-light  ${showMenu ? "show" : ""}`}>
            {sections.map((section) => (
              <button
                key={section}
                className={`nav-link ${activeSection === section ? "active" : ""}`}
                onClick={() => handleNavClick(section)}
                aria-current={activeSection === section ? "page" : undefined}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

            {/* Download CV Button */}
            <a
              href={personal.cvLink}
              download
              className="btn-custom btn-primary btn-sm"
              style={{
                background: '#00e5ff',
                color: '#0f172a',
                border: 'none',
                fontWeight: '600',
                textDecoration: 'none'
              }}
            >
              <span>Download CV</span>
              <i className="bi bi-download" style={{marginLeft: '0.5rem'}}></i>
            </a>
          
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScrollTop ? "show" : ""}`}
        onClick={handleScrollTop}
        aria-label="Scroll to top"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M10 16V4M4 10l6-6 6 6"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </>
  );
};

export default Navbar;
