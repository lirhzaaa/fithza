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

const CardioClass = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
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
        { name: 'Strength Class', image: '/img/clas/Strength.jpg', link: '/class/class-strength' },
        { name: 'Dance Class', image: '/img/clas/Dance.jpg', link: '/class/dance-class' },
        { name: 'Mind & Body Class', image: '/img/clas/Mind&Body.jpg', link: '/class/class-mind-body' },
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
            <div style={{ height: 'clamp(300px, 50vh, 400px)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center', backgroundImage: 'url(/img/clas/Cardio.jpg)' }}>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 'bold', margin: '0' }}>Cardio Class</h1>
                </div>
            </div>

            <div style={{ padding: 'clamp(3rem, 6vw, 3.75rem) 0', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1rem, 5vw, 1.25rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem, 4vw, 2.5rem)', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', color: '#000', marginBottom: 'clamp(1rem, 3vw, 1.25rem)' }}>Tingkatkan Daya Tahan Jantung dengan Cardio Class</h2>
                        <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', color: '#666', lineHeight: '1.6' }}>
                            Cardio Class di Fithza Indonesia dirancang untuk meningkatkan kesehatan jantung dan membakar kalori secara maksimal.
                            Dengan berbagai variasi latihan seperti BodyCombat, aerobics, dan step, Anda akan merasakan peningkatan
                            stamina dan kebugaran kardiovaskular. Program ini cocok untuk semua level dan memberikan hasil yang
                            terukur dalam pembakaran lemak dan peningkatan energi.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/img/clas/Cardio.jpg"
                            alt="Cardio Class"
                            style={{ width: '100%', height: 'clamp(250px, 40vw, 400px)', objectFit: 'cover', borderRadius: '15px' }}
                        />
                    </div>
                </div>
            </div>

            <div style={{ padding: 'clamp(3rem, 6vw, 3.75rem) 0', backgroundColor: '#2b4593ff' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1rem, 5vw, 1.25rem)' }}>
                    <h2 style={{ textAlign: 'left', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', marginBottom: 'clamp(2rem, 4vw, 2.5rem)', color: 'white' }}>Eksplor Kelas Cardio</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(1.5rem, 3vw, 1.875rem)' }}>
                        {cardioClasses.map((classItem: ClassItem, index: number) => (
                            <div key={index} style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', height: 'clamp(280px, 35vw, 350px)' }}>
                                <div style={{ height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.8)', backgroundImage: `url(/img/clas/Cardio.jpg)` }}></div>
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
                    <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 2.5rem)', color: '#000' }}>FAQ Cardio Class</h2>
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

export default CardioClass;
