import { useState } from 'react';

const MemberFAQ: React.FC = () => {
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
      question: "Berapa lama masa berlaku membership?",
      answer: "Membership FitHza Indonesia tersedia dalam berbagai durasi mulai dari 3 bulan hingga 36 bulan. Semakin lama durasi yang Anda pilih, semakin hemat biayanya per bulan."
    },
    {
      question: "Apakah ada biaya pendaftaran atau biaya lainnya?",
      answer: "Tidak ada biaya pendaftaran! Harga yang tertera sudah termasuk semua biaya termasuk pajak. Anda hanya perlu membayar biaya membership sesuai paket yang dipilih."
    },
    {
      question: "Bagaimana cara membatalkan membership?",
      answer: "Anda dapat membatalkan membership kapan saja melalui aplikasi FitHza Indonesia atau menghubungi customer service kami. Kebijakan pembatalan kami sangat fleksibel."
    },
    {
      question: "Apakah tersedia layanan personal trainer?",
      answer: "Ya, kami menyediakan layanan personal trainer profesional. Beberapa paket membership sudah termasuk sesi personal trainer gratis sebagai bonus."
    },
    {
      question: "Apakah gym buka 24 jam?",
      answer: "Ya, semua lokasi FitHza Indonesia buka 24 jam setiap hari, sehingga Anda dapat berolahraga sesuai jadwal yang paling nyaman untuk Anda."
    },
    {
      question: "Apakah ada program khusus untuk pemula?",
      answer: "Tentu! Kami memiliki program khusus untuk pemula dengan bimbingan trainer yang akan membantu Anda memulai perjalanan fitness dengan aman dan efektif."
    },
    {
      question: "Bagaimana cara mendapatkan diskon membership?",
      answer: "Diskon otomatis diberikan berdasarkan durasi membership yang Anda pilih. Semakin lama durasi, semakin besar diskon yang Anda dapatkan."
    }
  ];

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <section
      data-section="faq"
      style={{
        padding: '80px 0',
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

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {faqData.map((faq, index) => (
            <div
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

        <div style={{
          textAlign: 'center',
          marginTop: '48px',
          padding: '32px 20px',
          background: 'white',
          borderRadius: '16px',
          border: '1px solid #e5e7eb',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#1f2937',
            margin: '0 0 12px 0'
          }}>
            Masih ada pertanyaan?
          </h3>
          <p style={{
            fontSize: '1rem',
            color: '#6b7280',
            margin: '0 0 20px 0',
            lineHeight: 1.5
          }}>
            Tim customer service kami siap membantu Anda
          </p>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '12px',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <button
              style={{
                padding: '12px 24px',
                background: '#4D55CC',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: 'normal',
                boxShadow: '0 2px 8px rgba(77, 85, 204, 0.2)',
                minWidth: isMobile ? '200px' : 'auto'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#363c92';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(77, 85, 204, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#4D55CC';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(77, 85, 204, 0.2)';
              }}
              onClick={() => {
                window.location.href = 'tel:+62211234567';
              }}
            >
              📞 Hubungi CS
            </button>

            <button
              style={{
                padding: '12px 24px',
                background: 'transparent',
                color: '#4D55CC',
                border: '2px solid #4D55CC',
                borderRadius: '8px',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: 'normal',
                minWidth: isMobile ? '200px' : 'auto'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#4D55CC';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#4D55CC';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onClick={() => {
                window.location.href = 'mailto:info@FitHza Indonesia.com';
              }}
            >
              ✉️ Email Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberFAQ;
