import MemberHero from '../components/MemberHero';
import MemberBenefits from '../components/MemberBenefits';
import MemberPackages from '../components/MemberPackages';
import MemberContact from '../components/MemberContact';
import MemberFAQ from '../components/MemberFAQ';

const Member = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff'
    }}>
      <MemberHero />
      <MemberBenefits />
      <MemberPackages />
      <MemberContact />
      <MemberFAQ />
    </div>
  );
};

export default Member;
