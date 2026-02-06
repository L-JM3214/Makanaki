// src/components/VideoSection.jsx
import React, { useRef, useEffect } from 'react';
import './VideoSection.css';
import videoFile from '../assets/Video5.mp4';
import fallbackImg from '../assets/Image000.jpg';

const VideoSection = ({
  id = 'video-section',
  fullScreen = false,
  fullWidth = true,
  paddingTop = 10,
  paddingBottom = 10,
  contentWidth = 8,
  verticalAlign = 'center',
  horizontalAlign = 'center',
  overlay = true,
  overlayColor = '#000000',
  overlayOpacity = 0.65,
  buttonText = 'Explore Fleet',
  buttonLink = '#fleet',
}) => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  // Play/pause video when in viewport (performance)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const sectionStyle = {};
  if (!fullScreen) {
    sectionStyle.paddingTop = `${paddingTop}rem`;
    sectionStyle.paddingBottom = `${paddingBottom}rem`;
    sectionStyle.minHeight = '80vh';
  }

  const containerClass = fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-6';

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative overflow-hidden text-white ${fullScreen ? 'min-h-screen' : ''}`}
      style={sectionStyle}
    >
      {/* Video Background - Video5.mp4 */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Fallback Image - Image000.jpg */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fallbackImg})` }}
        />
      </div>

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      <div className={`relative z-20 flex items-${verticalAlign} justify-${horizontalAlign} h-full ${containerClass}`}>
        <div className={`w-full md:w-${contentWidth}/12 px-6 md:px-12 text-center`}>
          <a
            href={buttonLink}
            className="inline-block bg-[#ffc091] text-[#260a30] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#ffd9a3] transition shadow-lg"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;