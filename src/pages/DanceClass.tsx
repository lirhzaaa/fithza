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

const DanceClass: React.FC = () => {
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

    const danceClasses: ClassItem[] = [
        { title: 'HIP HOP DANCE', duration: '60 MIN' },
        { title: 'FREESTYLE DANCE', duration: '60 MIN' },
        { title: 'CARDIO DANCE', duration: '60 MIN' },
        { title: 'BELLY DANCE', duration: '60 MIN' },
        { title: 'SALSA', duration: '60 MIN' },
        { title: 'TANGO', duration: '60 MIN' },
        { title: 'BALLET', duration: '60 MIN' },
        { title: 'JAZZ DANCE', duration: '60 MIN' },
        { title: 'CONTEMPORARY DANCE', duration: '60 MIN' },
        { title: 'BREAKDANCE', duration: '60 MIN' }
    ];

    const otherClasses = [
        { name: 'Strength Class', image: 'https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/BOOTCAMP_afcff062bc.JPG', link: '/class/class-strength' },
        { name: 'Cardio Class', image: 'https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/BODYCOMBAT_2089700eff.JPG', link: '/class/class-cardio' },
        { name: 'Mind & Body Class', image: 'https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/Mind_and_Body_Hatha_Yoga_c9bc329096.JPG', link: '/class/class-mind-body' },
        { name: 'Cycling Class', image: 'https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/CYCLING_CLASS_123456789.JPG', link: '/class/class-cycling' }
    ];

    const faqItems: FAQItem[] = [
        {
            title: "Apa itu Dance Class?",
            content: "<p>Dance Class adalah program latihan yang menggabungkan gerakan tari dengan elemen kebugaran. Kami menawarkan berbagai gaya tari dari hip hop hingga ballet, yang tidak hanya menyenangkan tapi juga efektif untuk membakar kalori dan meningkatkan koordinasi.</p>"
        },
        {
            title: "Apakah saya perlu memiliki pengalaman menari?",
            content: "<p>Tidak sama sekali! Dance Class kami dirancang untuk semua level, dari pemula hingga mahir. Instruktur akan memandu setiap gerakan step by step, dan Anda bisa mengikuti sesuai kemampuan Anda sendiri.</p>"
        },
        {
            title: "Gaya tari apa saja yang tersedia?",
            content: "<p>Kami menawarkan berbagai gaya tari seperti Hip Hop, Jazz, Contemporary, Ballet, Salsa, Tango, Belly Dance, dan Breakdance. Setiap gaya memiliki karakteristik dan manfaat kebugaran yang berbeda.</p>"
        },
        {
            title: "Apakah Dance Class bisa membantu menurunkan berat badan?",
            content: "<p>Ya, Dance Class sangat efektif untuk pembakaran kalori. Dalam satu sesi 60 menit, Anda bisa membakar 300-600 kalori tergantung pada intensitas dan gaya tari yang dipilih.</p>"
        },
        {
            title: "Apa manfaat mengikuti Dance Class selain kebugaran?",
            content: "<p>Selain kebugaran fisik, Dance Class juga meningkatkan koordinasi, ritme, kepercayaan diri, ekspresi diri, dan memberikan kesenangan yang tinggi. Ini juga cara yang menyenangkan untuk bersosialisasi.</p>"
        },
        {
            title: "Apakah saya perlu membawa pakaian khusus?",
            content: "<p>Kenakan pakaian olahraga yang nyaman dan longgar untuk gerakan bebas. Sepatu dansa atau sepatu olahraga yang empuk akan membantu. Kami juga merekomendasikan membawa handuk dan botol minum.</p>"
        }
    ];

    return (
        <div>
            <div style={{...styles.banner, backgroundImage: 'url(https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/K_POP_DANCE_8511b475b2.JPG)'}}>
                <div style={styles.bannerOverlay}>
                    <h1 style={styles.bannerTitle}>Dance Class</h1>
                </div>
            </div>

            <div style={styles.descSection}>
                <div style={styles.descContainer}>
                    <div>
                        <h2 style={styles.descTitle}>Gerakkan Tubuhmu dengan Dance Class</h2>
                        <p style={styles.descText}>
                            Dance Class di FitHza Indonesia menghadirkan pengalaman menari yang menyenangkan dan penuh energi.
                            Dari hip hop yang dinamis hingga ballet yang elegan, setiap kelas dirancang untuk meningkatkan
                            koordinasi, ritme, dan kebugaran secara keseluruhan. Bergabunglah dengan komunitas penari kami
                            dan rasakan kegembiraan bergerak mengikuti musik.
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://photo-fhad-fithub-staging.s3.ap-southeast-1.amazonaws.com/imgonline_com_ua_resize_KU_8_Nvn0li4_27a3176199.jpg"
                            alt="Dance Class"
                            style={styles.descImage}
                        />
                    </div>
                </div>
            </div>

            <div style={styles.section}>
                <div style={styles.container}>
                    <h2 style={styles.title}>Eksplor Kelas Dance</h2>
                    <div style={styles.classCategoryWrapper}>
                        {danceClasses.map((classItem: ClassItem, index: number) => (
                            <div key={index} style={styles.cardClassWrapper}>
                                <div style={{...styles.cardClassBg, backgroundImage: `url(https://photo-fhad-fithub-staging.s3.ap-southeast-1.amazonaws.com/imgonline_com_ua_resize_KU_8_Nvn0li4_27a3176199.jpg)`}}></div>
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
                    <h2 style={styles.faqTitle}>FAQ Dance Class</h2>
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

export default DanceClass;
