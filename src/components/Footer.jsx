// src/components/Footer.jsx
import React from 'react';
import logo from '../assets/logo.png';
import whatsappLogo from '../assets/lg1.png';
import gmailLogo from '../assets/lg2.jpg';
import facebookLogo from '../assets/lg3.png';
import instagramLogo from '../assets/lg4.jpg';
import linkedinLogo from '../assets/lg5.png';
import xLogo from '../assets/lg6.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content container mx-auto px-6 lg:px-8">
        <div className="footer-grid grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand + Description */}
          <div className="footer-brand-column">
            <div className="brand-section">
              <img 
                src={logo} 
                alt="Makanaki Travels Logo" 
                className="logo-img" 
              />
              <span className="brand-name">Makanaki</span>
            </div>
            <p className="footer-description">
              Premium chauffeur-driven luxury vehicles in Nairobi. 
              Experience elegance, comfort, and punctuality for every journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-column">
            <h4 className="section-heading">Quick Links</h4>
            <div className="quick-links">
              {['Home', 'Our Fleet', 'Services', 'About Us', 'FAQs'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="quick-link"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media + Contact */}
          <div className="footer-contact-column">
            <h4 className="section-heading">Follow Us</h4>
            <div className="social-logos">
              <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer" className="social-logo whatsapp" title="WhatsApp">
                <img src={whatsappLogo} alt="WhatsApp" />
              </a>

              <a href="mailto:info@makanakitravels.com" className="social-logo gmail" title="Email">
                <img src={gmailLogo} alt="Email" />
              </a>

              <a href="https://facebook.com/makanakitravels" target="_blank" rel="noopener noreferrer" className="social-logo facebook" title="Facebook">
                <img src={facebookLogo} alt="Facebook" />
              </a>

              <a href="https://instagram.com/makanakitravels" target="_blank" rel="noopener noreferrer" className="social-logo instagram" title="Instagram">
                <img src={instagramLogo} alt="Instagram" />
              </a>

              <a href="https://linkedin.com/company/makanakitravels" target="_blank" rel="noopener noreferrer" className="social-logo linkedin" title="LinkedIn">
                <img src={linkedinLogo} alt="LinkedIn" />
              </a>

              <a href="https://x.com/makanakitravels" target="_blank" rel="noopener noreferrer" className="social-logo x-twitter" title="X (Twitter)">
                <img src={xLogo} alt="X (Twitter)" />
              </a>
            </div>

            <div className="contact-info">
              <h5 className="section-heading">Contact</h5>
              <p className="contact-item">+254 712 345 678</p>
              <p className="contact-item">info@makanakitravels.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bottom-bar">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="copyright">
              © {currentYear} Makanaki Travels. All rights reserved.
            </p>
            <div className="legal-links">
              <a href="#privacy" className="legal-link">Privacy Policy</a>
              <a href="#terms" className="legal-link">Terms of Service</a>
              <a href="#cookies" className="legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;