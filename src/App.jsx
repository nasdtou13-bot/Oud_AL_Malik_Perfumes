import React, { useState, useMemo } from 'react';
import { BRAND_CONFIG } from './data/config';
import { PERFUMES } from './data/perfumes';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { ScentFilter } from './components/ScentFilter';
import { PerfumeCard } from './components/PerfumeCard';
import { OlfactoryModal } from './components/OlfactoryModal';
import { InquiryModal } from './components/InquiryModal';
import { BespokeSection } from './components/BespokeSection';
import { Footer } from './components/Footer';

export function App() {
  const [activeCurrency, setActiveCurrency] = useState(BRAND_CONFIG.defaultCurrency);
  const [activeVibe, setActiveVibe] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals state
  const [olfactoryPerfume, setOlfactoryPerfume] = useState(null);
  const [isOlfactoryOpen, setIsOlfactoryOpen] = useState(false);

  const [inquiryPerfume, setInquiryPerfume] = useState(null);
  const [inquiryInitialSize, setInquiryInitialSize] = useState(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  // Filtered perfumes calculation
  const filteredPerfumes = useMemo(() => {
    return PERFUMES.filter((item) => {
      // Vibe filter
      const matchesVibe = activeVibe === 'all' || item.vibe === activeVibe;
      if (!matchesVibe) return false;

      // Search query filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      
      const inName = item.name.toLowerCase().includes(q);
      const inArabic = item.arabicName.includes(q);
      const inSubtitle = item.subtitle.toLowerCase().includes(q);
      const inInspiration = item.inspiration.toLowerCase().includes(q);
      const inVibe = item.vibe.toLowerCase().includes(q);
      
      const inTopNotes = item.notes.top.some(n => n.toLowerCase().includes(q));
      const inHeartNotes = item.notes.heart.some(n => n.toLowerCase().includes(q));
      const inBaseNotes = item.notes.base.some(n => n.toLowerCase().includes(q));

      return inName || inArabic || inSubtitle || inInspiration || inVibe || inTopNotes || inHeartNotes || inBaseNotes;
    });
  }, [activeVibe, searchQuery]);

  // Handlers
  const handleOpenNotes = (perfume) => {
    setOlfactoryPerfume(perfume);
    setIsOlfactoryOpen(true);
  };

  const handleCloseNotes = () => {
    setIsOlfactoryOpen(false);
  };

  const handleOpenInquiry = (perfume, sizeObj) => {
    setInquiryPerfume(perfume);
    setInquiryInitialSize(sizeObj || perfume.sizes[0]);
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);
  };

  const handleOpenBespoke = () => {
    // Open inquiry modal configured for custom bespoke request
    const heroPerfume = PERFUMES[0];
    handleOpenInquiry(heroPerfume, heroPerfume.sizes[0]);
  };

  const scrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBespoke = () => {
    const el = document.getElementById('bespoke');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1614] flex flex-col font-sans selection:bg-[#C59A47]/30 selection:text-[#1C1614]">
      
      {/* Navigation */}
      <Navbar
        activeCurrency={activeCurrency}
        onCurrencyChange={setActiveCurrency}
        onOpenBespoke={scrollToBespoke}
      />

      {/* Hero Section */}
      <Hero
        onExploreClick={scrollToCollection}
        onBespokeClick={scrollToBespoke}
      />

      {/* Artisanal Heritage Story */}
      <StorySection />

      {/* Main Scent Catalog Section */}
      <main id="collection" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C59A47] font-sans font-medium">
            Artisanal Flacons
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1614] font-normal">
            The Scent Collection
          </h2>
          <div className="w-12 h-0.5 bg-[#C59A47] mx-auto my-3"></div>
          <p className="text-sm sm:text-base text-[#6E5E52] font-sans font-light">
            Filter by olfactory vibe or search by rare botanical notes. Every bottle is individually packaged in our signature keepsake gift box.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="mb-12">
          <ScentFilter
            activeVibe={activeVibe}
            onSelectVibe={setActiveVibe}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            totalCount={PERFUMES.length}
            filteredCount={filteredPerfumes.length}
          />
        </div>

        {/* Perfume Cards Grid */}
        {filteredPerfumes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredPerfumes.map((perfume) => (
              <PerfumeCard
                key={perfume.id}
                perfume={perfume}
                activeCurrency={activeCurrency}
                onExploreNotes={handleOpenNotes}
                onRequestScent={handleOpenInquiry}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-[#F5EFEB] rounded-3xl p-12 text-center max-w-md mx-auto border border-[#E3D8C8] space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#EAE2D4] text-[#8C7D70] flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-[#1C1614]">No Fragrance Found</h3>
            <p className="text-sm text-[#7A6D63] font-sans font-light">
              We couldn't find a perfume matching "{searchQuery}". Try searching for notes like <span className="font-medium text-[#1C1614]">oud, rose, amber, bergamot, or vanilla</span>.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveVibe('all'); }}
              className="px-6 py-2.5 rounded-full bg-[#1C1614] text-[#FAF7F2] text-xs font-sans uppercase tracking-widest font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>

      {/* Bespoke Private Formulation Section */}
      <BespokeSection onOpenBespokeInquiry={scrollToBespoke} />

      {/* Footer */}
      <Footer
        onExploreClick={scrollToCollection}
        onBespokeClick={scrollToBespoke}
      />

      {/* Sensory Olfactory Deep-Dive Modal */}
      <OlfactoryModal
        perfume={olfactoryPerfume}
        isOpen={isOlfactoryOpen}
        onClose={handleCloseNotes}
        onRequestFromModal={handleOpenInquiry}
        activeCurrency={activeCurrency}
      />

      {/* 'Request a Scent' Dual-Flow Inquiry Drawer / Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={handleCloseInquiry}
        perfume={inquiryPerfume}
        initialSize={inquiryInitialSize}
        activeCurrency={activeCurrency}
      />

    </div>
  );
}

export default App;
