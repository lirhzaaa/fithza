import AboutContent from '../components/about/Content';
import AboutFithza from '../components/about/AboutFithza';
import AboutHero from '../components/about/HeroSection';
import WhyChooseSection from '../components/about/WhySection';
import CTAAbout from '../components/about/CTA';

const About: React.FC = () => {
  return (
    <>
      <AboutHero />
      <AboutFithza />
      <WhyChooseSection />
      <AboutContent />
      <CTAAbout />
    </>
  );
};

export default About;