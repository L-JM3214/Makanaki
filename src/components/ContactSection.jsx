// src/components/ContactSection.jsx
import React, { useState } from 'react';
import './ContactSection.css';

// Import your logo images
import whatsappLogo from '../assets/lg1.png';
import gmailLogo from '../assets/lg2.jpg';
import facebookLogo from '../assets/lg3.png';
import instagramLogo from '../assets/lg4.jpg';
import linkedinLogo from '../assets/lg5.png';
import xLogo from '../assets/lg6.png';

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
  const instagramUrl = 'https://instagram.com/makanakitravels';
  const linkedinUrl = 'https://linkedin.com/company/makanakitravels';
  const xUrl = 'https://x.com/makanakitravels';

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

        {/* Social Logo Buttons (icons only) */}
        <div className="social-logos">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="logo-btn whatsapp" title="WhatsApp">
            <img src={whatsappLogo} alt="WhatsApp" />
          </a>

          <a href={`mailto:${emailAddress}?subject=Inquiry from Website`} className="logo-btn gmail" title="Email">
            <img src={gmailLogo} alt="Email" />
          </a>

          <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="logo-btn facebook" title="Facebook">
            <img src={facebookLogo} alt="Facebook" />
          </a>

          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="logo-btn instagram" title="Instagram">
            <img src={instagramLogo} alt="Instagram" />
          </a>

          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="logo-btn linkedin" title="LinkedIn">
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>

          <a href={xUrl} target="_blank" rel="noopener noreferrer" className="logo-btn x-twitter" title="X (Twitter)">
            <img src={xLogo} alt="X (Twitter)" />
          </a>
        </div>

        {/* Send Message Button (text button kept for form) */}
        <div className="send-message-wrapper">
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="send-message-btn"
          >
            Send Us a Message
          </button>
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