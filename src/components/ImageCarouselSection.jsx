// src/components/ImageCarouselSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import './ImageCarouselSection.css';

const ImageCarouselSection = ({
  fullScreen = true,
  fullWidth = true,
  paddingTop = 5,
  paddingBottom = 5,
  bg = {
    type: 'image',
    value: 'https://r.mobirisesite.com/2279897/assets/images/photo-1659641770920-c829bd16e28e.jpeg',
  },
  overlay = true,
  overlayColor = '#000000',
  overlayOpacity = 0.3,
}) => {
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Array of images (add your own luxury car photos here)
  const images = [
    {
      src: 'https://elitemotionluxury.com/assets/images/gallery/luxury/mercedes-s-class-interior.jpg', // example - replace with real ones
      alt: 'Mercedes S-Class Luxury Interior',
    },
    {
      src: 'https://executivecarhirekenya.com/assets/images/wedding-cars/mercedes-benz-s-class-wedding-nairobi.jpg',
      alt: 'Mercedes S-Class Wedding Chauffeur',
    },
    {
      src: 'https://elitemotionluxury.com/assets/images/gallery/vip/range-rover-vogue-black.jpg',
      alt: 'Range Rover Vogue Airport Transfer',
    },
    {
      src: 'https://r.mobirisesite.com/2279897/assets/images/photo-1659641770920-c829bd16e28e.jpeg', // original from Mobirise
      alt: 'Premium Car Hire Nairobi',
    },
    {
      src: 'https://jkiafasttrack.com/assets/images/mercedes-v-class-airport-transfer-kenya.jpg',
      alt: 'Mercedes V-Class Executive Transfer',
    },
    {
      src: 'https://bammtours.co.ke/assets/images/premium-cars/mercedes-benz-e-class-chauffeur.jpg',
      alt: 'Mercedes E-Class Scenic Tour',
    },
  ];

  // Auto-scroll logic
  useEffect(() => {
    if (!carouselRef.current || isPaused) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const nextScroll = scrollLeft + clientWidth;

        if (nextScroll >= scrollWidth - clientWidth) {
          // Reset to start for infinite loop
          carouselRef.current.scrollTo({ left: 0, behavior: 'instant' });
        } else {
          carouselRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -carouselRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const sectionStyle = {};
  if (!fullScreen) {
    sectionStyle.paddingTop = `${paddingTop}rem`;
    sectionStyle.paddingBottom = `${paddingBottom}rem`;
  }

  if (bg.type === 'image') {
    sectionStyle.backgroundImage = `url(${bg.value})`;
    sectionStyle.backgroundSize = 'cover';
    sectionStyle.backgroundPosition = 'center';
  }

  return (
    <section
      id="fleet" className={`image02 relative overflow-hidden ${fullScreen ? 'min-h-screen' : 'h-auto'}`}
      style={sectionStyle}
    >
      {/* Overlay */}
      {overlay && bg.type !== 'color' && (
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
        />
      )}

      {/* Carousel Container */}
      <div className="relative z-20 h-full">
        <div
          ref={carouselRef}
          className="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full snap-start"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy" // better performance
              />
              {/* Optional caption overlay */}
              <div className="absolute inset-0 flex items-end justify-center pb-16 z-20 pointer-events-none">
                <div className="bg-black/50 px-8 py-4 rounded-full text-white text-xl font-semibold">
                  {image.alt}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-[#ffc091]/80 text-black p-4 rounded-full shadow-lg transition z-30"
          aria-label="Previous image"
        >
          ←
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-[#ffc091]/80 text-black p-4 rounded-full shadow-lg transition z-30"
          aria-label="Next image"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default ImageCarouselSection;