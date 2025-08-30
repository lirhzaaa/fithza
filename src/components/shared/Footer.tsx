const Footer: React.FC = () => {
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
                    </div>
                    <div>
                        <h4 style={{marginBottom: '20px'}}>Kontak Kami</h4>
                        <p style={{margin: '5px 0', color: '#ccc'}}>
                            📍 Jakarta, Indonesia<br/>
                            📞 +62 812-3456-7890<br/>
                            ✉️ info@fithza.id
                        </p>
                    </div>
                    <div>
                        <h4 style={{marginBottom: '20px'}}>Jam Operasional</h4>
                        <p style={{margin: '5px 0', color: '#ccc'}}>
                            Senin - Jumat: 06:00 - 22:00<br/>
                            Sabtu - Minggu: 08:00 - 20:00
                        </p>
                    </div>
                    <div>
                        <h4 style={{marginBottom: '20px'}}>Ikuti Kami</h4>
                        <div style={{display: 'flex', gap: '15px'}}>
                            <a href="#" style={{color: '#ccc', textDecoration: 'none', fontSize: '1.2rem'}}>📘 Facebook</a>
                            <a href="#" style={{color: '#ccc', textDecoration: 'none', fontSize: '1.2rem'}}>📷 Instagram</a>
                            <a href="#" style={{color: '#ccc', textDecoration: 'none', fontSize: '1.2rem'}}>🐦 Twitter</a>
                        </div>
                    </div>
                </div>
                <div style={{
                    borderTop: '1px solid #444',
                    marginTop: '30px',
                    paddingTop: '20px',
                    textAlign: 'center',
                    color: '#ccc'
                }}>
                    <p>&copy; 2025 FitHza Indonesia. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
