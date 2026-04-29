import React, { useEffect, useRef, useState } from "react";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import Card from "../components/Card";
import { isElementInViewport } from "../utils/scrollUtils";
import "../assets/sections.css";

const Projects = () => {
  const { projects } = portfolioData;
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardClick = (index) => {
    if (isMobile) {
      setActiveOverlay(activeOverlay === index ? null : index);
    }
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    setActiveOverlay(null);
  };

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
    <section id="projects" className="projects section" ref={sectionRef}>
      <div className="container-max">
        <SectionTitle
          title="Featured Projects"
          subtitle="Showcasing my latest works and technical expertise"
          center
          visible={isVisible}
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card-wrapper fade-in-up ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card
                hover
                className={`project-card ${activeOverlay === index ? 'overlay-active' : ''}`}
                onClick={() => handleCardClick(index)}
              >
                {/* Project Image */}
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <button
                      className="overlay-close-btn"
                      onClick={handleCloseClick}
                      aria-label="Close description"
                    >
                      <i className="bi bi-x-lg"></i>
                    </button>
                    <div className="overlay-content">
                      <p className="overlay-description">
                        {project.longDescription}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Buttons */}
                  <div className="project-buttons">
                    <Button
                      variant="primary"
                      size="sm"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-link-45deg"></i>
                      Live Demo
                    </Button>

                    <Button
                      variant="secondary"
                      size="sm"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github"></i>
                      GitHub
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
