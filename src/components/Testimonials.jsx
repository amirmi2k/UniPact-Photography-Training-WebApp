import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data/testimonialsData';
import './Testimonials.css';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="testimonials-inner-card">
          <Quote size={48} className="quote-icon" />

          {/* Stars */}
          <div className="stars-row">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={15} fill="#d4af37" color="#d4af37" />
            ))}
          </div>

          {/* Testimonial Quote */}
          <blockquote className="testimonial-quote">
            "{current.quote}"
          </blockquote>

          {/* Couple Credentials */}
          <div className="testimonial-author">
            <h4 className="couple-names">{current.couple}</h4>
            <span className="couple-venue">{current.venue}</span>
            <small className="couple-date">{current.date}</small>
          </div>

          {/* Carousel Arrows */}
          <div className="testimonial-controls">
            <button className="carousel-btn" onClick={prev} aria-label="Previous review">
              <ChevronLeft size={20} />
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button className="carousel-btn" onClick={next} aria-label="Next review">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
