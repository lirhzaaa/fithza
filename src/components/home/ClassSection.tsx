import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

type ClassItem = {
  name: string;
  difficulty: string;
  duration: string;
  category: string;
  image: string;
  color: string;
}

const ClassSection = () => {
  const [activeClassTab, setActiveClassTab] = useState(0);
  const [isLoadingCards, setIsLoadingCards] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const classCategories = ["Strength Class", "Cardio Class", "Dance Class", "Mind & Body Class"];

  const categoryColors: { [key: string]: string } = {
    'Strength Class': '#FF5638',
    'Cardio Class': '#FFD100',
    'Dance Class': '#158F40',
    'Mind & Body Class': '#1ECAD3',
  };

  const categoryBackgrounds: { [key: string]: string } = {
    'Strength Class': '/img/clas/Strength.jpg',
    'Cardio Class': '/img/clas/Cardio.jpg',
    'Dance Class': '/img/clas/Dance.jpg',
    'Mind & Body Class': '/img/clas/Mind&Body.jpg',
  };

  const classes: ClassItem[] = [
    { name: 'HIIT', category: 'Strength Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Strength Class'], color: categoryColors['Strength Class'] },
    { name: 'CORE', category: 'Strength Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Strength Class'], color: categoryColors['Strength Class'] },
    { name: 'CIRCUIT', category: 'Strength Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Strength Class'], color: categoryColors['Strength Class'] },
    { name: 'BOOTY SHAPING', category: 'Strength Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Strength Class'], color: categoryColors['Strength Class'] },
    { name: 'BOOTCAMP', category: 'Strength Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Strength Class'], color: categoryColors['Strength Class'] },
    { name: 'WEIGHT TRAINING', category: 'Strength Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Strength Class'], color: categoryColors['Strength Class'] },
    { name: 'POWERLIFTING', category: 'Strength Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Strength Class'], color: categoryColors['Strength Class'] },
    { name: 'FUNCTIONAL TRAINING', category: 'Strength Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Strength Class'], color: categoryColors['Strength Class'] },
    { name: 'CROSSFIT', category: 'Strength Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Strength Class'], color: categoryColors['Strength Class'] },
    { name: 'BODYBUILDING', category: 'Strength Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Strength Class'], color: categoryColors['Strength Class'] },
    { name: 'KETTLEBELL TRAINING', category: 'Strength Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Strength Class'], color: categoryColors['Strength Class'] },
    { name: 'BODYCOMBAT', category: 'Cardio Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Cardio Class'], color: categoryColors['Cardio Class'] },
    { name: 'FIT CYCLE', category: 'Cardio Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Cardio Class'], color: categoryColors['Cardio Class'] },
    { name: 'STRONG NATION', category: 'Cardio Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Cardio Class'], color: categoryColors['Cardio Class'] },
    { name: 'POUND FIT', category: 'Cardio Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Cardio Class'], color: categoryColors['Cardio Class'] },
    { name: 'MAT PILATES', category: 'Cardio Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Cardio Class'], color: categoryColors['Cardio Class'] },
    { name: 'FIT RUSH', category: 'Cardio Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Cardio Class'], color: categoryColors['Cardio Class'] },
    { name: 'PILOXING', category: 'Cardio Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Cardio Class'], color: categoryColors['Cardio Class'] },
    { name: 'AEROBICS', category: 'Cardio Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Cardio Class'], color: categoryColors['Cardio Class'] },
    { name: 'STEP AEROBICS', category: 'Cardio Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Cardio Class'], color: categoryColors['Cardio Class'] },
    { name: 'JUMP ROPE', category: 'Cardio Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Cardio Class'], color: categoryColors['Cardio Class'] },
    { name: 'BOXING', category: 'Cardio Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Cardio Class'], color: categoryColors['Cardio Class'] },
    { name: 'HIP HOP DANCE', category: 'Dance Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Dance Class'], color: categoryColors['Dance Class'] },
    { name: 'FREESTYLE DANCE', category: 'Dance Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Dance Class'], color: categoryColors['Dance Class'] },
    { name: 'CARDIO DANCE', category: 'Dance Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Dance Class'], color: categoryColors['Dance Class'] },
    { name: 'BELLY DANCE', category: 'Dance Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Dance Class'], color: categoryColors['Dance Class'] },
    { name: 'SALSA', category: 'Dance Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Dance Class'], color: categoryColors['Dance Class'] },
    { name: 'TANGO', category: 'Dance Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Dance Class'], color: categoryColors['Dance Class'] },
    { name: 'BALLET', category: 'Dance Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Dance Class'], color: categoryColors['Dance Class'] },
    { name: 'JAZZ DANCE', category: 'Dance Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Dance Class'], color: categoryColors['Dance Class'] },
    { name: 'CONTEMPORARY DANCE', category: 'Dance Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Dance Class'], color: categoryColors['Dance Class'] },
    { name: 'BREAKDANCE', category: 'Dance Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Dance Class'], color: categoryColors['Dance Class'] },
    { name: 'VINYASA YOGA', category: 'Mind & Body Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Mind & Body Class'], color: categoryColors['Mind & Body Class'] },
    { name: 'KAPHA YOGA', category: 'Mind & Body Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Mind & Body Class'], color: categoryColors['Mind & Body Class'] },
    { name: 'LADIES STYLE BACHATA', category: 'Mind & Body Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Mind & Body Class'], color: categoryColors['Mind & Body Class'] },
    { name: 'THAI BOXING', category: 'Mind & Body Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Mind & Body Class'], color: categoryColors['Mind & Body Class'] },
    { name: 'ZUMBA', category: 'Mind & Body Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Mind & Body Class'], color: categoryColors['Mind & Body Class'] },
    { name: 'MEDITATION', category: 'Mind & Body Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Mind & Body Class'], color: categoryColors['Mind & Body Class'] },
    { name: 'TAI CHI', category: 'Mind & Body Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Mind & Body Class'], color: categoryColors['Mind & Body Class'] },
    { name: 'PILATES', category: 'Mind & Body Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Mind & Body Class'], color: categoryColors['Mind & Body Class'] },
    { name: 'QI GONG', category: 'Mind & Body Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Mind & Body Class'], color: categoryColors['Mind & Body Class'] },
    { name: 'REIKI', category: 'Mind & Body Class', duration: '60 MIN', difficulty: 'Medium', image: categoryBackgrounds['Mind & Body Class'], color: categoryColors['Mind & Body Class'] },
  ];

  const classData = {
    "Strength Class": classes.filter(c => c.category === "Strength Class"),
    "Cardio Class": classes.filter(c => c.category === "Cardio Class"),
    "Dance Class": classes.filter(c => c.category === "Dance Class"),
    "Mind & Body Class": classes.filter(c => c.category === "Mind & Body Class"),
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
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      style={{ padding: 'clamp(3rem, 6vw, 5rem) 0', maxWidth: 'none', margin: '0' }}>
      <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 3.75rem)', padding: '0 clamp(1rem, 5vw, 1.25rem)' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontWeight: '700', color: '#333', marginBottom: 'clamp(1rem, 2vw, 1rem)', lineHeight: '1.2' }}>Ikuti 50+ variasi kelas sepuasnya</h2>
        <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', color: '#666', fontWeight: '400', marginBottom: '0' }}>Dibimbing oleh instruktur berpengalaman dan bersertifikasi internasional.</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '0 clamp(1rem, 5vw, 1.25rem)', marginBottom: 'clamp(2rem, 4vw, 2.5rem)', flexWrap: 'wrap', gap: 'clamp(1rem, 3vw, 1.5rem)' }}>
        <div style={{ display: 'flex', gap: 'clamp(1rem, 3vw, 2rem)', background: 'none', padding: '0', borderRadius: '0', boxShadow: 'none', position: 'relative', borderBottom: '2px solid #e0e0e0', overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {classCategories.map((category, index) => (
            <button
              key={index}
              style={{
                padding: '12px 0',
                background: 'none',
                border: 'none',
                borderRadius: '0',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
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

        <div style={{ display: 'flex', gap: 'clamp(0.5rem, 1.5vw, 0.5rem)' }}>
          <button style={{ width: 'clamp(35px, 8vw, 40px)', height: 'clamp(35px, 8vw, 40px)', border: '2px solid #e0e0e0', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 'clamp(1.2rem, 3vw, 1.125rem)', color: '#666', transition: 'all 0.3s ease' }} aria-label="Previous" onClick={scrollLeft}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button style={{ width: 'clamp(35px, 8vw, 40px)', height: 'clamp(35px, 8vw, 40px)', border: '2px solid #e0e0e0', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 'clamp(1.2rem, 3vw, 1.125rem)', color: '#666', transition: 'all 0.3s ease' }} aria-label="Next" onClick={scrollRight}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      <div style={{ padding: '0 clamp(1rem, 5vw, 1.25rem)', marginBottom: 'clamp(2rem, 4vw, 2.5rem)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 'clamp(1rem, 2vw, 1.25rem)', overflowX: 'auto', scrollBehavior: 'smooth', paddingBottom: '10px', paddingRight: 'clamp(1rem, 2vw, 1.25rem)', scrollbarWidth: 'none', msOverflowStyle: 'none', scrollSnapType: 'x mandatory' }} ref={carouselRef}>
          {isLoadingCards ? (
            Array.from({ length: window.innerWidth < 768 ? 1 : 4 }).map((_, index) => (
              <div key={`loading-${index}`} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', transition: 'transform 0.3s ease', flex: `0 0 ${window.innerWidth < 768 ? '90vw' : 'calc((100vw - 10vw - 80px) / 4)'}`, width: `${window.innerWidth < 768 ? '90vw' : 'calc((100vw - 10vw - 80px) / 4)'}`, minWidth: '280px', scrollSnapAlign: 'start', pointerEvents: 'none' }}>
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
              <div key={index} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', transition: 'transform 0.3s ease', flex: `0 0 ${window.innerWidth < 768 ? '90vw' : 'calc((100vw - 2.5vw - 40px) / 4)'}`, width: `${window.innerWidth < 768 ? '90vw' : 'calc((100vw - 2.5vw - 40px) / 4)'}`, minWidth: 'clamp(250px, 25vw, 280px)', scrollSnapAlign: 'start' }}>
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img src={classItem.image} alt={classItem.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available'; }} />
                  <div style={{ position: 'absolute', top: '16px', left: '16px', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600', color: 'white', display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: classItem.color }}>
                    <span>{classItem.category}</span>
                  </div>
                </div>
                <div style={{ padding: 'clamp(1rem, 3vw, 1.25rem)' }}>
                  <p style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', color: '#666', marginBottom: 'clamp(0.5rem, 1.5vw, 0.5rem)', fontWeight: '400' }}>{classItem.difficulty} ∙ {classItem.duration}</p>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', fontWeight: '700', color: '#333', margin: '0' }}>{classItem.name}</h3>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <button style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.5rem, 1.5vw, 0.5rem)', margin: '0 auto', padding: 'clamp(0.875rem, 2vw, 0.875rem) clamp(1.75rem, 4vw, 1.75rem)', background: '#4D55CC', color: 'white', border: 'none', borderRadius: '8px', fontSize: 'clamp(0.9rem, 2vw, 1rem)', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease' }} onClick={() => navigate('/class')}>
        Lihat Semua Kelas
      </button>
    </div>
  );
};

export default ClassSection;
