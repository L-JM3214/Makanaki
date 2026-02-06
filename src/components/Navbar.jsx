// src/components/Navbar.jsx (Updated for hover menu)
import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo1.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  // Handle scroll effect and active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'fleet', 'services', 'about', 'contact', 'testimonials'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Handle click outside to close menu
    const handleClickOutside = (event) => {
      if (menuRef.current && 
          !menuRef.current.contains(event.target) && 
          triggerRef.current && 
          !triggerRef.current.contains(event.target)) {
        setIsMenuHovered(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close menu when scrolling on mobile
  useEffect(() => {
    const handleScrollClose = () => {
      if (window.innerWidth <= 768 && isMenuHovered) {
        setIsMenuHovered(false);
      }
    };

    window.addEventListener('scroll', handleScrollClose);
    return () => window.removeEventListener('scroll', handleScrollClose);
  }, [isMenuHovered]);

  const navLinks = [
    { name: 'Home', path: '#home', id: 'home' },
    { name: 'Our Fleet', path: '#fleet', id: 'fleet' },
    { name: 'Services', path: '#services', id: 'services' },
    { name: 'About Us', path: '#about', id: 'about' },
    { name: 'Testimonials', path: '#testimonials', id: 'testimonials' },
    { name: 'Contact', path: '#contact', id: 'contact' },
  ];

  const scrollToSection = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuHovered(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-400 ${
      scrolled ? 'navbar-blur py-3' : 'navbar-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection('home', e)}
            className="logo-link flex items-center gap-3 cursor-pointer"
          >
            <img 
              src={logo} 
              alt="Makanaki Travels Logo" 
              className="h-12 w-auto object-contain"
            />
            <span className="logo-text text-2xl font-bold text-[#ffc091] hidden md:block">
              Makanaki
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => scrollToSection(link.id, e)}
                className={`nav-desktop-link transition-all duration-300 font-medium text-lg ${
                  activeSection === link.id 
                    ? 'active text-[#ffc091] font-bold' 
                    : 'text-white hover:text-[#ffc091]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={(e) => scrollToSection('contact', e)}
              className="book-now-btn bg-[#ffc091] text-[#260a30] px-8 py-3 rounded-full font-bold hover:bg-[#ffd9a3] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu - Hover Trigger Area */}
          <div 
            className="mobile-menu-trigger-area md:hidden"
            ref={triggerRef}
            onMouseEnter={() => setIsMenuHovered(true)}
            onTouchStart={() => setIsMenuHovered(true)}
          />

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
            onMouseEnter={() => setIsMenuHovered(true)}
            onTouchStart={() => setIsMenuHovered(true)}
            ref={triggerRef}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuHovered ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu - Hover Controlled */}
          <div 
            ref={menuRef}
            className={`mobile-menu md:hidden ${isMenuHovered ? 'hover-active' : ''}`}
            onMouseEnter={() => setIsMenuHovered(true)}
            onMouseLeave={() => setIsMenuHovered(false)}
            style={{ 
              opacity: isMenuHovered ? 1 : 0,
              visibility: isMenuHovered ? 'visible' : 'hidden',
              transform: isMenuHovered ? 'translateY(0)' : 'translateY(-20px)',
              maxHeight: isMenuHovered ? '75vh' : '0'
            }}
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => scrollToSection(link.id, e)}
                    className={`mobile-menu-link py-3 text-lg font-medium rounded-lg ${
                      activeSection === link.id 
                        ? 'active text-[#ffc091]' 
                        : 'text-white hover:text-[#ffc091]'
                    }`}
                    style={{ '--item-index': index }}
                  >
                    {link.name}
                  </a>
                ))}
                <button
                  onClick={(e) => scrollToSection('contact', e)}
                  className="book-now-btn bg-[#ffc091] text-[#260a30] px-8 py-3 rounded-full font-bold hover:bg-[#ffd9a3] transition text-center mt-4 hover:scale-105"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;