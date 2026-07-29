"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[750px] flex items-center overflow-hidden">
      {/* Background Wrapper */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-[center_right] md:bg-right bg-no-repeat"
          style={{ backgroundImage: "url('/background.png')" }}
        />
      </div>

      {/* Balanced gradient overlay to keep background image clear & vibrant while maintaining text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-navy/80 via-slate-navy/45 to-slate-navy/15 md:from-slate-navy/75 md:via-slate-navy/35 md:to-transparent z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 md:px-10 pt-10 pb-20 md:py-32">
        <div className="max-w-xl md:max-w-2xl flex flex-col items-start text-left">
          {/* Motto Indicator */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1.5px] w-6 bg-muted-gold" />
            <span className="font-serif italic text-xs sm:text-sm md:text-base text-muted-gold tracking-wide">
              Every insight shared is an opportunity to inspire, educate and empower
            </span>
          </div>

          <h1
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-5 drop-shadow-md"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 700 }}
          >
            Adv. Abdul Mulla
          </h1>

          <p className="text-[8px] sm:text-[11px] md:text-xs tracking-[0.1em] text-muted-gold bg-muted-gold/20 mb-6 border border-muted-gold py-1.5 px-3 rounded-sm font-semibold backdrop-blur-sm uppercase">
            Advocate | Author | Blogger | Legal Awareness Contributor
          </p>

          <p className="max-w-[330px] sm:max-w-[500px] font-body text-xs sm:text-sm md:text-base text-justify text-white/95 mb-8 sm:mb-10 leading-relaxed text-left drop-shadow">
            Approaching every legal matter with integrity, clarity and thoughtful preparation. Focused on understanding concerns with care, communicating with purpose and carrying out professional responsibilities with diligence, balance and ethical judgment—while supporting informed decision-making throughout the legal process.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#platforms"
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-muted-gold text-white font-body text-[10px] font-semibold rounded hover:bg-muted-gold/90 hover:scale-102 transition-colors hover:transition-transform duration-300 uppercase tracking-wider"
            >
              Ideas and Initiatives
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
