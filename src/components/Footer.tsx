const Footer = () => {
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
                                    alt="FitHza Indonesia"
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
                                    FitHza Indonesia
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
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#2b4593ff" style={{ marginRight: '12px', marginTop: '2px', flexShrink: '0' }}>
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                    </svg>
                                    <span style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.4' }}>
                                        Jl. Pajajaran Raya No. 88, Bogor Tengah, Bogor 16121
                                    </span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '12px'
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#2b4593ff" style={{ marginRight: '12px', flexShrink: '0' }}>
                                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                                    </svg>
                                    <span style={{ color: '#4b5563', fontSize: '0.95rem' }}>
                                        +62 251 888 9999
                                    </span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#2b4593ff" style={{ marginRight: '12px', flexShrink: '0' }}>
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                    </svg>
                                    <span style={{ color: '#4b5563', fontSize: '0.95rem' }}>
                                        info@fithzaindonesia.com
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
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = '#f3f4f6';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#6b7280">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
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
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = '#f3f4f6';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#6b7280">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
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
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = '#f3f4f6';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#6b7280">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                    </svg>
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
                                        href="/personal-training"
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
                                        href="/classes"
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
                                        Trainer
                                    </a>
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    <a
                                        href="/contact"
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
                            © 2025 FitHza Indonesia. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
