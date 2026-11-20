import React, { useState } from 'react';
import { BRAND_CONFIG } from '../data/config';

export function PerfumeCard({ perfume, activeCurrency, onExploreNotes, onRequestScent }) {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0); // 0 = 50ml, 1 = 100ml
  const currentSizeObj = perfume.sizes[selectedSizeIndex] || perfume.sizes[0];

  // Currency conversion
  const currencyInfo = BRAND_CONFIG.currencies[activeCurrency] || BRAND_CONFIG.currencies.USD;
  const convertedPrice = Math.round(currentSizeObj.priceUSD * currencyInfo.rate);

  // Vibe tag color styles
  const vibeStyles = {
    woody: 'bg-[#4A382A]/10 text-[#5C4533] border-[#4A382A]/20',
    floral: 'bg-[#8F3E50]/10 text-[#7F3344] border-[#8F3E50]/20',
    sweet: 'bg-[#B06B22]/10 text-[#915414] border-[#B06B22]/20',
    fresh: 'bg-[#295945]/10 text-[#1F4937] border-[#295945]/20'
  };

  return (
    <div className="bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#E3D7C8] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group hover:-translate-y-1">
      
      {/* Bottle Image Container with Gradient & Badge */}
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-900 cursor-pointer" onClick={() => onExploreNotes(perfume)}>
        <img
          src={perfume.image}
          alt={perfume.name}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1614]/75 via-transparent to-black/20 opacity-90 group-hover:opacity-80 transition-opacity"></div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#1C1614]/80 text-[#FAF6F0] backdrop-blur-md border border-white/10">
            {perfume.badge}
          </span>
          <span className={`text-[10px] font-sans font-medium uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md border ${vibeStyles[perfume.vibe] || 'bg-stone-800 text-stone-200'}`}>
            {perfume.vibeLabel}
          </span>
        </div>

        {/* Quick Click Hint on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-4 py-2 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[#1C1614] text-xs font-sans uppercase tracking-widest font-medium shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            View Scent Notes
          </span>
        </div>

        {/* Bottom Floating Title over Image */}
        <div className="absolute bottom-4 left-4 right-4 text-[#FAF7F2]">
          <p className="font-serif text-sm text-[#C59A47] tracking-widest" dir="rtl">{perfume.arabicName}</p>
          <h3 className="font-serif text-2xl font-normal tracking-wide text-white drop-shadow-sm">
            {perfume.name}
          </h3>
          <p className="text-xs text-[#DCD1C3] font-sans font-light italic">
            "{perfume.subtitle}"
          </p>
        </div>
      </div>

      {/* Card Body & Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        
        {/* Sensory Inspiration Quote */}
        <p className="text-xs sm:text-sm text-[#5E5147] font-sans font-light leading-relaxed line-clamp-2">
          {perfume.inspiration}
        </p>

        {/* Olfactory Notes Preview (Pill tags) */}
        <div className="space-y-2 pt-1 border-t border-[#EFE7D8]">
          <div className="flex items-center justify-between text-[11px] font-sans uppercase tracking-wider text-[#8A7C70]">
            <span>Olfactory Profile</span>
            <button 
              onClick={() => onExploreNotes(perfume)}
              className="text-[#C59A47] hover:underline hover:text-[#A87E30] transition-colors"
            >
              See Pyramid →
            </button>
          </div>
          
          <div className="flex flex-wrap gap-1.5">
            {/* Top note preview */}
            <span className="text-[11px] font-sans px-2.5 py-1 rounded-md bg-[#F2EAE0] text-[#4A3D34] border border-[#E5DACD]">
              <span className="text-[#8C7B6D] mr-1">Top:</span>{perfume.notes.top[0]}
            </span>
            {/* Base note preview */}
            <span className="text-[11px] font-sans px-2.5 py-1 rounded-md bg-[#F2EAE0] text-[#4A3D34] border border-[#E5DACD]">
              <span className="text-[#8C7B6D] mr-1">Base:</span>{perfume.notes.base[0]}
            </span>
          </div>
        </div>

        {/* Size Selection & Dynamic Price */}
        <div className="pt-2 border-t border-[#EFE7D8] flex items-center justify-between">
          {/* Size Pills */}
          <div className="flex items-center gap-1.5 bg-[#F2EAE0] p-1 rounded-full border border-[#DFD4C4]">
            {perfume.sizes.map((s, idx) => (
              <button
                key={s.size}
                onClick={() => setSelectedSizeIndex(idx)}
                className={`px-3 py-1 rounded-full text-xs font-sans tracking-wider transition-all ${
                  selectedSizeIndex === idx
                    ? 'bg-[#1C1614] text-[#FAF6F0] font-medium shadow-xs'
                    : 'text-[#6B5C52] hover:text-[#1C1614]'
                }`}
              >
                {s.size}
              </button>
            ))}
          </div>

          {/* Price Presentation */}
          <div className="text-right">
            <span className="text-[10px] text-[#8C7B6D] uppercase tracking-wider block font-sans">
              {currentSizeObj.size} Extrait
            </span>
            <span className="font-serif text-2xl font-medium text-[#1C1614]">
              {currencyInfo.symbol}{convertedPrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Primary Action Button: 'Request a Scent' */}
        <div className="pt-1">
          <button
            onClick={() => onRequestScent(perfume, currentSizeObj)}
            className="w-full py-3.5 px-4 rounded-xl bg-[#1C1614] hover:bg-[#C59A47] text-[#FAF7F2] text-xs font-sans font-medium uppercase tracking-[0.2em] transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group/btn"
          >
            <span>Request this Scent</span>
            <svg className="w-4 h-4 text-[#C59A47] group-hover/btn:text-white transition-colors transform group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>

    </div>
  );
}
