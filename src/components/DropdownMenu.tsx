"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { INavigationItem } from "@/constants/navigation";

interface IDropdownMenuProps {
  item: INavigationItem;
  className?: string;
}

export const DropdownMenu = ({
  item,
  className,
}: IDropdownMenuProps): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!item.children || item.children.length === 0) {
    return (
      <Link
        href={item.href}
        className={`text-foreground/80 transition-colors hover:text-foreground ${className}`}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-foreground/80 transition-colors hover:text-foreground"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{item.name}</span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 min-w-[200px] rounded-lg border border-foreground/10 bg-background shadow-lg">
          <ul className="py-2">
            {item.children.map((child) => (
              <li key={child.name}>
                <Link
                  href={child.href}
                  className="block px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {child.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

