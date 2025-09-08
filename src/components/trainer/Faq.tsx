import { useState } from 'react';

type FAQItem = {
    title: string;
    content: string;
}

const TrainerFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems: FAQItem[] = [
        {
            title: "Apa itu personal trainer di FitHza Indonesia?",
            content: "<p>Personal trainer di FitHza Indonesia adalah instruktur kebugaran profesional yang memberikan bimbingan pribadi untuk membantu Anda mencapai tujuan kebugaran. Mereka merancang program latihan yang disesuaikan dengan kebutuhan, tingkat kebugaran, dan jadwal Anda.</p>"
        },
        {
            title: "Bagaimana cara memesan sesi personal trainer?",
            content: "<p>Pemesanan sesi dapat dilakukan melalui website kami atau langsung di resepsionis gym. Pilih jumlah sesi yang diinginkan, pilih trainer jika tersedia, dan lakukan pembayaran. Konfirmasi akan dikirim setelah pemesanan.</p>"
        },
        {
            title: "Berapa biaya sesi personal trainer?",
            content: "<p>Biaya sesi personal trainer bervariasi berdasarkan paket: 4 sesi Rp 1.155.000 (Rp 288.750/sesi), 8 sesi Rp 2.072.700 (Rp 259.088/sesi), 16 sesi Rp 3.582.000 (Rp 223.875/sesi), 24 sesi Rp 5.040.000 (Rp 210.000/sesi), 36 sesi Rp 6.804.000 (Rp 189.000/sesi), 48 sesi Rp 8.316.000 (Rp 173.250/sesi). Harga sudah termasuk diskon.</p>"
        },
        {
            title: "Apa manfaat menggunakan personal trainer?",
            content: "<p>Menggunakan personal trainer memberikan latihan yang lebih efektif dan aman, motivasi ekstra, program yang disesuaikan, pemantauan kemajuan, serta tips nutrisi dan gaya hidup sehat. Ini membantu Anda mencapai hasil lebih cepat dan konsisten.</p>"
        },
        {
            title: "Siapa saja personal trainer kami?",
            content: "<p>Personal trainer kami adalah profesional bersertifikasi dengan pengalaman di bidang kebugaran. Mereka memiliki spesialisasi seperti kekuatan, kardio, atau rehabilitasi. Setiap trainer dilatih untuk memberikan bimbingan yang aman dan efektif.</p>"
        },
        {
            title: "Berapa lama durasi sesi?",
            content: "<p>Durasi sesi personal trainer umumnya 60 menit per sesi, termasuk konsultasi, latihan utama, dan pendinginan. Durasi dapat disesuaikan berdasarkan kebutuhan Anda.</p>"
        },
        {
            title: "Apakah ada paket sesi?",
            content: "<p>Ya, kami menawarkan paket sesi mulai dari 4 hingga 48 sesi dengan harga diskon. Paket ini memberikan penghematan lebih besar dan fleksibilitas dalam jadwal. Semakin banyak sesi, semakin murah per sesi.</p>"
        },
        {
            title: "Bagaimana cara membatalkan sesi?",
            content: "<p>Pembatalan sesi dapat dilakukan melalui website atau resepsionis minimal 24 jam sebelum jadwal. Jika tidak hadir tanpa pemberitahuan, mungkin dikenakan biaya. Kebijakan ini untuk memastikan efisiensi jadwal trainer.</p>"
        },
        {
            title: "Apa syarat untuk menggunakan personal trainer?",
            content: "<p>Syarat utama adalah berusia minimal 16 tahun dan dalam kondisi kesehatan yang baik. Kami merekomendasikan konsultasi medis sebelum memulai. Untuk sesi pertama, isi formulir kesehatan dan diskusikan tujuan Anda dengan trainer.</p>"
        },
        {
            title: "Apakah ada jadwal tersedia?",
            content: "<p>Ya, jadwal sesi tersedia berdasarkan ketersediaan trainer. Anda dapat memilih waktu pagi, siang, sore, atau malam. Jadwal dapat berubah, jadi pastikan untuk konfirmasi ulang. Pesan sesi melalui website untuk opsi yang lebih mudah.</p>"
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
                    FAQ Personal Trainer di FitHza Indonesia
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
                                    <span style={{ fontWeight: 'bold', fontSize: 'clamp(0.9rem, 2.2vw, 1rem)' }}>{item.title}</span>
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
                                    <span style={{ fontWeight: 'bold', fontSize: 'clamp(0.9rem, 2.2vw, 1rem)' }}>{item.title}</span>
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

export default TrainerFAQ;