type Reason = {
    title: string;
    description: string;
}

const WhyChooseSection = () => {
    const reasons: Reason[] = [

        {
            title: 'Tersedia Peminjaman Handuk Gratis',
            description: 'Manfaatkan layanan peminjaman handuk gratis untuk kenyamanan selama berolahraga.'
        },
        {
            title: 'Bebas Akses ke Semua Club FTL',
            description: 'Nikmati akses bebas ke semua cabang FitHza di seluruh Indonesia tanpa biaya tambahan.'
        },
        {
            title: 'Kelas Terbesar & Terlengkap di Indonesia',
            description: 'Ikuti kelas kebugaran terbesar dan terlengkap dengan instruktur profesional di berbagai disiplin.'
        },
        {
            title: 'Harga Terjangkau',
            description: 'Paket membership dengan harga kompetitif dan berbagai pilihan yang sesuai dengan budget Anda.'
        },
        {
            title: 'Akses 24 Jam Setiap Hari',
            description: 'Latih kapan saja dengan akses 24 jam ke fasilitas gym setiap hari tanpa batasan waktu.'
        },
        {
            title: 'Fasilitas Terlengkap',
            description: 'Dapatkan pengalaman kebugaran maksimal dengan fasilitas lengkap mulai dari peralatan hingga sauna.'
        },
        {
            title: 'Keamanan Terjamin',
            description: 'Fasilitas dengan standar keamanan tinggi dan higiene yang terjaga untuk kenyamanan berolahraga.'
        }
    ];

    const reasonsTop = reasons.slice(0, 3);
    const reasonsBottom = reasons.slice(3);

    return (
        <section
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{
                padding: '5px 0 50PX',
                backgroundColor: 'white'
            }}>
            <div style={{ maxWidth: '100%', margin: '0 6rem', padding: '0 20px' }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    textAlign: 'center',
                    marginBottom: '20px',
                    color: '#333',
                    fontWeight: 'bold'
                }}>
                    Kenapa FitHza Indonesia Terbaik Untuk Kamu?
                </h2>
                <p style={{
                    textAlign: 'center',
                    marginBottom: '50px',
                    color: '#666',
                    fontSize: '1.1rem',
                    margin: '0 auto 25px'
                }}>
                    Alasan kuat untuk memulai perjalanan kebugaran Anda bersama kami
                </p>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '30px',
                    marginBottom: '20px'
                }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    {reasonsTop.map((reason, index) => (
                        <div key={index} style={{
                            backgroundColor: '#eaeef2ff',
                            padding: '20px',
                            borderRadius: '15px',
                            textAlign: 'left',
                            cursor: 'pointer',
                            border: '1px solid #e9ecef'
                        }}
                        >
                            <h3 style={{
                                fontSize: '1.8rem',
                                marginBottom: '10px',
                                color: '#333',
                                fontWeight: 'bold'
                            }}>
                                {reason.title}
                            </h3>
                            <p style={{
                                color: '#666',
                                lineHeight: '1.6'
                            }}>
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '30px'
                }}
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    {reasonsBottom.map((reason, index) => (
                        <div key={index} style={{
                            backgroundColor: '#eaeef2ff',
                            padding: '20px',
                            borderRadius: '15px',
                            textAlign: 'left',
                            cursor: 'pointer',
                            border: '1px solid #e9ecef'
                        }}
                        >
                            <h3 style={{
                                fontSize: '1.8rem',
                                marginBottom: '10px',
                                color: '#333',
                                fontWeight: 'bold'
                            }}>
                                {reason.title}
                            </h3>
                            <p style={{
                                color: '#666',
                                lineHeight: '1.6'
                            }}>
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
