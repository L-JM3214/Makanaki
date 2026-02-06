// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import heroVideo from '../assets/Video3.mp4';
import fallbackImage from '../assets/Image011.jpeg';

const HeroSection = ({
  fullScreen = true,
  fullWidth = true,
  paddingTop = 20,
  paddingBottom = 4,
  contentWidth = 10,
  showTitle = true,
  showSubtitle = false,
  showText = true,
  showButtons = true,
  verticalAlign = 'center',
  horizontalAlign = 'flex-start',
  bg = { type: 'video' },
  overlay = true,
  overlayColor = '#000000',
  overlayOpacity = 0.5,
}) => {
  const isVideo = bg.type === 'video';
  const isImage = bg.type === 'image';

  // Use the imported Video3.mp4 when type is 'video'
  const videoSrc = isVideo ? heroVideo : null;

  const sectionStyle = {};
  if (!fullScreen) {
    sectionStyle.paddingTop = `${paddingTop}rem`;
    sectionStyle.paddingBottom = `${paddingBottom}rem`;
  }

  // Background handling (color, image, or video)
  if (bg.type === 'color') {
    sectionStyle.backgroundColor = bg.value || '#260a30';
  } else if (isImage) {
    sectionStyle.backgroundImage = `url(${bg.value})`;
    sectionStyle.backgroundSize = 'cover';
    sectionStyle.backgroundPosition = 'center';
  }

  const containerClass = fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-6';

  // Fix: Convert verticalAlign to proper CSS classes
  const verticalAlignClass = verticalAlign === 'center' ? 'justify-center' : 
                             verticalAlign === 'top' ? 'justify-start' : 
                             'justify-end';
  
  // Fix: Convert contentWidth to proper width classes
  const contentWidthClass = contentWidth === 10 ? 'md:w-10/12' : 
                           contentWidth === 9 ? 'md:w-9/12' : 
                           contentWidth === 8 ? 'md:w-8/12' : 
                           'md:w-full';

  return (
    <section
      id="home" // FIXED: lowercase "id" not "Id"
      className={`relative overflow-hidden text-white ${fullScreen ? 'min-h-screen' : 'h-auto'}`}
      style={sectionStyle}
    >
      {/* Video Background - using Video3.mp4 */}
      {isVideo && videoSrc && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Fallback image - Image011.jpeg */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${fallbackImage})` }}
          />
        </div>
      )}

      {/* Overlay (darkens the video/image) */}
      {(overlay && bg.type !== 'color') && (
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
        />
      )}

      {/* Main Content */}
      <div className={`relative z-20 flex flex-col ${verticalAlignClass} h-full ${containerClass} pt-32 md:pt-40`}>
        <div className={`w-full ${contentWidthClass} text-center md:text-left px-6 md:px-12`}>
          {showTitle && (
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight font-playfair text-[#ffc091]">
              Makanaki Travels
            </h1>
          )}

          {showSubtitle && (
            <h2 className="text-3xl md:text-5xl mb-8 font-semibold text-gray-200">
              Luxury Chauffeur Service in Nairobi
            </h2>
          )}

          {showText && (
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto md:mx-0 opacity-90 text-gray-100">
              Arrive in elegance. Travel in comfort. Premium vehicles with professional drivers.
            </p>
          )}

          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <a
                href="#book"
                className="bg-[#ffc091] text-[#260a30] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#ffd9a3] transition-all duration-300 hover:scale-105 shadow-lg inline-block text-center"
              >
                Book Now
              </a>
              <a
                href="#fleet"
                className="border-2 border-[#ffc091] text-[#ffc091] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#ffc091]/10 transition-all duration-300 hover:scale-105 inline-block text-center"
              >
                View Fleet
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator for fullscreen */}
      {fullScreen && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-[#ffc091]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      )}
    </section>
  );
};

export default HeroSection;