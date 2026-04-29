import React from "react";
import "../assets/components.css";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  type = "button",
  disabled = false,
  href,
  ...props
}) => {
  const baseClass = `btn-custom btn-${variant} btn-${size}`;

  if (href) {
    return (
      <a href={href} className={`${baseClass} ${className}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`${baseClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
