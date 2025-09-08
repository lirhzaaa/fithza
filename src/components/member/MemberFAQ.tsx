import { useState } from 'react';

type FAQItem = {
    title: string;
    content: string;
}

const MemberFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems: FAQItem[] = [
        {
            title: "Apa itu membership di Fithza Indonesia?",
            content: "<p>Membership di Fithza Indonesia adalah program keanggotaan yang memberikan akses penuh ke semua fasilitas gym, kelas, dan layanan kami. Dengan membership, Anda dapat menikmati latihan tanpa batas, konsultasi personal, dan berbagai manfaat eksklusif mulai dari Rp 149.000 per bulan.</p>"
        },
        {
            title: "Berapa jenis membership yang tersedia?",
            content: "<p>Kami menawarkan paket membership berdasarkan durasi: 3 bulan (Rp 149.000/bulan), 6 bulan (Rp 139.000/bulan), 12 bulan (Rp 129.000/bulan), 18 bulan (Rp 119.000/bulan), 24 bulan (Rp 109.000/bulan), dan Corporate Membership untuk perusahaan. Setiap paket memberikan akses penuh ke fasilitas.</p>"
        },
        {
            title: "Bagaimana cara mendaftar membership?",
            content: "<p>Pendaftaran dapat dilakukan melalui website kami atau langsung di resepsionis gym. Pilih paket membership, isi formulir, dan lakukan pembayaran. Anda akan menerima kartu member dan akses segera setelah konfirmasi.</p>"
        },
        {
            title: "Apa manfaat membership?",
            content: "<p>Manfaat membership meliputi akses 24/7 ke gym, kelas eksklusif gratis, personal trainer profesional, peminjaman handuk gratis, fasilitas lengkap dan modern, serta bonus sesi personal trainer untuk paket jangka panjang. Member juga mendapatkan prioritas dalam layanan.</p>"
        },
        {
            title: "Berapa biaya membership?",
            content: "<p>Biaya membership mulai dari Rp 149.000 per bulan untuk paket 3 bulan (total Rp 447.000). Paket 6 bulan Rp 139.000/bulan (Rp 834.000), 12 bulan Rp 129.000/bulan (Rp 1.548.000), 18 bulan Rp 119.000/bulan (Rp 2.142.000), 24 bulan Rp 109.000/bulan (Rp 2.616.000). Ada bonus sesi personal trainer untuk paket panjang.</p>"
        },
        {
            title: "Apakah ada periode trial?",
            content: "<p>Ya, kami menawarkan periode trial 7 hari gratis untuk membership baru. Selama trial, Anda dapat mengakses semua fasilitas. Jika puas, lanjutkan dengan pembayaran; jika tidak, batalkan tanpa biaya.</p>"
        },
        {
            title: "Bagaimana cara membatalkan membership?",
            content: "<p>Pembatalan dapat dilakukan melalui website atau resepsionis minimal 30 hari sebelum akhir periode. Biaya pembatalan mungkin dikenakan tergantung kebijakan. Pastikan untuk mengembalikan kartu member.</p>"
        },
        {
            title: "Dapatkah saya upgrade membership?",
            content: "<p>Ya, Anda dapat upgrade atau memperpanjang membership kapan saja melalui website atau resepsionis. Biaya akan disesuaikan dengan paket baru dan sisa periode Anda. Upgrade akan aktif segera setelah pembayaran.</p>"
        },
        {
            title: "Apa syarat untuk menjadi member?",
            content: "<p>Syarat utama adalah berusia minimal 16 tahun dan dalam kondisi kesehatan yang baik. Semua calon member harus mengisi formulir kesehatan. Untuk Corporate Membership, hubungi sales kami.</p>"
        },
        {
            title: "Bagaimana cara mengakses fasilitas sebagai member?",
            content: "<p>Sebagai member, gunakan kartu member untuk scan masuk. Akses gym 24/7, daftar kelas melalui website, dan nikmati semua fasilitas. Jika ada masalah, hubungi resepsionis.</p>"
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
                    FAQ Membership di Fithza Indonesia
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

export default MemberFAQ;