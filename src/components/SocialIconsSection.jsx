// src/components/SocialIconsSection.jsx
import React from 'react';
import './SocialIconsSection.css';

const SocialIconsSection = ({
  paddingTop = 6,
  paddingBottom = 6,
  showTitle = true,
  showSoc = true,
  soc = 5,                      // number of icons (1–5)
  iconColor = '#393193',        // icon color
  activeColor = '#f7f7f7',      // hover/active bg
  iconBg = '#f7f7f7',           // default icon background
  bg = {
    type: 'color',
    value: '#ffffff',
  },
  overlay = true,
  overlayColor = '#ffffff',
  overlayOpacity = 0.7,
}) => {
  const sectionStyle = {
    paddingTop: `${paddingTop}rem`,
    paddingBottom: `${paddingBottom}rem`,
  };

  if (bg.type === 'color') {
    sectionStyle.backgroundColor = bg.value;
  } else if (bg.type === 'image') {
    sectionStyle.backgroundImage = `url(${bg.value})`;
    sectionStyle.backgroundSize = 'cover';
    sectionStyle.backgroundPosition = 'center';
  }

  const overlayStyle = overlay && bg.type !== 'color' ? {
    backgroundColor: overlayColor,
    opacity: overlayOpacity,
  } : {};

  // Social links data (customize URLs and icons as needed)
  const socialLinks = [
    { platform: 'facebook', icon: 'socicon-facebook', url: 'https://facebook.com/makanakitravels', color: iconColor },
    { platform: 'twitter', icon: 'socicon-twitter', url: 'https://twitter.com/makanakitravels', color: iconColor },
    { platform: 'instagram', icon: 'socicon-instagram', url: 'https://instagram.com/makanakitravels', color: iconColor },
    { platform: 'linkedin', icon: 'socicon-linkedin', url: 'https://linkedin.com/company/makanakitravels', color: iconColor },
    { platform: 'twitch', icon: 'socicon-twitch', url: 'https://twitch.tv/makanakitravels', color: iconColor },
  ];

  // Limit to selected amount
  const displayedLinks = socialLinks.slice(0, soc);

  return (
    <section className="social05 relative overflow-hidden" style={sectionStyle}>
      {/* Overlay */}
      {overlay && bg.type !== 'color' && (
        <div className="absolute inset-0 z-10" style={overlayStyle} />
      )}

      <div className="container relative z-20 py-12 md:py-16">
        {/* Title */}
        {showTitle && (
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#000000' }}>
            <b>Connect With Us</b>
          </h3>
        )}

        {/* Social Icons Row */}
        {showSoc && (
          <div className="social-row flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {displayedLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="soc-item group"
              >
                <span
                  className={`mbr-iconfont socicon ${link.icon} w-20 h-20 flex items-center justify-center rounded-full text-4xl transition-all duration-300`}
                  style={{
                    backgroundColor: iconBg,
                    color: iconColor,
                  }}
                >
                  {/* You can use react-icons or font if you have mobirise icons loaded */}
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SocialIconsSection;