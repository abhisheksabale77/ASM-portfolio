"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Advocate", href: "#advocate" },
  { label: "Author", href: "#author" },
  { label: "Blogger", href: "#blogger" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[1300px] z-50">
      <header
        className={`w-full transition-colors duration-300 rounded-xl px-4 sm:px-8 md:px-12 py-4 flex items-center justify-between border ${scrolled
          ? "backdrop-blur-sm bg-white/5 border-muted-gold/10 text-slate-navy"
          : "bg-transparent backdrop-blur-sm border-white/10 text-white"
          }`}
      >
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <span
            className={`font-heading text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${scrolled ? "text-slate-navy" : "text-muted-gold"
              }`}
          >
            Adv. Abdul Mulla
          </span>
        </Link>

        {/* Center Nav Links with Capsule Outlines */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`border px-4 py-1.5 rounded-md text-[11px] font-semibold uppercase tracking-wider transition-colors duration-300 ${scrolled
                  ? "border-slate-navy/15 text-slate-navy/90 hover:text-slate-navy hover:bg-slate-navy/5 hover:border-slate-navy/30"
                  : "border-white/15 text-white/95 hover:text-white hover:bg-white/5 hover:border-white/40"
                }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button (Gold Capsule) */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-block bg-muted-gold text-slate-navy font-body text-xs font-bold px-6 py-2.5 rounded-md hover:scale-105 shadow-md shadow-muted-gold/20 transition-[transform,filter] duration-300 hover:brightness-110"
          >
            Contact Us
          </a>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-full transition-colors duration-300 ${scrolled
                ? "text-slate-navy hover:bg-slate-navy/5"
                : "text-white/90 hover:text-white hover:bg-white/5"
              }`}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Floating Dark Glass Mobile Menu */}
      {open && (
        <nav className="absolute top-20 left-0 right-0 md:hidden bg-gradient-to-b from-slate-navy/85 to-slate-navy/75 backdrop-blur-xl border border-white/15 rounded-2xl p-6 flex flex-col gap-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_15px_35px_rgba(0,0,0,0.3)]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border border-white/10 hover:border-white/40 text-center py-2.5 rounded-full text-xs font-semibold text-white/90 hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-gradient-to-r from-muted-gold to-amber-500 text-center text-slate-navy py-2.5 rounded-full text-xs font-bold mt-2 hover:brightness-110"
          >
            Contact Us
          </a>
        </nav>
      )}
    </div>
  );
}
