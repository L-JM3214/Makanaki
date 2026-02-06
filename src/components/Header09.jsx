// src/components/Header09.jsx
import React from 'react';
import './Header09.css';

const Header09 = ({
  fullScreen = false,
  fullWidth = true,
  paddingTop = 6,
  paddingBottom = 5,
  contentWidth = 6,             // col-md-X (4–12)
  showTitle = true,
  showSubtitle = false,
  showText = true,
  showButtons = true,
  verticalAlign = 'center',     // flex-start / center / flex-end
  horizontalAlign = 'center',   // flex-start / center / flex-end
  bg = {
    type: 'image',
    // value: '#F1C0E8',           // pastel pink from example
    value: 'https://t4.ftcdn.net/jpg/09/18/16/17/360_F_918161745_jGLg8lWftkKjIMhl8eEjTi8OihEp26Nx.jpg',   // or local import
    // value: 'https://player.vimeo.com/video/428046504', // vimeo example
  },
  fallbackImage = '/images/fallback-hero.jpg',
  overlay = true,
  overlayColor = '#000000',
  overlayOpacity = 0.5,
}) => {
  const isVideo = bg.type === 'video';
  const isImage = bg.type === 'image';

  const sectionStyle = {};
  if (!fullScreen) {
    sectionStyle.paddingTop = `${paddingTop}rem`;
    sectionStyle.paddingBottom = `${paddingBottom}rem`;
  }

  if (bg.type === 'color') {
    sectionStyle.backgroundColor = bg.value;
  } else if (isImage) {
    sectionStyle.backgroundImage = `url(${bg.value})`;
    sectionStyle.backgroundSize = 'cover';
    sectionStyle.backgroundPosition = 'center';
  }

  const containerClass = fullWidth ? 'container-fluid' : 'container';

  const alignItems = fullScreen ? verticalAlign : 'center';
  const justifyContent = horizontalAlign;

  return (
    <section
      className={`header09 relative overflow-hidden flex items-${alignItems} justify-${justifyContent} text-center md:text-left ${fullScreen ? 'min-h-screen' : 'min-h-[70vh]'}`}
      style={sectionStyle}
    >
      {/* Video background */}
      {isVideo && (
        <div className="absolute inset-0 z-0">
          <iframe
            src={`${bg.value}?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0`}
            title="Background Video"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ border: 0 }}
          />
          {/* Fallback image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${fallbackImage})` }}
          />
        </div>
      )}

      {/* Overlay */}
      {(overlay && bg.type !== 'color') && (
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      <div className={`${containerClass} relative z-20 px-6 md:px-12`}>
        <div className={`content-wrap col-12 md:col-md-${contentWidth} mx-auto`}>
          {showTitle && (
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight" style={{ color: '#000000' }}>
              <b>Your Dream Ride Awaits!</b>
            </h1>
          )}

          {showSubtitle && (
            <h2 className="text-3xl md:text-5xl mb-6 font-semibold" style={{ color: '#000000' }}>
              Premium Chauffeur Service in Nairobi
            </h2>
          )}

          {showText && (
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto md:mx-0 opacity-90" style={{ color: '#000000' }}>
              Experience unparalleled luxury and service for your special occasions, corporate events, airport transfers, and scenic tours.
            </p>
          )}

          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <a
                href="#book"
                className="bg-[#ffc091] text-[#260a30] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#ffd9a3] transition shadow-lg"
              >
                Book Your Luxury Car
              </a>
              <a
                href="#fleet"
                className="border-2 border-[#ffc091] text-[#ffc091] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#ffc091]/10 transition"
              >
                View Fleet
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header09;