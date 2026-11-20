import React from 'react';

export function StorySection() {
  return (
    <section id="story" className="py-20 md:py-28 bg-[#F5EFEB] border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C59A47] font-sans font-medium">
            Artisanal Heritage & Vision
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1614] font-normal">
            The Philosophy of Pure Scent
          </h2>
          <div className="w-16 h-0.5 bg-[#C59A47] mx-auto my-4"></div>
          <p className="text-base sm:text-lg text-[#66584E] font-sans font-light leading-relaxed">
            In an era of rushed mass-market chemistry, our atelier returns to ancient Arab and Mediterranean perfumery principles. We blend patience, sacred raw botanicals, and high-concentration essential oils that evolve uniquely on your skin throughout the day and night.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E0D5C5] shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#EFE7D8] flex items-center justify-center text-[#9E5336] mb-6 group-hover:bg-[#1C1614] group-hover:text-[#C59A47] transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-[#1C1614] mb-3">25-Year Wild Agarwood</h3>
            <p className="text-sm text-[#66584E] font-sans font-light leading-relaxed">
              We exclusively use ethical, slow-cured wild oud distillates aged in oak casks. Unlike synthetic substitutes, true agarwood reveals deep, balsamic, animalic, and sweet resinous nuances over hours.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E0D5C5] shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#EFE7D8] flex items-center justify-center text-[#9E5336] mb-6 group-hover:bg-[#1C1614] group-hover:text-[#C59A47] transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-[#1C1614] mb-3">Extrait de Parfum</h3>
            <p className="text-sm text-[#66584E] font-sans font-light leading-relaxed">
              Every formula boasts an opulent 28% to 35% pure perfume oil concentration. A single mist on pulse points lingers well past 24 hours without irritating sensitive skin.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E0D5C5] shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#EFE7D8] flex items-center justify-center text-[#9E5336] mb-6 group-hover:bg-[#1C1614] group-hover:text-[#C59A47] transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-[#1C1614] mb-3">Direct Artisan Concierge</h3>
            <p className="text-sm text-[#66584E] font-sans font-light leading-relaxed">
              No impersonal automated carts. When you request a scent, you speak directly with our perfumer to ensure bottle availability, custom gifting notes, and personal advice tailored to your signature vibe.
            </p>
          </div>

        </div>

        {/* Editorial Quote Banner */}
        <div className="mt-16 bg-[#1C1614] text-[#FAF6F0] p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-[#C59A47]/30 shadow-xl">
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <span className="font-serif text-5xl text-[#C59A47] block leading-none font-bold">“</span>
            <p className="font-serif text-xl sm:text-2xl italic leading-relaxed text-[#EDE3D6] font-light">
              A perfume is not merely a fragrance; it is the invisible architecture of your memories, leaving an indelible signature long after you have departed the room.
            </p>
            <div className="pt-2">
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#C59A47] font-medium">
                Master Perfumer · Oud Al Malik Atelier
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
