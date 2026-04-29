import React from "react";
import "../assets/components.css";

const Card = ({
  children,
  className = "",
  variant = "default",
  hover = false,
  ...props
}) => {
  const baseClass = `card-custom card-${variant}`;
  const hoverClass = hover ? "hover-lift" : "";

  return (
    <div className={`${baseClass} ${hoverClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
