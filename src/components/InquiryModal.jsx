import React, { useState } from 'react';
import { BRAND_CONFIG } from '../data/config';

export function InquiryModal({ isOpen, onClose, perfume, initialSize, activeCurrency }) {
  if (!isOpen || !perfume) return null;

  const [activeTab, setActiveTab] = useState('whatsapp'); // 'whatsapp' | 'email'
  const [selectedSize, setSelectedSize] = useState(initialSize || perfume.sizes[0]);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');
  const [isGifting, setIsGifting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');

  const currencyInfo = BRAND_CONFIG.currencies[activeCurrency] || BRAND_CONFIG.currencies.USD;
  const currentPrice = Math.round(selectedSize.priceUSD * currencyInfo.rate);

  // Generate formatted WhatsApp message
  const generateWhatsAppMessage = () => {
    return `Hello Oud Al Malik Concierge,\n\nI would like to inquire about ordering:\n✦ Scent: ${perfume.name} (${perfume.arabicName})\n✦ Size: ${selectedSize.size} Extrait de Parfum\n✦ Price: ${currencyInfo.symbol}${currentPrice.toLocaleString()}\n${customerName ? `✦ My Name: ${customerName}\n` : ''}${customerNotes ? `✦ Note: ${customerNotes}\n` : ''}\nPlease let me know about availability and shipping details. Thank you!`;
  };

  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(generateWhatsAppMessage())}`;

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Generate unique inquiry ref
    const refCode = `OAM-${Math.floor(1000 + Math.random() * 9000)}`;
    setInquiryRef(refCode);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setCustomerName('');
    setCustomerEmail('');
    setCustomerPhone('');
    setCustomerNotes('');
    setIsGifting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      
      <div 
        className="relative bg-[#FAF7F2] rounded-3xl max-w-2xl w-full border border-[#D5C7B4] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#E8DFD3] bg-[#FAF7F2]">
          <div>
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#C59A47] block font-medium">
              Bespoke Concierge Flow
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1614] font-normal">
              Request a Scent
            </h2>
          </div>

          <button
            onClick={resetForm}
            className="w-9 h-9 rounded-full bg-[#EFE7D8] hover:bg-[#1C1614] text-[#6E5E52] hover:text-[#FAF7F2] flex items-center justify-center transition-all duration-200"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Selected Perfume Summary Bar */}
        <div className="bg-[#F4EFE6] px-6 sm:px-8 py-4 border-b border-[#E3D8C8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={perfume.image}
              alt={perfume.name}
              className="w-14 h-14 rounded-xl object-cover border border-[#D0C2AE] shadow-xs"
            />
            <div>
              <span className="text-[10px] font-sans uppercase tracking-wider text-[#9E5336] font-medium">
                {perfume.vibeLabel}
              </span>
              <h3 className="font-serif text-xl text-[#1C1614] font-medium leading-tight">
                {perfume.name}
              </h3>
              <p className="text-xs text-[#7A6C60] font-sans">
                {perfume.subtitle}
              </p>
            </div>
          </div>

          {/* Size Switcher & Price Display */}
          <div className="flex items-center gap-4 sm:flex-col sm:items-end justify-between">
            <div className="flex items-center gap-1 bg-[#EAE2D4] p-1 rounded-full border border-[#D5C7B4]">
              {perfume.sizes.map((s) => (
                <button
                  key={s.size}
                  type="button"
                  onClick={() => setSelectedSize(s)}
                  className={`px-2.5 py-0.5 rounded-full text-xs font-sans transition-all ${
                    selectedSize.size === s.size
                      ? 'bg-[#1C1614] text-[#FAF6F0] font-medium'
                      : 'text-[#6E5F55] hover:text-[#1C1614]'
                  }`}
                >
                  {s.size}
                </button>
              ))}
            </div>
            <div className="text-right">
              <span className="font-serif text-2xl font-medium text-[#1C1614]">
                {currencyInfo.symbol}{currentPrice.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Form Body or Submitted State */}
        {isSubmitted ? (
          /* Celebratory Confirmation State */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#EAE2D4] text-[#C59A47] flex items-center justify-center mx-auto border border-[#C59A47]/40 shadow-sm">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#C59A47] font-medium">
                Inquiry Received With Honor
              </span>
              <h3 className="font-serif text-3xl text-[#1C1614]">
                Thank You, {customerName || 'Esteemed Patron'}
              </h3>
              <p className="text-sm font-sans text-[#6B5C52] max-w-md mx-auto leading-relaxed">
                Your scent request for <span className="font-medium text-[#1C1614]">{perfume.name} ({selectedSize.size})</span> has been transmitted to our master perfumer.
              </p>
            </div>

            <div className="bg-[#F5EFEB] p-4 rounded-2xl border border-[#DFD3C2] max-w-sm mx-auto text-xs font-sans text-[#6B5C52] space-y-1">
              <p><span className="font-medium text-[#1C1614]">Inquiry Reference:</span> {inquiryRef}</p>
              <p><span className="font-medium text-[#1C1614]">Contact Method:</span> {customerEmail || customerPhone}</p>
              <p><span className="font-medium text-[#1C1614]">Estimated Response:</span> Within 2 to 4 business hours</p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1C1614] hover:bg-[#C59A47] text-[#FAF7F2] text-xs font-sans uppercase tracking-widest font-medium transition-all shadow-md"
              >
                Speed Up via WhatsApp
              </a>
              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-transparent border border-[#3C312A] text-[#1C1614] text-xs font-sans uppercase tracking-widest font-medium hover:bg-[#EAE2D4] transition-all"
              >
                Return to Collection
              </button>
            </div>
          </div>
        ) : (
          /* Dual-Action Form Interface */
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Tab Switcher: WhatsApp vs Email Form */}
            <div className="grid grid-cols-2 p-1 bg-[#EFE8DD] rounded-2xl border border-[#D5C7B4]">
              <button
                type="button"
                onClick={() => setActiveTab('whatsapp')}
                className={`py-3 px-4 rounded-xl text-xs font-sans tracking-wider uppercase font-medium transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'whatsapp'
                    ? 'bg-[#1C1614] text-[#FAF6F0] shadow-sm'
                    : 'text-[#66574D] hover:text-[#1C1614]'
                }`}
              >
                <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                <span>Instant WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('email')}
                className={`py-3 px-4 rounded-xl text-xs font-sans tracking-wider uppercase font-medium transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'email'
                    ? 'bg-[#1C1614] text-[#FAF6F0] shadow-sm'
                    : 'text-[#66574D] hover:text-[#1C1614]'
                }`}
              >
                <svg className="w-4 h-4 text-[#C59A47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Concierge</span>
              </button>
            </div>

            {/* TAB A: WHATSAPP DIRECT FLOW */}
            {activeTab === 'whatsapp' && (
              <div className="space-y-5">
                <div className="bg-[#FAF6F0] p-5 rounded-2xl border border-[#DFD3C2] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-sans font-medium text-[#25D366] uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                    <span>Fastest Response (Direct Line with the Perfumer)</span>
                  </div>
                  <p className="text-xs text-[#6B5C52] font-sans leading-relaxed">
                    Clicking below opens your WhatsApp directly with this prefilled inquiry message. You can customize it before hitting send:
                  </p>
                  
                  {/* Prefilled message preview box */}
                  <div className="bg-[#F2ECE1] p-4 rounded-xl border border-[#D5C8B7] font-mono text-xs text-[#2D231E] whitespace-pre-wrap leading-relaxed shadow-inner">
                    {generateWhatsAppMessage()}
                  </div>
                </div>

                {/* Optional Custom Greeting input */}
                <div className="space-y-1">
                  <label className="text-[11px] font-sans uppercase tracking-wider text-[#66574D] block">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Lady Sarah or Tariq"
                    className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D0C2AE] rounded-xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#C59A47]"
                  />
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-2xl bg-[#1C1614] hover:bg-[#25D366] text-white text-xs font-sans font-medium uppercase tracking-[0.2em] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  <span>Launch WhatsApp to Inquire</span>
                </a>
              </div>
            )}

            {/* TAB B: CONCIERGE EMAIL FORM */}
            {activeTab === 'email' && (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-sans uppercase tracking-wider text-[#66574D] block font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D0C2AE] rounded-xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#C59A47]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-sans uppercase tracking-wider text-[#66574D] block font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="client@domain.com"
                      className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D0C2AE] rounded-xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#C59A47]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-sans uppercase tracking-wider text-[#66574D] block">
                      Phone / City
                    </label>
                    <input
                      type="text"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="+971 ... or London, UK"
                      className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D0C2AE] rounded-xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#C59A47]"
                    />
                  </div>

                  {/* Gift option toggle */}
                  <div className="flex items-center space-x-3 pt-6">
                    <input
                      type="checkbox"
                      id="gifting"
                      checked={isGifting}
                      onChange={(e) => setIsGifting(e.target.checked)}
                      className="w-4 h-4 text-[#C59A47] rounded border-gray-300 focus:ring-[#C59A47]"
                    />
                    <label htmlFor="gifting" className="text-xs font-sans text-[#4A3E35] cursor-pointer">
                      Includes Luxury Gift Packaging & Card
                    </label>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-sans uppercase tracking-wider text-[#66574D] block">
                    Special Requests or Questions
                  </label>
                  <textarea
                    rows={3}
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    placeholder="Custom calligraphy message, sample requests, or delivery date inquiries..."
                    className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D0C2AE] rounded-xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#C59A47] resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#1C1614] hover:bg-[#C59A47] text-[#FAF7F2] text-xs font-sans font-medium uppercase tracking-[0.2em] transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    Submit Scent Inquiry to Atelier
                  </button>
                  <p className="text-[11px] text-center text-[#8C7D70] font-sans mt-2">
                    Our concierge responds with payment link and shipping options within hours.
                  </p>
                </div>
              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
