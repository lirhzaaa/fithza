const CTAClass = () => {
    return (
        <div style={{
            minHeight: '50vh',
            padding: '50px 50px',
        }}>
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 20px',
                backgroundColor: 'white',
                borderRadius: '15px',
                border: '2px solid #eee',
            }}>
                <div style={{
                    padding: '60px 20px',
                    textAlign: 'center',
                }}>
                    <div>
                        <h2
                            data-aos="fade-down"
                            data-aos-duration="700"
                            style={{
                                fontSize: '2.5rem',
                                marginBottom: '20px',
                                color: '#000'
                            }}
                        >
                            Siap Jadi Versi Terbaik Dirimu?
                        </h2>
                        <p
                            data-aos="fade-down"
                            data-aos-duration="700"
                            style={{
                                fontSize: '1.1rem',
                                marginBottom: '40px',
                                color: '#666'
                            }}
                        >
                            Yuk, mulai perjalanan sehatmu bersama FitHza Indonesia dan rasakan perubahannya!
                        </p>
                        <a
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            href="http://selfregist.ftlgym.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '12px 24px',
                                borderRadius: '10px',
                                backgroundColor: '#2b4593ff',
                                color: '#ffffffff',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                            }}
                        >
                            Daftar Sekarang
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTAClass;