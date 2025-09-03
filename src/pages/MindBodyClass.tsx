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

const MindBodyClass: React.FC = () => {
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

    const mindBodyClasses: ClassItem[] = [
        { title: 'VINYASA YOGA', duration: '60 MIN' },
        { title: 'KAPHA YOGA', duration: '60 MIN' },
        { title: 'LADIES STYLE BACHATA', duration: '60 MIN' },
        { title: 'THAI BOXING', duration: '60 MIN' },
        { title: 'ZUMBA', duration: '60 MIN' },
        { title: 'MEDITATION', duration: '60 MIN' },
        { title: 'TAI CHI', duration: '60 MIN' },
        { title: 'PILATES', duration: '60 MIN' },
        { title: 'QI GONG', duration: '60 MIN' },
        { title: 'REIKI', duration: '60 MIN' }
    ];

    const otherClasses = [
        { name: 'Strength Class', image: 'https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/BOOTCAMP_afcff062bc.JPG', link: '/class/class-strength' },
        { name: 'Cardio Class', image: 'https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/BODYCOMBAT_2089700eff.JPG', link: '/class/class-cardio' },
        { name: 'Dance Class', image: 'https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/K_POP_DANCE_8511b475b2.JPG', link: '/class/dance-class' },
    ];

    const faqItems: FAQItem[] = [
        {
            title: "Apa itu Mind & Body Class?",
            content: "<p>Mind & Body Class adalah program latihan holistik yang menggabungkan gerakan fisik dengan kesadaran mental. Kami menawarkan yoga, pilates, tai chi, meditasi, dan praktik lainnya yang fokus pada keseimbangan antara tubuh dan pikiran.</p>"
        },
        {
            title: "Apakah Mind & Body Class cocok untuk pemula?",
            content: "<p>Sangat cocok! Semua kelas kami dirancang dengan pendekatan bertahap dan instruktur yang berpengalaman dalam memandu pemula. Anda bisa memilih level yang sesuai dengan kemampuan Anda.</p>"
        },
        {
            title: "Apa manfaat utama Mind & Body Class?",
            content: "<p>Manfaatnya meliputi peningkatan fleksibilitas, kekuatan inti, pengurangan stres, peningkatan fokus mental, kualitas tidur yang lebih baik, dan keseimbangan emosional yang lebih stabil.</p>"
        },
        {
            title: "Berapa frekuensi ideal mengikuti Mind & Body Class?",
            content: "<p>Tergantung pada tujuan Anda, tapi umumnya 2-4 kali per minggu memberikan hasil optimal. Beberapa orang mengikuti kelas tertentu seperti yoga setiap hari untuk rutinitas harian.</p>"
        },
        {
            title: "Apakah saya perlu membawa matras yoga sendiri?",
            content: "<p>Tidak perlu, kami menyediakan semua peralatan yang diperlukan termasuk matras yoga, bolsters, dan props lainnya. Namun, jika Anda memiliki matras pribadi yang Anda sukai, Anda boleh membawanya.</p>"
        },
        {
            title: "Bisakah Mind & Body Class membantu mengatasi insomnia?",
            content: "<p>Ya, banyak praktik seperti yoga restoratif, meditasi, dan tai chi sangat efektif untuk meningkatkan kualitas tidur. Teknik pernapasan dan relaksasi yang dipelajari dapat membantu mengatasi insomnia dan tidur yang tidak nyenyak.</p>"
        }
    ];

    return (
        <div>
            <div style={{...styles.banner, backgroundImage: 'url(https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/Mind_and_Body_Hatha_Yoga_c9bc329096.JPG)'}}>
                <div style={styles.bannerOverlay}>
                    <h1 style={styles.bannerTitle}>Mind & Body Class</h1>
                </div>
            </div>

            <div style={styles.descSection}>
                <div style={styles.descContainer}>
                    <div>
                        <h2 style={styles.descTitle}>Temukan Keseimbangan dengan Mind & Body Class</h2>
                        <p style={styles.descText}>
                            Mind & Body Class di FitHza Indonesia menghadirkan pengalaman holistik yang menyatukan gerakan fisik
                            dengan kesadaran mental. Dari yoga yang menenangkan hingga pilates yang memperkuat, setiap kelas
                            dirancang untuk membawa Anda menuju keseimbangan sempurna antara tubuh dan pikiran. Rasakan
                            kedamaian batin dan kekuatan fisik yang seimbang.
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://photo-fhad-fithub-staging.s3.ap-southeast-1.amazonaws.com/imgonline_com_ua_resize_2_T_Ue22_EWPLG_Ce_I_c8f42f08ae.jpg"
                            alt="Mind & Body Class"
                            style={styles.descImage}
                        />
                    </div>
                </div>
            </div>

            <div style={styles.section}>
                <div style={styles.container}>
                    <h2 style={styles.title}>Eksplor Kelas Mind & Body</h2>
                    <div style={styles.classCategoryWrapper}>
                        {mindBodyClasses.map((classItem: ClassItem, index: number) => (
                            <div key={index} style={styles.cardClassWrapper}>
                                <div style={{...styles.cardClassBg, backgroundImage: `url(https://photo-fhad-fithub-staging.s3.ap-southeast-1.amazonaws.com/imgonline_com_ua_resize_2_T_Ue22_EWPLG_Ce_I_c8f42f08ae.jpg)`}}></div>
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
                    <h2 style={styles.faqTitle}>FAQ Mind & Body Class</h2>
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

export default MindBodyClass;
