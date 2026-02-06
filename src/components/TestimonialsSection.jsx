// src/components/TestimonialsSection.jsx
import React, { useRef } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = ({
  fullWidth = false,
  paddingTop = 6,
  paddingBottom = 6,
  columns = 3,                  // 12=1, 6=2, 4=3, 3=4 columns on lg
  showMainTitle = true,
  showMainSubtitle = true,
  showTitle = true,
  showImage = true,
  bg = {
    type: 'color',
    value: '#ffffff',
  },
  overlay = false,
  overlayColor = '#ffffff',
  overlayOpacity = 0.5,
}) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
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

  // Extended testimonials array (add more as needed)
  const testimonials = [
    {
      text: "Makanaki Travels provided an exceptional experience for our wedding. The car was immaculate, and the service was top-notch!",
      name: "Amina Hassan",
      img: "https://r.mobirisesite.com/2279897/assets/images/photo-1598992616139-5ed3d0fa4eeb.jpeg",
    },
    {
      text: "The most reliable and luxurious car hire in Nairobi. Punctual, professional, and the fleet is simply stunning.",
      name: "David Ochieng",
      img: "https://r.mobirisesite.com/2279897/assets/images/photo-1694026307715-0d3709e69adf.jpeg",
    },
    {
      text: "Seamless airport transfers every time. Makanaki Travels made our holiday travel completely stress-free. Highly recommend!",
      name: "Priya Sharma",
      img: "https://r.mobirisesite.com/2279897/assets/images/photo-1568530134868-5d89f49d5a72.jpeg",
    },
    {
      text: "Outstanding service for my corporate event. The driver was courteous, and the vehicle was spotless. Will definitely use again!",
      name: "James Mwangi",
      img: "https://img.freepik.com/free-photo/handsome-bearded-smiling-businessman-working-his-laptopand-speaking-mobile-phone-backseat-car_496169-578.jpg", // example from search
    },
    {
      text: "Perfect scenic tour experience. Comfortable ride, knowledgeable driver, and breathtaking views. Thank you Makanaki!",
      name: "Sarah Kimani",
      img: "https://thumbs.dreamstime.com/b/portrait-smile-black-woman-living-room-relax-peace-calm-weekend-break-home-confidence-comfort-african-person-sofa-421437960.jpg",
    },
    {
      text: "Reliable and elegant transport for my business meetings. Always on time and professional. Highly satisfied customer.",
      name: "Michael Kamau",
      img: "https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg",
    },
  ];

  return (
    <section id="testimonials" className="people05 relative overflow-hidden" style={sectionStyle}>
      {/* Overlay */}
      {overlay && bg.type !== 'color' && (
        <div className="absolute inset-0 z-10" style={overlayStyle} />
      )}

      <div className={`${fullWidth ? 'container-fluid' : 'container'} relative z-20`}>
        {/* Header */}
        {(showMainTitle || showMainSubtitle) && (
          <div className="row justify-content-center mb-10">
            <div className="col-12 text-center">
              {showMainTitle && (
                <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
                  <b>Voices</b>
                </h3>
              )}
              {showMainSubtitle && (
                <h5 className="text-lg md:text-xl opacity-80" style={{ color: '#000000' }}>
                  What our valued clients say about Makanaki Travels
                </h5>
              )}
            </div>
          </div>
        )}

        {/* Scrollable Testimonials */}
        <div className="relative">
          <div ref={scrollRef} className="testimonials-scroll flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`item flex-shrink-0 w-full md:w-1/${columns} snap-start`}
              >
                <div className="item-wrapper bg-white rounded-xl shadow-lg p-8 text-center h-full flex flex-col justify-between">
                  <p className="card-text text-lg leading-relaxed mb-6" style={{ color: '#000000' }}>
                    "{testimonial.text}"
                  </p>

                  {showImage && (
                    <div className="img-wrapper mb-4 flex justify-center">
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-[#ffc091]/30 shadow-md"
                      />
                    </div>
                  )}

                  {showTitle && (
                    <h5 className="card-title text-xl font-semibold" style={{ color: '#000000' }}>
                      <b>{testimonial.name}</b>
                    </h5>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-lg hover:bg-[#ffc091]/20 transition z-30"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-lg hover:bg-[#ffc091]/20 transition z-30"
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;