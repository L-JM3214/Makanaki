// src/App.jsx (COMPLETE UPDATED VERSION)
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
//import VideoSection from './components/VideoSection.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';
//import ImageCarouselSection from './components/ImageCarouselSection.jsx';
import Header09 from './components/Header09.jsx';
import CarGallerySection from './components/CarGallerySection.jsx';
import FaqSection from './components/FaqSection.jsx';
//import EmptyHeroBackground from './components/EmptyHeroBackground.jsx';
import SocialIconsSection from './components/SocialIconsSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import ArticleSection from './components/ArticleSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import heroVideo from './assets/Video3.mp4';
import fallbackImage from './assets/Image011.jpeg';

function App() {
  return (
    <div className="min-h-screen bg-[#0f071a] text-white font-inter">
      <Navbar />

      {/* ==================================================
          Main Hero - using Video3.mp4
          ID: home (for navbar navigation)
      ================================================== */}
      <section id="home">
        <HeroSection
          bg={{ type: 'video' }}
          fallbackImage={fallbackImage}
          overlay={true}
          overlayColor="#000000"
          overlayOpacity={0.55}
          verticalAlign="center"
          showSubtitle={true}
          contentWidth={10}
        />
      </section>

      {/* ==================================================
          Features / Grand Occasions cards
          ID: services
      ================================================== */}
      <section id="services">
        <FeaturesSection
          fullWidth={true}
          paddingTop={6}
          paddingBottom={6}
          cardsWidth={3}
          showTitle={true}
          showSubtitle={true}
          autoSize={true}
          imageHeight={4}
          spacing={true}
          showCardTitle={true}
          showText={true}
          showButtons={true}
          bg={{
            type: 'color',
            value: '#ffffff',
          }}
          overlay={false}
        />
      </section>

      {/* ==================================================
          Secondary hero / split layout section
          White background – text left, Video2.mp4 right
      ================================================== */}
      <section id="secondary-hero"> 
        <Header09 />
      </section>

      {/* Car fleet gallery (manual scroll) */}
      <CarGallerySection
        paddingTop={6}
        paddingBottom={6}
        showTitle={true}
        showSubtitle={true}
        spacing={true}
        bg={{
          type: 'color',
          value: '#f8f9fa',
        }}
        overlay={false}
      />

      {/* ==================================================
          Article/About section
          ID: about
      ================================================== */}
      <section id="about">
        <ArticleSection
          fullScreen={false}
          fullWidth={false}
          paddingTop={5}
          paddingBottom={5}
          contentWidth={10}
          showImage={true}
          showTitle={true}
          showSubtitle={true}
          showText={true}
          showButtons={true}
          wrapBgColor="#ffffff"
          transparentBg={true}
          bg={{
            type: 'color',
            value: '#edefeb',
          }}
          overlay={true}
          overlayColor="#ffffff"
          overlayOpacity={0.3}
        />
      </section>

      {/* FAQ section */}
      <FaqSection
        paddingTop={5}
        paddingBottom={5}
        showTitle={true}
        showSubtitle={true}
        cardAmount={5}
        itemsColor="#ffffff"
        transparentBg={true}
        bg={{
          type: 'color',
          value: '#edefeb',
        }}
        overlay={true}
        overlayColor="#ffffff"
        overlayOpacity={0.9}
      />

      {/* Dramatic full-screen video spacer 
      <EmptyHeroBackground
        fullScreen={true}
        fullWidth={true}
        bg={{
          type: 'video',
          value: heroVideo
        }}
        fallbackImage={fallbackImage}
        overlay={true}
        overlayColor="#000000"
        overlayOpacity={0.3}
      />*/}

      {/* Social media connect section 
      <SocialIconsSection
        paddingTop={6}
        paddingBottom={6}
        showTitle={true}
        showSoc={true}
        soc={5}
        iconColor="#393193"
        activeColor="#f7f7f7"
        iconBg="#f7f7f7"
        bg={{
          type: 'color',
          value: '#ffffff',
        }}
        overlay={false}
      />*/}

      {/* ==================================================
          Testimonials carousel
          ID: testimonials
      ================================================== */}
      <section id="testimonials">
        <TestimonialsSection
          fullWidth={false}
          paddingTop={6}
          paddingBottom={6}
          columns={4}
          showMainTitle={true}
          showMainSubtitle={true}
          showTitle={true}
          showImage={true}
          bg={{
            type: 'color',
            value: '#ffffff',
          }}
          overlay={false}
        />
      </section>



      {/* ==================================================
          Contact section
          ID: contact
      ================================================== 
      <section id="contact">
        <ContactSection />
      </section>*/}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;