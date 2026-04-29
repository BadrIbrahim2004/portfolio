import React from "react";
import "../assets/components.css";

const SectionTitle = ({
  title,
  subtitle,
  center = true,
  className = "",
  animated = true,
}) => {
  return (
    <div
      className={`section-title ${center ? "text-center" : ""} ${
        animated ? "fade-in-up" : ""
      } ${className}`}
    >
      <h2 className="title-main">{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
