import Content from "../components/trainer/Content";
import HeroSection from "../components/trainer/Hero";
import Focus from "../components/trainer/Focus";
import SessionPrice from "../components/trainer/SessionPrice";
import CTAAbout from "../components/CTA";
import Faq from "../components/trainer/Faq";

const PersonalTrainer = () => {
  return (
    <section>
      <HeroSection />
      <Content />
      <Focus />
      <SessionPrice />
      <Faq />
      <CTAAbout />
    </section>
  );
};

export default PersonalTrainer;