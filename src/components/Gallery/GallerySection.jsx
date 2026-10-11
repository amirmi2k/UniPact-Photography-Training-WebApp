import React, { useState } from 'react';
import { Eye, MapPin, Sparkles } from 'lucide-react';
import { galleryPhotos } from '../../data/galleryData';
import LightboxModal from './LightboxModal';
import './GallerySection.css';

const CATEGORIES = [
  { id: 'all', label: 'All Highlights' },
  { id: 'anticipation', label: 'The Anticipation' },
  { id: 'vows', label: 'The Sacred Vows' },
  { id: 'portraits', label: 'Intimate Portraits' },
  { id: 'after-dark', label: 'After Dark' }
];

export default function GallerySection({ onInquireStyle }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos = activeTab === 'all'
    ? galleryPhotos
    : galleryPhotos.filter((p) => p.category === activeTab);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="gallery-header-block">
          <span className="section-tag">CURATED PORTFOLIO</span>
          <h2 className="section-title">
            Curated Moments, <em>Filtered</em> by Emotion.
          </h2>
          <p className="section-desc">
            We don't overwhelm you with an unsorted dump of 500 photos. 
            Experience our wedding stories divided into their key emotional chapters.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="gallery-tabs-wrapper">
          <div className="gallery-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                <span>{cat.label}</span>
                {activeTab === cat.id && <span className="tab-indicator" />}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Responsive Grid */}
        <div className="gallery-masonry-grid">
          {filteredPhotos.map((photo, index) => (
            <div 
              key={photo.id} 
              className={`gallery-card aspect-${photo.aspect}`}
              onClick={() => setSelectedPhoto(photo)}
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <div className="card-image-wrapper">
                <img 
                  src={photo.imageUrl} 
                  alt={photo.title} 
                  loading="lazy" 
                  className="card-img" 
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85';
                  }}
                />
                
                {/* Dark Vignette & Hover Reveal */}
                <div className="card-hover-overlay">
                  <div className="overlay-top">
                    <span className="overlay-location">
                      <MapPin size={12} />
                      {photo.location}
                    </span>
                  </div>
                  <div className="overlay-bottom">
                    <h3 className="overlay-title">{photo.title}</h3>
                    <div className="overlay-inspect">
                      <span>Inspect Provenance</span>
                      <Eye size={15} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <LightboxModal 
          photo={selectedPhoto}
          photos={filteredPhotos}
          onClose={() => setSelectedPhoto(null)}
          onNavigate={(photo) => setSelectedPhoto(photo)}
          onInquireStyle={(photo) => {
            setSelectedPhoto(null);
            onInquireStyle(photo);
          }}
        />
      )}
    </section>
  );
}
