import AboutContent from '../components/about/Content';
import AboutFithza from '../components/about/AboutFithza';
import AboutHero from '../components/about/HeroSection';
import WhyChooseSection from '../components/about/WhySection';
import CTAAbout from '../components/CTA';

const About: React.FC = () => {
  return (
    <>
      <AboutHero />
      <AboutFithza />
      <AboutContent />
      <WhyChooseSection />
      <CTAAbout />
    </>
  );
};

export default About;