import React from 'react';
import { BRAND_CONFIG } from '../data/config';

export function Hero({ onExploreClick, onBespokeClick }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F5EFEB] to-[#EFE8DC] pt-12 pb-20 md:pt-20 md:pb-32 border-b border-[#E8DFD3]">
      {/* Subtle Warm Luxury Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#C59A47]/15 to-[#B87333]/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Heritage Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EAE2D5]/80 border border-[#D5C7B4] text-[#7A624E] text-xs font-sans uppercase tracking-[0.2em] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C59A47]"></span>
              <span>Pure Distillation · Small Batch № 04</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1C1614] leading-[1.08] tracking-tight font-normal">
              Rare Woods, Liquid Gold & <span className="italic font-normal text-[#9E5336] underline decoration-[#C59A47]/40 decoration-wavy decoration-1 underline-offset-8">Sacred Florals</span>
            </h1>

            {/* Arabic Calligraphy Subtitle */}
            <div className="font-serif text-xl sm:text-2xl text-[#C59A47] tracking-widest pt-1" dir="rtl">
              عُطور مَلَكِيَّة صُنِعَت بِعِنَايَة وَشَغَف
            </div>

            {/* Narrative Paragraph */}
            <p className="text-base sm:text-lg text-[#5E5147] font-sans font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to <span className="font-medium text-[#1C1614]">Oud Al Malik</span>, where time slows down. Each flacon is hand-poured in artisanal small batches using 25-year aged Cambodian agarwood, wild ambergris, and dawn-harvested Taif roses. We do not use commercial fillers—only pure, sovereign Extrait de Parfum.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-4 bg-[#1C1614] hover:bg-[#C59A47] text-[#FAF7F2] text-xs font-sans font-medium uppercase tracking-[0.25em] rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Scent Collection
              </button>
              
              <button
                onClick={onBespokeClick}
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-[#F0E6D8] border border-[#2D231E]/40 hover:border-[#1C1614] text-[#1C1614] text-xs font-sans font-medium uppercase tracking-[0.25em] rounded-full transition-all duration-300"
              >
                Request Scent Consultation
              </button>
            </div>

            {/* Luxury Credential Badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#E5DACB] text-center lg:text-left">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1614]">35%</p>
                <p className="font-sans text-[11px] text-[#7A6D63] uppercase tracking-wider mt-0.5">Extrait Concentration</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1614]">25 Yrs</p>
                <p className="font-sans text-[11px] text-[#7A6D63] uppercase tracking-wider mt-0.5">Aged Wild Oud</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1614]">100%</p>
                <p className="font-sans text-[11px] text-[#7A6D63] uppercase tracking-wider mt-0.5">Artisanal Hand-Poured</p>
              </div>
            </div>

          </div>

          {/* Right Visual Spotlight Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Luxury Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#D5C7B4] bg-[#FAF6F0] p-3 shadow-2xl">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-stone-900">
                  <img
                    src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=80"
                    alt="Malik Al Oud Artisanal Flacon"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1614]/80 via-transparent to-black/20"></div>

                  {/* Floating Fragrance Label */}
                  <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2] backdrop-blur-md bg-black/40 p-4 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#C59A47]">
                        Featured Sovereign Scent
                      </span>
                      <span className="text-xs font-serif italic text-amber-200">
                        Batch № 04
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-medium tracking-wide mt-1">
                      Malik Al Oud (King of Oud)
                    </h3>
                    <p className="text-xs text-[#D8CEBF] font-sans font-light mt-1 line-clamp-2">
                      Cambodian Agarwood · Bulgarian Rose · Smoked Cuir Leather · Golden Ambergris
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Seal floating on corner */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#C59A47] text-[#1C1614] flex flex-col items-center justify-center p-2 text-center shadow-xl border-4 border-[#FAF7F2] rotate-[-8deg]">
                <span className="text-[9px] font-sans uppercase font-bold tracking-widest leading-none">Artisanal</span>
                <span className="font-serif text-lg font-bold leading-tight">OAM</span>
                <span className="text-[8px] font-sans uppercase tracking-wider leading-none">Est. 2012</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
