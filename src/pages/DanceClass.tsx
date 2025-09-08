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

const DanceClass = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
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
        { name: 'Strength Class', image: '/img/clas/Strength.jpg', link: '/class/class-strength' },
        { name: 'Cardio Class', image: '/img/clas/Cardio.jpg', link: '/class/class-cardio' },
        { name: 'Mind & Body Class', image: '/img/clas/Mind&Body.jpg', link: '/class/class-mind-body' },
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
            <div style={{ height: 'clamp(300px, 50vh, 400px)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center', backgroundImage: 'url(/img/clas/Dance.jpg)' }}>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 'bold', margin: '0' }}>Dance Class</h1>
                </div>
            </div>

            <div style={{ padding: 'clamp(3rem, 6vw, 3.75rem) 0', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1rem, 5vw, 1.25rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem, 4vw, 2.5rem)', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', color: '#000', marginBottom: 'clamp(1rem, 3vw, 1.25rem)' }}>Gerakkan Tubuhmu dengan Dance Class</h2>
                        <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', color: '#666', lineHeight: '1.6' }}>
                            Dance Class di FitHza Indonesia menghadirkan pengalaman menari yang menyenangkan dan penuh energi.
                            Dari hip hop yang dinamis hingga ballet yang elegan, setiap kelas dirancang untuk meningkatkan
                            koordinasi, ritme, dan kebugaran secara keseluruhan. Bergabunglah dengan komunitas penari kami
                            dan rasakan kegembiraan bergerak mengikuti musik.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/img/clas/Dance.jpg"
                            alt="Dance Class"
                            style={{ width: '100%', height: 'clamp(250px, 40vw, 400px)', objectFit: 'cover', borderRadius: '15px' }}
                        />
                    </div>
                </div>
            </div>

            <div style={{ padding: 'clamp(3rem, 6vw, 3.75rem) 0', backgroundColor: '#2b4593ff' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1rem, 5vw, 1.25rem)' }}>
                    <h2 style={{ textAlign: 'left', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', marginBottom: 'clamp(2rem, 4vw, 2.5rem)', color: 'white' }}>Eksplor Kelas Dance</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(1.5rem, 3vw, 1.875rem)' }}>
                        {danceClasses.map((classItem: ClassItem, index: number) => (
                            <div key={index} style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', height: 'clamp(280px, 35vw, 350px)' }}>
                                <div style={{ height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.8)', backgroundImage: `url(/img/clas/Dance.jpg)` }}></div>
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
                    <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 2.5rem)', color: '#000' }}>FAQ Dance Class</h2>
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

export default DanceClass;
