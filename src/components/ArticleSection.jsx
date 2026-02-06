// src/components/ArticleSection.jsx
import React from 'react';
import './ArticleSection.css';
import Video9 from '../assets/Video9.mp4';
import fallbackImage from '../assets/image00.jpg'; 
import defaultImage from '../assets/image0.jpg'; 

const ArticleSection = ({
  fullScreen = false,
  fullWidth = false,
  paddingTop = 5,
  paddingBottom = 5,
  contentWidth = 10,
  showImage = true,
  showTitle = true,
  showSubtitle = true,
  showText = true,
  showButtons = true,
  wrapBgColor = '#ffffff',
  transparentBg = true,
  bg = {
    type: 'color',
    value: '#edefeb', // FIXED: Removed duplicate value
  },
  overlay = true,
  overlayColor = '#ffffff',
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
    sectionStyle.backgroundColor = transparentBg ? 'transparent' : bg.value;
  } else if (isImage) {
    sectionStyle.backgroundImage = `url(${bg.value})`;
    sectionStyle.backgroundSize = 'cover';
    sectionStyle.backgroundPosition = 'center';
  }

  // FIXED: Convert contentWidth to Tailwind classes
  const widthClass = contentWidth === 10 ? 'lg:w-10/12' : 
                    contentWidth === 9 ? 'lg:w-9/12' : 
                    contentWidth === 8 ? 'lg:w-8/12' : 
                    'lg:w-full';
  
  const containerClass = fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-6';

  return (
    <section
      id="about" className="article8 relative overflow-hidden"
      style={sectionStyle}
    >
      {/* Video background */}
      {isVideo && (
        <div className="absolute inset-0 z-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={Video9} type="video/mp4" />
          </video>
          {/* Fallback */}
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

      <div className={`${containerClass} relative z-20 py-12 md:py-16`}>
        <div className="flex justify-center">
          <div className={`w-full ${widthClass}`}>
            <div
              className="card-wrapper rounded-lg shadow-xl overflow-hidden"
              style={{ backgroundColor: wrapBgColor }}
            >
              {/* Image */}
              {showImage && (
                <div className="image-wrapper flex justify-center mb-8 px-4 md:px-8 pt-8">
                  <img
                    src={defaultImage}
                    alt="Makanaki Travels Chauffeur Service"
                    className="w-full max-w-4xl h-auto rounded-lg shadow-md object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="card-content-text px-6 md:px-12 lg:px-16 pb-12 md:pb-16">
                {showTitle && (
                  <h3 className="card-title text-4xl md:text-5xl font-bold mb-8 text-center md:text-left" style={{ color: '#000000' }}>
                    <b>Makanaki: Your Nairobi Chauffeur</b>
                  </h3>
                )}

                <div className="space-y-10">
                  {/* Item 1 */}
                  <div className="item">
                    {showSubtitle && (
                      <h4 className="text-2xl font-semibold mb-3" style={{ color: '#000000' }}>
                        <b>Luxury Fleet Selection</b>
                      </h4>
                    )}
                    {showText && (
                      <p className="text-lg leading-relaxed" style={{ color: '#000000' }}>
                        Makanaki Travels is Nairobi's premier car hire service, dedicated to providing an unparalleled luxury transportation experience. We pride ourselves on our fleet of meticulously maintained, high-end vehicles.
                      </p>
                    )}
                  </div>

                  {/* Item 2 */}
                  <div className="item">
                    {showSubtitle && (
                      <h4 className="text-2xl font-semibold mb-3" style={{ color: '#000000' }}>
                        <b>Professional Service</b>
                      </h4>
                    )}
                    {showText && (
                      <p className="text-lg leading-relaxed" style={{ color: '#000000' }}>
                        Our mission is to redefine premium car hire in Kenya, offering seamless service for weddings, corporate events, airport transfers, and bespoke tours. We are committed to punctuality, comfort, and exceptional customer care.
                      </p>
                    )}
                  </div>

                  {/* Item 3 */}
                  <div className="item">
                    {showSubtitle && (
                      <h4 className="text-2xl font-semibold mb-3" style={{ color: '#000000' }}>
                        <b>Customer Satisfaction</b>
                      </h4>
                    )}
                    {showText && (
                      <p className="text-lg leading-relaxed" style={{ color: '#000000' }}>
                        Experience the difference with Makanaki Travels. We combine elegant vehicles with professional service to ensure your travel in Nairobi is nothing short of spectacular. Your satisfaction is our ultimate priority.
                      </p>
                    )}
                  </div>
                </div>

                {/* Button */}
                {showButtons && (
                  <div className="mt-10 text-center md:text-left">
                    <a
                      href="#contact"
                      className="inline-block bg-[#ffc091] text-[#260a30] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#ffd9a3] transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      Book Now
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;