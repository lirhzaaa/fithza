import { useState, useRef } from 'react';

interface ClassItem {
  name: string;
  difficulty: string;
  duration: string;
  category: string;
  image: string;
  color: string;
}

const ClassSection: React.FC = () => {
  const [activeClassTab, setActiveClassTab] = useState(0);
  const [isLoadingCards, setIsLoadingCards] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const classCategories = ["Kelas Populer", "Cardio", "Dance", "Mind & Body", "Strength"];

  const classData = {
    "Kelas Populer": [
      { name: "BODYPUMP", difficulty: "Hard", duration: "60 Min", category: "Strength", image: "/img/bodypump.jpg", color: "#FF5638" },
      { name: "ZUMBA", difficulty: "Easy", duration: "60 Min", category: "Dance", image: "/img/zumba.jpg", color: "#158F40" },
      { name: "BODYCOMBAT", difficulty: "Hard", duration: "60 Min", category: "Cardio", image: "/img/bodycombat.jpg", color: "#FFD100" },
      { name: "BODYCOMBAT", difficulty: "Hard", duration: "60 Min", category: "Cardio", image: "/img/bodycombat.jpg", color: "#FFD100" },
      { name: "HATHA YOGA", difficulty: "Medium", duration: "60 Min", category: "Mind & Body", image: "/img/yoga.jpg", color: "#1ECAD3" },
    ],
    "Cardio": [
      { name: "BODYCOMBAT", difficulty: "Hard", duration: "60 Min", category: "Cardio", image: "/img/bodycombat.jpg", color: "#FFD100" },
      { name: "MUAY THAI", difficulty: "Medium", duration: "60 Min", category: "Cardio", image: "/img/muaythai.jpg", color: "#FFD100" },
      { name: "BODYATTACK", difficulty: "Hard", duration: "60 Min", category: "Cardio", image: "/img/bodyattack.jpg", color: "#FFD100" }
    ],
    "Dance": [
      { name: "ZUMBA", difficulty: "Easy", duration: "60 Min", category: "Dance", image: "/img/zumba.jpg", color: "#158F40" },
      { name: "CARDIO DANCE", difficulty: "Medium", duration: "60 Min", category: "Dance", image: "/img/cardiodance.jpg", color: "#158F40" }
    ],
    "Mind & Body": [
      { name: "HATHA YOGA", difficulty: "Medium", duration: "60 Min", category: "Mind & Body", image: "/img/yoga.jpg", color: "#1ECAD3" },
      { name: "MAT PILATES", difficulty: "Medium", duration: "60 Min", category: "Mind & Body", image: "/img/pilates.jpg", color: "#1ECAD3" },
      { name: "BASIC YOGA", difficulty: "Easy", duration: "60 Min", category: "Mind & Body", image: "/img/basicyoga.jpg", color: "#1ECAD3" }
    ],
    "Strength": [
      { name: "BODYPUMP", difficulty: "Hard", duration: "60 Min", category: "Strength", image: "/img/bodypump.jpg", color: "#FF5638" }
    ]
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = (carouselRef.current.querySelector('.class-card') as HTMLElement)?.offsetWidth || 300;
      const gap = 20;
      carouselRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = (carouselRef.current.querySelector('.class-card') as HTMLElement)?.offsetWidth || 300;
      const gap = 20;
      carouselRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth'
      });
    }
  };

  const handleClassTabChange = (index: number) => {
    setIsLoadingCards(true);
    setTimeout(() => {
      setActiveClassTab(index);
      setIsLoadingCards(false);
    }, 500);
  };

  return (
    <div style={{ padding: '80px 0', maxWidth: 'none', margin: '0', backgroundColor: '#f8f9fa' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px', padding: '0 5vw' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#333', marginBottom: '16px', lineHeight: '1.2' }}>Ikuti 50+ variasi kelas sepuasnya</h2>
        <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: '400', marginBottom: '0' }}>Dibimbing oleh instruktur berpengalaman dan bersertifikasi internasional.</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '0 5vw', marginBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '32px', background: 'none', padding: '0', borderRadius: '0', boxShadow: 'none', position: 'relative', borderBottom: '2px solid #e0e0e0' }}>
          {classCategories.map((category, index) => (
            <button
              key={index}
              style={{
                padding: '12px 0',
                background: 'none',
                border: 'none',
                borderRadius: '0',
                fontSize: '1rem',
                fontWeight: activeClassTab === index ? '600' : '500',
                color: activeClassTab === index ? '#4D55CC' : '#666',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                zIndex: '2',
                borderBottom: activeClassTab === index ? '2px solid #4D55CC' : '2px solid transparent',
                marginBottom: '-2px'
              }}
              onClick={() => handleClassTabChange(index)}
            >
              {category}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={{ width: '40px', height: '40px', border: '2px solid #e0e0e0', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '18px', color: '#666', transition: 'all 0.3s ease' }} aria-label="Previous" onClick={scrollLeft}>‹</button>
          <button style={{ width: '40px', height: '40px', border: '2px solid #e0e0e0', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '18px', color: '#666', transition: 'all 0.3s ease' }} aria-label="Next" onClick={scrollRight}>›</button>
        </div>
      </div>

      <div style={{ padding: '0 5vw', marginBottom: '40px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', scrollBehavior: 'smooth', paddingBottom: '10px', paddingRight: '20px', scrollbarWidth: 'none', msOverflowStyle: 'none', scrollSnapType: 'x mandatory' }} ref={carouselRef}>
          {isLoadingCards ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={`loading-${index}`} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', transition: 'transform 0.3s ease', flex: '0 0 calc((100vw - 10vw - 80px) / 4)', width: 'calc((100vw - 10vw - 80px) / 4)', minWidth: '280px', scrollSnapAlign: 'start', pointerEvents: 'none' }}>
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <div style={{ background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)', backgroundSize: '200% 100%', animation: 'loading 1.5s infinite', borderRadius: '8px', width: '100%', height: '100%' }}></div>
                </div>
                <div style={{ padding: '20px' }}>
                  <div style={{ background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)', backgroundSize: '200% 100%', animation: 'loading 1.5s infinite', borderRadius: '8px', height: '16px', width: '60%', marginBottom: '8px' }}></div>
                  <div style={{ background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)', backgroundSize: '200% 100%', animation: 'loading 1.5s infinite', borderRadius: '8px', height: '24px', width: '80%' }}></div>
                </div>
              </div>
            ))
          ) : (
            classData[classCategories[activeClassTab] as keyof typeof classData]?.map((classItem: ClassItem, index: number) => (
              <div key={index} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', transition: 'transform 0.3s ease', flex: '0 0 calc((100vw - 10vw - 80px) / 4)', width: 'calc((100vw - 10vw - 80px) / 4)', minWidth: '280px', scrollSnapAlign: 'start' }}>
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img src={classItem.image} alt={classItem.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                  <div style={{ position: 'absolute', top: '16px', left: '16px', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600', color: 'white', display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: classItem.color }}>
                    <span>{classItem.category}</span>
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '8px', fontWeight: '400' }}>{classItem.difficulty} ∙ {classItem.duration}</p>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#333', margin: '0' }}>{classItem.name}</h3>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <button style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 auto', padding: '14px 28px', background: '#4D55CC', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease' }}>
        <span>Lihat Semua Kelas</span>
        <span style={{ fontSize: '1.2rem', transition: 'transform 0.3s ease' }}>→</span>
      </button>
    </div>
  );
};

export default ClassSection;
