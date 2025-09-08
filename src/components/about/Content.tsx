const AboutContent = () => {
    return (
        <>
            <div style={{
                width: '100%',
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px clamp(1rem, 5vw, 7rem) 0',
                gap: '40px',
                flexWrap: 'wrap',
            }}>
                <div
                    data-aos="zoom-out-up"
                    data-aos-duration="1000"
                    style={{ flex: '1 1 300px' }}>
                    <img src="./img/about/content1.jpg" alt="Tentang Fithza - Gym dan Fitness" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '5px' }} />
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    style={{ flex: '1 1 300px' }}>
                    <h1 style={{ fontSize: 'clamp(1.5rem, 6vw, 3rem)', marginBottom: '1rem', color: '#333' }}>Saatnya menjadi bagian Fithza Indonesia</h1>
                    <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '1.6', color: '#666', textAlign: 'justify' }}>
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
                padding: 'clamp(2rem, 5vw, 7rem) clamp(1rem, 5vw, 5rem)',
                gap: '40px',
                flexWrap: 'wrap',
            }}>
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    style={{ flex: '1 1 300px' }}>
                    <h1 style={{ fontSize: 'clamp(1.5rem, 6vw, 3rem)', marginBottom: '1rem', color: '#333' }}>Kunci Sukses Kami</h1>
                    <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '1.6', color: '#666', textAlign: 'justify' }}>
                        Kunci sukses Fithza Indonesia terletak pada komitmen kami terhadap inovasi, pelayanan prima, dan komunitas yang solid. Dengan instruktur berpengalaman dan fasilitas modern, kami memastikan setiap anggota mencapai potensi maksimal mereka dalam perjalanan menuju hidup sehat.
                    </p>
                </div>
                <div
                    data-aos="zoom-out-up"
                    data-aos-duration="1000"
                    style={{ flex: '1 1 300px' }}>
                    <img src="./img/about/content2.jpg" alt="Tentang Fithza - Gym dan Fitness" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '5px' }} />
                </div>
            </div>
        </>
    )
}

export default AboutContent;