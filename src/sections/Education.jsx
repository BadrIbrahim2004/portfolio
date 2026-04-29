import React, { useEffect, useRef, useState } from "react";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";
import { isElementInViewport } from "../utils/scrollUtils";
import "../assets/sections.css";

const Education = () => {
  const { education } = portfolioData;
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
    <section id="education" className="education section" ref={sectionRef}>
      <div className="container-max">
        <SectionTitle title="Education & Learning" center />

        <div className="timeline">
          {education.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${isVisible ? "fade-in-up" : ""}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index !== education.length - 1 && (
                  <div className="timeline-line"></div>
                )}
              </div>

              <div className="timeline-content">
                <div className="timeline-period">{item.period}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-institution">{item.institution}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
