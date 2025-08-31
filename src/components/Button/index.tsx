import React from "react";

interface ButtonProps {
  label: string; 
  onClick?: () => void; 
  type?: "button" | "submit" | "reset"; 
  icon?: React.ReactNode; 
  className?: string; 
  px?: string;
  py?: string; 
}

const Boutton: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = "",
  icon,
  type = "button",
  px = "px-8",
  py = "py-4",
}) => {
  return (
    <button
      type={type}
      className={` btn-anime flex items-center justify-center rounded-md font-semibold focus:outline-none focus:ring transition duration-300 ease-in-out ${px} ${py} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Boutton;
