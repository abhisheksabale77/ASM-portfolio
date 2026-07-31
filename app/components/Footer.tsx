"use client";

import { ArrowRight } from "lucide-react";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/asmlegalservices/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.95z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/adv.abdul_mulla?igsh=MWNlcm52c3Y1aDg4MA%3D%3D",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.668-4.771 4.919-4.919 1.266-.057 1.647-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.196-7.675 3.513-7.873 7.873-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948 1.97 4.369 5.296 7.686 7.873 7.873 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.196 7.671-3.513 7.873-7.873.058-1.281.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.197-4.354-3.513-7.671-7.873-7.873-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm2.344-11.844c-.808 0-1.463.655-1.463 1.463s.655 1.463 1.463 1.463 1.463-.655 1.463-1.463-.656-1.463-1.463-1.463z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1520] text-white border-t border-white/5 scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-8 md:px-12 lg:px-16 pt-16 pb-10 md:pt-20 md:pb-12">

        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 md:gap-6 lg:gap-8 xl:gap-12 mb-14">

          {/* Column 1: Brand & Socials */}
          <div className="sm:col-span-2 md:col-span-4 lg:col-span-4 flex flex-col justify-start gap-8 sm:gap-10">
            <div>
              <h3
                className="text-3xl md:text-4xl drop-shadow-lg text-white font-bold pt-2 sm:pt-4 tracking-wide animate-pulse"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                Adv. Abdul Mulla
              </h3>
            </div>

            {/* Social Media Links */}
            <div>
              <div className="flex gap-4 mb-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 md:w-11 md:h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-muted-gold hover:border-muted-gold/50 hover:bg-white/10 transition-colors hover:scale-105 transition-transform duration-300"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-2">
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-gold mb-6">
              Quick Links
            </p>
            <ul className="space-y-3.5 text-sm text-white/70">
              <li>
                <a
                  href="https://www.asmlegalservices.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center hover:text-muted-gold transition-colors duration-200 font-body tracking-wide"
                >
                  <span className="inline-flex items-center w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 overflow-hidden shrink-0">
                    <ArrowRight className="w-3 h-3 text-muted-gold" />
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    ASM Legal Services
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://lifeandlaw.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center hover:text-muted-gold transition-colors duration-200 font-body tracking-wide"
                >
                  <span className="inline-flex items-center w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 overflow-hidden shrink-0">
                    <ArrowRight className="w-3 h-3 text-muted-gold" />
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Life & Law Blog
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://knowdivorce.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center hover:text-muted-gold transition-colors duration-200 font-body tracking-wide"
                >
                  <span className="inline-flex items-center w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 overflow-hidden shrink-0">
                    <ArrowRight className="w-3 h-3 text-muted-gold" />
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    KNOW Divorce
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Pages */}
          <div className="sm:col-span-1 md:col-span-2 lg:col-span-2">
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-gold mb-6">
              Our Pages
            </p>
            <ul className="space-y-3.5 text-sm text-white/70">
              <li>
                <a href="#about" className="group flex items-center hover:text-muted-gold transition-colors duration-200">
                  <span className="inline-flex items-center w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 overflow-hidden shrink-0">
                    <ArrowRight className="w-3 h-3 text-muted-gold" />
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-body tracking-wide">
                    About
                  </span>
                </a>
              </li>
              <li>
                <a href="#platforms" className="group flex items-center hover:text-muted-gold transition-colors duration-200">
                  <span className="inline-flex items-center w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 overflow-hidden shrink-0">
                    <ArrowRight className="w-3 h-3 text-muted-gold" />
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-body tracking-wide">
                    Ideas and Initiatives
                  </span>
                </a>
              </li>
              <li>
                <a href="#author" className="group flex items-center hover:text-muted-gold transition-colors duration-200">
                  <span className="inline-flex items-center w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 overflow-hidden shrink-0">
                    <ArrowRight className="w-3 h-3 text-muted-gold" />
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-body tracking-wide">
                    Author
                  </span>
                </a>
              </li>
              <li>
                <a href="#blogger" className="group flex items-center hover:text-muted-gold transition-colors duration-200">
                  <span className="inline-flex items-center w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 overflow-hidden shrink-0">
                    <ArrowRight className="w-3 h-3 text-muted-gold" />
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-body tracking-wide">
                    Blogger
                  </span>
                </a>
              </li>
              <li>
                <a href="#contact" className="group flex items-center hover:text-muted-gold transition-colors duration-200">
                  <span className="inline-flex items-center w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 overflow-hidden shrink-0">
                    <ArrowRight className="w-3 h-3 text-muted-gold" />
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-body tracking-wide">
                    Contact & support
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-4">
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-gold mb-6 sm:mb-8">
              Office Details
            </p>
            <ul className="space-y-5 sm:space-y-6 text-sm text-white/70">
              <li className="flex gap-4 items-start">
                <svg className="w-5 h-5 text-muted-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="leading-relaxed font-body tracking-wide md:whitespace-nowrap">
                  Unit No. 409, 4th Floor,<br />
                  Krystal Square, E-Ward, Nagala Park,<br />
                  Near Khanvilkar Pump, Kolhapur - 416003
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <svg className="w-5 h-5 text-muted-gold shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-body tracking-wide">
                  10:00 AM to 6:30 PM
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <svg className="w-5 h-5 text-muted-gold shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:adv.abduloffice@gmail.com" className="hover:text-muted-gold transition-colors font-body tracking-wide">
                  adv.abduloffice@gmail.com
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <svg className="w-5 h-5 text-muted-gold shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:+919370072022" className="hover:text-muted-gold transition-colors font-body tracking-wide">
                  +91 93-7007-2022
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t font-body border-white/10 pt-8 pb-2 flex flex-col sm:flex-row justify-between items-center gap-5 text-[11px] text-white/35 font-light">
          <p>© {new Date().getFullYear()} Adv. Abdul Mulla. All Rights Reserved.</p>
          <p>Developed by <a href="https://asmrankrise.com" target="_blank" rel="noopener noreferrer" className="text-muted-gold hover:text-white transition-colors duration-200">ASM RankRise</a>. Built in India with love❤️ for world-class businesses.</p>
        </div>

      </div>
    </footer>
  );
}
