// src/components/EmptyHeroBackground.jsx
import React from 'react';
import './EmptyHeroBackground.css';
import backgroundVideo from '../assets/Video6.mp4';
import fallbackImg from '../assets/Image00.jpg';

const EmptyHeroBackground = ({
  fullScreen = true,
  fullWidth = true,
  paddingTop = 22,
  paddingBottom = 4,
  bg = {
    type: 'video',
    value: backgroundVideo,           // Video6.mp4
  },
  fallbackImage = fallbackImg,        // Image00.jpg
  overlay = true,
  overlayColor = '#000000',
  overlayOpacity = 0.3,
}) => {
  const isVideo = bg.type === 'video';
  const isImage = bg.type === 'image';

  const sectionStyle = {};
  if (!fullScreen) {
    sectionStyle.paddingTop = `${paddingTop}rem`;
    sectionStyle.paddingBottom = `${paddingBottom}rem`;
  }

  if (bg.type === 'color') {
    sectionStyle.backgroundColor = bg.value || '#260a30';
  } else if (isImage) {
    sectionStyle.backgroundImage = `url(${bg.value})`;
    sectionStyle.backgroundSize = 'cover';
    sectionStyle.backgroundPosition = 'center';
  }

  const containerClass = fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-6';

  return (
    <section
      className={`relative overflow-hidden ${fullScreen ? 'min-h-screen' : 'h-auto'}`}
      style={sectionStyle}
    >
      {/* Video background - using Video6.mp4 */}
      {isVideo && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          >
            <source src={bg.value} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Fallback image - Image00.jpg */}
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
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      )}

      {/* Empty content wrapper - intentionally minimal */}
      <div className={`${containerClass} relative z-20 h-full flex items-center justify-center`}>
        {/* You can add subtle text or elements here later if needed */}
      </div>
    </section>
  );
};

export default EmptyHeroBackground;