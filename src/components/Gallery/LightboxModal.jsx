import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Camera, Aperture, Heart } from 'lucide-react';
import './LightboxModal.css';

export default function LightboxModal({ 
  photo, 
  photos, 
  onClose, 
  onNavigate,
  onInquireStyle 
}) {
  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(photos[prevIndex]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % photos.length;
    onNavigate(photos[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev(e);
      if (e.key === 'ArrowRight') handleNext(e);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [currentIndex, photos]);

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true">
      {/* Top action bar */}
      <div className="lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-counter">
          <span>{currentIndex + 1}</span> / <span>{photos.length}</span>
        </div>
        <button 
          className="lightbox-close-btn" 
          onClick={onClose} 
          aria-label="Close photo preview"
        >
          <X size={24} />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button 
        className="lightbox-nav-btn prev-btn" 
        onClick={handlePrev} 
        aria-label="Previous photo"
      >
        <ChevronLeft size={36} />
      </button>

      <button 
        className="lightbox-nav-btn next-btn" 
        onClick={handleNext} 
        aria-label="Next photo"
      >
        <ChevronRight size={36} />
      </button>

      {/* Main Image Stage */}
      <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-img-wrapper">
          <img 
            src={photo.imageUrl} 
            alt={photo.title} 
            className="lightbox-img" 
          />
        </div>

        {/* Provenance Metadata Bar */}
        <div className="lightbox-details-panel">
          <div className="details-header">
            <div>
              <span className="details-location">
                <MapPin size={13} />
                {photo.location}
              </span>
              <h3 className="details-title">{photo.title}</h3>
            </div>
            <button 
              className="btn-primary lightbox-inquire-btn"
              onClick={() => {
                onClose();
                onInquireStyle(photo);
              }}
            >
              <span>Inquire This Mood</span>
            </button>
          </div>

          <p className="details-story">{photo.story}</p>

          <div className="details-exif-chips">
            <div className="exif-chip">
              <Camera size={13} className="exif-icon" />
              <span>{photo.camera}</span>
            </div>
            <div className="exif-chip">
              <Aperture size={13} className="exif-icon" />
              <span>{photo.lens}</span>
            </div>
            <div className="exif-chip exposure-chip">
              <span>{photo.exposure}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
