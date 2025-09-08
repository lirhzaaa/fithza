type ClassItem = {
    title: string;
    category: string;
    duration: string;
    calories?: string;
}

const AllClass = () => {
    const categoryBackgrounds: { [key: string]: string } = {
        'Strength Class': '/img/clas/Strength.jpg',
        'Cardio Class': '/img/clas/Cardio.jpg',
        'Dance Class': '/img/clas/Dance.jpg',
        'Mind & Body Class': '/img/clas/Mind&Body.jpg',
    };

    const classes: ClassItem[] = [
        { title: 'HIIT', category: 'Strength Class', duration: '60 MIN' },
        { title: 'CORE', category: 'Strength Class', duration: '60 MIN' },
        { title: 'CIRCUIT', category: 'Strength Class', duration: '60 MIN' },
        { title: 'BOOTY SHAPING', category: 'Strength Class', duration: '60 MIN' },
        { title: 'BOOTCAMP', category: 'Strength Class', duration: '60 MIN' },
        { title: 'WEIGHT TRAINING', category: 'Strength Class', duration: '60 MIN' },
        { title: 'POWERLIFTING', category: 'Strength Class', duration: '60 MIN' },
        { title: 'FUNCTIONAL TRAINING', category: 'Strength Class', duration: '60 MIN' },
        { title: 'CROSSFIT', category: 'Strength Class', duration: '60 MIN' },
        { title: 'BODYBUILDING', category: 'Strength Class', duration: '60 MIN' },
        { title: 'KETTLEBELL TRAINING', category: 'Strength Class', duration: '60 MIN' },
        { title: 'BODYCOMBAT', category: 'Cardio Class', duration: '60 MIN' },
        { title: 'FIT CYCLE', category: 'Cardio Class', duration: '60 MIN' },
        { title: 'STRONG NATION', category: 'Cardio Class', duration: '60 MIN' },
        { title: 'POUND FIT', category: 'Cardio Class', duration: '60 MIN' },
        { title: 'MAT PILATES', category: 'Cardio Class', duration: '60 MIN' },
        { title: 'FIT RUSH', category: 'Cardio Class', duration: '60 MIN' },
        { title: 'PILOXING', category: 'Cardio Class', duration: '60 MIN', calories: '400 - 700 cal' },
        { title: 'AEROBICS', category: 'Cardio Class', duration: '60 MIN' },
        { title: 'STEP AEROBICS', category: 'Cardio Class', duration: '60 MIN' },
        { title: 'JUMP ROPE', category: 'Cardio Class', duration: '60 MIN' },
        { title: 'BOXING', category: 'Cardio Class', duration: '60 MIN' },
        { title: 'HIP HOP DANCE', category: 'Dance Class', duration: '60 MIN' },
        { title: 'FREESTYLE DANCE', category: 'Dance Class', duration: '60 MIN' },
        { title: 'CARDIO DANCE', category: 'Dance Class', duration: '60 MIN' },
        { title: 'BELLY DANCE', category: 'Dance Class', duration: '60 MIN' },
        { title: 'SALSA', category: 'Dance Class', duration: '60 MIN' },
        { title: 'TANGO', category: 'Dance Class', duration: '60 MIN' },
        { title: 'BALLET', category: 'Dance Class', duration: '60 MIN' },
        { title: 'JAZZ DANCE', category: 'Dance Class', duration: '60 MIN' },
        { title: 'CONTEMPORARY DANCE', category: 'Dance Class', duration: '60 MIN' },
        { title: 'BREAKDANCE', category: 'Dance Class', duration: '60 MIN' },
        { title: 'VINYASA YOGA', category: 'Mind & Body Class', duration: '60 MIN' },
        { title: 'KAPHA YOGA', category: 'Mind & Body Class', duration: '60 MIN' },
        { title: 'LADIES STYLE BACHATA', category: 'Mind & Body Class', duration: '60 MIN' },
        { title: 'THAI BOXING', category: 'Mind & Body Class', duration: '60 MIN' },
        { title: 'ZUMBA', category: 'Mind & Body Class', duration: '60 MIN' },
        { title: 'MEDITATION', category: 'Mind & Body Class', duration: '60 MIN' },
        { title: 'TAI CHI', category: 'Mind & Body Class', duration: '60 MIN' },
        { title: 'PILATES', category: 'Mind & Body Class', duration: '60 MIN' },
        { title: 'QI GONG', category: 'Mind & Body Class', duration: '60 MIN' },
        { title: 'REIKI', category: 'Mind & Body Class', duration: '60 MIN' },
    ];

    return (
        <div style={{ padding: 'clamp(4rem, 8vw, 4.375rem) 0', backgroundColor: '#2b4593ff' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1rem, 5vw, 1.25rem)' }}>
                <h2
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    style={{ textAlign: 'left', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', margin: '0 clamp(1rem, 5vw, 3.125rem) 40px', color: 'white' }}>Eksplor semua kelas</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1.5rem, 4vw, 1.875rem)', margin: '0 clamp(1rem, 5vw, 3.125rem)' }}>
                    {classes.map((classItem: ClassItem, index: number) => (
                        <div
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            key={index} style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', height: 'clamp(280px, 35vw, 350px)' }}>
                            <div style={{ height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.8)', backgroundImage: `url(${categoryBackgrounds[classItem.category]})` }}></div>
                            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6))', color: 'white', padding: 'clamp(1rem, 3vw, 1.25rem)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                    <p style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', color: '#ccc' }}>{classItem.category}</p>
                                </div>
                                <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', margin: '10px 0', fontWeight: 'bold' }}>{classItem.title}</h2>
                                {classItem.calories && (
                                    <div style={{ fontSize: 'clamp(0.7rem, 2vw, 0.8rem)', color: '#fff', marginTop: '5px' }}>{classItem.calories}</div>
                                )}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                                    {classItem.duration && (
                                        <div style={{ fontSize: 'clamp(0.7rem, 2vw, 0.8rem)', color: '#fff' }}>{classItem.duration}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllClass;