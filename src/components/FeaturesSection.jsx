// src/components/FeaturesSection.jsx
import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = ({
  fullWidth = true,
  paddingTop = 6,
  paddingBottom = 6,
  cardsWidth = 3,               // 12=1 col, 6=2, 4=3, 3=4 columns (Bootstrap-like)
  showTitle = true,
  showSubtitle = false,
  autoSize = true,
  imageHeight = 4,              // in 100px units if autoSize=true
  spacing = true,
  showCardTitle = true,
  showText = true,
  showButtons = true,
  bg = {
    type: 'color',
    value: '#ffffff',           // or image url
  },
  overlay = false,
  overlayColor = '#edefeb',
  overlayOpacity = 0.6,
}) => {
  const containerClass = fullWidth ? 'container-fluid' : 'container';

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

  const overlayStyle = overlay && bg.type === 'image' ? {
    backgroundColor: overlayColor,
    opacity: overlayOpacity,
  } : {};

  // Sample cards data - you can make this a prop array later
  const cards = [
    {
      img: 'https://r.mobirisesite.com/2279897/assets/images/photo-1545061371-98a8355c9c0d.jpeg',
      title: 'Wedding Chauffeur Service',
      date: '2026-08-15',
      text: 'Arrive in unparalleled style on your big day. Our luxury fleet ensures a memorable and seamless experience for you and your guests.',
    },
    {
      img: 'https://r.mobirisesite.com/2279897/assets/images/photo-1651561028053-517dd21d5d89.jpeg',
      title: 'Corporate Events & Transfers',
      date: '2026-09-20',
      text: 'Impress your clients and colleagues with punctual, sophisticated transport. We guarantee a first-class experience for all your business needs.',
    },
    {
      img: 'https://r.mobirisesite.com/2279897/assets/images/photo-1503376780353-7e6692767b70.jpeg',
      title: 'Airport Transfers',
      date: '2026-10-01',
      text: 'Start or end your travels with ease. Our reliable service offers a stress-free transfer to and from all major airports.',
    },
    {
      img: 'https://r.mobirisesite.com/2279897/assets/images/photo-1610809376778-928ee2c3a561.jpeg',
      title: 'Scenic Tours',
      date: '2026-11-11',
      text: 'See the beauty of Kenya in ultimate comfort. Let us guide you through breathtaking sights with our premium self-drive and chauffeur options.',
    },
  ];

  return (
    <section id="services" className="features03 py-0" style={sectionStyle}>
      {/* Overlay if image bg */}
      {overlay && bg.type === 'image' && (
        <div className="absolute inset-0 z-10" style={overlayStyle} />
      )}

      <div className={`${containerClass} relative z-20`}>
        {/* Header */}
        {(showTitle || showSubtitle) && (
          <div className="row justify-content-center mb-5">
            <div className="col-12 content-head text-center">
              {showTitle && (
                <h4 className="mbr-section-title mb-0 font-bold text-4xl md:text-5xl" style={{ color: '#232323' }}>
                  <b>Grand Occasions</b>
                </h4>
              )}
              {showSubtitle && (
                <h5 className="mbr-section-subtitle mt-4 mb-0 text-lg opacity-80" style={{ color: '#232323' }}>
                  To add more cards, hover on a card and click 'Add items' (or update the cards array in code)
                </h5>
              )}
            </div>
          </div>
        )}

        {/* Cards Grid */}
        <div className="row">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`item features-image col-12 col-md-6 col-lg-${cardsWidth} mb-8`}
            >
              <div className="item-wrapper bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                <div className="item-img">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full object-cover"
                    style={
                      autoSize
                        ? { height: showCardTitle || showText || showButtons ? `${imageHeight * 100}px` : 'auto' }
                        : {}
                    }
                  />
                </div>

                {(showCardTitle || showText || showButtons) && (
                  <div className="item-content p-6 flex flex-col flex-grow">
                    {showCardTitle && (
                      <h5 className="item-title text-xl font-bold mb-2" style={{ color: '#232323' }}>
                        <b>{card.title}</b>
                      </h5>
                    )}
                    {showText && (
                      <>
                        <p className="text-sm opacity-70 mb-2" style={{ color: '#232323' }}>
                          {card.date}
                        </p>
                        <p className="mbr-text mb-4 flex-grow" style={{ color: '#232323' }}>
                          {card.text}
                        </p>
                      </>
                    )}
                    {showButtons && (
                      <div className="mbr-section-btn mt-auto">
                        <a
                          href="#book"
                          className="btn btn-primary px-6 py-3 rounded-md font-medium bg-[#ffc091] text-[#260a30] hover:bg-[#ffd9a3] transition"
                        >
                          Book
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;