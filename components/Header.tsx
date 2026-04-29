"use client";

import Link from "next/link";
import { useState } from "react";
import { business } from "@/lib/business";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services/", label: "Services" },
    { href: "/areas/", label: "Areas" },
    { href: "/faq/", label: "FAQ" },
    { href: "/about/", label: "About" },
    { href: "/contact/", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 h-[80px] bg-white/95 backdrop-blur-md border-b mist-grey-border shadow-sm">
      <div className="flex justify-between items-center px-6 lg:px-8 w-full max-w-7xl mx-auto h-full">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-primary-container text-3xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            format_paint
          </span>
          <span className="font-headline-sm text-on-surface text-lg lg:text-xl font-bold">
            {business.shortName}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-on-surface-variant font-semibold hover:text-primary-container transition-colors duration-200 text-[16px]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="hidden md:flex bg-tertiary text-on-tertiary px-5 py-3 rounded-lg font-bold transition-transform active:scale-95 items-center gap-2 text-sm"
            href={`tel:${business.phone}`}
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
            Call {business.phoneDisplay}
          </a>
          <button
            aria-label="Toggle menu"
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
          >
            <span className="material-symbols-outlined text-3xl text-on-surface">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden absolute top-[80px] left-0 right-0 bg-white border-b mist-grey-border shadow-md">
          <nav className="flex flex-col py-4 px-6 gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-on-surface font-semibold py-2 hover:text-primary-container"
              >
                {l.label}
              </Link>
            ))}
            <a
              className="bg-tertiary text-on-tertiary px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 mt-2"
              href={`tel:${business.phone}`}
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              Call {business.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
