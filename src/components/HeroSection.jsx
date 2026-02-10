// src/components/HeroSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';
import heroVideo from '../assets/Video3.mp4';
import fallbackImage from '../assets/Image011.jpeg';

const HeroSection = ({
  fullScreen = true,
  fullWidth = true,
  showTitle = true,
  showSubtitle = true,
  showText = true,
  showButtons = true,
  bg = { type: 'video' },
  overlay = true,
}) => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = () => {
      video.play()
        .then(() => {
          setVideoLoaded(true);
          setShowPlayButton(false);
        })
        .catch(() => setShowPlayButton(true));
    };

    attemptPlay();

    const handleInteraction = () => {
      attemptPlay();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };

    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('touchstart', handleInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowPlayButton(false);
    }
  };

  return (
    <section
      className="hero-section relative w-full h-screen overflow-hidden bg-[#260a30]"
      id="home"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="hero-video absolute inset-0 w-full h-full object-cover"
          onLoadedData={() => setVideoLoaded(true)}
          onCanPlay={() => setVideoLoaded(true)}
          onError={(e) => console.error('Video error:', e)}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Fallback Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${fallbackImage})`,
            opacity: videoLoaded ? 0 : 1,
          }}
        />
      </div>

      {/* Overlay */}
      {overlay && (
        <div className="hero-overlay absolute inset-0 z-10 pointer-events-none" />
      )}

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-6 md:px-12">
        <div className="max-w-5xl w-full text-center md:text-left">
          {showTitle && (
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight font-playfair text-gradient-gold animate-fade-up text-glow">
              Makanaki Travels
            </h1>
          )}

          {showSubtitle && (
            <h2 className="text-2xl md:text-4xl lg:text-5xl mb-8 font-light text-white/90 animate-fade-up delay-100">
              Executive Car Hire & Chauffeur 
            </h2>
          )}

          {showText && (
            <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto md:mx-0 text-gray-100 leading-relaxed animate-fade-up delay-200">
              | Cruise in Luxury | 
            </p>
          )}

          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start animate-fade-up delay-300 mb-4 md:mb-8">
              <a
                href="/booking-form.html"          // ← LINK TO YOUR FORM
                target="_blank"                    // ← opens in new tab
                rel="noopener noreferrer"
                className="px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[180px] md:min-w-[220px] bg-[#1e3a8a]/30 backdrop-blur-md border border-white/30 text-white hover:bg-[#1e3a8a]/50 hover:border-white/50"
              >
                Book Now
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30">
        <svg
          className="w-7 h-7 md:w-8 md:h-8 text-[#1e3a8a]/30 animate-bounce-slow drop-shadow-glow"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.2"
        >
          <rect x="6" y="2" width="12" height="18" rx="6" fill="none" stroke="currentColor" />
          <circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Manual Play Button */}
      {showPlayButton && (
        <button
          onClick={handlePlayClick}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-[#ffc091] to-[#ffd9a3] text-[#260a30] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
          aria-label="Play video"
          title="Click to play video"
        >
          <svg className="w-7 h-7 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Play Video
          </span>
        </button>
      )}
    </section>
  );
};

export default HeroSection;