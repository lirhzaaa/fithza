import { useNavigate } from 'react-router-dom';

const MembershipSection = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div style={{
                backgroundColor: '#2b4593ff',
                justifyContent: "space-between",
                display: 'flex',
                flexDirection: window.innerWidth < 768 ? 'column' : 'row', // Responsif: column di mobile
                height: 'auto', // Ubah dari 50vh ke auto untuk responsivitas
                minHeight: '50vh',
                alignItems: 'center',
                padding: '2rem clamp(1rem, 5vw, 5rem)', // Responsif padding
                color: 'white',
            }}>
                <div style={{ flex: 1, marginBottom: window.innerWidth < 768 ? '2rem' : '0' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        fontWeight: '700',
                    }}>Membership mulai dari Rp149.000/bulan</h2>
                </div>
                <div style={{
                    flex: 1,
                }}>
                    <p style={{
                        margin: '15px 0 30px 0',
                        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                    }}>Bebas olahraga di semua klub dengan fasilitas premium dan akses kelas FIT HUB sepuasnya</p>
                    <button style={{
                        backgroundColor: '#eef2ffff',
                        padding: '12px 15px',
                        color: '#2b4593ff',
                        fontWeight: '700',
                        borderRadius: '7px',
                        fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                    }}
                        onClick={() => navigate('/membership')}
                    >Lihat Paket Membership</button>
                </div>
            </div>
        </div>
    )
}

export default MembershipSection;