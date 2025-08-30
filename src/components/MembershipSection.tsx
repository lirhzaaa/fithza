const MembershipSection: React.FC = () => {
    const packages = [
        {
            name: 'Basic',
            price: 'Rp 150.000',
            period: '/bulan',
            features: [
                'Akses ke semua fasilitas gym',
                'Locker room & shower',
                'Konsultasi kebugaran gratis',
                'Jam operasional normal'
            ],
            popular: false
        },
        {
            name: 'Premium',
            price: 'Rp 250.000',
            period: '/bulan',
            features: [
                'Semua benefit Basic',
                'Kelas group fitness unlimited',
                'Personal trainer 2x/bulan',
                'Protein shake gratis',
                'Makanan diet konsultasi'
            ],
            popular: true
        },
        {
            name: 'VIP',
            price: 'Rp 400.000',
            period: '/bulan',
            features: [
                'Semua benefit Premium',
                'Personal trainer unlimited',
                'Spa & massage 1x/bulan',
                'Suplemen kebugaran',
                'Nutrisi konsultasi mingguan',
                'Prioritas booking kelas'
            ],
            popular: false
        }
    ];

    return (
        <section style={{
            padding: '80px 0',
            backgroundColor: '#f8f9fa'
        }}>
            <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
                <h2 style={{
                    fontSize: '2.5rem',
                    textAlign: 'center',
                    marginBottom: '20px',
                    color: '#2b4593ff',
                    fontWeight: 'bold'
                }}>
                    Paket Membership
                </h2>
                <p style={{
                    textAlign: 'center',
                    marginBottom: '50px',
                    color: '#666',
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    margin: '0 auto 50px'
                }}>
                    Pilih paket membership yang sesuai dengan kebutuhan dan tujuan kebugaran Anda
                </p>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {packages.map((pkg, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            borderRadius: '15px',
                            padding: '30px',
                            boxShadow: pkg.popular ? '0 10px 30px rgba(255, 107, 53, 0.3)' : '0 4px 15px rgba(0,0,0,0.1)',
                            border: pkg.popular ? '2px solid #ff6b35' : '2px solid transparent',
                            position: 'relative',
                            transition: 'transform 0.3s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            {pkg.popular && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-10px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#ff6b35',
                                    color: 'white',
                                    padding: '5px 15px',
                                    borderRadius: '15px',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold'
                                }}>
                                    Paling Populer
                                </div>
                            )}
                            <h3 style={{
                                fontSize: '1.8rem',
                                marginBottom: '15px',
                                color: '#2b4593ff',
                                textAlign: 'center',
                                fontWeight: 'bold'
                            }}>
                                {pkg.name}
                            </h3>
                            <div style={{
                                textAlign: 'center',
                                marginBottom: '25px'
                            }}>
                                <span style={{
                                    fontSize: '2.5rem',
                                    fontWeight: 'bold',
                                    color: '#ff6b35'
                                }}>
                                    {pkg.price}
                                </span>
                                <span style={{
                                    color: '#666',
                                    fontSize: '1rem'
                                }}>
                                    {pkg.period}
                                </span>
                            </div>
                            <ul style={{listStyle: 'none', padding: 0}}>
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} style={{
                                        marginBottom: '10px',
                                        color: '#666',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <span style={{
                                            color: '#4CAF50',
                                            marginRight: '10px',
                                            fontSize: '1.2rem'
                                        }}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button style={{
                                width: '100%',
                                backgroundColor: pkg.popular ? '#ff6b35' : '#2b4593ff',
                                color: 'white',
                                border: 'none',
                                padding: '15px',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                marginTop: '20px',
                                transition: 'background-color 0.3s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = pkg.popular ? '#e55a2b' : '#1e3a8a'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = pkg.popular ? '#ff6b35' : '#2b4593ff'}
                            >
                                Pilih Paket
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MembershipSection;
