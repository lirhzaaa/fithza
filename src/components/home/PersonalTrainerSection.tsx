import { useNavigate } from "react-router-dom";

const BannerClass = () => {
    const navigate = useNavigate();
    return (
        <section style={{ position: 'relative', width: '100%', height: 'clamp(400px, 70vh, 500px)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '0 clamp(1rem, 5vw, 5rem)' }}>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundImage: 'url(/img/class-gym/banner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top' }}></div>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: '1' }}></div>
            <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ position: 'relative', color: '#fff', textAlign: 'left', zIndex: '2', maxWidth: '750px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '100%' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: '700', marginBottom: '0px', color: '#ffffffff' }}>PROGRES MENJADI PRIBADI</h1>
                <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1rem)', color: '#ffffffff', textShadow: '0 1px 4px rgba(0,0,0,0.18)' }}>
                    Fokusnya adalah pada Anda. Dapatkan pelatihan pribadi dari salah satu Pelatih Kebugaran Bersertifikat kami.
                    Lacak kemajuan Anda dan rayakan hasilnya.
                </p>
                <button style={{
                    color: 'white',
                    padding: '10px 30px',
                    backgroundColor: '#2b4593ff',
                    borderRadius: '5px',
                    fontWeight: '700',
                    fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                }} onClick={() => navigate('/trainer')}>Pelatihan Pribadi
                </button>
            </div>
        </section>
    );
};

export default BannerClass;