const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#2b4593ff',
            color: 'white',
            padding: '40px 0',
            marginTop: 'auto'
        }}>
            <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
                    <div>
                        <h3 style={{marginBottom: '20px', fontSize: '1.5rem'}}>FitHza Indonesia</h3>
                        <p style={{lineHeight: '1.6', color: '#ccc'}}>
                            Gym premium dengan fasilitas lengkap dan pelatihan berkualitas untuk mencapai tujuan kebugaran Anda.
                        </p>
                        <div style={{display: 'flex', gap: '15px', marginTop: '20px'}}>
                            <a href="#" style={{color: '#ccc', textDecoration: 'none', fontSize: '1.2rem'}}>📘 Facebook</a>
                            <a href="#" style={{color: '#ccc', textDecoration: 'none', fontSize: '1.2rem'}}>📷 Instagram</a>
                            <a href="#" style={{color: '#ccc', textDecoration: 'none', fontSize: '1.2rem'}}>🐦 Twitter</a>
                        </div>
                    </div>
                    <div>
                        <h4 style={{marginBottom: '20px'}}>Layanan Kami</h4>
                        <ul style={{listStyle: 'none', padding: 0, color: '#ccc'}}>
                            <li style={{marginBottom: '10px'}}><a href="/membership" style={{color: '#ccc', textDecoration: 'none'}}>Membership</a></li>
                            <li style={{marginBottom: '10px'}}><a href="/personal-training" style={{color: '#ccc', textDecoration: 'none'}}>Personal Training</a></li>
                            <li style={{marginBottom: '10px'}}><a href="/classes" style={{color: '#ccc', textDecoration: 'none'}}>Classes</a></li>
                            <li style={{marginBottom: '10px'}}><a href="/about" style={{color: '#ccc', textDecoration: 'none'}}>Tentang Kami</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{marginBottom: '20px'}}>Informasi</h4>
                        <ul style={{listStyle: 'none', padding: 0, color: '#ccc'}}>
                            <li style={{marginBottom: '10px'}}><a href="/blog" style={{color: '#ccc', textDecoration: 'none'}}>Blog</a></li>
                            <li style={{marginBottom: '10px'}}><a href="/timetable" style={{color: '#ccc', textDecoration: 'none'}}>Jadwal Kelas</a></li>
                            <li style={{marginBottom: '10px'}}><a href="/clubs" style={{color: '#ccc', textDecoration: 'none'}}>Lokasi Gym</a></li>
                            <li style={{marginBottom: '10px'}}><a href="/contact" style={{color: '#ccc', textDecoration: 'none'}}>Kontak Kami</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{marginBottom: '20px'}}>Berlangganan Newsletter</h4>
                        <p style={{color: '#ccc', marginBottom: '15px'}}>Dapatkan berita terbaru dan penawaran khusus!</p>
                        <form style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                            <input type="email" placeholder="Email Anda" style={{padding: '10px', border: 'none', borderRadius: '4px'}} />
                            <button type="submit" style={{padding: '10px', backgroundColor: '#fff', color: '#2b4593ff', border: 'none', borderRadius: '4px', fontWeight: 'bold'}}>Berlangganan</button>
                        </form>
                    </div>
                </div>
                <div style={{
                    borderTop: '1px solid #444',
                    marginTop: '30px',
                    paddingTop: '20px',
                    textAlign: 'center',
                    color: '#ccc'
                }}>
                    <div style={{display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '10px'}}>
                        <a href="/privacy-policy" style={{color: '#ccc', textDecoration: 'none'}}>Kebijakan Privasi</a>
                        <a href="/terms" style={{color: '#ccc', textDecoration: 'none'}}>Syarat & Ketentuan</a>
                        <a href="/faq" style={{color: '#ccc', textDecoration: 'none'}}>FAQ</a>
                    </div>
                    <p>&copy; 2025 FitHza Indonesia. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
