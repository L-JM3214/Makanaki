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
}) => {
  const sectionStyle = {
    paddingTop: fullScreen ? 0 : `${paddingTop}rem`,
    paddingBottom: fullScreen ? 0 : `${paddingBottom}rem`,
    backgroundColor: '#ffffff', // always white
  };

  const widthClass =
    contentWidth === 10 ? 'lg:w-10/12' :
    contentWidth === 9  ? 'lg:w-9/12' :
    contentWidth === 8  ? 'lg:w-8/12' :
    'lg:w-full';

  const containerClass = fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-6';

  return (
    <section id="about" className="article-section" style={sectionStyle}>
      <div className={`${containerClass} relative z-10 py-12 md:py-16 lg:py-20`}>
        <div className="flex justify-center">
          <div className={`w-full ${widthClass}`}>
            {/* ← Add this wrapper div with unique class */}
            <div className="article-section-content">
              <div
                className="card-wrapper rounded-2xl shadow-xl overflow-hidden"
                style={{ backgroundColor: wrapBgColor }}
              >
                {/* Image */}
                {showImage && (
                  <div className="image-wrapper px-4 md:px-8 pt-8 md:pt-12">
                    <img
                      src={defaultImage}
                      alt="Makanaki Travels Chauffeur Service"
                      className="w-full max-w-5xl mx-auto h-auto rounded-xl shadow-lg object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="card-content px-6 md:px-12 lg:px-16 pb-12 md:pb-16 lg:pb-20">
                  {showTitle && (
                    <h2 className="card-title text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-center md:text-left">
                      Makanaki: Your Trusted Nairobi Chauffeur
                    </h2>
                  )}

                  <div className="space-y-12">
                    <div className="item">
                      {showSubtitle && (
                        <h3 className="item-title text-2xl md:text-3xl font-semibold mb-4">
                          Luxury Fleet Selection
                        </h3>
                      )}
                      {showText && (
                        <p className="item-text text-lg md:text-xl leading-relaxed">
                          Makanaki Travels is Nairobi's premier chauffeur service, offering a handpicked fleet of meticulously maintained luxury vehicles — from elegant sedans to spacious SUVs and executive vans — designed for weddings, corporate events, airport transfers, and bespoke tours.
                        </p>
                      )}
                    </div>

                    <div className="item">
                      {showSubtitle && (
                        <h3 className="item-title text-2xl md:text-3xl font-semibold mb-4">
                          Professional & Reliable Service
                        </h3>
                      )}
                      {showText && (
                        <p className="item-text text-lg md:text-xl leading-relaxed">
                          We redefine premium transportation in Kenya with punctual, courteous, and highly trained chauffeurs who prioritize your comfort, safety, and satisfaction. Every journey is seamless — from meet-and-greet airport services to scenic out-of-town adventures.
                        </p>
                      )}
                    </div>

                    <div className="item">
                      {showSubtitle && (
                        <h3 className="item-title text-2xl md:text-3xl font-semibold mb-4">
                          Your Satisfaction, Our Priority
                        </h3>
                      )}
                      {showText && (
                        <p className="item-text text-lg md:text-xl leading-relaxed">
                          At Makanaki Travels, we combine elegant vehicles with exceptional service to create unforgettable travel experiences across Nairobi and beyond. Your comfort and happiness are at the heart of everything we do.
                        </p>
                      )}
                    </div>
                  </div>

                  {showButtons && (
                    <div className="mt-12 text-center md:text-left booking-button-container">
                      <a
                        href="/booking-form.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="booking-button"
                      >
                        Book Your Ride Now
                        <span className="icon">→</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;