import React, { useState } from 'react';

type FAQItem = {
    title: string;
    content: string;
}

const FaqHome = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems: FAQItem[] = [
        {
            title: 'Apakah saya perlu memiliki pengalaman sebelum bergabung?',
            content: '<p>Tidak sama sekali! Gym kami menyambut member dari semua level, mulai dari pemula hingga atlet profesional. Kami memiliki program yang disesuaikan untuk setiap level kebugaran.</p>'
        },
        {
            title: 'Berapa lama durasi membership yang tersedia?',
            content: '<p>Kami menyediakan berbagai pilihan durasi membership: 1 bulan, 3 bulan, 6 bulan, dan 12 bulan. Semakin lama durasi yang dipilih, semakin hemat biaya per bulannya.</p>'
        },
        {
            title: 'Apakah ada biaya tambahan selain membership?',
            content: '<p>Harga membership sudah termasuk akses ke semua fasilitas utama. Biaya tambahan hanya berlaku untuk layanan premium seperti personal training atau program khusus.</p>'
        },
        {
            title: 'Bagaimana cara mendaftar membership?',
            content: '<p>Proses pendaftaran sangat mudah! Kunjungi gym kami dan isi formulir pendaftaran, atau daftar online melalui website. Tim kami akan memandu Anda melalui proses selanjutnya.</p>'
        },
        {
            title: 'Apakah ada program khusus untuk wanita?',
            content: '<p>Ya, kami memiliki program Ladies Only dengan fasilitas khusus wanita, termasuk area locker room terpisah dan kelas-kelas yang dirancang khusus untuk kebutuhan wanita.</p>'
        }
    ];

    return (
        <section
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{
                padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 5vw, 2.5rem)',
            }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                    textAlign: 'center',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>
                    Selamat Datang Di Fithza Indonesia
                </h2>
                <p style={{
                    textAlign: 'center',
                    marginBottom: 'clamp(2rem, 4vw, 3.125rem)',
                    color: '#666',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)'
                }}>
                    Temukan jawaban untuk pertanyaan yang sering ditanyakan tentang Fithza Indonesia
                </p>
                <div style={{ marginBottom: '40px' }}>
                    {faqItems.map((item: FAQItem, index: number) => (
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            key={index} style={{ marginBottom: 'clamp(0.5rem, 1.5vw, 1.25rem)', border: '1px solid #ddd', borderRadius: '8px' }}>
                            <div
                                style={{
                                    padding: 'clamp(1rem, 3vw, 1.25rem)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    backgroundColor: '#f9f9f9',
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
                <div
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    style={{
                        textAlign: 'center',
                        padding: 'clamp(1.5rem, 4vw, 1.875rem)',
                        border: '1px solid #ddd',
                        backgroundColor: '#ffffffff',
                        borderRadius: '10px',
                        marginTop: 'clamp(2rem, 4vw, 2.5rem)'
                    }}>
                    <h3 style={{
                        fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                        marginBottom: 'clamp(0.75rem, 2vw, 0.9375rem)',
                        color: '#2b4593ff'
                    }}>
                        Masih ada pertanyaan?
                    </h3>
                    <p style={{
                        color: '#666',
                        marginBottom: 'clamp(1rem, 3vw, 1.25rem)',
                        fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
                    }}>
                        Tim kami siap membantu Anda dengan pertanyaan apa pun tentang membership atau layanan kami.
                    </p>
                    <button style={{
                        backgroundColor: '#2b4593ff',
                        color: 'white',
                        border: 'none',
                        padding: 'clamp(0.75rem, 2vw, 0.75rem) clamp(1.5rem, 4vw, 1.5625rem)',
                        borderRadius: '5px',
                        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2757e4ff'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2b4593ff'}
                    >
                        Hubungi Kami
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FaqHome;
