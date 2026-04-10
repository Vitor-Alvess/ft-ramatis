import React from "react";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  onClick?: () => void;
  className?: string;
}

export const Card = ({
  title,
  description,
  image,
  onClick,
  className,
}: CardProps): React.JSX.Element => {
  return (
    <div
      className={`
        group overflow-hidden rounded-lg border border-foreground/10 bg-background 
        transition-all duration-300 hover:border-foreground/20 hover:shadow-lg
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
      onClick={onClick}
    >
      {image && (
        <div className="aspect-video overflow-hidden bg-foreground/5">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-foreground/60">{description}</p>
      </div>
    </div>
  );
};