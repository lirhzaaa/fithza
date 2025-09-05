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
                padding: '80px 40px',
            }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1rem, 5vw, 2rem)' }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                    textAlign: 'center',
                    marginBottom: '20px',
                    color: '#2b4593ff',
                    fontWeight: 'bold'
                }}>
                    Selamat Datang Di Fithza Indonesia
                </h2>
                <p style={{
                    textAlign: 'center',
                    marginBottom: '50px',
                    color: '#666',
                    fontSize: '1.1rem'
                }}>
                    Temukan jawaban untuk pertanyaan yang sering ditanyakan tentang FitHza Indonesia
                </p>
                <div style={{ marginBottom: '40px' }}>
                    {faqItems.map((item: FAQItem, index: number) => (
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            key={index} style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
                            <div
                                style={{
                                    padding: '20px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    backgroundColor: '#f9f9f9',
                                }}
                                onClick={() => toggleAccordion(index)}
                            >
                                <span style={{ fontWeight: 'bold' }}>{item.title}</span>
                                <span style={{ fontSize: '1.5rem' }}>{openIndex === index ? '-' : '+'}</span>
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
                                        padding: openIndex === index ? '20px' : '0 20px',
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
                        padding: '30px',
                        border: '1px solid #ddd',
                        backgroundColor: '#ffffffff',
                        borderRadius: '10px',
                        marginTop: '40px'
                    }}>
                    <h3 style={{
                        fontSize: '1.5rem',
                        marginBottom: '15px',
                        color: '#2b4593ff'
                    }}>
                        Masih ada pertanyaan?
                    </h3>
                    <p style={{
                        color: '#666',
                        marginBottom: '20px',
                        fontSize: '1rem'
                    }}>
                        Tim kami siap membantu Anda dengan pertanyaan apa pun tentang membership atau layanan kami.
                    </p>
                    <button style={{
                        backgroundColor: '#2b4593ff',
                        color: 'white',
                        border: 'none',
                        padding: '12px 25px',
                        borderRadius: '5px',
                        fontSize: '1rem',
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
