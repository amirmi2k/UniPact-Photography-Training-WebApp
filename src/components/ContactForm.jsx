import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Sparkles, Calendar, MapPin, Mail, Phone, User } from 'lucide-react';
import { pricingPackages } from '../data/pricingData';
import './ContactForm.css';

export default function ContactForm({ preselectedPackage }) {
  const [formData, setFormData] = useState({
    names: '',
    email: '',
    phone: '',
    date: '',
    venue: '',
    packageId: 'full-story',
    howMet: '',
    vision: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedPackage) {
      setFormData((prev) => ({
        ...prev,
        packageId: preselectedPackage.id
      }));
    }
  }, [preselectedPackage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        {/* Left Editorial Text */}
        <div className="contact-info-col">
          <span className="section-tag">COMMISSIONS & INQUIRIES</span>
          <h2 className="section-title">
            Tell Us Your <em>Love Story</em>.
          </h2>
          <p className="contact-intro">
            We limit our calendar to twenty-two weddings each year to ensure 
            uncompromised presence, dedication, and artistic intimacy for each couple.
          </p>

          <div className="contact-perks">
            <div className="perk-item">
              <Sparkles size={18} className="perk-icon" />
              <div>
                <h5>Personalized Proposal</h5>
                <p>We review your date and vision within 24 hours with a custom investment breakdown.</p>
              </div>
            </div>

            <div className="perk-item">
              <Calendar size={18} className="perk-icon" />
              <div>
                <h5>2026 & 2027 Inquiries Open</h5>
                <p>Dates for Lake Como, Paris, Amalfi, and US destinations are booking actively.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="contact-card-col">
          {submitted ? (
            <div className="success-state-card">
              <div className="success-icon-wrap">
                <CheckCircle2 size={44} className="success-icon" />
              </div>
              <h3 className="success-title">Your Story Has Been Received</h3>
              <p className="success-desc">
                Thank you, <strong>{formData.names}</strong>. We are deeply honored by the thought of 
                documenting your wedding at <strong>{formData.venue || 'your destination'}</strong>.
              </p>
              <div className="success-details-pill">
                <span>Direct inquiry reference: #UP-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <p className="success-sub">
                Alexander will personally review your story and respond to <em>{formData.email}</em> within 24 hours.
              </p>
              <button 
                className="btn-secondary" 
                onClick={() => setSubmitted(false)}
              >
                <span>Send Another Message</span>
              </button>
            </div>
          ) : (
            <form className="guided-inquiry-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                {/* Couple Names */}
                <div className="form-group">
                  <label className="form-label" htmlFor="names">
                    Both of Your Names <span className="req">*</span>
                  </label>
                  <div className="input-wrap">
                    <User size={16} className="input-icon" />
                    <input 
                      type="text" 
                      id="names"
                      name="names" 
                      required 
                      placeholder="e.g. Elena & Matteo" 
                      value={formData.names} 
                      onChange={handleChange} 
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Primary Email <span className="req">*</span>
                  </label>
                  <div className="input-wrap">
                    <Mail size={16} className="input-icon" />
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      required 
                      placeholder="elena@example.com" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Wedding Date */}
                <div className="form-group">
                  <label className="form-label" htmlFor="date">
                    Wedding Date / Estimated Window <span className="req">*</span>
                  </label>
                  <div className="input-wrap">
                    <Calendar size={16} className="input-icon" />
                    <input 
                      type="text" 
                      id="date"
                      name="date" 
                      required 
                      placeholder="e.g. September 18, 2026" 
                      value={formData.date} 
                      onChange={handleChange} 
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Venue & Location */}
                <div className="form-group">
                  <label className="form-label" htmlFor="venue">
                    Venue & City / Destination <span className="req">*</span>
                  </label>
                  <div className="input-wrap">
                    <MapPin size={16} className="input-icon" />
                    <input 
                      type="text" 
                      id="venue"
                      name="venue" 
                      required 
                      placeholder="e.g. Villa Balbiano, Lake Como" 
                      value={formData.venue} 
                      onChange={handleChange} 
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              {/* Desired Collection Select */}
              <div className="form-group full-width">
                <label className="form-label" htmlFor="packageId">
                  Initial Collection Interest
                </label>
                <select 
                  id="packageId"
                  name="packageId" 
                  value={formData.packageId} 
                  onChange={handleChange} 
                  className="form-select"
                >
                  {pricingPackages.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.name} — {pkg.startingPrice} ({pkg.subtitle})
                    </option>
                  ))}
                  <option value="custom">Bespoke Multi-Day Custom Commission</option>
                </select>
              </div>

              {/* How Met */}
              <div className="form-group full-width">
                <label className="form-label" htmlFor="howMet">
                  How did you two meet? What is your favorite thing about each other?
                </label>
                <textarea 
                  id="howMet"
                  name="howMet" 
                  rows={3} 
                  placeholder="Tell us a little about your journey together..."
                  value={formData.howMet} 
                  onChange={handleChange} 
                  className="form-textarea"
                />
              </div>

              {/* Wedding Vision */}
              <div className="form-group full-width">
                <label className="form-label" htmlFor="vision">
                  What part of your wedding day are you most excited to experience?
                </label>
                <textarea 
                  id="vision"
                  name="vision" 
                  rows={3} 
                  placeholder="The sunset vows, dancing under string lights, morning serenity..."
                  value={formData.vision} 
                  onChange={handleChange} 
                  className="form-textarea"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn-primary form-submit-btn" 
                disabled={submitting}
              >
                <span>{submitting ? 'Transmitting Story...' : 'Request Availability & Proposal'}</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
