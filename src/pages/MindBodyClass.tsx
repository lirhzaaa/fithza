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

const MindBodyClass = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
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
        { name: 'Strength Class', image: '/img/clas/Strength.jpg', link: '/class/class-strength' },
        { name: 'Cardio Class', image: '/img/clas/Cardio.jpg', link: '/class/class-cardio' },
        { name: 'Dance Class', image: '/img/clas/Dance.jpg', link: '/class/dance-class' },
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
            <div style={{ height: 'clamp(300px, 50vh, 400px)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center', backgroundImage: 'url(/img/clas/Mind&Body.jpg)' }}>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 'bold', margin: '0' }}>Mind & Body Class</h1>
                </div>
            </div>

            <div style={{ padding: 'clamp(3rem, 6vw, 3.75rem) 0', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1rem, 5vw, 1.25rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem, 4vw, 2.5rem)', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', color: '#000', marginBottom: 'clamp(1rem, 3vw, 1.25rem)' }}>Temukan Keseimbangan dengan Mind & Body Class</h2>
                        <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', color: '#666', lineHeight: '1.6' }}>
                            Mind & Body Class di FitHza Indonesia menghadirkan pengalaman holistik yang menyatukan gerakan fisik
                            dengan kesadaran mental. Dari yoga yang menenangkan hingga pilates yang memperkuat, setiap kelas
                            dirancang untuk membawa Anda menuju keseimbangan sempurna antara tubuh dan pikiran. Rasakan
                            kedamaian batin dan kekuatan fisik yang seimbang.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/img/clas/Mind&Body.jpg"
                            alt="Mind & Body Class"
                            style={{ width: '100%', height: 'clamp(250px, 40vw, 400px)', objectFit: 'cover', borderRadius: '15px' }}
                        />
                    </div>
                </div>
            </div>

            <div style={{ padding: 'clamp(3rem, 6vw, 3.75rem) 0', backgroundColor: '#2b4593ff' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1rem, 5vw, 1.25rem)' }}>
                    <h2 style={{ textAlign: 'left', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', marginBottom: 'clamp(2rem, 4vw, 2.5rem)', color: 'white' }}>Eksplor Kelas Mind & Body</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(1.5rem, 3vw, 1.875rem)' }}>
                        {mindBodyClasses.map((classItem: ClassItem, index: number) => (
                            <div key={index} style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', height: 'clamp(280px, 35vw, 350px)' }}>
                                <div style={{ height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.8)', backgroundImage: `url(/img/clas/Mind&Body.jpg)` }}></div>
                                <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6))', color: 'white', padding: 'clamp(1rem, 3vw, 1.25rem)' }}>
                                    <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', margin: '10px 0', fontWeight: 'bold' }}>{classItem.title}</h2>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                                        <div style={{ fontSize: 'clamp(0.7rem, 2vw, 0.8rem)', color: '#fff' }}>{classItem.duration}</div>
                                    </div>
                                    {classItem.calories && (
                                        <div style={{ fontSize: 'clamp(0.7rem, 2vw, 0.8rem)', color: '#fff', marginTop: '5px' }}>{classItem.calories}</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ padding: 'clamp(3rem, 6vw, 3.75rem) 0', backgroundColor: '#2b4593ff' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1rem, 5vw, 1.25rem)' }}>
                    <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', marginBottom: 'clamp(2rem, 4vw, 2.5rem)', color: 'white' }}>Jelajahi Kelas Lain</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(1.5rem, 3vw, 1.875rem)' }}>
                        {otherClasses.map((otherClass, index) => (
                            <a key={index} href={otherClass.link} style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', height: 'clamp(240px, 30vw, 300px)', textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.8)', backgroundImage: `url(${otherClass.image})` }}></div>
                                <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6))', color: 'white', padding: 'clamp(1rem, 3vw, 1.25rem)', textAlign: 'center' }}>
                                    <h3 style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.4rem)', margin: '0', fontWeight: 'bold' }}>{otherClass.name}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ padding: 'clamp(3rem, 6vw, 3.75rem) clamp(1rem, 5vw, 1.25rem)', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 2.5rem)', color: '#000' }}>FAQ Mind & Body Class</h2>
                    {faqItems.map((item: FAQItem, index: number) => (
                        <div key={index} style={{ marginBottom: 'clamp(0.5rem, 1.5vw, 0.625rem)', border: '1px solid #ddd', borderRadius: '8px' }}>
                            <div
                                style={{ padding: 'clamp(1rem, 3vw, 1.25rem)', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9f9f9' }}
                                onClick={() => toggleAccordion(index)}
                            >
                                <span style={{ fontWeight: 'bold', fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>{item.title}</span>
                                <span style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>{openIndex === index ? '-' : '+'}</span>
                            </div>
                            <div
                                style={{
                                    maxHeight: openIndex === index ? '200px' : '0',
                                    overflow: 'hidden',
                                    transition: 'max-height 0.3s ease-in-out',
                                    borderTop: openIndex === index ? '1px solid #ddd' : 'none',
                                    backgroundColor: '#fff'
                                }}
                            >
                                <div
                                    style={{
                                        padding: openIndex === index ? 'clamp(1rem, 3vw, 1.25rem)' : '0 clamp(1rem, 3vw, 1.25rem)',
                                        transition: 'padding 0.3s ease-in-out'
                                    }}
                                    dangerouslySetInnerHTML={{ __html: item.content }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MindBodyClass;
