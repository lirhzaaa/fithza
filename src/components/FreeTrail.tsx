import React, { useState, useCallback, useRef, useEffect } from 'react';
import NotificationTrail from './NotificationTrail';

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
        <div style={{ marginBottom: label ? '16px' : '0' }}>
            {label && (
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', color: '#666', fontWeight: '500' }}>
                    {label} {required && <span style={{ color: '#e74c3c' }}>*</span>}
                </label>
            )}
            <div ref={dropdownRef} style={{ position: 'relative' }}>
                <button
                    type="button"
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    disabled={disabled}
                    style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        backgroundColor: disabled ? '#f5f5f5' : 'white',
                        color: value ? '#333' : '#999',
                        fontSize: '0.95rem',
                        textAlign: 'left',
                        cursor: disabled ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'all 0.2s ease',
                        boxShadow: isOpen ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                        height: '42px',
                        boxSizing: 'border-box'
                    }}
                >
                    <span>{selectedOption ? selectedOption.label : placeholder}</span>
                    <span style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        fontSize: '12px'
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
                        border: '1px solid #ddd',
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
                                    padding: '10px 12px',
                                    cursor: 'pointer',
                                    color: '#333',
                                    fontSize: '0.95rem',
                                    borderBottom: index < options.length - 1 ? '1px solid #f0f0f0' : 'none',
                                    backgroundColor: value === option.value ? '#f8f9fa' : 'white',
                                    transition: 'background-color 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    (e.target as HTMLElement).style.backgroundColor = '#f8f9fa';
                                }}
                                onMouseLeave={(e) => {
                                    (e.target as HTMLElement).style.backgroundColor = value === option.value ? '#f8f9fa' : 'white';
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

interface FormData {
    city: string;
    club: string;
    gender: string;
    name: string;
    phone: string;
    phoneConfirm: string;
    email: string;
    contactTime: string;
    newsletter: boolean;
    tnc: boolean;
}

const FreeTrail = () => {
    const [formData, setFormData] = useState<FormData>({
        city: '',
        club: '',
        gender: '',
        name: '',
        phone: '',
        phoneConfirm: '',
        email: '',
        contactTime: 'Kapan Saja',
        newsletter: true,
        tnc: false
    });

    const [notification, setNotification] = useState<{
        isVisible: boolean;
        type: 'success' | 'error' | 'info';
        message: string;
    }>({
        isVisible: false,
        type: 'success',
        message: ''
    });

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    }, []);

    const validateForm = useCallback((data: FormData): string | null => {
        if (!data.name.trim()) return 'Nama tidak boleh kosong!';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Email tidak valid!';
        if (data.phone !== data.phoneConfirm) return 'Nomor handphone dan konfirmasi tidak sama!';
        if (!data.tnc) return 'Anda harus menyetujui kebijakan privasi!';
        return null;
    }, []);

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const error = validateForm(formData);
        if (error) {
            setNotification({
                isVisible: true,
                type: 'error',
                message: error
            });
            return;
        }
        console.log('Form submitted:', formData);
        const existingData = localStorage.getItem('freeTrialData');
        let dataArray: FormData[] = [];
        if (existingData) {
            try {
                dataArray = JSON.parse(existingData);
                if (!Array.isArray(dataArray)) {
                    dataArray = [dataArray];
                }
            } catch (error) {
                console.error('Error parsing localStorage data:', error);
                dataArray = [];
            }
        }
        dataArray.push(formData);
        localStorage.setItem('freeTrialData', JSON.stringify(dataArray));
        setNotification({
            isVisible: true,
            type: 'success',
            message: 'Terima kasih! Kami akan menghubungi Anda dalam 48 jam.'
        });
        setFormData({
            city: '',
            club: '',
            gender: '',
            name: '',
            phone: '',
            phoneConfirm: '',
            email: '',
            contactTime: 'Kapan Saja',
            newsletter: true,
            tnc: false
        });
    }, [formData, validateForm]);

    const closeNotification = useCallback(() => {
        setNotification(prev => ({ ...prev, isVisible: false }));
    }, []);

    const clubOptions: { [key: string]: string[] } = {
        Bogor: ['Bogor 1', 'Bogor 2'],
        Jakarta: ['Jakarta 1', 'Jakarta 2'],
        Bandung: ['Bandung 1', 'Bandung 2'],
    };

    const features = [
        {
            icon: '💪',
            text: 'Peralatan premium dan kelas kebugaran kelompok'
        },
        {
            icon: '🏥',
            text: 'Penilaian kesehatan dan kebugaran gratis'
        },
        {
            icon: '👨‍🏫',
            text: 'Pelatih kebugaran bersertifikat untuk membimbing Anda'
        },
        {
            icon: '🤝',
            text: 'Komunitas yang mendukung dan menginspirasi'
        },
        {
            icon: '🏢',
            text: '10 klub di seluruh Indonesia'
        }
    ];

    return (
        <section style={{
            padding: '100px 0 50px',
            overflowX: 'hidden'
        }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1rem, 5vw, 2rem)' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    flexDirection: window.innerWidth < 768 ? 'column' : 'row'
                }}>
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        style={{
                            flex: '1 1 50%',
                            padding: '0 clamp(1rem, 2vw, 2rem)',
                            marginBottom: '30px'
                        }}>
                        <div style={{
                            textAlign: 'left'
                        }}>
                            <h2 style={{
                                fontSize: 'clamp(2rem, 5vw, 3rem)',
                                marginBottom: '20px',
                                color: '#2b4593ff',
                                fontWeight: 'bold'
                            }}>
                                COBA GRATIS DAN DAPATKAN PENAWARAN TERBAIK
                            </h2>
                            <h3 style={{
                                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                                marginBottom: '15px',
                                color: '#333'
                            }}>
                                Mulai Uji Coba Gratis 7 Hari Anda
                            </h3>
                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                opacity: 0.9
                            }}>
                                <tbody>
                                    {features.map((feature, index) => (
                                        <tr key={index}>
                                            <td style={{
                                                width: '60px',
                                                padding: '10px 0',
                                                fontSize: '1.5rem'
                                            }}>
                                                {feature.icon}
                                            </td>
                                            <td style={{
                                                padding: '10px 0',
                                                fontSize: '1.1rem',
                                                color: '#666'
                                            }}>
                                                {feature.text}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        style={{
                            flex: '1 1 50%',
                            padding: '0 clamp(1rem, 2vw, 2rem)'
                        }}>
                        <div style={{
                            backgroundColor: 'white',
                            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                            borderRadius: '12px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                            maxWidth: '500px',
                            margin: '0 auto'
                        }}>
                            <h2 style={{
                                textAlign: 'left',
                                margin: '0 0 24px 0',
                                color: '#2b4593ff',
                                fontSize: 'clamp(1.5rem, 3vw, 1.7rem)',
                                fontWeight: '700'
                            }}>
                                Klaim Free Trial
                            </h2>

                            <form onSubmit={handleSubmit}>
                                <CustomDropdown
                                    label="Kota"
                                    value={formData.city}
                                    onChange={(value) => setFormData(prev => ({ ...prev, city: value }))}
                                    placeholder="Pilih Kota"
                                    required
                                    options={[
                                        { value: "Bogor", label: "Bogor" },
                                        { value: "Jakarta", label: "Jakarta" },
                                        { value: "Bandung", label: "Bandung" }
                                    ]}
                                />

                                <CustomDropdown
                                    label="Preferensi Klub"
                                    value={formData.club}
                                    onChange={(value) => setFormData(prev => ({ ...prev, club: value }))}
                                    placeholder="Pilih klub anda"
                                    disabled={!formData.city}
                                    required
                                    options={
                                        formData.city && clubOptions[formData.city]
                                            ? clubOptions[formData.city].map(club => ({ value: club, label: club }))
                                            : []
                                    }
                                />
                                {formData.city && (
                                    <p style={{
                                        fontSize: '0.8rem',
                                        color: '#888',
                                        marginTop: '-12px',
                                        marginBottom: '16px',
                                        fontStyle: 'italic'
                                    }}>
                                        Kamu tetap bisa akses semua lokasi klub
                                    </p>
                                )}

                                <div style={{ marginBottom: '16px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', color: '#666', fontWeight: '500' }}>
                                        Nama
                                    </label>
                                    <div style={{ display: 'flex', gap: '12px', alignItems: 'stretch' }}>
                                        <div style={{ flex: '0 0 110px' }}>
                                            <CustomDropdown
                                                label=""
                                                value={formData.gender}
                                                onChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
                                                placeholder="Pilih"
                                                required
                                                options={[
                                                    { value: "Tuan", label: "Tuan" },
                                                    { value: "Nyonya", label: "Nyonya" }
                                                ]}
                                            />
                                        </div>
                                        <div style={{ flex: '1' }}>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Isi nama sesuai KTP"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                style={{
                                                    width: '100%',
                                                    padding: '10px 12px',
                                                    border: '1px solid #ddd',
                                                    borderRadius: '8px',
                                                    fontSize: '0.95rem',
                                                    boxSizing: 'border-box',
                                                    height: '42px'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '16px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', color: '#666', fontWeight: '500' }}>
                                        Nomor Handphone <span style={{ color: '#e74c3c' }}>*</span>
                                    </label>
                                    <div style={{ display: 'flex', alignItems: 'stretch' }}>
                                        <span style={{
                                            padding: '10px 12px',
                                            border: '1px solid #ddd',
                                            borderRight: 'none',
                                            borderRadius: '8px 0 0 8px',
                                            backgroundColor: '#f8f9fa',
                                            fontSize: '0.95rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontWeight: '500',
                                            color: '#666',
                                            height: '42px',
                                            boxSizing: 'border-box'
                                        }}>
                                            +62
                                        </span>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="82134567890"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            pattern="[0-9]*"
                                            maxLength={20}
                                            style={{
                                                flex: '1',
                                                padding: '10px 12px',
                                                border: '1px solid #ddd',
                                                borderLeft: 'none',
                                                borderRadius: '0 8px 8px 0',
                                                fontSize: '0.95rem',
                                                boxSizing: 'border-box',
                                                height: '42px'
                                            }}
                                        />
                                    </div>
                                </div>

                                <div style={{ marginBottom: '16px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', color: '#666', fontWeight: '500' }}>
                                        Konfirmasi Nomor Handphone <span style={{ color: '#e74c3c' }}>*</span>
                                    </label>
                                    <div style={{ display: 'flex', alignItems: 'stretch' }}>
                                        <span style={{
                                            padding: '10px 12px',
                                            border: '1px solid #ddd',
                                            borderRight: 'none',
                                            borderRadius: '8px 0 0 8px',
                                            backgroundColor: '#f8f9fa',
                                            fontSize: '0.95rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontWeight: '500',
                                            color: '#666',
                                            height: '42px',
                                            boxSizing: 'border-box'
                                        }}>
                                            +62
                                        </span>
                                        <input
                                            type="tel"
                                            name="phoneConfirm"
                                            placeholder={formData.phone ? "Konfirmasi nomor" : "Isi no. handphone terlebih dahulu"}
                                            value={formData.phoneConfirm}
                                            onChange={handleChange}
                                            disabled={!formData.phone}
                                            required
                                            pattern="[0-9]*"
                                            maxLength={20}
                                            style={{
                                                flex: '1',
                                                padding: '10px 12px',
                                                border: '1px solid #ddd',
                                                borderLeft: 'none',
                                                borderRadius: '0 8px 8px 0',
                                                fontSize: '0.95rem',
                                                backgroundColor: !formData.phone ? '#f8f9fa' : 'white',
                                                boxSizing: 'border-box',
                                                height: '42px'
                                            }}
                                        />
                                    </div>
                                </div>

                                <div style={{ marginBottom: '16px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', color: '#666', fontWeight: '500' }}>
                                        Email <span style={{ color: '#e74c3c' }}>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="user@mail.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '10px 12px',
                                            border: '1px solid #ddd',
                                            borderRadius: '8px',
                                            fontSize: '0.95rem',
                                            boxSizing: 'border-box',
                                            height: '42px'
                                        }}
                                    />
                                </div>

                                <CustomDropdown
                                    label="Preferensi Waktu Kontak"
                                    value={formData.contactTime}
                                    onChange={(value) => setFormData(prev => ({ ...prev, contactTime: value }))}
                                    placeholder="Pilih waktu"
                                    required
                                    options={[
                                        { value: "Kapan Saja", label: "Kapan Saja" },
                                        { value: "Pagi", label: "Pagi" },
                                        { value: "Siang", label: "Siang" },
                                        { value: "Sore", label: "Sore" },
                                        { value: "Malam", label: "Malam" }
                                    ]}
                                />

                                <div style={{ marginBottom: '20px' }}>
                                    <div style={{
                                        padding: '12px',
                                        border: '1px solid #e8e8e8',
                                        borderRadius: '8px',
                                        backgroundColor: '#fafafa'
                                    }}>
                                        <label style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '10px',
                                            cursor: 'pointer',
                                            fontSize: '0.85rem',
                                            color: '#555',
                                            lineHeight: '1.4'
                                        }}>
                                            <input
                                                type="checkbox"
                                                name="tnc"
                                                checked={formData.tnc}
                                                onChange={handleChange}
                                                required
                                                style={{
                                                    marginTop: '2px',
                                                    width: '16px',
                                                    height: '16px',
                                                    accentColor: '#2b4593ff'
                                                }}
                                            />
                                            <span>
                                                Saya sudah baca dan setuju dengan{' '}
                                                <a
                                                    href="/data-privacy"
                                                    style={{
                                                        color: '#2b4593ff',
                                                        textDecoration: 'none',
                                                        fontWeight: '600'
                                                    }}
                                                    onMouseEnter={(e) => (e.target as HTMLElement).style.textDecoration = 'underline'}
                                                    onMouseLeave={(e) => (e.target as HTMLElement).style.textDecoration = 'none'}
                                                >
                                                    kebijakan data privasi
                                                </a>
                                                .
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    style={{
                                        width: '100%',
                                        padding: '14px 12px',
                                        backgroundColor: '#2b4593ff',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        boxShadow: '0 2px 4px rgba(43, 69, 147, 0.2)'
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.target as HTMLElement).style.backgroundColor = '#1e3a8a';
                                        (e.target as HTMLElement).style.boxShadow = '0 4px 8px rgba(43, 69, 147, 0.3)';
                                        (e.target as HTMLElement).style.transform = 'translateY(-1px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.target as HTMLElement).style.backgroundColor = '#2b4593ff';
                                        (e.target as HTMLElement).style.boxShadow = '0 2px 4px rgba(43, 69, 147, 0.2)';
                                        (e.target as HTMLElement).style.transform = 'translateY(0)';
                                    }}
                                >
                                    Kirim
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <NotificationTrail
                notification={notification}
                onClose={closeNotification}
            />
        </section>
    );
};

export default FreeTrail;