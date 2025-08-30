import React, { useState } from 'react';

const FaqSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: 'Apakah saya perlu memiliki pengalaman sebelum bergabung?',
            answer: 'Tidak sama sekali! Gym kami menyambut member dari semua level, mulai dari pemula hingga atlet profesional. Kami memiliki program yang disesuaikan untuk setiap level kebugaran.'
        },
        {
            question: 'Berapa lama durasi membership yang tersedia?',
            answer: 'Kami menyediakan berbagai pilihan durasi membership: 1 bulan, 3 bulan, 6 bulan, dan 12 bulan. Semakin lama durasi yang dipilih, semakin hemat biaya per bulannya.'
        },
        {
            question: 'Apakah ada biaya tambahan selain membership?',
            answer: 'Harga membership sudah termasuk akses ke semua fasilitas utama. Biaya tambahan hanya berlaku untuk layanan premium seperti personal training atau program khusus.'
        },
        {
            question: 'Bagaimana cara mendaftar membership?',
            answer: 'Proses pendaftaran sangat mudah! Kunjungi gym kami dan isi formulir pendaftaran, atau daftar online melalui website. Tim kami akan memandu Anda melalui proses selanjutnya.'
        },
        {
            question: 'Apakah ada program khusus untuk wanita?',
            answer: 'Ya, kami memiliki program Ladies Only dengan fasilitas khusus wanita, termasuk area locker room terpisah dan kelas-kelas yang dirancang khusus untuk kebutuhan wanita.'
        },
        {
            question: 'Apakah gym buka selama hari libur nasional?',
            answer: 'Ya, gym kami tetap buka selama hari libur nasional dengan jam operasional yang mungkin sedikit berbeda. Silakan cek pengumuman di website atau hubungi kami untuk informasi terbaru.'
        }
    ];

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section style={{
            padding: '80px 0',
            backgroundColor: 'white'
        }}>
            <div style={{maxWidth: '800px', margin: '0 auto', padding: '0 20px'}}>
                <h2 style={{
                    fontSize: '2.5rem',
                    textAlign: 'center',
                    marginBottom: '20px',
                    color: '#2b4593ff',
                    fontWeight: 'bold'
                }}>
                    Pertanyaan Umum
                </h2>
                <p style={{
                    textAlign: 'center',
                    marginBottom: '50px',
                    color: '#666',
                    fontSize: '1.1rem'
                }}>
                    Temukan jawaban untuk pertanyaan yang sering ditanyakan tentang FitHza Indonesia
                </p>
                <div style={{marginBottom: '30px'}}>
                    {faqs.map((faq, index) => (
                        <div key={index} style={{
                            border: '1px solid #e9ecef',
                            borderRadius: '8px',
                            marginBottom: '15px',
                            overflow: 'hidden'
                        }}>
                            <button
                                onClick={() => toggleFaq(index)}
                                style={{
                                    width: '100%',
                                    padding: '20px',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    color: '#2b4593ff',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                {faq.question}
                                <span style={{
                                    fontSize: '1.5rem',
                                    transition: 'transform 0.3s',
                                    transform: activeIndex === index ? 'rotate(45deg)' : 'rotate(0deg)'
                                }}>
                                    +
                                </span>
                            </button>
                            <div style={{
                                maxHeight: activeIndex === index ? '500px' : '0',
                                overflow: 'hidden',
                                transition: 'max-height 0.3s ease-in-out',
                                backgroundColor: '#f8f9fa'
                            }}>
                                <div style={{
                                    padding: '0 20px 20px 20px',
                                    color: '#666',
                                    lineHeight: '1.6'
                                }}>
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{
                    textAlign: 'center',
                    padding: '30px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '10px'
                }}>
                    <h3 style={{
                        fontSize: '1.3rem',
                        marginBottom: '15px',
                        color: '#2b4593ff'
                    }}>
                        Masih ada pertanyaan?
                    </h3>
                    <p style={{
                        color: '#666',
                        marginBottom: '20px'
                    }}>
                        Tim kami siap membantu Anda dengan pertanyaan apa pun tentang membership atau layanan kami.
                    </p>
                    <button style={{
                        backgroundColor: '#ff6b35',
                        color: 'white',
                        border: 'none',
                        padding: '12px 25px',
                        borderRadius: '5px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e55a2b'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff6b35'}
                    >
                        Hubungi Kami
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
