"use client";

import { useState } from "react";
import Link from "next/link";
import { navigation } from "@/constants/navigation";
import { DropdownMenu } from "@/components/DropdownMenu";
import Image from "next/image";
import logo from "@/assets/Logo.png";
export default function Header(): React.JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/95 backdrop-blur-sm">
      <nav className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-primary">
          <Image src={logo} alt="FT RAMATIS" width={1000} height={1000} className="h-25 w-auto" />
        </Link>

        <ul className="hidden items-center gap-13 lg:flex">
          {navigation.map((item) => (
            <li key={item.name}>
              <DropdownMenu item={item} />
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-foreground/10 bg-background lg:hidden">
          <ul className="container mx-auto px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                {item.children && item.children.length > 0 ? (
                  <div className="space-y-2">
                    <Link
                      href={item.href}
                      className="block py-2 font-medium text-foreground/80"
                    >
                      {item.name}
                    </Link>
                    <ul className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link
                            href={child.href}
                            className="block py-1 text-sm text-foreground/60"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-foreground/80"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}