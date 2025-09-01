import AboutFithza from '../components/about/AboutFithza';
import AboutHero from '../components/about/AboutHero';
import WhyChooseSection from '../components/about/AboutWHY';

const About: React.FC = () => {
  return (
    <>
      <AboutHero />
      <AboutFithza />
      <WhyChooseSection />
    </>
  );
};

export default About;