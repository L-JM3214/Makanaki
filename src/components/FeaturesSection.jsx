import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = ({
  fullWidth = true,
  paddingTop = 6,
  paddingBottom = 6,
  showTitle = true,
  showSubtitle = false,
  showCardTitle = true,
  bg = { type: 'color', value: '#ffffff' },
  overlay = false,
  overlayColor = '#000000',
  overlayOpacity = 0.4,
  cards = [
    {
      img: 'https://www.elinerstourscarhire.com/range-rover-wedding-car-hire-eldoret.png',
      title: 'Wedding Chauffeur Service',
    },
    {
      img: 'https://yenra.com/i/ai-tech/car-rental-systems/dynamic-pricing-models-1.jpg',
      title: 'Corporate Events & Transfers',
    },
    {
      img: 'https://t4.ftcdn.net/jpg/08/80/09/69/360_F_880096970_xrMG2ocS6OHzeJDXAMUkJqmRu7DN0zgq.jpg',
      title: 'Airport Transfers',
    },
    {
      img: 'https://www.panoramatours.co.ke/wp-content/uploads/2013/02/toyota.jpg',
      title: 'Scenic Tours',
    },
  ],
}) => {
  const containerClass = fullWidth ? 'container-fluid' : 'container';

  const sectionStyle = {
    paddingTop: `${paddingTop}rem`,
    paddingBottom: `${paddingBottom}rem`,
    backgroundColor: bg.type === 'color' ? bg.value : undefined,
    backgroundImage: bg.type === 'image' ? `url(${bg.value})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  };

  return (
    <section className="features-section" style={sectionStyle} id="services">
      {overlay && bg.type === 'image' && (
        <div
          className="overlay"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      )}

      <div className={`${containerClass} features-content`}>

        <div className="cards-grid">
          {cards.map((card, index) => (
            <div key={index} className="feature-card">
              <div className="card-image-wrapper">
                <img
                  src={card.img}
                  alt={card.title}
                  className="card-image"
                  loading="lazy"
                />
              </div>

              {showCardTitle && (
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;