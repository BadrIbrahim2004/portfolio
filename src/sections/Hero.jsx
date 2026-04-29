import React, { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";
import { scrollToSection } from "../utils/scrollUtils";
import Button from "../components/Button";
import "../assets/sections.css";

const Hero = () => {
  const { personal } = portfolioData;
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const fullText = "Full Stack MEAN Developer";

  // Typing animation
  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[textIndex]);
        setTextIndex((prev) => prev + 1);
      }, 80);

      return () => clearTimeout(timeout);
    }
  }, [textIndex]);

  return (
    <section id="home" className="hero section">
      <div className="container-max">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-lg-6 hero-content fade-in-up visible">
            <h1 className="hero-greeting">
              Hi, I'm <br />  <span className="gradient-text">{personal.name} </span>

            </h1>


            <div className="hero-title">
              <span className="animated-text">{displayedText}</span>
              <span className="cursor"></span>
            </div>

            <p className="hero-description">{personal.tagline}</p>

            <div className="hero-buttons">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection("projects", 500)}
                className="btn-with-icon"
              >
                <span>View My Work</span>
                <i className="bi bi-arrow-right"></i>
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection("contact", 500)}
                className="btn-with-icon"
              >
                <span>Contact Me</span>
                <i className="bi bi-envelope"></i>
              </Button>
            </div>

            {/* Social Links */}
            <div className="hero-social">
              <span className="social-label">Connect with me</span>
              <div className="social-icons">
                {personal.social.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="hero-social-link"
                    aria-label={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`bi ${link.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="col-lg-6 hero-image fade-in-up visible">
            <div className="profile-image-container">
              <div className="profile-glow"></div>
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="profile-image"
              />
              <div className="profile-border"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-icon">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
