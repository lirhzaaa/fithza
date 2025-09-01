const WhyChooseSection: React.FC = () => {
    const reasons = [
        {
            icon: '🏆',
            title: 'Pengalaman 10+ Tahun',
            description: 'Lebih dari satu dekade melayani member dengan komitmen tinggi terhadap kualitas dan kepuasan.'
        },
        {
            icon: '👥',
            title: 'Komunitas Solid',
            description: 'Bergabung dengan komunitas kebugaran yang suportif dan termotivasi untuk mencapai tujuan bersama.'
        },
        {
            icon: '🔒',
            title: 'Keamanan Terjamin',
            description: 'Fasilitas dengan standar keamanan tinggi dan higiene yang terjaga untuk kenyamanan berolahraga.'
        },
        {
            icon: '🎯',
            title: 'Program Personal',
            description: 'Program latihan yang disesuaikan dengan kondisi fisik dan tujuan kebugaran masing-masing member.'
        },
        {
            icon: '⏱️',
            title: 'Fleksibilitas Waktu',
            description: 'Jam operasional yang panjang dan fleksibel untuk mengakomodasi jadwal sibuk Anda.'
        },
        {
            icon: '💰',
            title: 'Harga Terjangkau',
            description: 'Paket membership dengan harga kompetitif dan berbagai pilihan yang sesuai dengan budget Anda.'
        }
    ];

    return (
        <section style={{
            padding: '80px 0',
            backgroundColor: 'white'
        }}>
            <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
                <h2 style={{
                    fontSize: '2.5rem',
                    textAlign: 'center',
                    marginBottom: '20px',
                    color: '#2b4593ff',
                    fontWeight: 'bold'
                }}>
                    Kenapa Memilih FitHza Indonesia?
                </h2>
                <p style={{
                    textAlign: 'center',
                    marginBottom: '50px',
                    color: '#666',
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    margin: '0 auto 50px'
                }}>
                    Alasan kuat untuk memulai perjalanan kebugaran Anda bersama kami
                </p>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {reasons.map((reason, index) => (
                        <div key={index} style={{
                            backgroundColor: '#f8f9fa',
                            padding: '30px',
                            borderRadius: '15px',
                            textAlign: 'center',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            cursor: 'pointer',
                            border: '1px solid #e9ecef'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                        >
                            <div style={{
                                fontSize: '3rem',
                                marginBottom: '20px'
                            }}>
                                {reason.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                marginBottom: '15px',
                                color: '#2b4593ff',
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
