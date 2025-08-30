import { useState } from 'react';
import type { CSSProperties } from 'react';

interface ClassItem {
    title: string;
    duration: string;
    calories?: string;
}

interface FAQItem {
    title: string;
    content: string;
}

const CyclingClass: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const styles: { [key: string]: CSSProperties } = {
        // Banner styles
        banner: { height: '400px', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center' },
        bannerOverlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' },
        bannerTitle: { fontSize: '3rem', fontWeight: 'bold', margin: '0' },

        // Description section
        descSection: { padding: '60px 0', backgroundColor: '#fff' },
        descContainer: { maxWidth: '1400px', margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' },
        descTitle: { fontSize: '2.5rem', color: '#000', marginBottom: '20px' },
        descText: { fontSize: '1.1rem', color: '#666', lineHeight: '1.6' },
        descImage: { width: '100%', height: '400px', objectFit: 'cover', borderRadius: '15px' },

        // Classes section
        section: { padding: '60px 0', backgroundColor: '#2b4593ff' },
        container: { maxWidth: '1400px', margin: '0 auto', padding: '0 20px' },
        title: { textAlign: 'left', fontSize: '2.5rem', marginBottom: '40px', color: 'white' },
        classCategoryWrapper: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
        cardClassWrapper: { position: 'relative', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', height: '350px' },
        cardClassBg: { height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.8)' },
        cardClassContent: { position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6))', color: 'white', padding: '20px' },
        classTitle: { fontSize: '1.5rem', margin: '10px 0', fontWeight: 'bold' },
        cardClassDetail: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' },
        durationText: { fontSize: '0.8rem', color: '#fff' },
        caloriesText: { fontSize: '0.8rem', color: '#fff', marginTop: '5px' },

        // Other classes section
        otherSection: { padding: '60px 0', backgroundColor: '#2b4593ff' },
        otherTitle: { textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px', color: 'white' },
        otherWrapper: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' },
        otherCard: { position: 'relative', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', height: '300px', textDecoration: 'none', color: 'inherit' },
        otherCardBg: { height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.8)' },
        otherCardContent: { position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6))', color: 'white', padding: '20px', textAlign: 'center' },
        otherCardTitle: { fontSize: '1.4rem', margin: '0', fontWeight: 'bold' },

        // FAQ section
        faqSection: { padding: '60px 20px', backgroundColor: '#fff' },
        faqContainer: { maxWidth: '1400px', margin: '0 auto' },
        faqTitle: { fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px', color: '#000' },
        faqItem: { marginBottom: '10px', border: '1px solid #ddd', borderRadius: '8px' },
        faqHeader: { padding: '20px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9f9f9' },
        faqQuestion: { fontWeight: 'bold' },
        faqToggle: { fontSize: '1.5rem' },
        faqContent: { padding: '20px', borderTop: '1px solid #ddd', backgroundColor: '#fff' }
    };

    const cyclingClasses: ClassItem[] = [
        { title: 'SPINNING', duration: '60 MIN' },
        { title: 'INDOOR CYCLING', duration: '60 MIN' },
        { title: 'ROAD CYCLING', duration: '60 MIN' },
        { title: 'MOUNTAIN BIKING', duration: '60 MIN' },
        { title: 'BMX', duration: '60 MIN' },
        { title: 'TRACK CYCLING', duration: '60 MIN' },
        { title: 'CYCLING TOUR', duration: '60 MIN' },
        { title: 'INTERVAL CYCLING', duration: '60 MIN' },
        { title: 'ENDURANCE CYCLING', duration: '60 MIN' },
        { title: 'HILL CLIMBING', duration: '60 MIN' }
    ];

    const otherClasses = [
        { name: 'Strength Class', image: 'https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/BOOTCAMP_afcff062bc.JPG', link: '/class/class-strength' },
        { name: 'Cardio Class', image: 'https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/BODYCOMBAT_2089700eff.JPG', link: '/class/class-cardio' },
        { name: 'Dance Class', image: 'https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/K_POP_DANCE_8511b475b2.JPG', link: '/class/dance-class' },
        { name: 'Mind & Body Class', image: 'https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/Mind_and_Body_Hatha_Yoga_c9bc329096.JPG', link: '/class/class-mind-body' }
    ];

    const faqItems: FAQItem[] = [
        {
            title: "Apa itu Cycling Class?",
            content: "<p>Cycling Class adalah program latihan bersepeda indoor yang menggabungkan musik, instruksi, dan latihan kardiovaskular intensif. Kami menggunakan sepeda statis khusus dengan resistance yang dapat disesuaikan untuk memberikan pengalaman bersepeda yang optimal.</p>"
        },
        {
            title: "Apakah saya perlu membawa sepeda sendiri?",
            content: "<p>Tidak perlu! Kami menyediakan sepeda statis berkualitas tinggi yang sudah disesuaikan untuk kenyamanan dan keamanan. Sepeda kami dilengkapi dengan saddle yang dapat diatur tinggi-rendahnya dan resistance yang dapat dikontrol.</p>"
        },
        {
            title: "Berapa kalori yang bisa terbakar dalam Cycling Class?",
            content: "<p>Dalam satu sesi 45-60 menit, Anda bisa membakar 400-800 kalori tergantung pada intensitas dan usia. Kelas dengan interval training biasanya memberikan pembakaran kalori yang lebih tinggi.</p>"
        },
        {
            title: "Apakah Cycling Class cocok untuk pemula?",
            content: "<p>Ya, sangat cocok! Instruktur akan memberikan modifikasi untuk semua level. Anda bisa mengatur resistance sesuai kemampuan Anda dan mengikuti gerakan sesuai ritme yang Anda bisa.</p>"
        },
        {
            title: "Apa manfaat utama Cycling Class?",
            content: "<p>Manfaatnya meliputi peningkatan daya tahan jantung, pembakaran lemak, penguatan otot kaki dan inti, peningkatan kekuatan paru-paru, dan pengurangan stres. Ini juga latihan yang low-impact sehingga ramah untuk persendian.</p>"
        },
        {
            title: "Apakah saya perlu memakai pakaian khusus?",
            content: "<p>Kenakan pakaian olahraga yang nyaman dan menyerap keringat. Sepatu cycling khusus akan memberikan grip yang lebih baik, tapi sepatu olahraga biasa juga bisa digunakan. Bawa handuk dan botol minum untuk kenyamanan selama kelas.</p>"
        }
    ];

    return (
        <div>
            {/* Banner */}
            <div style={{...styles.banner, backgroundImage: 'url(https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/CYCLING_CLASS_123456789.JPG)'}}>
                <div style={styles.bannerOverlay}>
                    <h1 style={styles.bannerTitle}>Cycling Class</h1>
                </div>
            </div>

            {/* Description Section */}
            <div style={styles.descSection}>
                <div style={styles.descContainer}>
                    <div>
                        <h2 style={styles.descTitle}>Pedal Menuju Kebugaran dengan Cycling Class</h2>
                        <p style={styles.descText}>
                            Cycling Class di FitHza Indonesia menghadirkan pengalaman bersepeda indoor yang menyenangkan dan efektif.
                            Dengan sepeda statis berkualitas tinggi dan instruktur profesional, Anda akan merasakan sensasi
                            bersepeda di studio yang dikontrol iklimnya. Dari spinning dasar hingga interval training,
                            temukan ritme pedal yang tepat untuk mencapai tujuan kebugaran Anda.
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://photo-fhad-fithub-staging.s3.ap-southeast-1.amazonaws.com/Sunter_600x400_2_cd28c4532d.png"
                            alt="Cycling Class"
                            style={styles.descImage}
                        />
                    </div>
                </div>
            </div>

            {/* Cycling Classes */}
            <div style={styles.section}>
                <div style={styles.container}>
                    <h2 style={styles.title}>Eksplor Kelas Cycling</h2>
                    <div style={styles.classCategoryWrapper}>
                        {cyclingClasses.map((classItem: ClassItem, index: number) => (
                            <div key={index} style={styles.cardClassWrapper}>
                                <div style={{...styles.cardClassBg, backgroundImage: `url(https://photo-fhad-fithub-staging.s3.ap-southeast-1.amazonaws.com/Sunter_600x400_2_cd28c4532d.png)`}}></div>
                                <div style={styles.cardClassContent}>
                                    <h2 style={styles.classTitle}>{classItem.title}</h2>
                                    <div style={styles.cardClassDetail}>
                                        <div style={styles.durationText}>{classItem.duration}</div>
                                    </div>
                                    {classItem.calories && (
                                        <div style={styles.caloriesText}>{classItem.calories}</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Other Classes */}
            <div style={styles.otherSection}>
                <div style={styles.container}>
                    <h2 style={styles.otherTitle}>Jelajahi Kelas Lain</h2>
                    <div style={styles.otherWrapper}>
                        {otherClasses.map((otherClass, index) => (
                            <a key={index} href={otherClass.link} style={styles.otherCard}>
                                <div style={{...styles.otherCardBg, backgroundImage: `url(${otherClass.image})`}}></div>
                                <div style={styles.otherCardContent}>
                                    <h3 style={styles.otherCardTitle}>{otherClass.name}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div style={styles.faqSection}>
                <div style={styles.faqContainer}>
                    <h2 style={styles.faqTitle}>FAQ Cycling Class</h2>
                    {faqItems.map((item: FAQItem, index: number) => (
                        <div key={index} style={styles.faqItem}>
                            <div
                                style={styles.faqHeader}
                                onClick={() => toggleAccordion(index)}
                            >
                                <span style={styles.faqQuestion}>{item.title}</span>
                                <span style={styles.faqToggle}>{openIndex === index ? '-' : '+'}</span>
                            </div>
                            {openIndex === index && (
                                <div
                                    style={styles.faqContent}
                                    dangerouslySetInnerHTML={{ __html: item.content }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CyclingClass;
