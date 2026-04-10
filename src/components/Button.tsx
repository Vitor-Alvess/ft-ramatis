import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  text: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  variant = "primary",
  size = "md",
  onClick,
  text,
  className,
  disabled = false,
  type = "button",
}: ButtonProps): React.JSX.Element => {
  const baseClasses = "font-semibold rounded-lg transition-all duration-200 hover:scale-105";
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
    outline: "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background",
  };

  return (
    <button
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};