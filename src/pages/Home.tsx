import Banner from '../components/home/Banner';
import ClassSection from '../components/home/ClassSection';
import MembershipSection from '../components/home/MembershipSection';
import PersonalTrainerSection from '../components/home/PersonalTrainerSection';
import FaqHome from '../components/home/FaqHome';
import CardHome from '../components/home/CardHome';
import FreeTrail from '../components/FreeTrail';

const Home: React.FC = () => {
  return (
    <section>
      <Banner />
      <CardHome />
      <ClassSection />
      <MembershipSection />
      <PersonalTrainerSection />
      <FreeTrail />
      <FaqHome />
    </section>
  );
};

export default Home;