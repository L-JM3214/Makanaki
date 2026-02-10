// src/components/FaqSection.jsx
import React from 'react';
import ccImage from '../assets/cc1.png';
import whatsappLogo from '../assets/lg1.png';
import gmailLogo from '../assets/lg2.jpg';
import facebookLogo from '../assets/lg3.png';
import instagramLogo from '../assets/lg4.jpg';
import linkedinLogo from '../assets/lg5.png';
import xLogo from '../assets/lg6.png';

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
                Find quick answers to common questions about our car hire and chauffeur services.
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

        {/* Get in Touch Section – Your Logo Images */}
        <div className="get-in-touch-wrapper">
          <div className="get-in-touch-content">
            <h3 className="get-in-touch-title">Still have questions?</h3>
            <p className="get-in-touch-text">
              Our team is ready to assist you personally. Feel free to reach out anytime — we're here to help make your experience seamless and luxurious.
            </p>

            <div className="get-in-touch-icons">
              {/* WhatsApp */}
              <a
                href="https://wa.me/254712345678?text=Hello%20Makanaki%20Travels%2C%20I'd%20like%20to%20book%20a%20luxury%20car..."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon whatsapp"
                title="WhatsApp"
              >
                <img src={whatsappLogo} alt="WhatsApp" />
              </a>

              {/* Gmail / Email */}
              <a
                href="mailto:info@makanakitravels.com"
                className="contact-icon gmail"
                title="Email"
              >
                <img src={gmailLogo} alt="Email" />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/makanakitravels"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon facebook"
                title="Facebook"
              >
                <img src={facebookLogo} alt="Facebook" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/makanakitravels"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon instagram"
                title="Instagram"
              >
                <img src={instagramLogo} alt="Instagram" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/makanakitravels"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon linkedin"
                title="LinkedIn"
              >
                <img src={linkedinLogo} alt="LinkedIn" />
              </a>

              {/* X (Twitter) 
              <a
                href="https://x.com/makanakitravels"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon x-twitter"
                title="X (Twitter)"
              >
                <img src={xLogo} alt="X (Twitter)" />
              </a>*/}
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