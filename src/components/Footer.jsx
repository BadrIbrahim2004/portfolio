import React from "react";
import { portfolioData } from "../data/portfolioData";
import "../assets/components.css";

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-max">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">  
            <img
                src={personal.logo}
                alt="Logo"
                className="logo-image mb-5 "
                onError={(e) => {
                  e.target.style.display = "none";
                }}
            />
            <p className="footer-tagline">
              Turning ideas into scalable digital products with modern UI and robust backend systems.
            </p>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <p className="social-label">Follow Me</p>
            <div className="social-links">
              {personal.social.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="social-link"
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`bi ${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <p className="links-label">Quick Links</p>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            © {currentYear} {personal.name}. All rights reserved.
          </p>
          <p className="footer-credit">
            Crafted with <span className="heart">♥</span> using React &
            Bootstrap
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
