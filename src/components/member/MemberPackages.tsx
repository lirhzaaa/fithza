import { useState } from 'react';
import RegistrationModal from './RegistrationModal';
import Notification from './Notification';

const MemberPackages: React.FC = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [notification, setNotification] = useState<{
    show: boolean;
    type: 'success' | 'error' | 'info';
    message: string;
    duration: number;
  }>({
    show: false,
    type: 'info',
    message: '',
    duration: 5000
  });

  const membershipPackages = [
    {
      duration: 3,
      pricePerMonth: "Rp149.000",
      originalPrice: "Rp447.000",
      discountPrice: "Rp447.000",
      bonus: null,
      tags: []
    },
    {
      duration: 6,
      pricePerMonth: "Rp139.000",
      originalPrice: "Rp834.000",
      discountPrice: "Rp834.000",
      bonus: "Bonus 1 sesi Personal Trainer gratis",
      tags: []
    },
    {
      duration: 12,
      pricePerMonth: "Rp129.000",
      originalPrice: "Rp1.548.000",
      discountPrice: "Rp1.548.000",
      bonus: "Bonus 2 sesi Personal Trainer gratis",
      tags: []
    },
    {
      duration: 18,
      pricePerMonth: "Rp119.000",
      originalPrice: "Rp2.142.000",
      discountPrice: "Rp2.142.000",
      bonus: "Bonus 2 sesi Personal Trainer gratis",
      tags: []
    },
    {
      duration: 24,
      pricePerMonth: "Rp109.000",
      originalPrice: "Rp2.616.000",
      discountPrice: "Rp2.616.000",
      bonus: "Bonus 2 sesi Personal Trainer gratis",
      tags: []
    },
    {
      duration: "Corporate Membership",
      pricePerMonth: "",
      originalPrice: "",
      discountPrice: "",
      bonus: "Fasilitas sehat untuk karyawan perusahaan",
      tags: []
    }
  ];

  const openRegistrationModal = () => {
    setShowRegistrationModal(true);
  };

  const closeRegistrationModal = () => {
    setShowRegistrationModal(false);
  };

  const showNotification = (type: 'success' | 'error' | 'info', message: string) => {
    setNotification({
      show: true,
      type,
      message,
      duration: 5000
    });
  };

  const hideNotification = () => {
    setNotification({
      show: false,
      type: 'info',
      message: '',
      duration: 5000
    });
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <>
      <section
        style={{
          padding: '80px 0',
          maxWidth: 'none',
          margin: 0,
          background: '#ffffff'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <h1
            data-aos="fade-up"
            data-aos-duration="500"
            style={{
              fontSize: isMobile ? '2rem' : '2.5rem',
              fontWeight: 700,
              color: '#2b4593ff',
              textAlign: 'center',
              marginBottom: '40px'
            }}>Member</h1>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(auto-fit, minmax(280px, 320px))' : 'repeat(auto-fit, 350px)',
              gap: isMobile ? '16px' : '24px',
              marginBottom: '32px',
              justifyContent: 'center'
            }}>
            {membershipPackages.map((pkg, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  border: '1px solid #eeeeee',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  width: isMobile ? '320px' : '350px',
                  minWidth: isMobile ? '280px' : '320px',
                  maxWidth: isMobile ? '320px' : '350px',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexShrink: 0,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
                  e.currentTarget.style.borderColor = '#4D55CC';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = '#eeeeee';
                }}
              >
                <div style={{
                  padding: isMobile ? '20px 18px 14px 18px' : '20px 18px 14px 18px',
                  flex: 1,
                  background: 'white'
                }}>
                  {typeof pkg.duration === 'number' ? (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px'
                    }}>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flex: '0 0 60px'
                      }}>
                        <span style={{
                          fontSize: '1.5rem',
                          fontWeight: 700,
                          color: '#333',
                          lineHeight: 1
                        }}>{pkg.duration}</span>
                        <span style={{
                          fontSize: '0.85rem',
                          color: '#666',
                          marginTop: '2px'
                        }}>bulan</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flex: 1
                      }}>
                        <span style={{
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: '#333',
                          lineHeight: 1
                        }}>{pkg.pricePerMonth}</span>
                        <span style={{
                          fontSize: '0.85rem',
                          color: '#666',
                          marginTop: '2px'
                        }}>per bulan</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        textAlign: 'right',
                        flex: '0 0 auto'
                      }}>
                        {pkg.originalPrice && (
                          <>
                            <span style={{
                              fontSize: '0.85rem',
                              color: '#999',
                              textDecoration: 'line-through',
                              lineHeight: 1
                            }}>{pkg.originalPrice}</span>
                            <span style={{
                              fontSize: '1.1rem',
                              fontWeight: 700,
                              color: '#333',
                              marginTop: '2px'
                            }}>{pkg.discountPrice}</span>
                          </>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        textAlign: 'center'
                      }}>
                        <span style={{
                          fontSize: '1.5rem',
                          fontWeight: 700,
                          color: '#333',
                          lineHeight: 1
                        }}>{pkg.duration}</span>
                      </div>
                    </div>
                  )}
                </div>
                <hr style={{
                  border: 'none',
                  borderTop: '1px solid #eeeeee',
                  margin: 0
                }} />
                <div style={{
                  padding: isMobile ? '14px 18px 20px 18px' : '14px 18px 20px 18px',
                  marginTop: 'auto',
                  background: 'white',
                  borderRadius: '0 0 16px 16px'
                }}>
                  <div style={{
                    marginBottom: '12px',
                    minHeight: '20px'
                  }}>
                    {pkg.bonus && (
                      <p style={{
                        fontSize: '0.9rem',
                        color: '#666',
                        margin: 0,
                        lineHeight: '1.4',
                        textAlign: typeof pkg.duration === 'number' ? 'left' : 'center'
                      }}>
                        {typeof pkg.duration === 'number' ? (
                          <>
                            <span style={{
                              fontWeight: 700,
                              color: '#333'
                            }}>{pkg.bonus.split(' ').slice(0, 3).join(' ')}</span> {pkg.bonus.split(' ').slice(3).join(' ')}
                          </>
                        ) : (
                          pkg.bonus
                        )}
                      </p>
                    )}
                  </div>
                  <button
                    style={{
                      width: '100%',
                      padding: '12px 18px',
                      background: '#4D55CC',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textTransform: 'none',
                      letterSpacing: 'normal',
                      boxShadow: '0 2px 8px rgba(77, 85, 204, 0.2)'
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
                    onClick={openRegistrationModal}
                  >
                    {typeof pkg.duration === 'number' ? 'Daftar' : 'Kontak Sales'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p style={{
            fontSize: '0.9rem',
            color: '#666',
            textAlign: 'left',
            marginTop: '24px',
            fontStyle: 'italic'
          }}>*Harga sudah termasuk PPN 11%</p>
        </div>
      </section>

      {showRegistrationModal && (
        <RegistrationModal
          isOpen={showRegistrationModal}
          onClose={closeRegistrationModal}
          onShowNotification={showNotification}
        />
      )}

      <Notification
        isVisible={notification.show}
        type={notification.type}
        message={notification.message}
        duration={notification.duration}
        onClose={hideNotification}
      />
    </>
  );
};

export default MemberPackages;
