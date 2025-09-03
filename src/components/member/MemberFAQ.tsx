import { useState } from 'react';

const MemberFAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "Apakah saya bisa mengakses semua lokasi FitHza Indonesia dengan satu membership?",
      answer: "Ya, dengan membership FitHza Indonesia Anda dapat mengakses semua lokasi gym kami di Jakarta, Bogor, dan Bandung tanpa biaya tambahan."
    },
    {
      question: "Apakah ada biaya pendaftaran atau biaya lainnya?",
      answer: "Tidak ada biaya pendaftaran! Harga yang tertera sudah termasuk semua biaya termasuk pajak. Anda hanya perlu membayar biaya membership sesuai paket yang dipilih."
    },
    {
      question: "Apakah tersedia layanan personal trainer?",
      answer: "Ya, kami menyediakan layanan personal trainer profesional. Beberapa paket membership sudah termasuk sesi personal trainer gratis sebagai bonus."
    },
    {
      question: "Apakah gym buka 24 jam?",
      answer: "Ya, semua lokasi FitHza Indonesia buka 24 jam setiap hari, sehingga Anda dapat berolahraga sesuai jadwal yang paling nyaman untuk Anda."
    }
  ];

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="300"
      data-section="faq"
      style={{
        padding: '20px 0 80px 0',
        background: '#f8f9fa',
        maxWidth: 'none',
        margin: 0
      }}
    >
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '48px'
        }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : '2.5rem',
            fontWeight: 700,
            color: '#1f2937',
            margin: '0 0 16px 0',
            lineHeight: 1.2
          }}>
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#6b7280',
            margin: 0,
            lineHeight: 1.5
          }}>
            Temukan jawaban untuk pertanyaan umum tentang membership FitHza Indonesia
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
          {faqData.map((faq, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              key={index}
              style={{
                background: 'white',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}
            >
              <button
                onClick={() => toggleItem(index)}
                style={{
                  width: '100%',
                  padding: isMobile ? '20px 16px' : '24px 20px',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f9fafb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'none';
                }}
              >
                <span style={{
                  flex: 1,
                  marginRight: '16px',
                  lineHeight: 1.4
                }}>
                  {faq.question}
                </span>
                <span style={{
                  fontSize: '1.5rem',
                  color: '#6b7280',
                  transition: 'transform 0.3s ease',
                  transform: openItems.includes(index) ? 'rotate(45deg)' : 'rotate(0deg)',
                  flexShrink: 0
                }}>
                  +
                </span>
              </button>

              <div style={{
                maxHeight: openItems.includes(index) ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s ease',
                background: '#f9fafb'
              }}>
                <div style={{
                  padding: isMobile ? '0 16px 20px 16px' : '0 20px 24px 20px',
                  color: '#4b5563',
                  lineHeight: 1.6,
                  fontSize: '1rem'
                }}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberFAQ;
