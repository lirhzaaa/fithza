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

const CardioClass: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const styles: { [key: string]: CSSProperties } = {
        banner: { height: '400px', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center' },
        bannerOverlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' },
        bannerTitle: { fontSize: '3rem', fontWeight: 'bold', margin: '0' },

        descSection: { padding: '60px 0', backgroundColor: '#fff' },
        descContainer: { maxWidth: '1400px', margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' },
        descTitle: { fontSize: '2.5rem', color: '#000', marginBottom: '20px' },
        descText: { fontSize: '1.1rem', color: '#666', lineHeight: '1.6' },
        descImage: { width: '100%', height: '400px', objectFit: 'cover', borderRadius: '15px' },

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

        otherSection: { padding: '60px 0', backgroundColor: '#2b4593ff' },
        otherTitle: { textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px', color: 'white' },
        otherWrapper: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' },
        otherCard: { position: 'relative', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', height: '300px', textDecoration: 'none', color: 'inherit' },
        otherCardBg: { height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.8)' },
        otherCardContent: { position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6))', color: 'white', padding: '20px', textAlign: 'center' },
        otherCardTitle: { fontSize: '1.4rem', margin: '0', fontWeight: 'bold' },

        faqSection: { padding: '60px 20px', backgroundColor: '#fff' },
        faqContainer: { maxWidth: '1400px', margin: '0 auto' },
        faqTitle: { fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px', color: '#000' },
        faqItem: { marginBottom: '10px', border: '1px solid #ddd', borderRadius: '8px' },
        faqHeader: { padding: '20px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9f9f9' },
        faqQuestion: { fontWeight: 'bold' },
        faqToggle: { fontSize: '1.5rem' },
        faqContent: { padding: '20px', borderTop: '1px solid #ddd', backgroundColor: '#fff' }
    };

    const cardioClasses: ClassItem[] = [
        { title: 'BODYCOMBAT', duration: '60 MIN' },
        { title: 'FIT CYCLE', duration: '60 MIN' },
        { title: 'STRONG NATION', duration: '60 MIN' },
        { title: 'POUND FIT', duration: '60 MIN' },
        { title: 'MAT PILATES', duration: '60 MIN' },
        { title: 'FIT RUSH', duration: '60 MIN' },
        { title: 'PILOXING', duration: '60 MIN', calories: '400 - 700 cal' },
        { title: 'AEROBICS', duration: '60 MIN' },
        { title: 'STEP AEROBICS', duration: '60 MIN' },
        { title: 'JUMP ROPE', duration: '60 MIN' },
        { title: 'BOXING', duration: '60 MIN' }
    ];

    const otherClasses = [
        { name: 'Strength Class', image: 'https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/BOOTCAMP_afcff062bc.JPG', link: '/class/class-strength' },
        { name: 'Dance Class', image: 'https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/K_POP_DANCE_8511b475b2.JPG', link: '/class/dance-class' },
        { name: 'Mind & Body Class', image: 'https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/Mind_and_Body_Hatha_Yoga_c9bc329096.JPG', link: '/class/class-mind-body' },
    ];

    const faqItems: FAQItem[] = [
        {
            title: "Apa itu Cardio Class?",
            content: "<p>Cardio Class adalah program latihan yang fokus pada peningkatan daya tahan jantung dan pembakaran kalori. Kelas ini menggabungkan berbagai aktivitas seperti bodycombat, aerobics, dan latihan kardiovaskular lainnya.</p>"
        },
        {
            title: "Berapa kalori yang bisa terbakar dalam Cardio Class?",
            content: "<p>Tergantung pada intensitas dan jenis kelas, Anda bisa membakar 400-800 kalori per sesi. Kelas seperti BodyCombat dan Pound Fit biasanya memberikan pembakaran kalori yang tinggi.</p>"
        },
        {
            title: "Apakah Cardio Class cocok untuk semua level?",
            content: "<p>Ya, kami menyediakan modifikasi gerakan untuk semua level. Instruktur akan memberikan alternatif yang lebih ringan untuk pemula dan tantangan tambahan untuk yang sudah mahir.</p>"
        },
        {
            title: "Berapa frekuensi ideal mengikuti Cardio Class?",
            content: "<p>Rekomendasi umum adalah 3-5 kali per minggu, tergantung pada tujuan Anda. Untuk pemula, mulai dengan 2-3 kali per minggu dan tingkatkan secara bertahap.</p>"
        },
        {
            title: "Apakah saya perlu persiapan khusus sebelum mengikuti Cardio Class?",
            content: "<p>Pastikan Anda dalam kondisi sehat dan tidak memiliki masalah jantung. Kenakan pakaian olahraga yang nyaman, sepatu yang tepat, dan bawa handuk serta botol minum. Jika Anda memiliki kondisi kesehatan tertentu, konsultasikan dengan dokter terlebih dahulu.</p>"
        },
        {
            title: "Apa manfaat utama Cardio Class?",
            content: "<p>Manfaatnya meliputi peningkatan daya tahan jantung, pembakaran lemak, pengurangan stres, peningkatan mood, dan kesehatan kardiovaskular secara keseluruhan.</p>"
        }
    ];

    return (
        <div>
            <div style={{...styles.banner, backgroundImage: 'url(https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/BODYCOMBAT_2089700eff.JPG)'}}>
                <div style={styles.bannerOverlay}>
                    <h1 style={styles.bannerTitle}>Cardio Class</h1>
                </div>
            </div>

            <div style={styles.descSection}>
                <div style={styles.descContainer}>
                    <div>
                        <h2 style={styles.descTitle}>Tingkatkan Daya Tahan Jantung dengan Cardio Class</h2>
                        <p style={styles.descText}>
                            Cardio Class di FitHza Indonesia dirancang untuk meningkatkan kesehatan jantung dan membakar kalori secara maksimal.
                            Dengan berbagai variasi latihan seperti BodyCombat, aerobics, dan step, Anda akan merasakan peningkatan
                            stamina dan kebugaran kardiovaskular. Program ini cocok untuk semua level dan memberikan hasil yang
                            terukur dalam pembakaran lemak dan peningkatan energi.
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://photo-fhad-fithub-staging.s3.ap-southeast-1.amazonaws.com/imgonline_com_ua_resize_nl_AW_3_YM_Ii_Wb3m9_20e2afae1e.jpg"
                            alt="Cardio Class"
                            style={styles.descImage}
                        />
                    </div>
                </div>
            </div>

            <div style={styles.section}>
                <div style={styles.container}>
                    <h2 style={styles.title}>Eksplor Kelas Cardio</h2>
                    <div style={styles.classCategoryWrapper}>
                        {cardioClasses.map((classItem: ClassItem, index: number) => (
                            <div key={index} style={styles.cardClassWrapper}>
                                <div style={{...styles.cardClassBg, backgroundImage: `url(https://photo-fhad-fithub-staging.s3.ap-southeast-1.amazonaws.com/imgonline_com_ua_resize_nl_AW_3_YM_Ii_Wb3m9_20e2afae1e.jpg)`}}></div>
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

            <div style={styles.faqSection}>
                <div style={styles.faqContainer}>
                    <h2 style={styles.faqTitle}>FAQ Cardio Class</h2>
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

export default CardioClass;
