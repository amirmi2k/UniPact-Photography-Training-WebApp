import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">UNIPACT</span>
            <p className="footer-tagline">
              Fine Art & Editorial Wedding Photography.<br />
              Preserving unspoken romance across the globe.
            </p>
          </div>

          <div className="footer-nav-columns">
            <div className="footer-col">
              <h6>Navigation</h6>
              <a href="#gallery">Curated Galleries</a>
              <a href="#investment">Collections & Investment</a>
              <a href="#philosophy">The Philosophy</a>
              <a href="#testimonials">Love Stories</a>
            </div>

            <div className="footer-col">
              <h6>Destinations</h6>
              <span>Lake Como, Italy</span>
              <span>Paris & Provence, France</span>
              <span>Amalfi Coast, Italy</span>
              <span>Mallorca & Ibiza, Spain</span>
            </div>

            <div className="footer-col">
              <h6>Connect</h6>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">
                <InstagramIcon />
                <span>@unipactweddings</span>
              </a>
              <a href="#contact" className="inquire-quick">Book a Discovery Consultation</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} UniPact Wedding Photography. All rights reserved.
          </p>
          
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
