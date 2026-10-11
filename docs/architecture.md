# Technical Architecture: UniPact React Portfolio

## 1. Stack & Framework
- **Framework**: React 19 + Vite 6
- **Styling**: Vanilla CSS Modules / Component-scoped CSS with CSS Variables Design System
- **Icons**: Lucide React (`lucide-react`)
- **Typography**: Google Fonts (Cormorant Garamond, Plus Jakarta Sans)

## 2. Component Hierarchy
```
src/
├── main.jsx                     # Vite React entry mount
├── App.jsx                      # App shell & layout coordinator
├── index.css                    # Design tokens, resets, typography, global utilities
├── data/
│   ├── galleryData.js           # Curated photo collection with EXIF metadata
│   ├── pricingData.js           # 3 investment tiers & add-ons
│   └── testimonialsData.js      # Authentic couple stories & reviews
├── components/
│   ├── Header.jsx               # Glassmorphic nav bar & mobile menu drawer
│   ├── Hero.jsx                 # Ambient Ken Burns hero & social proof badges
│   ├── Gallery/
│   │   ├── GallerySection.jsx   # Filter pills, masonry grid
│   │   ├── GalleryCard.jsx      # Individual photo card with hover effects
│   │   └── LightboxModal.jsx    # Full-screen modal with EXIF & keyboard nav
│   ├── Pricing/
│   │   ├── PricingSection.jsx   # Investment tier cards & add-ons
│   │   └── PricingCard.jsx      # Tier card with deliverables & inquiry trigger
│   ├── Philosophy.jsx           # Behind the lens artist statement
│   ├── Testimonials.jsx         # Couple reviews carousel
│   ├── ContactForm.jsx          # "Tell Me Your Story" questionnaire & success card
│   └── Footer.jsx               # Branded footer & back-to-top button
```

## 3. State Architecture
- `selectedPackage`: Set when user clicks "Inquire About This Collection" on any tier; automatically scrolls down and pre-selects the package in `ContactForm`.
- `activeFilter`: Current gallery category filter ('all', 'anticipation', 'vows', 'portraits', 'after-dark').
- `activePhoto`: Active photo in `LightboxModal` (supports left/right arrow navigation, Escape to close).
- `formData`: Controlled state in `ContactForm` with client validation and confirmation modal.
