import { useState } from 'react';

type ClassItem = {
    title: string;
    duration: string;
    calories?: string;
}

type FAQItem = {
    title: string;
    content: string;
}

const StrengthClass = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const strengthClasses: ClassItem[] = [
        { title: 'HIIT', duration: '60 MIN' },
        { title: 'CORE', duration: '60 MIN' },
        { title: 'CIRCUIT', duration: '60 MIN' },
        { title: 'BOOTY SHAPING', duration: '60 MIN' },
        { title: 'BOOTCAMP', duration: '60 MIN' },
        { title: 'WEIGHT TRAINING', duration: '60 MIN' },
        { title: 'POWERLIFTING', duration: '60 MIN' },
        { title: 'FUNCTIONAL TRAINING', duration: '60 MIN' },
        { title: 'CROSSFIT', duration: '60 MIN' },
        { title: 'BODYBUILDING', duration: '60 MIN' },
        { title: 'KETTLEBELL TRAINING', duration: '60 MIN' },
        { title: 'BODYCOMBAT', duration: '60 MIN' }
    ];

    const otherClasses = [
        { name: 'Cardio Class', image: '/img/clas/Cardio.jpg', link: '/class/class-cardio' },
        { name: 'Dance Class', image: '/img/clas/Dance.jpg', link: '/class/dance-class' },
        { name: 'Mind & Body Class', image: '/img/clas/Mind&Body.jpg', link: '/class/class-mind-body' },
    ];

    const faqItems: FAQItem[] = [
        {
            title: "Apa itu Strength Class?",
            content: "<p>Strength Class adalah program latihan yang fokus pada pengembangan kekuatan otot, daya tahan, dan kekuatan fisik secara keseluruhan. Kelas ini menggunakan berbagai teknik seperti weight training, bodyweight exercises, dan functional training.</p>"
        },
        {
            title: "Siapa yang cocok mengikuti Strength Class?",
            content: "<p>Strength Class cocok untuk semua level, dari pemula hingga advanced. Instruktur akan memberikan modifikasi gerakan sesuai dengan kemampuan peserta. Baik pria maupun wanita dapat mengikuti kelas ini.</p>"
        },
        {
            title: "Apa manfaat mengikuti Strength Class?",
            content: "<p>Manfaatnya meliputi peningkatan massa otot, kekuatan tulang, metabolisme yang lebih baik, postur tubuh yang lebih baik, dan pengurangan risiko cedera. Juga membantu dalam aktivitas sehari-hari yang membutuhkan kekuatan.</p>"
        },
        {
            title: "Apakah Strength Class aman untuk pemula?",
            content: "<p>Ya, sangat aman. Instruktur akan memandu setiap gerakan dengan teknik yang benar dan memberikan alternatif yang lebih ringan untuk pemula. Kami selalu menekankan safety first dalam setiap sesi latihan.</p>"
        },
        {
            title: "Berapa kali dalam seminggu saya harus mengikuti Strength Class?",
            content: "<p>Rekomendasi umum adalah 2-3 kali per minggu dengan hari istirahat di antaranya untuk recovery. Namun, ini tergantung pada tujuan dan kondisi fisik Anda. Konsultasikan dengan instruktur untuk program yang tepat.</p>"
        },
        {
            title: "Apakah saya perlu membawa peralatan sendiri?",
            content: "<p>Tidak perlu. Semua peralatan yang diperlukan sudah tersedia di gym. Namun, Anda bisa membawa handuk, botol minum, dan pakaian olahraga yang nyaman.</p>"
        }
    ];

    return (
        <div>
            <div style={{ height: '400px', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center', backgroundImage: 'url(/img/clas/Strength.jpg)' }}>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0' }}>Strength Class</h1>
                </div>
            </div>

            <div style={{ padding: '60px 0', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', color: '#000', marginBottom: '20px' }}>Tingkatkan Kekuatan Tubuhmu dengan Strength Class</h2>
                        <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6' }}>
                            Strength Class di FitHza Indonesia dirancang untuk membangun kekuatan otot dan daya tahan fisik.
                            Dengan instruktur profesional dan program latihan yang terstruktur, Anda akan merasakan perubahan
                            signifikan dalam kekuatan dan bentuk tubuh Anda. Dari HIIT hingga weight training, temukan
                            rutinitas yang tepat untuk mencapai tujuan kebugaran Anda.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/img/clas/Strength.jpg"
                            alt="Strength Class"
                            style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '15px' }}
                        />
                    </div>
                </div>
            </div>

            <div style={{ padding: '60px 0', backgroundColor: '#2b4593ff' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
                    <h2 style={{ textAlign: 'left', fontSize: '2.5rem', marginBottom: '40px', color: 'white' }}>Eksplor Kelas Strength</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {strengthClasses.map((classItem: ClassItem, index: number) => (
                            <div key={index} style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', height: '350px' }}>
                                <div style={{ height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.8)', backgroundImage: `url(/img/clas/Strength.jpg)` }}></div>
                                <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6))', color: 'white', padding: '20px' }}>
                                    <h2 style={{ fontSize: '1.5rem', margin: '10px 0', fontWeight: 'bold' }}>{classItem.title}</h2>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                                        <div style={{ fontSize: '0.8rem', color: '#fff' }}>{classItem.duration}</div>
                                    </div>
                                    {classItem.calories && (
                                        <div style={{ fontSize: '0.8rem', color: '#fff', marginTop: '5px' }}>{classItem.calories}</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ padding: '60px 0', backgroundColor: '#2b4593ff' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px', color: 'white' }}>Jelajahi Kelas Lain</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                        {otherClasses.map((otherClass, index) => (
                            <a key={index} href={otherClass.link} style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', height: '300px', textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.8)', backgroundImage: `url(${otherClass.image})` }}></div>
                                <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6))', color: 'white', padding: '20px', textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', margin: '0', fontWeight: 'bold' }}>{otherClass.name}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ padding: '60px 20px', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px', color: '#000' }}>FAQ Strength Class</h2>
                    {faqItems.map((item: FAQItem, index: number) => (
                        <div key={index} style={{ marginBottom: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
                            <div
                                style={{ padding: '20px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9f9f9' }}
                                onClick={() => toggleAccordion(index)}
                            >
                                <span style={{ fontWeight: 'bold' }}>{item.title}</span>
                                <span style={{ fontSize: '1.5rem' }}>{openIndex === index ? '-' : '+'}</span>
                            </div>
                            {openIndex === index && (
                                <div
                                    style={{ padding: '20px', borderTop: '1px solid #ddd', backgroundColor: '#fff' }}
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

export default StrengthClass;
