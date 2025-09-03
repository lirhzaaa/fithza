import MemberHero from '../components/member/MemberHero';
import MemberBenefits from '../components/member/Benefit';
import MemberPackages from '../components/member/MemberPackages';
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
      <MemberFAQ />
    </div>
  );
};

export default Member;
