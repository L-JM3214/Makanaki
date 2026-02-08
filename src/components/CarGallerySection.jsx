// src/components/CarGallerySection.jsx
import React, { useRef, useState, useEffect } from 'react';
import './CarGallerySection.css';
import Car1 from '../assets/Car0.1.jpg';
import Car2 from '../assets/Car0.2.jpg';
import Car3 from '../assets/Car0.3.jpg';
import Car4 from '../assets/Car1.1.jpg';
import Car5 from '../assets/Car1.2.jpg';
import Car6 from '../assets/Car1.3.jpg';
import Car7 from '../assets/Car1.4.jpg';
import Car8 from '../assets/Car2.1.jpg';
import Car9 from '../assets/Car2.2.jpg';
import Car10 from '../assets/Car2.3.jpg';
import Car11 from '../assets/Car2.4.jpg';
import Car12 from '../assets/Car3.1.jpg';
import Car13 from '../assets/Car3.2.jpg';
import Car14 from '../assets/Car4.1.jpg';
import Car15 from '../assets/Car4.2.jpg';
import Car16 from '../assets/Car4.3.jpg';
import Car17 from '../assets/Car5.1.jpg';
import Car18 from '../assets/Car5.2.jpg';
import Car19 from '../assets/Car5.3.jpg';
import Car20 from '../assets/Car6.1.png';
import Car21 from '../assets/Car6.2.jpg';
import Car22 from '../assets/Car6.3.jpg';
import Car23 from '../assets/Car6.4.jpg';
import Car24 from '../assets/Car6.5.jpg';
import Car25 from '../assets/Car7.1.jpg';
import Car26 from '../assets/Car7.2.jpg';
import Car27 from '../assets/Car7.3.jpg';
import Car28 from '../assets/Car8.1.jpg';
import Car29 from '../assets/Car8.2.jpg';
import Car30 from '../assets/Car8.3.jpg';
import Car31 from '../assets/Car8.4.jpg';
import Car32 from '../assets/Car9.1.jpg';
import Car33 from '../assets/Car9.2.jpg';
import Car34 from '../assets/Car9.3.jpg';

const CarGallerySection = ({
  paddingTop = 8,
  paddingBottom = 12,
  showTitle = true,
  showSubtitle = true,
  spacing = true,
  bg = {
    type: 'color',
    value: '#ffffff',
  },
  overlay = false,
  showNavigation = true,
  showIndicators = true,
  autoScroll = true,
  autoScrollInterval = 6000,
}) => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(autoScroll);
  const autoScrollRef = useRef(null);

  const cars = [
    { src: Car1, alt: 'Luxury Sedan - Mercedes S-Class' },
    { src: Car2, alt: 'Luxury Sedan Interior' },
    { src: Car3, alt: 'Premium Executive Car' },
    { src: Car4, alt: 'Range Rover Vogue - Luxury SUV' },
    { src: Car5, alt: 'SUV Interior Luxury' },
    { src: Car6, alt: 'Premium SUV Exterior' },
    { src: Car7, alt: 'Luxury SUV Side View' },
    { src: Car8, alt: 'Mercedes V-Class VIP Van' },
    { src: Car9, alt: 'Executive Van Interior' },
    { src: Car10, alt: 'VIP Transport Vehicle' },
    { src: Car11, alt: 'Luxury Van Side View' },
    { src: Car12, alt: 'BMW 7 Series Sedan' },
    { src: Car13, alt: 'Business Class Luxury Car' },
    { src: Car14, alt: 'Porsche Cayenne Sports SUV' },
    { src: Car15, alt: 'Sports SUV Interior' },
    { src: Car16, alt: 'Premium Sports Vehicle' },
    { src: Car17, alt: 'Lexus LX 600 Luxury SUV' },
    { src: Car18, alt: 'Luxury SUV Cabin' },
    { src: Car19, alt: 'Premium Off-road Vehicle' },
    { src: Car20, alt: 'Audi A8 L Executive Limousine' },
    { src: Car21, alt: 'Executive Car Interior' },
    { src: Car22, alt: 'Luxury Sedan Dashboard' },
    { src: Car23, alt: 'Premium Car Wheels' },
    { src: Car24, alt: 'Luxury Vehicle Exterior' },
    { src: Car25, alt: 'Lamborghini Urus Super SUV' },
    { src: Car26, alt: 'Super SUV Interior' },
    { src: Car27, alt: 'High-performance Vehicle' },
    { src: Car28, alt: 'Rolls Royce Cullinan Ultimate Luxury' },
    { src: Car29, alt: 'Bespoke Luxury Interior' },
    { src: Car30, alt: 'Premium Craftsmanship' },
    { src: Car31, alt: 'Ultimate Luxury Vehicle' },
    { src: Car32, alt: 'Bentley Bentayga Grand Tourer' },
    { src: Car33, alt: 'Handcrafted Luxury Interior' },
    { src: Car34, alt: 'Grand Tourer SUV' },
  ];

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.flex-shrink-0').offsetWidth + 32;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
      resetAutoScroll();
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: 'smooth' });
      resetAutoScroll();
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: 'smooth' });
      resetAutoScroll();
    }
  };

  const resetAutoScroll = () => {
    if (autoScroll) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = setInterval(scrollRight, autoScrollInterval);
    }
  };

  useEffect(() => {
    if (autoScroll && isAutoScrolling) {
      autoScrollRef.current = setInterval(scrollRight, autoScrollInterval);
      return () => clearInterval(autoScrollRef.current);
    }
  }, [autoScroll, isAutoScrolling]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPos = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.querySelector('.flex-shrink-0').offsetWidth + 32;
      const index = Math.round(scrollPos / cardWidth);
      setCurrentIndex(Math.min(index, cars.length - 1));
    }
  };

  const sectionStyle = {
    paddingTop: `${paddingTop}rem`,
    paddingBottom: `${paddingBottom}rem`,
    backgroundColor: '#ffffff',
  };

  const gapClass = spacing ? 'gap-10 md:gap-12' : 'gap-6';

  // Pagination: 7 tiny grouped dots
  const totalDots = 7;
  const itemsPerGroup = Math.ceil(cars.length / totalDots);

  return (
    <section 
      id="fleet" 
      className="car-gallery relative overflow-hidden" 
      style={sectionStyle}
    >
      {/* Subtle luxury background texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,#d4a574_1px,transparent_0)] bg-[length:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        {(showTitle || showSubtitle) && (
          <div className="text-center mb-16 relative">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#d4a574] to-transparent" />
            
            {showTitle && (
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight font-playfair">
                <span className="bg-gradient-to-r from-[#b38c5e] via-[#d4a574] to-[#ffc091] bg-clip-text text-transparent">
                  Our Premium Collection
                </span>
              </h2>
            )}
            

            {autoScroll && (
              <div className="mt-8 flex items-center justify-center gap-4">
                <span className="text-gray-500 text-sm font-light">Auto-scroll experience</span>
                <button
                  onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                  className={`relative w-14 h-7 rounded-full transition-all duration-300 border border-gray-300 ${
                    isAutoScrolling ? 'bg-gradient-to-r from-[#d4a574] to-[#ffc091]' : 'bg-white'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300 ${
                      isAutoScrolling ? 'translate-x-7 bg-[#260a30]' : ''
                    }`}
                  />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Gallery */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className={`gallery-scroll flex ${gapClass} overflow-x-auto pb-6 pt-6 px-4 snap-x snap-mandatory scrollbar-hide scroll-smooth`}
          >
            {cars.map((car, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-start group w-[min(90vw,420px)]"
              >
                <div className="car-card relative rounded-3xl overflow-hidden border border-gray-200/60 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-700 group-hover:shadow-[0_40px_100px_-20px_rgba(212,165,116,0.15)] group-hover:border-[#d4a574]/30">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 transition-opacity duration-700 group-hover:opacity-70" />
                    <img
                      src={car.src}
                      alt={car.alt}
                      className="w-full h-[300px] md:h-[360px] object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000"
                      loading={index < 5 ? 'eager' : 'lazy'}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Top Navigation Arrows */}
          {showNavigation && (
            <>
              <button
                onClick={scrollLeft}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-lg border border-gray-200/60 text-[#260a30] p-5 rounded-full shadow-xl hover:shadow-2xl hover:border-[#d4a574]/40 hover:text-[#d4a574] transition-all duration-500 group z-30"
                aria-label="Scroll left"
              >
                <span className="text-3xl group-hover:-translate-x-1 transition-transform duration-300">←</span>
              </button>
              <button
                onClick={scrollRight}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-lg border border-gray-200/60 text-[#260a30] p-5 rounded-full shadow-xl hover:shadow-2xl hover:border-[#d4a574]/40 hover:text-[#d4a574] transition-all duration-500 group z-30"
                aria-label="Scroll right"
              >
                <span className="text-3xl group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </>
          )}
        </div>

        {/* Bottom Navigation Buttons */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={scrollLeft}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 hover:border-[#d4a574] hover:text-[#d4a574] transition-all duration-300 shadow-sm hover:shadow-md group"
            aria-label="Scroll left"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span className="text-sm font-medium">Previous</span>
          </button>

          {/* Grouped Pagination Indicators - 7 tiny navy dots, active turns white */}
          {showIndicators && (
            <div className="flex justify-center items-center gap-4">
              {Array.from({ length: 7 }).map((_, groupIndex) => {
                const itemsPerGroup = Math.ceil(cars.length / 7);
                const isActive = Math.floor(currentIndex / itemsPerGroup) === groupIndex;
                return (
                  <button
                    key={groupIndex}
                    onClick={() => {
                      const targetIndex = groupIndex * itemsPerGroup;
                      scrollToIndex(Math.min(targetIndex, cars.length - 1));
                    }}
                    className={`h-[3px] rounded-full transition-all duration-500 ${
                      isActive 
                        ? 'w-6 bg-white shadow-[0_0_6px_rgba(255,255,255,0.7)]' 
                        : 'w-[6px] bg-[#1e3a8a] hover:bg-[#1e3a8a]/80'
                    }`}
                    aria-label={`Go to group ${groupIndex + 1}`}
                  />
                );
              })}
            </div>
          )}

          <button
            onClick={scrollRight}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 hover:border-[#d4a574] hover:text-[#d4a574] transition-all duration-300 shadow-sm hover:shadow-md group"
            aria-label="Scroll right"
          >
            <span className="text-sm font-medium">Next</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarGallerySection;