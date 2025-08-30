import type { CSSProperties } from 'react';

interface ClassItem {
    title: string;
    category: string;
    duration: string;
    calories?: string;
}

const AllClass: React.FC = () => {
    const styles: { [key: string]: CSSProperties } = {
        section: { padding: '60px 0', backgroundColor: '#2b4593ff' },
        container: { maxWidth: '1400px', margin: '0 auto', padding: '0 20px' },
        title: { textAlign: 'left', fontSize: '2.5rem', marginBottom: '40px', color: 'white' },
        classCategoryWrapper: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
        cardClassWrapper: { position: 'relative', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', height: '350px' },
        cardClassBg: { height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.8)' },
        cardClassContent: { position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6))', color: 'white', padding: '20px' },
        cardCategoryWrapper: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' },
        categoryIcon: { width: '30px', height: '30px', borderRadius: '50%', objectFit: 'cover' },
        categoryText: { fontSize: '0.9rem', color: '#ccc' },
        classTitle: { fontSize: '1.5rem', margin: '10px 0', fontWeight: 'bold' },
        cardClassDetail: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' },
        difficultyWrapper: { display: 'flex', alignItems: 'center', gap: '8px' },
        difficultyIcon: { width: '16px', height: '16px', color: '#fff' },
        difficultyText: { fontSize: '0.8rem', color: '#fff' },
        durationText: { fontSize: '0.8rem', color: '#fff' },
        caloriesText: { fontSize: '0.8rem', color: '#fff', marginTop: '5px' }
    };

    const categoryIcons: { [key: string]: string } = {
        'Strength Class': 'https://photo-fhad-fithub-staging.s3.ap-southeast-1.amazonaws.com/Icon_strength_c86aee5a33.png',
        'Cardio Class': 'https://photo-fhad-fithub-staging.s3.ap-southeast-1.amazonaws.com/Icon_eebc303247.png',
        'Dance Class': 'https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/Frame_252_dc33dc6dd4.png',
        'Mind & Body Class': 'https://photo-fhad-fithub-staging.s3.ap-southeast-1.amazonaws.com/Screen_Shot_2023_06_20_at_17_38_13_be45f4e188.png',
        'Cycling Class': 'https://photo-fhad-fithub-staging.s3.ap-southeast-1.amazonaws.com/Icon_eebc303247.png'
    };

    const categoryBackgrounds: { [key: string]: string } = {
        'Strength Class': 'https://photo-fhad-fithub-staging.s3.ap-southeast-1.amazonaws.com/strength_d4143c6ca2.jpeg',
        'Cardio Class': 'https://photo-fhad-fithub-staging.s3.ap-southeast-1.amazonaws.com/imgonline_com_ua_resize_nl_AW_3_YM_Ii_Wb3m9_20e2afae1e.jpg',
        'Dance Class': 'https://photo-fhad-fithub-staging.s3.ap-southeast-1.amazonaws.com/imgonline_com_ua_resize_KU_8_Nvn0li4_27a3176199.jpg',
        'Mind & Body Class': 'https://photo-fhad-fithub-staging.s3.ap-southeast-1.amazonaws.com/imgonline_com_ua_resize_2_T_Ue22_EWPLG_Ce_I_c8f42f08ae.jpg',
        'Cycling Class': 'https://photo-fhad-fithub-staging.s3.ap-southeast-1.amazonaws.com/Sunter_600x400_2_cd28c4532d.png'
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
        { title: 'SPINNING', category: 'Cycling Class', duration: '60 MIN' },
        { title: 'INDOOR CYCLING', category: 'Cycling Class', duration: '60 MIN' },
        { title: 'ROAD CYCLING', category: 'Cycling Class', duration: '60 MIN' },
        { title: 'MOUNTAIN BIKING', category: 'Cycling Class', duration: '60 MIN' },
        { title: 'BMX', category: 'Cycling Class', duration: '60 MIN' },
        { title: 'TRACK CYCLING', category: 'Cycling Class', duration: '60 MIN' },
        { title: 'CYCLING TOUR', category: 'Cycling Class', duration: '60 MIN' },
        { title: 'INTERVAL CYCLING', category: 'Cycling Class', duration: '60 MIN' },
        { title: 'ENDURANCE CYCLING', category: 'Cycling Class', duration: '60 MIN' },
        { title: 'HILL CLIMBING', category: 'Cycling Class', duration: '60 MIN' }
    ];

    return (
        <div style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.title}>Eksplor semua kelas</h2>
                <div style={styles.classCategoryWrapper}>
                    {classes.map((classItem: ClassItem, index: number) => (
                        <div key={index} style={styles.cardClassWrapper}>
                            <div style={{...styles.cardClassBg, backgroundImage: `url(${categoryBackgrounds[classItem.category]})`}}></div>
                            <div style={styles.cardClassContent}>
                                <div style={styles.cardCategoryWrapper}>
                                    <img
                                        alt="Class Category Icon"
                                        loading="lazy"
                                        width="30"
                                        height="30"
                                        decoding="async"
                                        style={styles.categoryIcon}
                                        srcSet={`${categoryIcons[classItem.category]}&w=32&q=75 1x, ${categoryIcons[classItem.category]}&w=64&q=75 2x`}
                                        src={`${categoryIcons[classItem.category]}&w=64&q=75`}
                                    />
                                    <p style={styles.categoryText}>{classItem.category}</p>
                                </div>
                                <h2 style={styles.classTitle}>{classItem.title}</h2>
                                {classItem.calories && (
                                    <div style={styles.caloriesText}>{classItem.calories}</div>
                                )}
                                <div style={styles.cardClassDetail}>
                                    {classItem.duration && (
                                        <div style={styles.durationText}>{classItem.duration}</div>
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