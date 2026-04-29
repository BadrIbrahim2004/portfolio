import React from "react";
import "../assets/components.css";

const SkillBadge = ({ skill, icon = null, className = "", ...props }) => {
  return (
    <span className={`skill-badge ${className}`} {...props}>
      {icon && <span className="skill-icon">{icon}</span>}
      <span className="skill-text">{skill}</span>
    </span>
  );
};

export default SkillBadge;
