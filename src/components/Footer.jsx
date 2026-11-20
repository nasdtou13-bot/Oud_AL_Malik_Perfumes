import React from 'react';
import { BRAND_CONFIG } from '../data/config';

export function Footer({ onExploreClick, onBespokeClick }) {
  return (
    <footer className="bg-[#15100E] text-[#E0D5C7] border-t border-[#2D231E] font-sans">
      
      {/* Upper Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C59A47] flex items-center justify-center bg-[#1C1614]">
                <span className="font-serif text-base font-bold text-[#C59A47]">OM</span>
              </div>
              <span className="font-serif text-2xl tracking-[0.18em] text-[#FAF7F2] uppercase">
                {BRAND_CONFIG.brandName}
              </span>
            </div>
            
            <p className="text-sm text-[#A89C90] leading-relaxed max-w-sm font-light">
              {BRAND_CONFIG.description} Each fragrance is compounded with reverent dedication to Arabic and French haute parfumerie heritage.
            </p>

            <div className="pt-2 text-xs text-[#C59A47] font-serif tracking-widest" dir="rtl">
              صَنَائِع الأَصَالَةِ وَالفَخَامَة · مُنْذُ ٢٠١٢
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C59A47] font-semibold">
              Atelier Directory
            </h4>
            <ul className="space-y-2 text-sm text-[#A89C90]">
              <li>
                <button onClick={onExploreClick} className="hover:text-white transition-colors">
                  The Signature Collection
                </button>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Artisanal Heritage & Woods
                </a>
              </li>
              <li>
                <button onClick={onBespokeClick} className="hover:text-white transition-colors">
                  Bespoke Consultation
                </button>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors text-[#25D366]"
                >
                  Direct WhatsApp Concierge
                </a>
              </li>
            </ul>
          </div>

          {/* Perfume Care & Preservation Guide */}
          <div className="lg:col-span-4 space-y-3 bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C59A47] font-semibold flex items-center gap-2">
              <span>✦</span> Care for Extrait de Parfum
            </h4>
            <p className="text-xs text-[#A89C90] leading-relaxed font-light">
              Because our extraits contain high percentages of unadulterated pure botanical oils, store your bottle in a cool, dark sanctuary away from direct sunlight. Genuine oud and amber notes gracefully macerate and deepen in complexity over decades.
            </p>
            <div className="pt-1 text-[11px] text-[#C59A47]">
              Contact: {BRAND_CONFIG.contact.email}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer */}
      <div className="border-t border-white/10 py-6 px-4 text-center text-xs text-[#7A6E63]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {BRAND_CONFIG.brandName}. All rights reserved.</p>
          <p className="text-[11px] text-[#A89C90]">
            Crafted for pure luxury · Extrait de Parfum Small Batch Formulation
          </p>
        </div>
      </div>

    </footer>
  );
}
