import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    return (
        <section style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '4rem' }}>
            <video autoPlay muted loop style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}>
                <source src="./hero-home.mp4" type="video/mp4" />
            </video>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: '1' }}></div>
            <div style={{ position: 'relative', color: '#fff', textAlign: 'center', zIndex: '2', maxWidth: '850px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '0 20px' }}>
                <h1
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '500', marginBottom: '12px', color: '#ffffffff', lineHeight: '1.2' }}>Dari Bisa Olahraga</h1>
                <h1
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: '700', marginBottom: '12px', color: '#ffffffff', lineHeight: '1.2' }}>Jadi Biasa Olahraga</h1>
                <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', color: '#ffffffff', lineHeight: '1.4' }}>
                    Mulai Gaya Hidup Sehat Dengan Berbagai Olahraga Yang Bisa Kamu Lakukan Di FitHza Indonesia
                </p>
                <button
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    style={{ display: 'inline-block', marginTop: '10px', padding: '12px 32px', backgroundColor: '#2b4593ff', color: '#ffffff', fontWeight: 'bold', borderRadius: '7px', fontSize: 'clamp(1rem, 2vw, 1.2rem) ' }} onClick={() => navigate('/membership')}>
                    Gabung Sekarang
                </button>
            </div>
        </section>
    );
};

export default Banner;
