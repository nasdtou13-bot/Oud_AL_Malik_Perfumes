import React from 'react';
import { BRAND_CONFIG } from '../data/config';

export function OlfactoryModal({ perfume, isOpen, onClose, onRequestFromModal, activeCurrency }) {
  if (!isOpen || !perfume) return null;

  const currencyInfo = BRAND_CONFIG.currencies[activeCurrency] || BRAND_CONFIG.currencies.USD;
  const basePrice = Math.round(perfume.sizes[0].priceUSD * currencyInfo.rate);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative bg-[#FAF7F2] rounded-3xl max-w-3xl w-full border border-[#D5C7B4] shadow-2xl overflow-hidden transition-all my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Header with Close */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#E8DFD3] bg-[#FAF7F2]">
          <div>
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#C59A47] block font-medium">
              Olfactory Anatomy & Story
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1614] font-normal">
              {perfume.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#EFE7D8] hover:bg-[#1C1614] text-[#6E5E52] hover:text-[#FAF7F2] flex items-center justify-center transition-all duration-200"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          
          {/* Top Banner with Image & Mood */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center bg-[#F4EFE6] p-4 sm:p-5 rounded-2xl border border-[#DFD3C2]">
            <div className="sm:col-span-4 rounded-xl overflow-hidden aspect-[4/5] bg-stone-900 shadow-md">
              <img
                src={perfume.image}
                alt={perfume.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:col-span-8 space-y-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-sans uppercase tracking-wider bg-[#1C1614] text-[#FAF6F0]">
                {perfume.vibeLabel}
              </span>
              <p className="font-serif text-lg text-[#C59A47]" dir="rtl">{perfume.arabicName}</p>
              <p className="text-sm text-[#4E4137] font-sans leading-relaxed italic">
                "{perfume.inspiration}"
              </p>
              <div className="pt-2 grid grid-cols-2 gap-3 text-xs font-sans text-[#6B5B4E]">
                <div>
                  <span className="font-semibold text-[#1C1614] block">Longevity</span>
                  {perfume.characteristics.longevity}
                </div>
                <div>
                  <span className="font-semibold text-[#1C1614] block">Sillage</span>
                  {perfume.characteristics.sillage}
                </div>
                <div>
                  <span className="font-semibold text-[#1C1614] block">Ideal Aura</span>
                  {perfume.characteristics.mood}
                </div>
                <div>
                  <span className="font-semibold text-[#1C1614] block">Season</span>
                  {perfume.characteristics.season}
                </div>
              </div>
            </div>
          </div>

          {/* Visual Olfactory Pyramid */}
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="font-serif text-2xl text-[#1C1614]">The Olfactory Pyramid</h3>
              <p className="text-xs text-[#7A6D63] font-sans uppercase tracking-wider mt-0.5">
                How the fragrance evolves across 24 hours
              </p>
            </div>

            <div className="space-y-3 pt-2">
              
              {/* 1. TOP NOTES */}
              <div className="bg-[#FAF6F0] p-4 sm:p-5 rounded-2xl border border-[#E3D6C5] shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5B562]"></span>
                    <span className="font-serif text-lg text-[#1C1614] font-medium">1. Top Notes (The Sparkle)</span>
                  </div>
                  <span className="text-[11px] font-sans text-[#8C7D70] uppercase tracking-wider">
                    First 15–30 Mins
                  </span>
                </div>
                <p className="text-xs text-[#6B5C52] font-sans mb-3">
                  The initial impression: bright, volatile botanical essences that welcome you to the fragrance.
                </p>
                <div className="flex flex-wrap gap-2">
                  {perfume.notes.top.map((note, i) => (
                    <span key={i} className="text-xs font-sans px-3 py-1.5 rounded-full bg-[#F3ECE1] text-[#2D231E] border border-[#DDD0BF] font-medium">
                      ✦ {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* 2. HEART / MIDDLE NOTES */}
              <div className="bg-[#FAF6F0] p-4 sm:p-5 rounded-2xl border border-[#E3D6C5] shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#9E5336]"></span>
                    <span className="font-serif text-lg text-[#1C1614] font-medium">2. Heart Notes (The Soul)</span>
                  </div>
                  <span className="text-[11px] font-sans text-[#8C7D70] uppercase tracking-wider">
                    30 Mins – 6 Hours
                  </span>
                </div>
                <p className="text-xs text-[#6B5C52] font-sans mb-3">
                  The blossoming core: rich florals, spices, and resins that emerge as the perfume warms to your skin.
                </p>
                <div className="flex flex-wrap gap-2">
                  {perfume.notes.heart.map((note, i) => (
                    <span key={i} className="text-xs font-sans px-3 py-1.5 rounded-full bg-[#F3ECE1] text-[#2D231E] border border-[#DDD0BF] font-medium">
                      ✦ {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3. BASE NOTES */}
              <div className="bg-[#FAF6F0] p-4 sm:p-5 rounded-2xl border border-[#E3D6C5] shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1C1614]"></span>
                    <span className="font-serif text-lg text-[#1C1614] font-medium">3. Base Notes (The Lingering Memory)</span>
                  </div>
                  <span className="text-[11px] font-sans text-[#8C7D70] uppercase tracking-wider">
                    6 – 24+ Hours
                  </span>
                </div>
                <p className="text-xs text-[#6B5C52] font-sans mb-3">
                  The enduring sovereign foundation: rare wild oud, ambergris, aged woods, and sacred musks that linger on fabric and skin.
                </p>
                <div className="flex flex-wrap gap-2">
                  {perfume.notes.base.map((note, i) => (
                    <span key={i} className="text-xs font-sans px-3 py-1.5 rounded-full bg-[#F3ECE1] text-[#2D231E] border border-[#DDD0BF] font-medium">
                      ✦ {note}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Full Narrative Origin Story */}
          <div className="bg-[#FAF7F2] border border-[#E5DACD] p-6 rounded-2xl space-y-3">
            <h4 className="font-serif text-xl text-[#1C1614]">Atelier Formulation Story</h4>
            <p className="text-sm text-[#5E5147] font-sans font-light leading-relaxed">
              {perfume.story}
            </p>
          </div>

        </div>

        {/* Sticky Footer Action */}
        <div className="px-6 sm:px-8 py-4 border-t border-[#E8DFD3] bg-[#FAF7F2] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-sans text-[#8C7D70] uppercase tracking-wider block">
              Available from
            </span>
            <span className="font-serif text-xl font-medium text-[#1C1614]">
              {currencyInfo.symbol}{basePrice.toLocaleString()} ({perfume.sizes[0].size})
            </span>
          </div>

          <button
            onClick={() => {
              onClose();
              onRequestFromModal(perfume, perfume.sizes[0]);
            }}
            className="px-6 py-3 rounded-full bg-[#1C1614] hover:bg-[#C59A47] text-[#FAF7F2] text-xs font-sans font-medium uppercase tracking-[0.2em] transition-all shadow-md hover:shadow-lg"
          >
            Request Scent via Concierge →
          </button>
        </div>

      </div>
    </div>
  );
}
