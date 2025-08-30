const MemberBenefits = () => {
  const benefits = [
    {
      icon: "🏋️",
      title: "Bebas Akses ke Semua Club GymZHA"
    },
    {
      icon: "💪",
      title: "Memiliki Banyak Variasi Kelas"
    },
    {
      icon: "🏢",
      title: "Fasilitas Terlengkap"
    },
    {
      icon: "⏰",
      title: "Akses 24 Jam Setiap Hari"
    },
    {
      icon: "🧘",
      title: "Kelas Grup Pilates+ Terbesar & Terlengkap di Indonesia"
    },
    {
      icon: "🧽",
      title: "Tersedia Peminjaman Handuk Gratis"
    }
  ];

  return (
    <section style={{
      padding: '80px 0',
      maxWidth: 'none',
      margin: 0,
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 5vw'
      }}>
        <div style={{
          display: 'flex',
          gap: '60px',
          alignItems: 'flex-start',
          justifyContent: 'center',
          maxWidth: '100%'
        }}>
          <div style={{
            flex: '0 0 40%',
            maxWidth: '40%',
            textAlign: 'left'
          }}>
            <h2 style={{
              fontSize: '3.2rem',
              fontWeight: 700,
              color: '#333',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}>
              Keuntungan <span style={{ color: '#4D55CC' }}>Join Membership</span>
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: '#666',
              fontWeight: 400,
              marginBottom: 0,
              lineHeight: '1.5'
            }}>
              Nikmati akses penuh ke semua fasilitas dan kelas eksklusif di GymZHA
            </p>
          </div>

          <div style={{
            flex: '0 0 50%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'repeat(3, auto)',
            gap: '24px',
            maxWidth: '50%'
          }}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '20px 16px',
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  border: '1px solid #f0f0f0',
                  minHeight: '100px',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
                  e.currentTarget.style.borderColor = '#4D55CC';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = '#f0f0f0';
                }}
              >
                <div style={{
                  flexShrink: 0,
                  width: '48px',
                  height: '48px',
                  background: 'transparent',
                  borderRadius: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  fontSize: '2rem'
                }}>
                  {benefit.icon}
                </div>
                <div style={{
                  flex: 1,
                  paddingTop: 0,
                  textAlign: 'left',
                  width: '100%'
                }}>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#333',
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: '1.3'
                  }}>{benefit.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberBenefits;
