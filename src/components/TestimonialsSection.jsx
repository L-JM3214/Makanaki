// src/components/TestimonialsSection.jsx
import React, { useRef, useEffect } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = ({
  fullWidth = false,
  paddingTop = 6,
  paddingBottom = 6,
  showMainTitle = true,
  showMainSubtitle = true,
  showTitle = true,
  showImage = true,
  bg = {
    type: 'color',
    value: '#ffffff',
  },
}) => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  const sectionStyle = {
    paddingTop: `${paddingTop}rem`,
    paddingBottom: `${paddingBottom}rem`,
    backgroundColor: bg.type === 'color' ? bg.value : undefined,
  };

  // More realistic / professional-looking images
  const testimonials = [
    {
      text: "Makanaki Travels made our wedding day perfect. The chauffeur was punctual, polite, and the car looked brand new inside and out.",
      name: "Amina Hassan",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80",
    },
    {
      text: "Very professional service for airport pickup. Driver waited with a name sign and helped with luggage. Will definitely use again.",
      name: "David Ochieng",
      img: "https://images.unsplash.com/photo-1557862921-37829c7765e3?w=800&auto=format&fit=crop&q=80",
    },
    {
      text: "The best chauffeur experience in Nairobi. Comfortable ride, clean car, and very courteous driver. 10/10 service.",
      name: "Priya Sharma",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80",
    },
    {
      text: "Used for corporate transfers multiple times. Always on time, well-dressed drivers, and luxury vehicles. Highly recommended.",
      name: "James Mwangi",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80",
    },
    {
      text: "Took my family for a scenic tour to Naivasha. Driver was very knowledgeable about the route and made the trip memorable.",
      name: "Sarah Kimani",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
    },
    {
      text: "Reliable and elegant transport for business meetings. Professional drivers and spotless vehicles every time.",
      name: "Michael Kamau",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&auto=format&fit=crop&q=80",
    },
  ];

  // Auto-scroll logic
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = () => {
      if (scrollContainer) {
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const currentScroll = scrollContainer.scrollLeft;

        // If near the end, jump back to start (infinite loop effect)
        if (currentScroll >= maxScroll - 10) {
          scrollContainer.scrollTo({ left: 0, behavior: 'instant' });
        } else {
          scrollContainer.scrollBy({ left: 380, behavior: 'smooth' });
        }
      }
    };

    // Start auto-scroll every 5 seconds
    intervalRef.current = setInterval(scrollStep, 5000);

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="testimonials-section" style={sectionStyle}>
      <div className={`${fullWidth ? 'container-fluid' : 'container'} px-4 md:px-6 lg:px-8`}>
        {/* Header */}
        {(showMainTitle || showMainSubtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {showMainTitle && (
              <h2 className="section-title">What Our Clients Say</h2>
            )}
            {showMainSubtitle && (
              <p className="section-subtitle">
                Real experiences from people who trusted Makanaki Travels
              </p>
            )}
          </div>
        )}

        {/* Testimonials Carousel – no arrows, auto-scrolls */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="testimonials-scroll flex gap-6 md:gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card flex-shrink-0 w-full md:w-1/3 snap-start"
              >
                <div className="card-inner">
                  {showImage && (
                    <div className="avatar-wrapper">
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="avatar"
                      />
                    </div>
                  )}

                  <p className="testimonial-text">
                    "{testimonial.text}"
                  </p>

                  {showTitle && (
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;