import React, { useState, useEffect } from 'react';
import { Camera, Menu, X, ArrowUpRight } from 'lucide-react';
import './Header.css';

export default function Header({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo" onClick={closeMobileMenu}>
          <span className="brand-title">UNIPACT</span>
          <span className="brand-sub">FINE ART WEDDINGS</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#gallery" className="nav-link">Galleries</a>
          <a href="#investment" className="nav-link">Investment</a>
          <a href="#philosophy" className="nav-link">Philosophy</a>
          <a href="#testimonials" className="nav-link">Love Stories</a>
          <a href="#contact" className="nav-link">Inquire</a>
        </nav>

        {/* Header Action CTA */}
        <div className="header-actions">
          <button 
            className="btn-primary header-cta"
            onClick={() => {
              closeMobileMenu();
              onBookClick();
            }}
          >
            <span>Check Dates</span>
            <ArrowUpRight size={16} />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <a href="#gallery" onClick={closeMobileMenu}>Galleries</a>
          <a href="#investment" onClick={closeMobileMenu}>Investment</a>
          <a href="#philosophy" onClick={closeMobileMenu}>Philosophy</a>
          <a href="#testimonials" onClick={closeMobileMenu}>Love Stories</a>
          <a href="#contact" onClick={closeMobileMenu}>Inquire</a>
          <button 
            className="btn-primary mobile-cta"
            onClick={() => {
              closeMobileMenu();
              onBookClick();
            }}
          >
            <span>Check Availability</span>
            <ArrowUpRight size={16} />
          </button>
        </nav>
      </div>
    </header>
  );
}
