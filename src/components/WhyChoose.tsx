import { useState } from 'react';

const WhyChoose = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      title: "Bebas Akses ke Semua Club GymZHA",
      image: "/img/access.jpg"
    },
    {
      title: "Lebih dari 1000+ Kelas Per Bulan",
      image: "/img/classes.jpg"
    },
    {
      title: "Fasilitas Terlengkap",
      image: "/img/facilities.jpg"
    },
    {
      title: "Akses 24 Jam Setiap Hari",
      image: "/img/24hours.jpg"
    },
    {
      title: "Personal Trainer Profesional",
      image: "/img/trainer.jpg"
    },
    {
      title: "Tersedia Peminjaman Handuk Gratis",
      image: "/img/towel.jpg"
    }
  ];

  return (
    <div style={{padding: '80px 0', maxWidth: 'none', margin: '0'}}>
      <div style={{textAlign: 'center', marginBottom: '60px', padding: '0 5vw'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: '#333', marginBottom: '16px', lineHeight: '1.2'}}>Berbagai Keuntungan Nge-Gym di GymZHA</h2>
        <p style={{fontSize: '1.1rem', color: '#666', fontWeight: '400', marginBottom: '0'}}>Alasan Kenapa Kamu Harus Nge-Gym di GymZHA</p>
      </div>
      
      <div style={{display: 'flex', gap: '40px', alignItems: 'flex-start', maxWidth: 'none', margin: '0', paddingLeft: '5vw', paddingRight: '5vw'}}>
        <div style={{flex: '0 0 600px', minWidth: '600px'}}>
          <ul style={{listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
            {tabsData.map((tab, index) => (
              <li key={index} style={{border: 'none'}}>
                <button 
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '24px 28px',
                    background: activeTab === index ? '#4D55CC' : '#f8f9fa',
                    border: '2px solid transparent',
                    borderRadius: '12px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    color: activeTab === index ? 'white' : '#333'
                  }}
                  onClick={() => setActiveTab(index)}
                >
                  <span style={{fontSize: '1.2rem', fontWeight: activeTab === index ? '700' : '600', lineHeight: '1.5', display: 'block'}}>{tab.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div style={{flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', minWidth: '0'}}>
          <div style={{width: '100%', maxWidth: '700px'}}>
            <div style={{width: '100%', height: '500px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.18)', position: 'relative', background: '#f8f9fa'}}>
              <img 
                src={tabsData[activeTab].image} 
                alt={tabsData[activeTab].title}
                style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease'}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
