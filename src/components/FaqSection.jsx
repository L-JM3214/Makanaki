// src/components/FaqSection.jsx
import React from 'react';
import ccImage from '../assets/cc1.png';
import './FaqSection.css';

const FaqSection = ({
  paddingTop = 6,
  paddingBottom = 8,
  showTitle = true,
  showSubtitle = true,
  cardAmount = 6,
  itemsColor = '#ffffff',
}) => {
  const faqs = [
    {
      question: "What types of cars do you offer?",
      answer:
        "We offer a wide range of luxury vehicles, including sedans, SUVs, and vans — perfect for weddings, corporate events, airport transfers, and scenic tours in Nairobi and beyond.",
    },
    {
      question: "How do I book a car?",
      answer:
        "Booking is effortless. Use our online form, WhatsApp, call, or email. Most bookings are confirmed within minutes during business hours.",
    },
    {
      question: "Do you offer airport transfers?",
      answer:
        "Yes — reliable, on-time transfers to/from Jomo Kenyatta International Airport (JKIA) and Wilson Airport. Meet & greet service available on request.",
    },
    {
      question: "Can I hire a car for a wedding?",
      answer:
        "Absolutely. Our premium fleet adds elegance and sophistication — arrive in style and make your special day truly unforgettable.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "Nairobi and surrounding counties (Kiambu, Kajiado, Machakos, parts of Nakuru). Out-of-town and long-distance trips available upon request.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Free cancellation up to 24 hours before service. Last-minute cancellations may incur a fee depending on the booking. Contact us for specifics.",
    },
  ];

  const displayedFaqs = faqs.slice(0, cardAmount);

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Header */}
        {(showTitle || showSubtitle) && (
          <div className="header-wrapper">
            {showTitle && (
              <h2 className="section-title">Frequently Asked Questions</h2>
            )}
            {showSubtitle && (
              <p className="section-subtitle">
                Find quick answers to common questions about our luxury chauffeur services in Nairobi.
              </p>
            )}
          </div>
        )}

        {/* FAQ items */}
        <div className="faq-list">
          {displayedFaqs.map((faq, index) => (
            <details key={index} className="faq-item">
              <summary className="faq-summary">
                <h3 className="faq-question">{faq.question}</h3>
                <span className="faq-icon">+</span>
              </summary>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Get in Touch Section – icons only */}
        <div className="get-in-touch-wrapper">
          <div className="get-in-touch-content">
            <h3 className="get-in-touch-title">Still have questions?</h3>
            <p className="get-in-touch-text">
              Our team is ready to assist you personally. Feel free to reach out anytime — we're here to help make your experience seamless and luxurious.
            </p>

            <div className="get-in-touch-icons">
              <a
                href="https://wa.me/2547XXXXXXXX?text=Hello%20TALC-M%2C%20I'd%20like%20to%20inquire%20about..."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon whatsapp"
                title="Chat on WhatsApp"
              >
                <span>💬</span>
              </a>

              <a
                href="tel:+2547XXXXXXXX"
                className="contact-icon phone"
                title="Call Us"
              >
                <span>📞</span>
              </a>

              <a
                href="mailto:info@talc-m.com"
                className="contact-icon email"
                title="Send Email"
              >
                <span>✉️</span>
              </a>
            </div>
          </div>

          <div className="get-in-touch-image">
            <img
              src={ccImage}
              alt="Customer Care Team"
              className="customer-care-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;