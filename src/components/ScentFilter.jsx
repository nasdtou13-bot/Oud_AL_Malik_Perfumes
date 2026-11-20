import React from 'react';
import { VIBES } from '../data/perfumes';

export function ScentFilter({ activeVibe, onSelectVibe, searchQuery, onSearchChange, totalCount, filteredCount }) {
  return (
    <div className="space-y-6">
      
      {/* Top Controls: Search and Status */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search Bar with Luxury Styling */}
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#8C7D70]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search notes (e.g. oud, saffron, rose, vanilla)..."
            className="w-full pl-11 pr-10 py-3 bg-[#FAF7F2] border border-[#DCD0C1] rounded-full text-sm font-sans text-[#1C1614] placeholder-[#8C7D70] focus:outline-none focus:ring-1 focus:ring-[#C59A47] focus:border-[#C59A47] transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#8C7D70] hover:text-[#1C1614]"
              title="Clear search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Live Counter Display */}
        <div className="text-xs font-sans uppercase tracking-widest text-[#7A6D63] self-end md:self-center">
          Showing <span className="font-semibold text-[#1C1614]">{filteredCount}</span> of <span className="font-semibold text-[#1C1614]">{totalCount}</span> Artisanal Blends
        </div>
      </div>

      {/* Vibe Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {VIBES.map((vibe) => {
          const isActive = activeVibe === vibe.id;
          return (
            <button
              key={vibe.id}
              onClick={() => onSelectVibe(vibe.id)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 flex items-center gap-2 border ${
                isActive
                  ? 'bg-[#1C1614] text-[#FAF7F2] border-[#1C1614] shadow-md scale-[1.02]'
                  : 'bg-[#FAF7F2] text-[#55473E] border-[#DCD0C1] hover:border-[#C59A47] hover:text-[#1C1614]'
              }`}
            >
              <span>{vibe.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                isActive ? 'bg-[#C59A47] text-[#1C1614] font-semibold' : 'bg-[#EAE1D3] text-[#6E5F55]'
              }`}>
                {vibe.count}
              </span>
            </button>
          );
        })}
      </div>

    </div>
  );
}
