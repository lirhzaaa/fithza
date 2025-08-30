import { useState } from 'react';

interface FAQItem {
    title: string;
    content: string;
}

const FAQClass: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems: FAQItem[] = [
        {
            title: "Apa itu kelas di FitHza Indonesia?",
            content: "<p>Kelas di FitHza Indonesia adalah program latihan terstruktur yang dirancang untuk membantu anggota mencapai tujuan kebugaran mereka. Kami menawarkan berbagai jenis kelas seperti Strength, Cardio, Dance, Mind & Body, dan Cycling, masing-masing dengan fokus yang berbeda untuk memenuhi kebutuhan individu.</p>"
        },
        {
            title: "Berapa jenis kelas yang tersedia?",
            content: "<p>Kami menyediakan 5 kategori utama kelas: Strength Class (fokus pada kekuatan otot), Cardio Class (meningkatkan daya tahan jantung), Dance Class (kombinasi gerakan dan musik), Mind & Body Class (relaksasi dan keseimbangan), dan Cycling Class (latihan sepeda indoor). Setiap kategori memiliki beberapa sub-kelas untuk berbagai level.</p>"
        },
        {
            title: "Bagaimana cara mendaftar kelas?",
            content: "<p>Pendaftaran kelas dapat dilakukan melalui aplikasi FitHza Indonesia atau langsung di resepsionis gym. Pilih kelas yang diinginkan berdasarkan jadwal, lalu konfirmasi pendaftaran. Untuk anggota baru, pastikan telah memiliki membership aktif.</p>"
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
            content: "<p>Ya, jadwal kelas tersedia di aplikasi FitHza Indonesia dan website kami. Jadwal dapat berubah, jadi pastikan untuk memeriksa update terbaru. Kami menawarkan kelas pagi, siang, sore, dan malam untuk mengakomodasi berbagai jadwal.</p>"
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
            padding: '60px 20px',
            backgroundColor: '#fff'
        }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <h2 style={{ 
                    fontSize: '2.5rem', 
                    textAlign: 'center', 
                    marginBottom: '40px', 
                    color: '#000' 
                }}>
                    FAQ Kelas di FitHza Indonesia
                </h2>
                <div style={{ marginBottom: '40px' }}>
                    {/* Empty text block */}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        {leftItems.map((item: FAQItem, index: number) => (
                            <div key={index} style={{ marginBottom: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
                                <div 
                                    style={{ 
                                        padding: '20px', 
                                        cursor: 'pointer', 
                                        display: 'flex', 
                                        justifyContent: 'space-between', 
                                        alignItems: 'center',
                                        backgroundColor: '#f9f9f9'
                                    }}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span style={{ fontWeight: 'bold' }}>{item.title}</span>
                                    <span style={{ fontSize: '1.5rem' }}>{openIndex === index ? '-' : '+'}</span>
                                </div>
                                {openIndex === index && (
                                    <div 
                                        style={{ 
                                            padding: '20px', 
                                            borderTop: '1px solid #ddd',
                                            backgroundColor: '#fff'
                                        }}
                                        dangerouslySetInnerHTML={{ __html: item.content }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <div>
                        {rightItems.map((item: FAQItem, index: number) => (
                            <div key={index + 5} style={{ marginBottom: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
                                <div 
                                    style={{ 
                                        padding: '20px', 
                                        cursor: 'pointer', 
                                        display: 'flex', 
                                        justifyContent: 'space-between', 
                                        alignItems: 'center',
                                        backgroundColor: '#f9f9f9'
                                    }}
                                    onClick={() => toggleAccordion(index + 5)}
                                >
                                    <span style={{ fontWeight: 'bold' }}>{item.title}</span>
                                    <span style={{ fontSize: '1.5rem' }}>{openIndex === index + 5 ? '-' : '+'}</span>
                                </div>
                                {openIndex === index + 5 && (
                                    <div 
                                        style={{ 
                                            padding: '20px', 
                                            borderTop: '1px solid #ddd',
                                            backgroundColor: '#fff'
                                        }}
                                        dangerouslySetInnerHTML={{ __html: item.content }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQClass;