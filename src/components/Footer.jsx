// src/components/Footer.jsx
import React from 'react';
import logo from '../assets/logo.png';
import './Footer.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="footer-grid grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand + Description */}
          <div>
            <div className="brand-section">
              <img 
                src={logo} 
                alt="Makanaki Travels Logo" 
                className="logo-img" 
              />
              <span className="brand-name">
                Makanaki
              </span>
            </div>
            <p className="footer-description">
              Premium chauffeur-driven luxury vehicles in Nairobi. 
              Experience elegance, comfort, and punctuality for every journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="section-heading">
              Quick Links
            </h4>
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
          <div>
            <h4 className="section-heading">
              Follow Us
            </h4>
            <div className="social-icons">
              {[
                { name: 'Facebook', icon: 'F', className: 'facebook' },
                { name: 'Instagram', icon: 'I', className: 'instagram' },
                { name: 'Twitter', icon: 'T', className: 'twitter' },
                { name: 'TikTok', icon: 'Tk', className: 'tiktok' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={`https://${social.name.toLowerCase()}.com/makanakitravels`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-icon ${social.className}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="contact-info">
              <h5 className="section-heading text-lg mb-3">
                Contact
              </h5>
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
              <a href="#privacy" className="legal-link">
                Privacy Policy
              </a>
              <a href="#terms" className="legal-link">
                Terms of Service
              </a>
              <a href="#cookies" className="legal-link">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;