const AboutHero = () => {
    return (
        <section style={{ position: 'relative', width: '100%', height: '70vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '4rem' }}>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundImage: 'url(/img/about.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: '1' }}></div>
            <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ color: '#fff', textAlign: 'left', zIndex: '2', maxWidth: '700px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '100%', paddingLeft: '7rem' }}>
                <p style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffffff', marginBottom: '0px' }}>TENTANG KAMI</p>
                <h1 style={{ fontSize: '4rem', fontWeight: '700', marginBottom: '0px', marginTop: '0px', color: '#ffffffff', lineHeight: '1.2' }}>JADILAH BAGIAN DARI KAMI</h1>
                <p style={{ fontSize: '1rem', color: '#ffffffff', textShadow: '0 1px 4px rgba(0,0,0,0.18)', lineHeight: '1.4' }}>
                    Kami mencari orang-orang yang dinamis dan bersemangat untuk bergabung dengan tim kami yang terus berkembang.
                </p>
            </div>
        </section>
    );
};

export default AboutHero;