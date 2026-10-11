import React from 'react';
import { Camera, Compass, HeartHandshake } from 'lucide-react';
import './Philosophy.css';

export default function Philosophy() {
  return (
    <section id="philosophy" className="philosophy-section">
      <div className="container philosophy-container">
        <div className="philosophy-image-col">
          <div className="artist-portrait-frame">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85" 
              alt="Artist behind UniPact" 
              className="artist-portrait-img"
            />
            <div className="portrait-badge">
              <span>ALEXANDER VANCE</span>
              <small>Lead Fine Art Photographer</small>
            </div>
          </div>
        </div>

        <div className="philosophy-content-col">
          <span className="section-tag">BEHIND THE LENS</span>
          <h2 className="section-title">
            "Your wedding isn't a photoshoot. It is a <em>living poem</em>."
          </h2>
          
          <p className="philosophy-body">
            I don't show up with an enormous clipboard or ask you to hold stiff, awkward smiles 
            while thirty guests stand around waiting. The photographs you will cherish forty years 
            from now aren't the ones where you were directed like mannequins.
          </p>

          <p className="philosophy-body">
            They are the quiet exhales before walking the aisle. The wild, uninhibited roar of laughter 
            as champagne splashes across the grass. The way your partner touches the small of your back 
            when they think nobody is watching.
          </p>

          <div className="philosophy-pillars">
            <div className="pillar-item">
              <Camera size={20} className="pillar-icon" />
              <div>
                <h5>Unobtrusive Presence</h5>
                <p>Silent Leica shutter and documentary intuition so you stay fully in your moment.</p>
              </div>
            </div>

            <div className="pillar-item">
              <Compass size={20} className="pillar-icon" />
              <div>
                <h5>Global Destination Vision</h5>
                <p>Deep experience navigating light, logistics, and permits across Europe and worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
