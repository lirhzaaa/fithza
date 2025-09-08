import { useState } from 'react';

type FAQItem = {
    title: string;
    content: string;
}

const FAQClass = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems: FAQItem[] = [
        {
            title: "Apa itu kelas di Fithza Indonesia?",
            content: "<p>Kelas di Fithza Indonesia adalah program latihan terstruktur yang dirancang untuk membantu anggota mencapai tujuan kebugaran mereka. Kami menawarkan berbagai jenis kelas seperti Strength, Cardio, Dance, dan Mind & Body, masing-masing dengan fokus yang berbeda untuk memenuhi kebutuhan individu.</p>"
        },
        {
            title: "Berapa jenis kelas yang tersedia?",
            content: "<p>Kami menyediakan 5 kategori utama kelas: Strength Class (fokus pada kekuatan otot), Cardio Class (meningkatkan daya tahan jantung), Dance Class (kombinasi gerakan dan musik), Mind & Body Class (relaksasi dan keseimbangan). Setiap kategori memiliki beberapa sub-kelas untuk berbagai level.</p>"
        },
        {
            title: "Bagaimana cara mendaftar kelas?",
            content: "<p>Pendaftaran kelas dapat dilakukan melalui aplikasi Fithza Indonesia atau langsung di resepsionis gym. Pilih kelas yang diinginkan berdasarkan jadwal, lalu konfirmasi pendaftaran. Untuk anggota baru, pastikan telah memiliki membership aktif.</p>"
        },
        {
            title: "Apakah ada kelas untuk pemula?",
            content: "<p>Ya, kami memiliki kelas khusus untuk pemula di setiap kategori. Kelas ini dirancang dengan intensitas rendah, fokus pada teknik dasar, dan bimbingan instruktur yang lebih personal. Cocok untuk mereka yang baru mulai berolahraga.</p>"
        },
        {
            title: "Berapa lama durasi kelas?",
            content: "<p>Durasi kelas umumnya 60 menit per sesi, termasuk pemanasan, latihan utama, dan pendinginan. Beberapa kelas khusus mungkin memiliki durasi yang berbeda, seperti 45 menit atau 90 menit, tergantung pada jenisnya.</p>"
        },
        {
            title: "Apa manfaat mengikuti kelas?",
            content: "<p>Mengikuti kelas memberikan manfaat seperti peningkatan kekuatan fisik, daya tahan, fleksibilitas, pengurangan stres, dan peningkatan kesehatan mental. Kelas juga membantu membangun komunitas dan motivasi bersama instruktur dan peserta lainnya.</p>"
        },
        {
            title: "Siapa instruktur kelas?",
            content: "<p>Instruktur kami adalah profesional bersertifikasi dengan pengalaman di bidang kebugaran. Mereka dilatih untuk memberikan bimbingan yang aman, efektif, dan menyenangkan. Setiap instruktur memiliki spesialisasi di kategori kelas tertentu.</p>"
        },
        {
            title: "Apakah ada jadwal kelas?",
            content: "<p>Ya, jadwal kelas tersedia di aplikasi Fithza Indonesia dan website kami. Jadwal dapat berubah, jadi pastikan untuk memeriksa update terbaru. Kami menawarkan kelas pagi, siang, sore, dan malam untuk mengakomodasi berbagai jadwal.</p>"
        },
        {
            title: "Berapa biaya mengikuti kelas?",
            content: "<p>Biaya kelas termasuk dalam paket membership bulanan. Untuk anggota premium, semua kelas gratis. Anggota basic dapat mengikuti kelas dengan biaya tambahan per sesi atau paket. Hubungi resepsionis untuk detail harga.</p>"
        },
        {
            title: "Bagaimana cara membatalkan kelas?",
            content: "<p>Pembatalan dapat dilakukan melalui aplikasi atau resepsionis minimal 2 jam sebelum jadwal kelas dimulai. Jika tidak hadir tanpa pemberitahuan, mungkin dikenakan biaya. Kebijakan ini untuk memastikan kuota kelas terisi.</p>"
        }
    ];

    const leftItems: FAQItem[] = faqItems.slice(0, 5);
    const rightItems: FAQItem[] = faqItems.slice(5, 10);

    return (
        <div style={{
            padding: 'clamp(3rem, 6vw, 3.75rem) clamp(1rem, 5vw, 1.25rem)',
        }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <h2
                    data-aos="fade-down"
                    data-aos-duration="700"
                    style={{
                        fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                        textAlign: 'center',
                        marginBottom: '40px',
                        color: '#000'
                    }}>
                    FAQ Kelas di Fithza Indonesia
                </h2>
                <div style={{ marginBottom: '40px' }}>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <div>
                        {leftItems.map((item: FAQItem, index: number) => (
                            <div
                                data-aos="fade-up"
                                data-aos-duration="700"
                                key={index} style={{ marginBottom: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
                                <div
                                    style={{
                                        padding: 'clamp(1rem, 3vw, 1.25rem)',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        backgroundColor: '#f9f9f9'
                                    }}
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
                    <div>
                        {rightItems.map((item: FAQItem, index: number) => (
                            <div
                                data-aos="fade-up"
                                data-aos-duration="700"
                                key={index + 5} style={{ marginBottom: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
                                <div
                                    style={{
                                        padding: 'clamp(1rem, 3vw, 1.25rem)',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        backgroundColor: '#f9f9f9'
                                    }}
                                    onClick={() => toggleAccordion(index + 5)}
                                >
                                    <span style={{ fontWeight: 'bold', fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>{item.title}</span>
                                    <span style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>{openIndex === index + 5 ? '-' : '+'}</span>
                                </div>
                                <div
                                    style={{
                                        maxHeight: openIndex === index + 5 ? '200px' : '0',
                                        overflow: 'hidden',
                                        transition: 'max-height 0.3s ease-in-out',
                                        borderTop: openIndex === index + 5 ? '1px solid #ddd' : 'none',
                                        backgroundColor: '#fff'
                                    }}
                                >
                                    <div
                                        style={{
                                            padding: openIndex === index + 5 ? 'clamp(1rem, 3vw, 1.25rem)' : '0 clamp(1rem, 3vw, 1.25rem)',
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
        </div>
    );
};

export default FAQClass;