import Banner from '../components/Banner';
import ClassSection from '../components/ClassSection';
import MembershipSection from '../components/MembershipSection';
import PersonalTrainerSection from '../components/PersonalTrainerSection';
import FaqSection from '../components/FaqSection';
import CardHome from '../components/CardHome';

const Home: React.FC = () => {
  return (
    <section>
      <Banner />
      <CardHome />
      <ClassSection />
      <MembershipSection />
      <PersonalTrainerSection />
      <FaqSection />
    </section>
  );
};

export default Home;