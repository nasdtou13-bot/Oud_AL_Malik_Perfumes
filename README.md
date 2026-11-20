# Oud Al Malik Perfumes · Haute Parfumerie Web App

A soft, warm luxury-editorial fragrance showcase and inquiry web application crafted for **Oud Al Malik Perfumes**.

---

## 🌟 Features

- **Soft, Warm Luxury Editorial Aesthetic**:
  - Warm sand / linen background (`#FAF7F2`)
  - Deep espresso typography (`#1C1614`)
  - Antique gold (`#C59A47`) and warm terracotta accents
  - *Cormorant Garamond* luxury serif typography paired with *Plus Jakarta Sans*
- **Curated 7-Fragrance Artisanal Collection**:
  - Malik Al Oud (King of Oud) — 25-Year Aged Cambodian Agarwood & Smoked Cuir Leather
  - Sultana Rose — Dawn-picked Taif Damascena Rose & Mysore Sandalwood
  - Amber Al Andalus — Golden Amber, Bourbon Vanilla & Spiced Honey
  - Desert Breeze — Crisp Mountain Neroli, Calabrian Bergamot & Haitian Vetiver
  - Nocturne Musk — Black Assam Agarwood, Tellicherry Pepper & Omani Frankincense
  - Fleur Blanche — Night-Blooming Sambac Jasmine, Gardenia & White Cedar
  - Saffron & Silk — Persian Crimson Saffron, Roasted Almond & Amber Resin
- **Olfactory Exploration**:
  - Live search across scent names, moods, and specific notes (e.g. *oud*, *rose*, *vanilla*, *bergamot*).
  - Vibe filter pills (*Woody & Oriental*, *Floral Bouquet*, *Sweet & Amber*, *Fresh & Citrus*).
  - Visual 3-tier Olfactory Pyramid (Top, Heart, Base notes) with duration timelines.
  - Bottle size selectors (50ml & 100ml Extrait de Parfum) with real-time price updates.
  - Multi-currency switcher (USD, AED, GBP, EUR).
- **'Request a Scent' Dual-Flow Inquiry System**:
  - **Direct WhatsApp Concierge**: Instant 1-click launch to WhatsApp with a prefilled message containing the exact perfume name, bottle size, price, and customer note.
  - **Concierge Email Form**: Client contact capture with luxury confirmation reference code.
- **Bespoke Consultation Section**:
  - Private bridal formulations, custom wedding favors, and personalized engraved crystal flacons.

---

## 🚀 How to Run & View the App

### Option A: Instant Open (No Setup Required!)
Simply double-click `index.html` in the root folder or open it in any web browser (Google Chrome, Microsoft Edge, Safari, Firefox). It runs instantly with React 18 and Tailwind CSS.

### Option B: Local Python Server
Run the included `start-server.bat` or run:
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000` in your browser.

### Option C: Modern Vite Dev Server (If Node.js is installed)
```bash
npm install
npm run dev
```

---

## 🛠️ How to Customize for Your Aunt

All configuration and perfume data are neatly separated:

1. **Aunt's WhatsApp Number & Contact Details**:
   - Open `src/data/config.js` or edit `BRAND_CONFIG` in `index.html`.
   - Update `whatsappNumber: "1234567890"` with her full phone number (country code + number without '+' or spaces, e.g. `971501234567`).
   - Update `email`, `instagram`, or `location`.

2. **Perfumes & Pricing**:
   - Open `src/data/perfumes.js` or edit `PERFUMES` in `index.html`.
   - Each perfume has `name`, `arabicName`, `vibe`, `sizes` (`50ml`, `100ml` prices in USD), `notes` (top, heart, base), and `image`.
