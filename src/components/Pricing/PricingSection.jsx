import React from 'react';
import { Check, Sparkles, Plus, ArrowRight } from 'lucide-react';
import { pricingPackages, pricingAddons } from '../../data/pricingData';
import './PricingSection.css';

export default function PricingSection({ onSelectPackage }) {
  return (
    <section id="investment" className="pricing-section">
      <div className="container">
        {/* Header */}
        <div className="pricing-header-block">
          <span className="section-tag">INVESTMENT & COLLECTIONS</span>
          <h2 className="section-title">
            Transparent Heirlooms, <em>Curated</em> With Devotion.
          </h2>
          <p className="section-desc">
            No ambiguous games or hidden travel fee surprises. Every wedding collection is designed to 
            deliver an uncompromised fine art experience from your first look to your generational album.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="pricing-cards-grid">
          {pricingPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`pricing-card ${pkg.popular ? 'featured' : ''}`}
            >
              {pkg.popular && (
                <div className="featured-badge">
                  <Sparkles size={13} />
                  <span>{pkg.badge}</span>
                </div>
              )}

              <div className="pricing-card-header">
                <span className="pkg-subtitle">{pkg.subtitle}</span>
                <h3 className="pkg-name">{pkg.name}</h3>
                <div className="pkg-price-wrap">
                  <span className="price-prefix">Beginning at</span>
                  <span className="pkg-price">{pkg.startingPrice}</span>
                </div>
                <p className="pkg-desc">{pkg.description}</p>
              </div>

              <div className="pkg-divider"></div>

              {/* Inclusions List */}
              <ul className="pkg-deliverables">
                {pkg.deliverables.map((item, i) => (
                  <li key={i} className="deliverable-item">
                    <Check size={16} className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Card Action */}
              <button 
                className={pkg.popular ? 'btn-primary pkg-action-btn' : 'btn-secondary pkg-action-btn'}
                onClick={() => onSelectPackage(pkg)}
              >
                <span>Reserve {pkg.name}</span>
                <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>

        {/* Bespoke Add-ons Section */}
        <div className="addons-container">
          <div className="addons-header">
            <h4 className="addons-title">Bespoke Heirlooms & Commission Add-ons</h4>
            <p className="addons-desc">Elevate your collection with analog film, additional days, or museum albums.</p>
          </div>

          <div className="addons-grid">
            {pricingAddons.map((addon, index) => (
              <div key={index} className="addon-card">
                <div className="addon-top">
                  <h5 className="addon-name">{addon.title}</h5>
                  <span className="addon-price">{addon.price}</span>
                </div>
                <p className="addon-desc">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
