"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


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
    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When hero is NOT intersecting (scrolled past it), switch to navy blue
        setScrolled(!entry.isIntersecting);
      },
      {
        // Trigger when the bottom edge of the hero leaves the viewport
        threshold: 0,
        rootMargin: "-80px 0px 0px 0px", // account for navbar height
      }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
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
          <Image
            src="/legal services.png"
            alt="ASM Legal Services Logo"
            width={150}
            height={40}
            style={{ width: "auto" }}
            className={`h-8 sm:h-9 md:h-10 w-auto object-contain transition-all duration-300 ${
              scrolled ? "brightness-0 drop-shadow" : "brightness-0 invert"
            }`}
            priority
          />
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
            className={`md:hidden p-2 rounded-full transition-all duration-300 active:scale-90 ${scrolled
                ? "text-slate-navy hover:bg-slate-navy/5"
                : "text-white/90 hover:text-white hover:bg-white/5"
              }`}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                className={`transition-all duration-300 ease-in-out ${
                  open ? "rotate-90 opacity-100 scale-100" : "rotate-0 opacity-100 scale-100"
                }`}
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </div>
          </button>
        </div>
      </header>

      {/* Floating Dark Glass Mobile Menu with Smooth Slide & Fade Animation */}
      <nav
        className={`absolute top-20 left-0 right-0 md:hidden bg-gradient-to-b from-slate-navy/90 via-slate-navy/85 to-slate-navy/80 backdrop-blur-2xl border border-white/15 rounded-2xl p-6 flex flex-col gap-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out origin-top ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 scale-95 -translate-y-4 pointer-events-none invisible"
        }`}
      >
        {NAV_LINKS.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setOpen(false)}
            style={{
              transitionDelay: open ? `${index * 50 + 75}ms` : "0ms",
            }}
            className={`border border-white/10 hover:border-white/40 text-center py-2.5 rounded-full text-xs font-semibold text-white/90 hover:bg-white/10 active:scale-98 transition-all duration-300 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          style={{
            transitionDelay: open ? `${NAV_LINKS.length * 50 + 75}ms` : "0ms",
          }}
          className={`bg-gradient-to-r from-muted-gold via-amber-500 to-muted-gold text-center text-slate-navy py-3 rounded-full text-xs font-bold mt-2 hover:brightness-110 active:scale-98 transition-all duration-300 shadow-md shadow-muted-gold/20 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          Contact Us
        </a>
      </nav>
    </div>
  );
}
