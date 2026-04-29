import React, { useEffect, useRef, useState } from "react";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";
import SkillBadge from "../components/SkillBadge";
import Card from "../components/Card";
import { isElementInViewport } from "../utils/scrollUtils";
import "../assets/sections.css";

const Skills = () => {
  const { skills } = portfolioData;
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
      id="skills"
      className="skills section section-alternate"
      ref={sectionRef}
    >
      <div className="container-max">
        <SectionTitle title="Technical Skills" center />

        <div className="skills-grid">
          {skills.map((category, index) => (
            <div
              key={index}
              className={`skill-category ${isVisible ? "fade-in-up" : ""}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card hover variant="glass">
                <h3 className="category-title">{category.category}</h3>

                <div className="skills-badges">
                  {category.items.map((skill, skillIndex) => (
                    <SkillBadge key={skillIndex} skill={skill} />
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
