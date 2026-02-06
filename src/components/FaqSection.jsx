// src/components/FaqSection.jsx
import React from 'react';
import './FaqSection.css';

const FaqSection = ({
  paddingTop = 5,
  paddingBottom = 5,
  showTitle = true,
  showSubtitle = true,
  cardAmount = 5,               // 1 to 6
  itemsColor = '#ffffff',       // card background
  transparentBg = true,
  bg = {
    type: 'color',
    value: '#edefeb',
  },
  overlay = true,
  overlayColor = '#ffffff',
  overlayOpacity = 0.9,
}) => {
  const sectionStyle = {
    paddingTop: `${paddingTop}rem`,
    paddingBottom: `${paddingBottom}rem`,
  };

  if (bg.type === 'color') {
    sectionStyle.backgroundColor = transparentBg ? 'transparent' : bg.value;
  } else if (bg.type === 'image') {
    sectionStyle.backgroundImage = `url(${bg.value})`;
    sectionStyle.backgroundSize = 'cover';
    sectionStyle.backgroundPosition = 'center';
  }

  const overlayStyle = overlay && bg.type !== 'color' ? {
    backgroundColor: overlayColor,
    opacity: overlayOpacity,
  } : {};

  // FAQ items — customize questions/answers here
  const faqs = [
    {
      question: "What types of cars do you offer?",
      answer: "We offer a wide range of luxury vehicles, including sedans, SUVs, and vans, perfect for any occasion — from elegant weddings to executive corporate transfers and scenic tours.",
    },
    {
      question: "How do I book a car?",
      answer: "Booking is simple! Use the booking form on our website, WhatsApp us, call our team, or send an email. We usually confirm within minutes during business hours.",
    },
    {
      question: "Do you offer airport transfers?",
      answer: "Yes — we provide reliable, punctual airport transfers to and from Jomo Kenyatta International Airport (JKIA) and Wilson Airport. Meet & greet service available.",
    },
    {
      question: "Can I hire a car for a wedding?",
      answer: "Absolutely. Our premium fleet is perfect for weddings — arrive in style and make your big day unforgettable with chauffeur-driven luxury vehicles.",
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily serve Nairobi and surrounding areas (including Kiambu, Kajiado, Machakos, and parts of Nakuru). Out-of-town trips available on request.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "Free cancellation up to 24 hours before the service. Cancellations within 24 hours may incur a fee depending on the booking type. Contact us for details.",
    },
  ];

  // Limit to selected amount
  const displayedFaqs = faqs.slice(0, cardAmount);

  return (
    <section className="faq-section relative overflow-hidden" style={sectionStyle}>
      {/* Overlay */}
      {overlay && bg.type !== 'color' && (
        <div className="absolute inset-0 z-10" style={overlayStyle} />
      )}

      <div className="container relative z-20 py-12 md:py-16">
        {/* Header */}
        {(showTitle || showSubtitle) && (
          <div className="text-center mb-12">
            {showTitle && (
              <h4 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
                <b>FAQs</b>
              </h4>
            )}
            {showSubtitle && (
              <h5 className="text-lg md:text-xl opacity-80" style={{ color: '#000000' }}>
                Frequently Asked Questions
              </h5>
            )}
          </div>
        )}

        {/* Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {displayedFaqs.map((faq, index) => (
            <details
              key={index}
              className="faq-item bg-white rounded-2xl shadow-md overflow-hidden"
              style={{ backgroundColor: itemsColor }}
            >
              <summary className="flex justify-between items-center cursor-pointer px-6 md:px-8 py-5 text-left">
                <h6 className="text-xl md:text-2xl font-semibold" style={{ color: '#000000' }}>
                  {faq.question}
                </h6>
                <span className="arrow text-2xl font-bold">+</span>
              </summary>

              <div className="px-6 md:px-8 pb-6 pt-2">
                <p className="text-base md:text-lg leading-relaxed" style={{ color: '#000000' }}>
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;