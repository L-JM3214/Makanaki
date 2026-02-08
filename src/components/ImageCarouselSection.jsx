// src/components/ImageCarouselSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import './ImageCarouselSection.css';

// Import ALL car images
import Car01 from '../assets/Car0.1.jpg';
import Car02 from '../assets/Car0.2.jpg';
import Car03 from '../assets/Car0.3.jpg';
import Car11 from '../assets/Car1.1.jpg';
import Car12 from '../assets/Car1.2.jpg';
import Car13 from '../assets/Car1.3.jpg';
import Car14 from '../assets/Car1.4.jpg';
import Car21 from '../assets/Car2.1.jpg';
import Car22 from '../assets/Car2.2.jpg';
import Car23 from '../assets/Car2.3.jpg';
import Car24 from '../assets/Car2.4.jpg';
import Car31 from '../assets/Car3.1.jpg';
import Car32 from '../assets/Car3.2.jpg';
import Car41 from '../assets/Car4.1.jpg';
import Car42 from '../assets/Car4.2.jpg';
import Car43 from '../assets/Car4.3.jpg';
import Car51 from '../assets/Car5.1.jpg';
import Car52 from '../assets/Car5.2.jpg';
import Car53 from '../assets/Car5.3.jpg';
import Car61 from '../assets/Car6.1.png';
import Car62 from '../assets/Car6.2.jpg';
import Car63 from '../assets/Car6.3.jpg';
import Car64 from '../assets/Car6.4.jpg';
import Car65 from '../assets/Car6.5.jpg';
import Car71 from '../assets/Car7.1.jpg';
import Car72 from '../assets/Car7.2.jpg';
import Car73 from '../assets/Car7.3.jpg';
import Car81 from '../assets/Car8.1.jpg';
import Car82 from '../assets/Car8.2.jpg';
import Car83 from '../assets/Car8.3.jpg';
import Car84 from '../assets/Car8.4.jpg';
import Car91 from '../assets/Car9.1.jpg';
import Car92 from '../assets/Car9.2.jpg';
import Car93 from '../assets/Car9.3.jpg';

const ImageCarouselSection = ({
  fullScreen = true,
  fullWidth = true,
  paddingTop = 5,
  paddingBottom = 5,
  bg = {
    type: 'gradient',
    value: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
  },
  overlay = true,
  overlayColor = 'rgba(10, 10, 10, 0.7)',
  overlayOpacity = 0.5,
  showIndicators = true,
  showNavigation = true,
  autoScroll = true,
  autoScrollInterval = 6000,
  showCaptions = false,
}) => {
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollRef = useRef(null);

  // Array of ALL car images
  const images = [
    { src: Car01, alt: 'Luxury Sedan Interior' },
    { src: Car02, alt: 'Premium Car Dashboard' },
    { src: Car03, alt: 'Executive Car Interior' },
    { src: Car11, alt: 'Luxury SUV Exterior' },
    { src: Car12, alt: 'SUV Cabin View' },
    { src: Car13, alt: 'Premium SUV Side' },
    { src: Car14, alt: 'Luxury Vehicle Rear' },
    { src: Car21, alt: 'VIP Van Interior' },
    { src: Car22, alt: 'Executive Van Cabin' },
    { src: Car23, alt: 'Luxury Transport Vehicle' },
    { src: Car24, alt: 'Premium Van Side' },
    { src: Car31, alt: 'Business Sedan Exterior' },
    { src: Car32, alt: 'Luxury Car Front' },
    { src: Car41, alt: 'Sports SUV Design' },
    { src: Car42, alt: 'Performance Vehicle Interior' },
    { src: Car43, alt: 'Premium Sports Car' },
    { src: Car51, alt: 'Ultimate Luxury SUV' },
    { src: Car52, alt: 'Premium Cabin View' },
    { src: Car53, alt: 'Luxury Off-road Vehicle' },
    { src: Car61, alt: 'Executive Limousine' },
    { src: Car62, alt: 'Premium Sedan Dashboard' },
    { src: Car63, alt: 'Luxury Car Interior' },
    { src: Car64, alt: 'High-end Wheels' },
    { src: Car65, alt: 'Premium Vehicle Exterior' },
    { src: Car71, alt: 'Super SUV Design' },
    { src: Car72, alt: 'Performance Interior' },
    { src: Car73, alt: 'High-performance Vehicle' },
    { src: Car81, alt: 'Ultimate Luxury Car' },
    { src: Car82, alt: 'Bespoke Interior' },
    { src: Car83, alt: 'Premium Craftsmanship' },
    { src: Car84, alt: 'Luxury Vehicle Design' },
    { src: Car91, alt: 'Grand Tourer SUV' },
    { src: Car92, alt: 'Handcrafted Cabin' },
    { src: Car93, alt: 'Premium Touring Vehicle' },
  ];

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: index * scrollWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
      resetAutoScroll();
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      scrollToIndex(newIndex);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      scrollToIndex(newIndex);
    }
  };

  const resetAutoScroll = () => {
    if (autoScroll) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = setInterval(scrollRight, autoScrollInterval);
    }
  };

  // Auto-scroll logic
  useEffect(() => {
    if (autoScroll && !isPaused) {
      autoScrollRef.current = setInterval(scrollRight, autoScrollInterval);
      return () => clearInterval(autoScrollRef.current);
    }
  }, [autoScroll, isPaused]);

  // Handle scroll to update current index
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPos = carouselRef.current.scrollLeft;
      const scrollWidth = carouselRef.current.clientWidth;
      const index = Math.round(scrollPos / scrollWidth);
      setCurrentIndex(index);
    }
  };

  const sectionStyle = {};
  if (!fullScreen) {
    sectionStyle.paddingTop = `${paddingTop}rem`;
    sectionStyle.paddingBottom = `${paddingBottom}rem`;
  }

  if (bg.type === 'color') {
    sectionStyle.backgroundColor = bg.value;
  } else if (bg.type === 'gradient') {
    sectionStyle.background = bg.value;
  } else if (bg.type === 'image') {
    sectionStyle.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg.value})`;
    sectionStyle.backgroundSize = 'cover';
    sectionStyle.backgroundPosition = 'center';
    sectionStyle.backgroundAttachment = 'fixed';
  }

  return (
    <section
      id="gallery"
      className={`image-carousel-section relative overflow-hidden ${fullScreen ? 'min-h-screen' : 'h-auto'}`}
      style={sectionStyle}
    >
      {/* Luxury Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 192, 145, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Main Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 z-10"
          style={{ 
            background: `linear-gradient(45deg, ${overlayColor}, rgba(26, 26, 46, 0.8))`,
            opacity: overlayOpacity 
          }}
        />
      )}

      <div className="relative z-20 h-full flex flex-col justify-center">
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="image-carousel flex h-[70vh] overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full snap-start group relative"
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  loading={index < 3 ? 'eager' : 'lazy'}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500" />
                
                {/* Image Number Indicator */}
                <div className="absolute top-6 right-6 z-20">
                  <span className="px-4 py-2 bg-gradient-to-r from-[#ffc091] to-[#d4a574] text-gray-900 text-sm font-semibold rounded-full shadow-lg">
                    {index + 1}/{images.length}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showNavigation && (
          <>
            <button
              onClick={scrollLeft}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-900/90 to-gray-800/90 border border-gray-700 text-white p-5 rounded-full shadow-2xl hover:shadow-[#ffc091]/20 hover:border-[#ffc091]/50 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 transition-all duration-300 group z-30"
              aria-label="Previous image"
            >
              <span className="text-3xl group-hover:-translate-x-1 transition-transform duration-300">←</span>
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-gradient-to-l from-gray-900/90 to-gray-800/90 border border-gray-700 text-white p-5 rounded-full shadow-2xl hover:shadow-[#ffc091]/20 hover:border-[#ffc091]/50 hover:bg-gradient-to-l hover:from-gray-800 hover:to-gray-700 transition-all duration-300 group z-30"
              aria-label="Next image"
            >
              <span className="text-3xl group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </>
        )}

        {/* Indicators - Show only 12 dots for 34 images */}
        {showIndicators && (
          <div className="flex justify-center items-center gap-4 mt-12">
            {Array.from({ length: Math.min(12, images.length) }).map((_, index) => {
              // Group images for indicators (34 images → 12 dots)
              const groupSize = Math.ceil(images.length / 12);
              const isActive = Math.floor(currentIndex / groupSize) === index;
              
              return (
                <button
                  key={index}
                  onClick={() => {
                    const targetIndex = index * groupSize;
                    scrollToIndex(Math.min(targetIndex, images.length - 1));
                  }}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    isActive 
                      ? 'w-8 bg-gradient-to-r from-[#ffc091] to-[#b38c5e]' 
                      : 'w-2 bg-gray-700 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to image group ${index + 1}`}
                />
              );
            })}
          </div>
        )}

        {/* Auto-scroll Pause Indicator */}
        {autoScroll && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
              <span className={isPaused ? 'text-[#ffc091]' : ''}>
                {isPaused ? 'Paused' : 'Auto-scrolling'}
              </span>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className={`w-10 h-5 rounded-full transition-colors duration-300 flex items-center p-1 ${
                  isPaused ? 'bg-gray-700 justify-start' : 'bg-[#ffc091] justify-end'
                }`}
                aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
              >
                <span className="w-3 h-3 bg-white rounded-full" />
              </button>
            </div>
          </div>
        )}

        {/* Image Counter */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-2 text-gray-400">
            <span className="text-lg font-medium">
              {currentIndex + 1} of {images.length}
            </span>
          </div>
        </div>
      </div>

      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#ffc091]/10 to-[#b38c5e]/10"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
              opacity: 0.2,
              animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageCarouselSection;