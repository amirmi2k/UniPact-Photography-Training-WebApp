import React from 'react';
import { ArrowDown, Award, Sparkles } from 'lucide-react';
import './Hero.css';

export default function Hero({ onExploreClick, onInquireClick }) {
  return (
    <section className="hero-section">
      {/* Ambient Visual Stills Background */}
      <div className="hero-bg-media">
        <div className="hero-overlay-gradient"></div>
        <div className="hero-film-grain"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Eyebrow badge */}
          <div className="hero-badge">
            <Sparkles size={14} className="gold-sparkle" />
            <span>FINE ART & EDITORIAL WEDDINGS • WORLDWIDE</span>
          </div>

          {/* Main Cinematic Title */}
          <h1 className="hero-headline">
            Preserving <em>Unspoken</em> Romance & Wild Devotion.
          </h1>

          {/* Subtitle */}
          <p className="hero-subtext">
            For couples who value deep, unscripted emotion over staged poses. 
            Documenting luxury destination celebrations across Lake Como, Paris, 
            the Amalfi Coast, and secluded estates across the world.
          </p>

          {/* Action CTAs */}
          <div className="hero-ctas">
            <button className="btn-primary hero-btn-inquire" onClick={onInquireClick}>
              <span>Tell Us Your Story</span>
            </button>
            <button className="btn-secondary hero-btn-explore" onClick={onExploreClick}>
              <span>Explore The Work</span>
              <ArrowDown size={16} />
            </button>
          </div>
        </div>

        {/* Floating Accolades Bar */}
        <div className="hero-accolades">
          <div className="accolade-item">
            <Award size={18} className="accolade-icon" />
            <div className="accolade-text">
              <span className="accolade-title">Featured Worldwide</span>
              <span className="accolade-pub">Vogue Weddings • Junebug • Harper's Bazaar</span>
            </div>
          </div>
          <div className="accolade-divider"></div>
          <div className="accolade-item">
            <div className="accolade-stat">12+</div>
            <div className="accolade-text">
              <span className="accolade-title">Years Dedicated</span>
              <span className="accolade-pub">240+ Heirloom Love Stories</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="hero-scroll-indicator" onClick={onExploreClick}>
        <span className="scroll-label">SCROLL TO EXPERIENCE</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
