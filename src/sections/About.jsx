import React, { useEffect, useRef, useState } from "react";
import { portfolioData } from "../data/portfolioData";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import { isElementInViewport } from "../utils/scrollUtils";
import "../assets/sections.css";

const About = () => {
  const { about } = portfolioData;
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isElementInViewport(sectionRef.current)) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="about section section-alternate"
      ref={sectionRef}
    >
      <div className="container-max">
        <SectionTitle title={about.title} center visible={isVisible} />

        {/* About Description */}
        <div className="row justify-content-center">
          <div className="col-lg-8 about-description">
            <p className={`fade-in-up ${isVisible ? "visible" : ""}`}>{about.description}</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {about.features.map((feature, index) => (
            <div
              key={index}
              className={`feature-item fade-in-up ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card hover variant="glass">
                <div className="feature-content">
                  <div className="feature-icon">
                    {index === 0 && <i className="bi bi-lightbulb"></i>}
                    {index === 1 && <i className="bi bi-rocket"></i>}
                    {index === 2 && <i className="bi bi-people"></i>}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
