const CardClass = () => {
    return (
        <div style={{ padding: 'clamp(3rem, 6vw, 3.75rem) 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1rem, 5vw, 1.25rem)' }}>
                <h2
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    style={{ textAlign: 'left', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', margin: '0 clamp(1rem, 5vw, 3.125rem) 10px', color: '#333' }}>Nikmati berbagai kelas favoritmu</h2>
                <p
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    style={{ textAlign: 'left', fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)', color: '#666', margin: '0 clamp(1rem, 5vw, 3.125rem) 40px', lineHeight: '1.6' }}>Tubuh makin FIT &amp; olahraga makin seru dengan kelas berkelompok. Akses ke 50+ variasi kelas ini sudah termasuk dalam paket membership, jadi kamu bebas memilih kelas semaumu.</p>
                <div
                    data-aos="zoom-out-up"
                    data-aos-duration="1000"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(1rem, 3vw, 1.25rem)', margin: '0 clamp(1rem, 5vw, 3.125rem)' }}>
                    <a style={{ position: 'relative', textDecoration: 'none', color: 'inherit', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', height: 'clamp(250px, 30vw, 300px)' }} href="/class/class-mind-body">
                        <div style={{ height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.8)', backgroundImage: 'url(/img/clas/Mind&Body.jpg)' }}></div>
                        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6))', color: 'white', padding: 'clamp(1rem, 3vw, 1.25rem)', textAlign: 'center' }}>
                            <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)', margin: '0', fontWeight: 'bold' }}>Mind &amp; Body Class</h2>
                        </div>
                    </a>
                    <a style={{ position: 'relative', textDecoration: 'none', color: 'inherit', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', height: 'clamp(250px, 30vw, 300px)' }} href="/class/class-cardio">
                        <div style={{ height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.8)', backgroundImage: 'url(/img/clas/Cardio.jpg)' }}></div>
                        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6))', color: 'white', padding: 'clamp(1rem, 3vw, 1.25rem)', textAlign: 'center' }}>
                            <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)', margin: '0', fontWeight: 'bold' }}>Cardio Class</h2>
                        </div>
                    </a>
                    <a style={{ position: 'relative', textDecoration: 'none', color: 'inherit', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', height: 'clamp(250px, 30vw, 300px)' }} href="/class/class-strength">
                        <div style={{ height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.8)', backgroundImage: 'url(/img/clas/Strength.jpg)' }}></div>
                        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6))', color: 'white', padding: 'clamp(1rem, 3vw, 1.25rem)', textAlign: 'center' }}>
                            <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)', margin: '0', fontWeight: 'bold' }}>Strength Class</h2>
                        </div>
                    </a>
                    <a style={{ position: 'relative', textDecoration: 'none', color: 'inherit', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', height: 'clamp(250px, 30vw, 300px)' }} href="/class/dance-class">
                        <div style={{ height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.8)', backgroundImage: 'url(/img/clas/Dance.jpg)' }}></div>
                        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6))', color: 'white', padding: 'clamp(1rem, 3vw, 1.25rem)', textAlign: 'center' }}>
                            <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)', margin: '0', fontWeight: 'bold' }}>Dance Class</h2>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CardClass;