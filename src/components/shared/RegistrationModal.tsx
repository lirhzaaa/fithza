import { useState } from 'react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowNotification?: (type: 'success' | 'error' | 'info', message: string) => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, onShowNotification }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    kota: '',
    klub: '',
    nama: '',
    handphone: '',
    email: '',
    preferensiWaktu: 'Kapan Saja',
    privacyPolicy: false
  });

  const showNotification = (type: 'success' | 'error' | 'info', message: string) => {
    if (onShowNotification) {
      onShowNotification(type, message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const requiredFields = {
        nama: 'Nama Lengkap',
        handphone: 'Nomor Handphone',
        email: 'Email',
        kota: 'Kota',
        klub: 'Preferensi Gym'
      };

      const missingFields = [];
      for (const [field, label] of Object.entries(requiredFields)) {
        const value = formData[field as keyof typeof formData];
        if (!value || (typeof value === 'string' && value.trim() === '')) {
          missingFields.push(label);
        }
      }

      if (missingFields.length > 0) {
        showNotification('error', `Mohon lengkapi field: ${missingFields.join(', ')}`);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        showNotification('error', 'Format email tidak valid');
        return;
      }

      const phoneRegex = /^[0-9]{10,13}$/;
      if (!phoneRegex.test(formData.handphone.replace(/[^0-9]/g, ''))) {
        showNotification('error', 'Format nomor handphone tidak valid (10-13 digit)');
        return;
      }

      if (!formData.privacyPolicy) {
        showNotification('error', 'Anda harus menyetujui kebijakan privasi untuk melanjutkan!');
        return;
      }

      const registrationData = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now()
      };

      const existingData = JSON.parse(localStorage.getItem('FitHza Indonesia_registrations') || '[]');
      existingData.push(registrationData);
      localStorage.setItem('FitHza Indonesia_registrations', JSON.stringify(existingData));

      setFormData({
        kota: '',
        klub: '',
        nama: '',
        handphone: '',
        email: '',
        preferensiWaktu: 'Kapan Saja',
        privacyPolicy: false
      });

      showNotification('success', 'Pendaftaran berhasil! Tim kami akan menghubungi Anda segera.');
      onClose();

    } catch (error) {
      console.error('Error saving data:', error);
      showNotification('error', 'Terjadi kesalahan saat menyimpan data. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(12px)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          overflow: 'hidden'
        }}
        onClick={onClose}
      >
        <div
          style={{
            background: 'white',
            borderRadius: '16px',
            maxWidth: '480px',
            width: '100%',
            maxHeight: '85vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 25px 80px rgba(0, 0, 0, 0.25)',
            margin: 'auto',
            position: 'relative'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{
            padding: '24px 24px 20px 24px',
            borderBottom: '1px solid #e5e7eb',
            position: 'relative',
            background: 'white',
            color: '#1f2937',
            borderRadius: '16px 16px 0 0',
            flexShrink: 0
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#1f2937',
              margin: 0,
              textAlign: 'center',
              textShadow: 'none'
            }}>Bergabung dengan FitHza Indonesia</h2>
            <button
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#f3f4f6',
                border: 'none',
                fontSize: '1.5rem',
                color: '#6b7280',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: '8px',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#e5e7eb';
                e.currentTarget.style.color = '#374151';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f3f4f6';
                e.currentTarget.style.color = '#6b7280';
              }}
              onClick={onClose}
            >
              ×
            </button>
          </div>

          <div style={{
            flex: 1,
            overflowY: 'auto',
            background: 'white',
            borderRadius: '0 0 16px 16px'
          }}>
            <form
              onSubmit={handleRegistration}
              style={{
                padding: '20px 24px 28px 24px',
                background: 'white',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  color: '#374151',
                  marginBottom: '6px',
                  fontSize: '0.9rem'
                }}>Kota</label>
                <select
                  name="kota"
                  value={formData.kota}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease',
                    background: 'white',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#4D55CC';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(77, 85, 204, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#d1d5db';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  required
                >
                  <option value="">Pilih Kota</option>
                  <option value="Bogor">Bogor</option>
                  <option value="Jakarta">Jakarta</option>
                  <option value="Bandung">Bandung</option>
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  color: '#374151',
                  marginBottom: '6px',
                  fontSize: '0.9rem'
                }}>Preferensi Gym</label>
                <select
                  name="klub"
                  value={formData.klub}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease',
                    background: 'white',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#4D55CC';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(77, 85, 204, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#d1d5db';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  required
                  disabled={!formData.kota}
                >
                  <option value="">
                    {formData.kota ? "Pilih Gym" : "Pilih kota terlebih dahulu"}
                  </option>
                  {formData.kota === "Bogor" && (
                    <>
                      <option value="FitHza Indonesia Bogor Center">FitHza Indonesia Bogor Center</option>
                      <option value="FitHza Indonesia Bogor Mall">FitHza Indonesia Bogor Mall</option>
                    </>
                  )}
                  {formData.kota === "Jakarta" && (
                    <>
                      <option value="FitHza Indonesia Jakarta Central">FitHza Indonesia Jakarta Central</option>
                      <option value="FitHza Indonesia Jakarta Barat">FitHza Indonesia Jakarta Barat</option>
                      <option value="FitHza Indonesia Jakarta Selatan">FitHza Indonesia Jakarta Selatan</option>
                    </>
                  )}
                  {formData.kota === "Bandung" && (
                    <>
                      <option value="FitHza Indonesia Bandung Center">FitHza Indonesia Bandung Center</option>
                      <option value="FitHza Indonesia Bandung Utara">FitHza Indonesia Bandung Utara</option>
                    </>
                  )}
                </select>
                <small style={{
                  display: 'block',
                  color: '#6b7280',
                  fontSize: '0.8rem',
                  marginTop: '4px',
                  fontStyle: 'normal'
                }}>Kamu tetap bisa akses semua lokasi gym</small>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  color: '#374151',
                  marginBottom: '6px',
                  fontSize: '0.9rem'
                }}>Nama Lengkap</label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease',
                    background: 'white',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#4D55CC';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(77, 85, 204, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#d1d5db';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  placeholder="Masukkan nama lengkap Anda"
                  required
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  color: '#374151',
                  marginBottom: '6px',
                  fontSize: '0.9rem'
                }}>Nomor Handphone</label>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  background: 'white',
                  transition: 'all 0.2s ease',
                  overflow: 'hidden'
                }}>
                  <span style={{
                    padding: '12px 14px',
                    background: '#f9fafb',
                    color: '#6b7280',
                    fontWeight: 500,
                    borderRight: '1px solid #d1d5db',
                    fontSize: '0.95rem'
                  }}>+62</span>
                  <input
                    type="tel"
                    name="handphone"
                    value={formData.handphone}
                    onChange={handleInputChange}
                    style={{
                      border: 'none',
                      flex: 1,
                      padding: '12px 14px',
                      background: 'transparent',
                      boxShadow: 'none',
                      fontSize: '0.95rem'
                    }}
                    placeholder="8XX-XXXX-XXXX"
                    required
                  />
                </div>
                <small style={{
                  display: 'block',
                  color: '#6b7280',
                  fontSize: '0.8rem',
                  marginTop: '4px',
                  fontStyle: 'normal'
                }}>Format: 8XX-XXXX-XXXX (tanpa +62)</small>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  color: '#374151',
                  marginBottom: '6px',
                  fontSize: '0.9rem'
                }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease',
                    background: 'white',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#4D55CC';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(77, 85, 204, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#d1d5db';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  placeholder="user@mail.com"
                  required
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  color: '#374151',
                  marginBottom: '6px',
                  fontSize: '0.9rem'
                }}>Preferensi Waktu Kontak</label>
                <select
                  name="preferensiWaktu"
                  value={formData.preferensiWaktu}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease',
                    background: 'white',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#4D55CC';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(77, 85, 204, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#d1d5db';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  required
                >
                  <option value="Kapan Saja">Kapan Saja</option>
                  <option value="Pagi (08:00-12:00)">Pagi (08:00-12:00)</option>
                  <option value="Siang (12:00-17:00)">Siang (12:00-17:00)</option>
                  <option value="Malam (17:00-21:00)">Malam (17:00-21:00)</option>
                </select>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  cursor: 'pointer',
                  fontWeight: 400,
                  lineHeight: '1.4',
                  padding: '4px 0'
                }}>
                  <input
                    type="checkbox"
                    name="privacyPolicy"
                    checked={formData.privacyPolicy}
                    onChange={handleInputChange}
                    style={{
                      width: '16px',
                      height: '16px',
                      margin: 0,
                      marginTop: '2px',
                      accentColor: '#4D55CC',
                      cursor: 'pointer'
                    }}
                    required
                  />
                  <span style={{
                    flex: 1,
                    fontSize: '0.9rem',
                    color: '#374151',
                    lineHeight: '1.4'
                  }}>
                    Saya sudah membaca dan menyetujui{' '}
                    <a
                      href="/data-privacy"
                      target="_blank"
                      style={{
                        color: '#4D55CC',
                        textDecoration: 'underline',
                        cursor: 'pointer'
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/data-privacy';
                      }}
                    >
                      kebijakan data privasi
                    </a>
                    {' '}FitHza Indonesia
                  </span>
                </label>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '14px 24px',
                  background: isSubmitting ? '#d1d5db' : '#4D55CC',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease',
                  textTransform: 'none',
                  letterSpacing: 'normal',
                  marginTop: '8px',
                  opacity: isSubmitting ? 0.7 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = '#363c92';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(77, 85, 204, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = '#4D55CC';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Memproses...' : 'Daftar Sekarang'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationModal;
