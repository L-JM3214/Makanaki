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

  // Detect mobile for WhatsApp deep link
  const isMobile = typeof window !== 'undefined' ? 
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) : 
    false;

  const whatsappLink = isMobile
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : `https://wa.me/${whatsappNumber}`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple mailto fallback
    const mailtoLink = `mailto:${emailAddress}?subject=New Inquiry from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setFormStatus('Message prepared! Check your email client.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section py-16 md:py-24 bg-[#0f071a] text-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#ffc091] mb-4">
            Get In Touch
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Ready to experience luxury travel in Nairobi? Contact us today — we're here to make your journey extraordinary.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16">
          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-[#20b858] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 2.14.7 4.11 1.88 5.71L2 22l4.29-1.88C7.89 21.3 9.86 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm3.78 14.38c-.25.7-.92 1.24-1.62 1.38-.7.14-1.43.04-2.05-.3-.62-.34-1.18-.83-1.65-1.45-.47-.62-.82-1.34-.99-2.11-.17-.77-.12-1.57.15-2.32.27-.75.74-1.42 1.35-1.94.61-.52 1.36-.87 2.15-.99.79-.12 1.58.01 2.3.37.72.36 1.35.88 1.84 1.54.49.66.84 1.43.99 2.23.15.8.05 1.61-.29 2.33z"/>
            </svg>
            WhatsApp Us
          </a>

          {/* Send Message (Form) */}
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-3 bg-[#ffc091] text-[#260a30] px-8 py-5 rounded-full font-bold text-lg hover:bg-[#ffd9a3] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Send Message
          </button>

          {/* Send Email */}
          <a
            href={`mailto:${emailAddress}?subject=Inquiry from Makanaki Travels Website`}
            className="flex items-center gap-3 bg-gray-700 text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Send Email
          </a>

          {/* Facebook */}
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#1877F2] text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-[#166fe5] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
            Facebook
          </a>

          {/* TikTok - FIXED SVG */}
          <a
            href={tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.33 6.33 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 11.14-4.29v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.32-.27z"/>
            </svg>
            TikTok
          </a>
        </div>

        {/* Contact Form */}
        <div id="contact-form" className="contact-form mt-12">
          <h3 className="text-3xl font-bold text-[#ffc091] mb-8 text-center">
            Send Us a Message
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ffc091] focus:ring-1 focus:ring-[#ffc091]"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ffc091] focus:ring-1 focus:ring-[#ffc091]"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ffc091] focus:ring-1 focus:ring-[#ffc091]"
                placeholder="+254 XXX XXX XXX"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ffc091] focus:ring-1 focus:ring-[#ffc091] h-32 resize-none"
                placeholder="Tell us about your luxury transportation needs..."
                required
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#ffc091] text-[#260a30] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#ffd9a3] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
          
          {formStatus && (
            <div className="mt-6 text-center text-[#ffc091]">
              {formStatus}
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white/5 rounded-2xl">
            <div className="text-3xl text-[#ffc091] mb-3">📞</div>
            <h4 className="text-xl font-bold mb-2">Phone</h4>
            <p className="text-gray-300">+254 712 345 678</p>
            <p className="text-sm text-gray-400 mt-1">Available 24/7</p>
          </div>
          
          <div className="p-6 bg-white/5 rounded-2xl">
            <div className="text-3xl text-[#ffc091] mb-3">✉️</div>
            <h4 className="text-xl font-bold mb-2">Email</h4>
            <p className="text-gray-300">info@makanakitravels.com</p>
            <p className="text-sm text-gray-400 mt-1">Response within 1 hour</p>
          </div>
          
          <div className="p-6 bg-white/5 rounded-2xl">
            <div className="text-3xl text-[#ffc091] mb-3">📍</div>
            <h4 className="text-xl font-bold mb-2">Location</h4>
            <p className="text-gray-300">Nairobi, Kenya</p>
            <p className="text-sm text-gray-400 mt-1">Serving all of Nairobi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;