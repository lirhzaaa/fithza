const Banner = () => {
    return (
        <section style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '4rem' }}>
            <video autoPlay muted loop style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}>
                <source src="./hero-home.mp4" type="video/mp4" />
            </video>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: '1' }}></div>
            <div style={{ position: 'relative', color: '#fff', textAlign: 'center', zIndex: '2', maxWidth: '850px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: '500', marginBottom: '12px', color: '#ffffffff', lineHeight: '1.2' }}>Dari Bisa Olahraga</h1>
                <h1 style={{ fontSize: '4rem', fontWeight: '700', marginBottom: '12px', color: '#ffffffff', lineHeight: '1.2' }}>Jadi Biasa Olahraga</h1>
                <p style={{ fontSize: '1.5rem', color: '#ffffffff', textShadow: '0 1px 4px rgba(0,0,0,0.18)', lineHeight: '1.4' }}>
                    Mulai Gaya Hidup Sehat Dengan Berbagai Olahraga Yang Bisa Kamu Lakukan Di FitHza Indonesia
                </p>
                <a href="#" style={{ display: 'inline-block', marginTop: '10px', padding: '12px 32px', background: '#2b4593ff', color: '#ffffff', fontWeight: 'bold', borderRadius: '6px' }}>
                    Gabung Sekarang
                </a>
            </div>
        </section>
    );
};

export default Banner;
