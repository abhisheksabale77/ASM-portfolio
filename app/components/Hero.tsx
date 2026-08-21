"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" data-nav-theme="dark" className="relative min-h-[600px] md:min-h-[750px] flex items-center overflow-hidden">
      {/* Background Wrapper */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-[67%_center] sm:bg-[center_right] md:bg-[65%_center] bg-no-repeat"
          style={{ backgroundImage: "url('/backgroundImage.png')" }}
        />
      </div>

      {/* Balanced gradient overlay to keep background image clear & vibrant while maintaining text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-navy/80 via-slate-navy/45 to-slate-navy/15 md:from-slate-navy/75 md:via-slate-navy/35 md:to-transparent z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 md:px-10 pt-10 pb-20 md:py-32">
        <div className="max-w-xl md:max-w-2xl flex flex-col items-start text-left">
          {/* Motto Indicator */}
          <div className="flex items-center gap-3 mb-4">

          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-5 drop-shadow-md"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 700 }}
          >
            Adv. Abdul Mulla
          </h1>

          <p className="text-[6px] sm:text-[11px] md:text-xs tracking-[0.1em] text-muted-gold bg-muted-gold/20 mb-6 border border-muted-gold py-1.5 px-3 rounded-sm font-semibold backdrop-blur-sm uppercase">
            Advocate | Author | Blogger | Legal Awareness Contributor
          </p>

          <p className="max-w-[330px] sm:max-w-[500px] font-body text-xs sm:text-sm md:text-base text-justify text-white/95 mb-8 sm:mb-10 leading-relaxed text-left drop-shadow">
            Advocate at work, author at heart, blogger with purpose.
            Sharing knowledge to inform minds and strengthen awareness.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#platforms"
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-muted-gold text-white font-body text-[8px] md:text-[12px] font-semibold rounded hover:bg-muted-gold/90 hover:scale-102 transition-colors hover:transition-transform duration-300 uppercase tracking-wider"
            >
              Ideas and Initiatives
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
