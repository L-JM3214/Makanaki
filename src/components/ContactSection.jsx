// src/components/ContactSection.jsx
import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const whatsappNumber = '+254712345678';
  const whatsappMessage = 'Hello Makanaki Travels! I would like to book a luxury car...';
  const emailAddress = 'info@makanakitravels.com';
  const facebookUrl = 'https://facebook.com/makanakitravels';
  const tiktokUrl = 'https://tiktok.com/@makanakitravels';

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const whatsappLink = isMobile
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : `https://wa.me/${whatsappNumber}`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${emailAddress}?subject=New Inquiry from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormStatus('Message prepared! Check your email client.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Title */}
        <div className="title-wrapper">
          <h2 className="main-title">Get In Touch</h2>
          <p className="subtitle">
            Ready to experience luxury travel in Nairobi? Contact us today — we're here to make your journey extraordinary.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="contact-buttons">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn whatsapp">
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 2.14.7 4.11 1.88 5.71L2 22l4.29-1.88C7.89 21.3 9.86 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm3.78 14.38c-.25.7-.92 1.24-1.62 1.38-.7.14-1.43.04-2.05-.3-.62-.34-1.18-.83-1.65-1.45-.47-.62-.82-1.34-.99-2.11-.17-.77-.12-1.57.15-2.32.27-.75.74-1.42 1.35-1.94.61-.52 1.36-.87 2.15-.99.79-.12 1.58.01 2.3.37.72.36 1.35.88 1.84 1.54.49.66.84 1.43.99 2.23.15.8.05 1.61-.29 2.33z"/>
            </svg>
            WhatsApp Us
          </a>

          <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="btn message">
            <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Send Message
          </button>

          <a href={`mailto:${emailAddress}?subject=Inquiry from Website`} className="btn email">
            <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Send Email
          </a>

          <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="btn facebook">
            <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
            Facebook
          </a>

          <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="btn tiktok">
            <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.33 6.33 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 11.14-4.29v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.32-.27z"/>
            </svg>
            TikTok
          </a>
        </div>

        {/* Contact Form */}
        <div id="contact-form" className="contact-form">
          <h3 className="form-title">Send Us a Message</h3>

          <form onSubmit={handleSubmit} className="contact-form-inner">
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
                placeholder="+254 XXX XXX XXX"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Tell us about your luxury transportation needs..."
                required
              />
            </div>

            <div className="form-submit-wrapper">
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </div>

            {formStatus && <p className="form-status">{formStatus}</p>}
          </form>
        </div>

        {/* Contact Info Cards */}
        <div className="contact-info-grid">
          <div className="info-card">
            <div className="info-icon">📞</div>
            <h4 className="info-title">Phone</h4>
            <p className="info-text">+254 712 345 678</p>
            <p className="info-subtext">Available 24/7</p>
          </div>

          <div className="info-card">
            <div className="info-icon">✉️</div>
            <h4 className="info-title">Email</h4>
            <p className="info-text">info@makanakitravels.com</p>
            <p className="info-subtext">Response within 1 hour</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📍</div>
            <h4 className="info-title">Location</h4>
            <p className="info-text">Nairobi, Kenya</p>
            <p className="info-subtext">Serving all of Nairobi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;