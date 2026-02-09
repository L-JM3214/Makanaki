// src/components/Header09.jsx
import React from 'react';
import './Header09.css';
import videoSrc from '../assets/Video2.mp4';

const Header09 = () => {
  return (
    <section className="header09">
      {/* LEFT — Text Content */}
      <div className="left-content">
        <div className="content-inner">
          <h1 className="gradient-text">Your Dream Ride Awaits!</h1>

          <h2>Premium Chauffeur Service in Nairobi</h2>

          <p>
            Experience unparalleled luxury and service for your special occasions, corporate events,
            airport transfers, and scenic tours.
          </p>

          <div className="buttons">
            <a href="#book" className="btn-primary">
              Get in Touch
            </a>
            <a href="#fleet" className="btn-secondary">
              View Fleet
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT — Video */}
      <div className="right-video">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="video"
          poster="/images/video-poster.jpg"   // ← optional: fallback image
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Header09;