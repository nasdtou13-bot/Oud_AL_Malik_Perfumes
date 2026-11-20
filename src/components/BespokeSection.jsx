import React from 'react';
import { BRAND_CONFIG } from '../data/config';

export function BespokeSection({ onOpenBespokeInquiry }) {
  const whatsappCustomUrl = `https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent("Hello Oud Al Malik Atelier, I am interested in scheduling a custom bespoke perfume consultation (or bridal fragrance formulation).")}`;

  return (
    <section id="bespoke" className="py-20 md:py-28 bg-[#1C1614] text-[#FAF7F2] relative overflow-hidden">
      
      {/* Decorative Gold Radial Mesh */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#C59A47]/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#9E5336]/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#C59A47]/40 text-[#C59A47] text-xs font-sans uppercase tracking-[0.25em]">
              <span>Haute Parfumerie Sur Mesure</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight">
              Bespoke Private Formulation & Royal Bridal Gifting
            </h2>

            <p className="text-base sm:text-lg text-[#D2C5B7] font-sans font-light leading-relaxed">
              For distinguished patrons who desire an olfactory signature that belongs to them alone. Collaborate one-on-one with our master perfumer to compound a unique personal fragrance, custom wedding guest favors, or an engraved crystal flacon.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
              <div>
                <p className="font-serif text-xl text-[#C59A47]">One-of-One</p>
                <p className="text-xs text-[#A89C90] font-sans mt-1">Formula retired exclusively to your personal vault.</p>
              </div>
              <div>
                <p className="font-serif text-xl text-[#C59A47]">Bridal Favors</p>
                <p className="text-xs text-[#A89C90] font-sans mt-1">Miniature 10ml flacons with custom calligraphy seals.</p>
              </div>
              <div>
                <p className="font-serif text-xl text-[#C59A47]">Gold Flacon</p>
                <p className="text-xs text-[#A89C90] font-sans mt-1">Hand-engraved crystal with 24k gold leaf accents.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={whatsappCustomUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#C59A47] hover:bg-[#D4AF37] text-[#1C1614] text-xs font-sans font-semibold uppercase tracking-[0.25em] rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5 text-center"
              >
                Schedule WhatsApp Consultation
              </a>
              <button
                onClick={onOpenBespokeInquiry}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:border-white text-white text-xs font-sans font-medium uppercase tracking-[0.25em] rounded-full transition-all text-center"
              >
                Inquire via Email
              </button>
            </div>
          </div>

          {/* Right Visual Box */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-[#C59A47]/40 p-3 bg-white/5 backdrop-blur-md shadow-2xl">
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=80"
                  alt="Custom Bespoke Flacon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <span className="font-serif text-lg text-[#C59A47] block">
                  Private Atelier Appointment
                </span>
                <span className="text-xs text-[#A89C90] font-sans">
                  Available in Dubai, London & via Virtual Sensory Consultation
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
