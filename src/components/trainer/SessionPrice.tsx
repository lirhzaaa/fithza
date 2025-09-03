const SessionPrice = () => {
    const sessions = [
        { sessions: 4, discountedPrice: "Rp 1.155.000", originalPrice: "Rp 1.443.750", pricePerSession: "Rp 288.750" },
        { sessions: 8, discountedPrice: "Rp 2.072.700", originalPrice: "Rp 2.590.875", pricePerSession: "Rp 259.088" },
        { sessions: 16, discountedPrice: "Rp 3.582.000", originalPrice: "Rp 4.515.000", pricePerSession: "Rp 223.875" },
        { sessions: 24, discountedPrice: "Rp 5.040.000", originalPrice: "Rp 6.300.000", pricePerSession: "Rp 210.000" },
        { sessions: 36, discountedPrice: "Rp 6.804.000", originalPrice: "Rp 8.505.000", pricePerSession: "Rp 189.000" },
        { sessions: 48, discountedPrice: "Rp 8.316.000", originalPrice: "Rp 10.395.000", pricePerSession: "Rp 173.250" }
    ]

    return (
        <section style={{ padding: '40px 20px', backgroundColor: '#f9f9f9' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h1
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    style={{ fontSize: '3.2rem', fontWeight: 'bold', textAlign: 'left', marginBottom: '4rem', color: '#333', fontFamily: 'Arial, sans-serif' }}>Pilih sesi sesuai kebutuhanmu!</h1>
                <div
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(320px, 1fr))', gap: '20px', justifyItems: 'stretch' }}>
                    {sessions.map((session, index) => (
                        <div key={index} style={{ border: '1px solid #e0e0e0', borderRadius: '16px', padding: '18px', textAlign: 'left', boxShadow: '0 6px 12px rgba(0,0,0,0.1)', backgroundColor: '#fff', minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '15px' }}>
                                <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', margin: '0', color: '#0056b3', lineHeight: '1', fontFamily: 'Arial, sans-serif' }}>{session.sessions}</h1>
                                <h2 style={{ fontSize: '1.2rem', margin: '0 0 4px 0', color: '#555', lineHeight: '1', fontFamily: 'Arial, sans-serif' }}>Sesi</h2>
                            </div>
                            <h5 style={{ fontSize: '1.7rem', margin: '10px 0', color: '#2e8b57', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>Rp <span style={{ fontWeight: 'bold' }}>{session.discountedPrice.replace('Rp ', '')}</span></h5>
                            <h4 style={{ fontSize: '1.2rem', textDecoration: 'line-through', color: '#999', margin: '5px 0', fontFamily: 'Arial, sans-serif' }}>{session.originalPrice}</h4>
                            <div style={{ marginTop: '15px' }}>
                                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0', color: '#c0392b', fontFamily: 'Arial, sans-serif' }}>{session.pricePerSession}</h2>
                                <p style={{ fontSize: '1rem', margin: '5px 0', color: '#666', fontFamily: 'Arial, sans-serif' }}><span style={{ textDecoration: 'line-through' }}>Rp </span>/ Sesi</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SessionPrice;