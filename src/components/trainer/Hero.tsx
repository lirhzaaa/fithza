const HeroSection = () => {
    return (
        <section style={{ position: 'relative', width: '100%', height: '70vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '4rem' }}>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundImage: 'url(/img/trainer/banner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: '1' }}></div>
            <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ color: '#fff', textAlign: 'left', zIndex: '2', maxWidth: '700px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '100%', paddingLeft: 'clamp(2rem, 10vw, 7rem)', paddingRight: '2rem' }}>
                <p style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', fontWeight: '700', color: '#ffffffff', marginBottom: '0px' }}>PERSONAL TRAINING</p>
                <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', fontWeight: '700', marginBottom: '0px', marginTop: '0px', color: '#ffffffff', lineHeight: '1.2' }}>LATIHAN AMAN DENGAN HASIL MAKSIMAL</h1>
                <p style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)', color: '#ffffffff', textShadow: '0 1px 4px rgba(0,0,0,0.18)', lineHeight: '1.4' }}>
                    Maksimalkan potensi Anda dengan bantuan program latihan dari Tim Personal Trainer kami.
                </p>
            </div>
        </section>
    )
}

export default HeroSection;