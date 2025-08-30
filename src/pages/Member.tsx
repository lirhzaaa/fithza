import MemberHero from '../components/member/MemberHero';
import MemberBenefits from '../components/member/MemberBenefits';
import MemberPackages from '../components/member/MemberPackages';
import MemberContact from '../components/member/MemberContact';
import MemberFAQ from '../components/member/MemberFAQ';

const Member: React.FC = () => {
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
