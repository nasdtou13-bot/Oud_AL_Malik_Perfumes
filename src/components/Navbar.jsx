import React, { useState } from 'react';
import { BRAND_CONFIG } from '../data/config';

export function Navbar({ activeCurrency, onCurrencyChange, onOpenBespoke, wishlistCount }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#E8DFD3] transition-all duration-300">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#1C1614] text-[#E8DFD3] text-xs py-2 px-4 text-center tracking-widest font-sans uppercase flex items-center justify-center gap-3">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C59A47] animate-pulse"></span>
        <span>Artisanal Extrait de Parfum · Handcrafted in Small Batches · Worldwide Delivery</span>
        <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-[#C59A47]"></span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Crest */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full border border-[#C59A47]/60 flex items-center justify-center bg-gradient-to-br from-[#FAF6F0] to-[#EFE7D8] shadow-sm group-hover:border-[#C59A47] transition-all">
              <span className="font-serif text-lg font-bold text-[#C59A47] tracking-wider">OM</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.18em] text-[#1C1614] uppercase font-medium">
                {BRAND_CONFIG.brandName}
              </span>
              <span className="font-sans text-[10px] tracking-[0.25em] text-[#8C7D70] uppercase">
                Haute Parfumerie
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm tracking-wider uppercase font-sans text-[#4A3E35]">
            <a href="#collection" className="hover:text-[#C59A47] transition-colors py-1 relative group">
              The Collection
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C59A47] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#story" className="hover:text-[#C59A47] transition-colors py-1 relative group">
              Artisanal Story
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C59A47] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#olfactory-guide" className="hover:text-[#C59A47] transition-colors py-1 relative group">
              Scent Philosophy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C59A47] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button 
              onClick={onOpenBespoke}
              className="hover:text-[#C59A47] transition-colors py-1 relative group text-[#9E5336]"
            >
              Custom Bespoke
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9E5336] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Right Action: Currency Selector & Concierge Contact */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Currency Selector */}
            <div className="relative">
              <select
                value={activeCurrency}
                onChange={(e) => onCurrencyChange(e.target.value)}
                className="appearance-none bg-[#F4EFE6] border border-[#D8CEBF] text-[#2C2420] text-xs font-sans rounded-full px-3 py-1.5 pr-6 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C59A47] transition-all shadow-sm"
              >
                {Object.keys(BRAND_CONFIG.currencies).map((curr) => (
                  <option key={curr} value={curr}>
                    {BRAND_CONFIG.currencies[curr].label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#7A6E65]">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>

            {/* Direct WhatsApp Concierge Button */}
            <a
              href={`https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent("Hello Oud Al Malik, I would like to inquire about your bespoke perfumes.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#1C1614] text-[#FAF6F0] hover:bg-[#C59A47] transition-all duration-300 px-4 py-2 rounded-full text-xs uppercase tracking-widest font-sans font-medium shadow-sm hover:shadow-md"
            >
              <span>Concierge</span>
              <svg className="w-3.5 h-3.5 text-[#C59A47] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1C1614] hover:text-[#C59A47] focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6F0] border-b border-[#E8DFD3] px-6 py-6 space-y-4 font-sans text-sm tracking-wider uppercase">
          <a
            href="#collection"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#1C1614] hover:text-[#C59A47] py-2 border-b border-[#EFE7D8]"
          >
            The Collection
          </a>
          <a
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#1C1614] hover:text-[#C59A47] py-2 border-b border-[#EFE7D8]"
          >
            Artisanal Story
          </a>
          <a
            href="#olfactory-guide"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#1C1614] hover:text-[#C59A47] py-2 border-b border-[#EFE7D8]"
          >
            Scent Philosophy
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBespoke();
            }}
            className="block w-full text-left text-[#9E5336] hover:text-[#C59A47] py-2 border-b border-[#EFE7D8]"
          >
            Custom Bespoke Consultation
          </button>
          <div className="pt-2">
            <a
              href={`https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent("Hello Oud Al Malik, I would like to inquire about your perfumes.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#1C1614] text-[#FAF6F0] py-3 rounded-full text-xs uppercase tracking-widest font-sans font-medium"
            >
              Direct WhatsApp Concierge
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
