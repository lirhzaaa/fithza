import { useState } from 'react';

type FAQItem = {
    title: string;
    content: string;
}

const FaqTrainer = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems: FAQItem[] = [
        {
            title: 'Apa manfaat memiliki personal trainer di FitHza?',
            content: 'Personal trainer di FitHza memberikan panduan ahli yang disesuaikan dengan kebutuhan Anda, membantu Anda mencapai hasil yang lebih cepat dan aman. Mereka memantau teknik latihan, mencegah cedera, dan memotivasi Anda untuk tetap konsisten, terutama jika Anda pemula atau memiliki tujuan spesifik seperti penurunan berat badan atau pembentukan otot.'
        },
        {
            title: 'Bagaimana personal trainer membantu saya menentukan tujuan kebugaran yang realistis?',
            content: 'Personal trainer akan melakukan konsultasi awal untuk memahami gaya hidup, preferensi, dan kondisi fisik Anda. Mereka membantu menetapkan tujuan yang SMART (Specific, Measurable, Achievable, Relevant, Time-bound), seperti meningkatkan kekuatan atau meningkatkan daya tahan, dan merancang program latihan yang sesuai untuk mencapai tujuan tersebut.'
        },
        {
            title: 'Apa yang dilakukan dalam penilaian awal oleh personal trainer?',
            content: 'Penilaian awal meliputi pengukuran komposisi tubuh, tes kekuatan, fleksibilitas, dan daya tahan kardiovaskular. Personal trainer juga akan menanyakan riwayat kesehatan dan cedera sebelumnya untuk merancang program yang aman dan efektif, serta memberikan saran nutrisi dasar jika diperlukan.'
        },
        {
            title: 'Bagaimana latihan dengan personal trainer disesuaikan dengan jadwal sibuk saya?',
            content: 'Personal trainer di FitHza fleksibel dengan jadwal Anda. Mereka dapat merancang sesi latihan singkat namun intensif, atau program latihan mandiri yang bisa dilakukan di rumah atau gym. Dengan pendekatan ini, Anda tetap bisa menjaga kebugaran meskipun memiliki komitmen kerja atau keluarga yang padat.'
        },
    ];

    return (
        <section
            style={{
                padding: '80px 0',
            }}>
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                style={{ maxWidth: '1250px', margin: '0 auto', padding: '0 clamp(1rem, 5vw, 2rem)' }}>
                <h2
                    style={{
                        fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                        textAlign: 'center',
                        marginBottom: '20px',
                        color: '#2b4593ff',
                        fontWeight: 'bold'
                    }}>
                    PERTANYAAN YANG SERING DITANYAKAN
                </h2>
                <p style={{
                    textAlign: 'center',
                    marginBottom: '30px',
                    color: '#666',
                    fontSize: '1.1rem'
                }}>
                    Temukan jawaban untuk pertanyaan yang sering ditanyakan tentang layanan Personal Trainer di FitHza Indonesia
                </p>
                <div style={{ marginBottom: '40px' }}>
                    {faqItems.map((item: FAQItem, index: number) => (
                        <div
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            key={index} style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
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
                                >
                                    {item.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqTrainer;