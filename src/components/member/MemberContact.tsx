const MemberContact: React.FC = () => {

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <section
      id="contact-section"
      data-section="contact"
      style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.3,
        zIndex: 1
      }}></div>

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)',
        zIndex: 2
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 3
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : '2.5rem',
            fontWeight: 700,
            color: 'white',
            margin: '0 0 16px 0',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            lineHeight: 1.2
          }}>
            Siap Mulai Perjalanan Fitness Anda?
          </h2>
          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.25rem',
            color: 'rgba(255, 255, 255, 0.9)',
            margin: 0,
            fontWeight: 400,
            lineHeight: 1.5,
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            Bergabunglah dengan komunitas FitHza Indonesia dan rasakan perbedaannya
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '24px' : '32px',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            flex: isMobile ? 'none' : '1',
            textAlign: isMobile ? 'center' : 'left',
            maxWidth: isMobile ? '100%' : '400px'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                justifyContent: isMobile ? 'center' : 'flex-start'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}>
                  <span style={{
                    fontSize: '1.5rem',
                    color: 'white'
                  }}>📍</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'white',
                    margin: '0 0 4px 0',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                  }}>Lokasi Strategis</h3>
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    margin: 0,
                    lineHeight: 1.4
                  }}>3 kota besar di Indonesia</p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                justifyContent: isMobile ? 'center' : 'flex-start'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}>
                  <span style={{
                    fontSize: '1.5rem',
                    color: 'white'
                  }}>⏰</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'white',
                    margin: '0 0 4px 0',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                  }}>24/7 Akses</h3>
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    margin: 0,
                    lineHeight: 1.4
                  }}>Latihan kapan saja sesuai jadwal Anda</p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                justifyContent: isMobile ? 'center' : 'flex-start'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}>
                  <span style={{
                    fontSize: '1.5rem',
                    color: 'white'
                  }}>🏆</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'white',
                    margin: '0 0 4px 0',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                  }}>Trainer Profesional</h3>
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    margin: 0,
                    lineHeight: 1.4
                  }}>Bimbingan dari ahli fitness bersertifikat</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{
            flex: isMobile ? 'none' : '1',
            textAlign: 'center',
            maxWidth: isMobile ? '100%' : '400px'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              padding: isMobile ? '32px 24px' : '40px 32px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              marginBottom: '24px'
            }}>
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '1.75rem',
                fontWeight: 700,
                color: 'white',
                margin: '0 0 12px 0',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                Mulai Hari Ini!
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.9)',
                margin: '0 0 24px 0',
                lineHeight: 1.5
              }}>
                Dapatkan konsultasi gratis dan mulai perjalanan fitness Anda dengan FitHza Indonesia
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
                    padding: '14px 28px',
                    background: 'white',
                    color: '#4D55CC',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textTransform: 'none',
                    letterSpacing: 'normal',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    minWidth: isMobile ? '200px' : 'auto'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                    e.currentTarget.style.background = '#f8f9fa';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.background = 'white';
                  }}
                  onClick={() => {
                    const packagesSection = document.querySelector('[data-section="packages"]');
                    if (packagesSection) {
                      packagesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Lihat Paket Membership
                </button>

                <button
                  style={{
                    padding: '14px 28px',
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid white',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textTransform: 'none',
                    letterSpacing: 'normal',
                    minWidth: isMobile ? '200px' : 'auto'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  onClick={() => {
                    window.location.href = 'tel:+62211234567';
                  }}
                >
                  Hubungi Kami
                </button>
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '16px',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'white'
              }}>
                <span style={{ fontSize: '1.2rem' }}>📞</span>
                <span style={{
                  fontSize: '0.95rem',
                  fontWeight: 500
                }}>+62 21 1234 5678</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'white'
              }}>
                <span style={{ fontSize: '1.2rem' }}>✉️</span>
                <span style={{
                  fontSize: '0.95rem',
                  fontWeight: 500
                }}>info@FitHza Indonesia.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberContact;
