// src/components/CarGallerySection.jsx
import React, { useRef } from 'react';
import './CarGallerySection.css';

const CarGallerySection = ({
  paddingTop = 6,
  paddingBottom = 6,
  showTitle = true,
  showSubtitle = true,
  spacing = true,
  bg = {
    type: 'color',
    value: '#ffffff',
  },
  overlay = false,
  overlayColor = '#edefeb',
  overlayOpacity = 0.6,
}) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const sectionStyle = {
    paddingTop: `${paddingTop}rem`,
    paddingBottom: `${paddingBottom}rem`,
  };

  if (bg.type === 'color') {
    sectionStyle.backgroundColor = bg.value;
  } else if (bg.type === 'image') {
    sectionStyle.backgroundImage = `url(${bg.value})`;
    sectionStyle.backgroundSize = 'cover';
    sectionStyle.backgroundPosition = 'center';
  }

  const overlayStyle = overlay && bg.type !== 'color' ? {
    backgroundColor: overlayColor,
    opacity: overlayOpacity,
  } : {};

  // Your fleet cars
  const cars = [
    {
      src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Mercedes S-Class - Executive Black',
      caption: 'Mercedes S-Class',
    },
    {
      src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Range Rover Vogue - Luxury SUV',
      caption: 'Range Rover Vogue',
    },
    {
      src: 'https://images.unsplash.com/photo-1618843479313-40f2e308a518?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Mercedes V-Class - VIP Van',
      caption: 'Mercedes V-Class',
    },
    {
      src: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'BMW 7 Series - Premium Sedan',
      caption: 'BMW 7 Series',
    },
    {
      src: 'https://images.unsplash.com/photo-1502877338535-766e3a6052c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Porsche Cayenne - Sport SUV',
      caption: 'Porsche Cayenne',
    },
    {
      src: 'https://images.unsplash.com/photo-1583121274602-89e9a2ce06a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Lexus LX - Ultimate Comfort',
      caption: 'Lexus LX',
    },
    {
      src: 'https://images.unsplash.com/photo-1502489597346-d8389e3e862b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Audi A8 L - Business Class',
      caption: 'Audi A8 L',
    },
  ];

  // FIXED: Use explicit class instead of template literal
  const gapClass = spacing ? 'gap-6' : 'gap-2';

  return (
    <section className="car-gallery relative overflow-hidden" style={sectionStyle}>
      {/* Overlay */}
      {overlay && bg.type !== 'color' && (
        <div className="absolute inset-0 z-10" style={overlayStyle} />
      )}

      <div className="container mx-auto px-6 relative z-20">
        {/* Header */}
        {(showTitle || showSubtitle) && (
          <div className="text-center mb-10">
            {showTitle && (
              <h4 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
                <b>Our Premium Fleet</b>
              </h4>
            )}
            {showSubtitle && (
              <h5 className="text-lg md:text-xl opacity-80" style={{ color: '#000000' }}>
                Scroll to explore our luxury vehicles available for hire in Nairobi
              </h5>
            )}
          </div>
        )}

        {/* Scrollable Gallery */}
        <div className="relative">
          <div
            ref={scrollRef}
            className={`gallery-scroll flex ${gapClass} overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide`}
          >
            {cars.map((car, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-start"
                style={{ width: 'min(85vw, 420px)' }}
              >
                <div className="car-card bg-white rounded-xl shadow-xl overflow-hidden">
                  <img
                    src={car.src}
                    alt={car.alt}
                    className="w-full h-64 md:h-80 object-cover"
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                  <div className="p-6 text-center">
                    <h5 className="text-xl font-bold" style={{ color: '#260a30' }}>
                      {car.caption}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#ffc091]/90 text-black p-4 rounded-full shadow-lg transition z-30"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#ffc091]/90 text-black p-4 rounded-full shadow-lg transition z-30"
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarGallerySection;