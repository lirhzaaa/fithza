import { useState, useRef, useEffect } from 'react';

// Custom Dropdown Component
interface CustomDropdownProps {
    label: string;
    value: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
}

const CustomDropdown = ({
    label,
    value,
    options,
    onChange,
    placeholder = "Pilih opsi",
    disabled = false,
    required = false
}: CustomDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (selectedValue: string) => {
        onChange(selectedValue);
        setIsOpen(false);
    };

    const selectedOption = options.find(option => option.value === value);

    return (
        <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#374151', fontWeight: '600' }}>
                {label} {required && <span style={{ color: '#e74c3c' }}>*</span>}
            </label>
            <div ref={dropdownRef} style={{ position: 'relative' }}>
                <button
                    type="button"
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    disabled={disabled}
                    style={{
                        width: '100%',
                        padding: '12px 14px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        backgroundColor: disabled ? '#f9fafb' : 'white',
                        color: value ? '#374151' : '#9ca3af',
                        fontSize: '0.95rem',
                        textAlign: 'left',
                        cursor: disabled ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'all 0.2s ease',
                        boxShadow: isOpen ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                        height: '44px',
                        boxSizing: 'border-box'
                    }}
                >
                    <span>{selectedOption ? selectedOption.label : placeholder}</span>
                    <span style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        fontSize: '12px',
                        color: '#6b7280'
                    }}>
                        ▼
                    </span>
                </button>

                {isOpen && (
                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        right: '0',
                        backgroundColor: 'white',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        zIndex: 1000,
                        maxHeight: '200px',
                        overflowY: 'auto',
                        marginTop: '2px'
                    }}>
                        {options.map((option, index) => (
                            <div
                                key={option.value}
                                onClick={() => handleSelect(option.value)}
                                style={{
                                    padding: '12px 14px',
                                    cursor: 'pointer',
                                    color: '#374151',
                                    fontSize: '0.95rem',
                                    borderBottom: index < options.length - 1 ? '1px solid #f3f4f6' : 'none',
                                    backgroundColor: value === option.value ? '#f9fafb' : 'white',
                                    transition: 'background-color 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    (e.target as HTMLElement).style.backgroundColor = '#f9fafb';
                                }}
                                onMouseLeave={(e) => {
                                    (e.target as HTMLElement).style.backgroundColor = value === option.value ? '#f9fafb' : 'white';
                                }}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowNotification?: (type: 'success' | 'error' | 'info', message: string) => void;
}

const RegistrationModal = ({ isOpen, onClose, onShowNotification }: RegistrationModalProps) => {
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
            maxHeight: '90vh',
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
            padding: '30px 24px',
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
                top: '10px',
                right: '10px',
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                color: '#6b7280',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: '4px',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#374151';
              }}
              onMouseLeave={(e) => {
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
              <CustomDropdown
                label="Kota"
                value={formData.kota}
                onChange={(value) => setFormData(prev => ({ ...prev, kota: value }))}
                placeholder="Pilih Kota"
                required
                options={[
                  { value: "Bogor", label: "Bogor" },
                  { value: "Jakarta", label: "Jakarta" },
                  { value: "Bandung", label: "Bandung" }
                ]}
              />

              <CustomDropdown
                label="Preferensi Gym"
                value={formData.klub}
                onChange={(value) => setFormData(prev => ({ ...prev, klub: value }))}
                placeholder={formData.kota ? "Pilih Gym" : "Pilih kota terlebih dahulu"}
                disabled={!formData.kota}
                required
                options={
                  formData.kota === "Bogor" ? [
                    { value: "FitHza Indonesia Bogor Center", label: "FitHza Indonesia Bogor Center" },
                    { value: "FitHza Indonesia Bogor Mall", label: "FitHza Indonesia Bogor Mall" }
                  ] : formData.kota === "Jakarta" ? [
                    { value: "FitHza Indonesia Jakarta Central", label: "FitHza Indonesia Jakarta Central" },
                    { value: "FitHza Indonesia Jakarta Barat", label: "FitHza Indonesia Jakarta Barat" },
                    { value: "FitHza Indonesia Jakarta Selatan", label: "FitHza Indonesia Jakarta Selatan" }
                  ] : formData.kota === "Bandung" ? [
                    { value: "FitHza Indonesia Bandung Center", label: "FitHza Indonesia Bandung Center" },
                    { value: "FitHza Indonesia Bandung Utara", label: "FitHza Indonesia Bandung Utara" }
                  ] : []
                }
              />
              {formData.kota && (
                <small style={{
                  display: 'block',
                  color: '#6b7280',
                  fontSize: '0.8rem',
                  marginTop: '-16px',
                  marginBottom: '20px',
                  fontStyle: 'normal'
                }}>Kamu tetap bisa akses semua lokasi gym</small>
              )}

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

              <CustomDropdown
                label="Preferensi Waktu Kontak"
                value={formData.preferensiWaktu}
                onChange={(value) => setFormData(prev => ({ ...prev, preferensiWaktu: value }))}
                placeholder="Pilih waktu kontak"
                required
                options={[
                  { value: "Kapan Saja", label: "Kapan Saja" },
                  { value: "Pagi (08:00-12:00)", label: "Pagi (08:00-12:00)" },
                  { value: "Siang (12:00-17:00)", label: "Siang (12:00-17:00)" },
                  { value: "Malam (17:00-21:00)", label: "Malam (17:00-21:00)" }
                ]}
              />

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
