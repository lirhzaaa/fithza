const AboutContent = () => {
    return (
        <>
            <div style={{
                width: '100%',
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 7rem 0',
                gap: '40px',
            }}>
                <div
                    data-aos="zoom-out-up"
                    data-aos-duration="1000"
                    style={{ flex: 1 }}>
                    <img src="./img/about.jpg" alt="Tentang Fithza - Gym dan Fitness" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    style={{ flex: 1 }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>Saatnya menjadi bagian Fithza Indonesia</h1>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#666', textAlign: 'justify' }}>
                        Bergabunglah dengan Fithza Indonesia dan jadilah bagian dari komunitas gym terdepan di Indonesia. Kami menawarkan program latihan yang dirancang khusus untuk membantu Anda mencapai tujuan kesehatan dan kebugaran dengan cara yang menyenangkan dan efektif.
                    </p>
                </div>
            </div>
            <div style={{
                width: '100%',
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '7rem 7rem 7rem 5rem',
                gap: '40px',
            }}>
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    style={{ flex: 1 }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>Kunci Sukses Kami</h1>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#666', textAlign: 'justify' }}>
                        Kunci sukses Fithza Indonesia terletak pada komitmen kami terhadap inovasi, pelayanan prima, dan komunitas yang solid. Dengan instruktur berpengalaman dan fasilitas modern, kami memastikan setiap anggota mencapai potensi maksimal mereka dalam perjalanan menuju hidup sehat.
                    </p>
                </div>
                <div
                    data-aos="zoom-out-up"
                    data-aos-duration="1000"
                    style={{ flex: 1 }}>
                    <img src="./img/about.jpg" alt="Tentang Fithza - Gym dan Fitness" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                </div>
            </div>
        </>
    )
}

export default AboutContent;