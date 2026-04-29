import React from "react";
import "../assets/components.css";

const SectionTitle = ({
  title,
  subtitle,
  center = true,
  className = "",
  visible = true,
}) => {
  return (
    <div
      className={`section-title ${center ? "text-center" : ""} ${visible ? "fade-in-up visible" : "fade-in-up"
        } ${className}`}
    >
      <h2 className="title-main">{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
