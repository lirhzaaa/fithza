import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const [facebookColor, setFacebookColor] = useState('#6b7280');
    const [instagramColor, setInstagramColor] = useState('#6b7280');
    const [twitterColor, setTwitterColor] = useState('#6b7280');
    return (
        <footer style={{
            backgroundColor: '#ffffff',
            borderTop: '1px solid #e5e7eb',
            marginTop: 'auto'
        }}>
            <div style={{
                padding: '60px 20px 40px 20px'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '40px',
                        marginBottom: '40px'
                    }}>

                        <div style={{ gridColumn: 'span 1' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '20px'
                            }}>
                                <img
                                    src="/logo.png"
                                    alt="Fithza Indonesia"
                                    style={{
                                        height: '45px',
                                        marginRight: '12px'
                                    }}
                                />
                                <h2 style={{
                                    fontSize: '1.8rem',
                                    margin: '0',
                                    color: '#1f2937',
                                    fontWeight: '700'
                                }}>
                                    Fithza Indonesia
                                </h2>
                            </div>
                            <p style={{
                                color: '#6b7280',
                                lineHeight: '1.6',
                                marginBottom: '25px',
                                fontSize: '1rem'
                            }}>
                                Gym premium dengan fasilitas lengkap dan pelatihan berkualitas untuk mencapai
                                tujuan kebugaran Anda. Bergabunglah dengan komunitas fitness terbaik di Indonesia.
                            </p>

                            <div style={{ marginBottom: '25px' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    marginBottom: '12px'
                                }}>
                                    <FontAwesomeIcon icon={faLocationDot} style={{ color: '#2b4593ff', marginRight: '12px', marginTop: '2px', flexShrink: '0' }} />
                                    <span style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.4' }}>
                                        Bogor, Indonesia
                                    </span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '12px'
                                }}>
                                    <FontAwesomeIcon icon={faPhone} style={{ color: '#2b4593ff', marginRight: '12px', flexShrink: '0' }} />
                                    <span style={{ color: '#4b5563', fontSize: '0.95rem' }}>
                                        +62 838 XXX XXX
                                    </span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <FontAwesomeIcon icon={faEnvelope} style={{ color: '#2b4593ff', marginRight: '12px', flexShrink: '0' }} />
                                    <span style={{ color: '#4b5563', fontSize: '0.95rem' }}>
                                        mazhrilnurmaulidan@gmail.com
                                    </span>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '12px' }}>
                                <a
                                    href="#"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: '#f3f4f6',
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease',
                                        border: '1px solid #e5e7eb'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.backgroundColor = '#2b4593ff';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(43, 69, 147, 0.15)';
                                        setFacebookColor('white');
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = '#f3f4f6';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        setFacebookColor('#6b7280');
                                    }}
                                >
                                    <FontAwesomeIcon icon={faFacebook} style={{ color: facebookColor }} />
                                </a>
                                <a
                                    href="#"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: '#f3f4f6',
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease',
                                        border: '1px solid #e5e7eb'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.backgroundColor = '#2b4593ff';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(43, 69, 147, 0.15)';
                                        setInstagramColor('white');
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = '#f3f4f6';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        setInstagramColor('#6b7280');
                                    }}
                                >
                                    <FontAwesomeIcon icon={faInstagram} style={{ color: instagramColor }} />
                                </a>
                                <a
                                    href="#"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: '#f3f4f6',
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease',
                                        border: '1px solid #e5e7eb'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.backgroundColor = '#2b4593ff';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(43, 69, 147, 0.15)';
                                        setTwitterColor('white');
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = '#f3f4f6';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        setTwitterColor('#6b7280');
                                    }}
                                >
                                    <FontAwesomeIcon icon={faTwitter} style={{ color: twitterColor }} />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 style={{
                                fontSize: '1.25rem',
                                marginBottom: '20px',
                                color: '#1f2937',
                                fontWeight: '600',
                                position: 'relative'
                            }}>
                                Layanan Kami
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-5px',
                                    left: '0',
                                    width: '30px',
                                    height: '2px',
                                    backgroundColor: '#2b4593ff'
                                }}></div>
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: '0',
                                margin: '0'
                            }}>
                                <li style={{ marginBottom: '10px' }}>
                                    <a
                                        href="/membership"
                                        style={{
                                            color: '#4b5563',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            fontSize: '0.95rem',
                                            display: 'inline-block',
                                            padding: '4px 0'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.color = '#2b4593ff';
                                            e.currentTarget.style.transform = 'translateX(5px)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.color = '#4b5563';
                                            e.currentTarget.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        Membership
                                    </a>
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    <a
                                        href="/trainer"
                                        style={{
                                            color: '#4b5563',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            fontSize: '0.95rem',
                                            display: 'inline-block',
                                            padding: '4px 0'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.color = '#2b4593ff';
                                            e.currentTarget.style.transform = 'translateX(5px)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.color = '#4b5563';
                                            e.currentTarget.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        Personal Training
                                    </a>
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    <a
                                        href="/class"
                                        style={{
                                            color: '#4b5563',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            fontSize: '0.95rem',
                                            display: 'inline-block',
                                            padding: '4px 0'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.color = '#2b4593ff';
                                            e.currentTarget.style.transform = 'translateX(5px)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.color = '#4b5563';
                                            e.currentTarget.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        Classes
                                    </a>
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    <a
                                        href="/about"
                                        style={{
                                            color: '#4b5563',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            fontSize: '0.95rem',
                                            display: 'inline-block',
                                            padding: '4px 0'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.color = '#2b4593ff';
                                            e.currentTarget.style.transform = 'translateX(5px)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.color = '#4b5563';
                                            e.currentTarget.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        Tentang Kami
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 style={{
                                fontSize: '1.25rem',
                                marginBottom: '20px',
                                color: '#1f2937',
                                fontWeight: '600',
                                position: 'relative'
                            }}>
                                Tautan Cepat
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-5px',
                                    left: '0',
                                    width: '30px',
                                    height: '2px',
                                    backgroundColor: '#2b4593ff'
                                }}></div>
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: '0',
                                margin: '0'
                            }}>
                                <li style={{ marginBottom: '10px' }}>
                                    <a
                                        href="/"
                                        style={{
                                            color: '#4b5563',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            fontSize: '0.95rem',
                                            display: 'inline-block',
                                            padding: '4px 0'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.color = '#2b4593ff';
                                            e.currentTarget.style.transform = 'translateX(5px)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.color = '#4b5563';
                                            e.currentTarget.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        Beranda
                                    </a>
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    <a
                                        href="/free-trail"
                                        style={{
                                            color: '#4b5563',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            fontSize: '0.95rem',
                                            display: 'inline-block',
                                            padding: '4px 0'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.color = '#2b4593ff';
                                            e.currentTarget.style.transform = 'translateX(5px)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.color = '#4b5563';
                                            e.currentTarget.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        Free Trail
                                    </a>
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    <a
                                        href="/"
                                        style={{
                                            color: '#4b5563',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            fontSize: '0.95rem',
                                            display: 'inline-block',
                                            padding: '4px 0'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.color = '#2b4593ff';
                                            e.currentTarget.style.transform = 'translateX(5px)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.color = '#4b5563';
                                            e.currentTarget.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        Kontak
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                padding: '20px 20px',
                backgroundColor: '#f9fafb',
                borderTop: '1px solid #e5e7eb'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <p style={{
                            color: '#6b7280',
                            fontSize: '0.875rem',
                            margin: '0',
                            textAlign: 'center'
                        }}>
                            © 2025 Fithza Indonesia. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
