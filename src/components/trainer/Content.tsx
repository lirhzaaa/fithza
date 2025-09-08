const Content = () => {
    return (
        <section style={{
            width: '100%',
            minHeight: '70vh',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '40px',
            padding: '20px clamp(1rem, 5vw, 7rem) 0',
            flexWrap: 'wrap',
        }}>
            <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{
                    flex: '1 1 300px',
                    textAlign: 'left',
                    padding: '40px',
                    maxWidth: '600px',
                }}>
                <h1 style={{
                    fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                    marginBottom: '20px',
                    color: '#333',
                }}>Nge-gym lebih efektif bareng Personal Trainer!</h1>
                <p style={{
                    fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
                    lineHeight: '1.6',
                    color: '#666',
                    textAlign: 'justify'
                }}>Dengan bantuan Personal Trainer, Anda dapat mencapai tujuan kebugaran Anda lebih cepat dan aman. Mereka akan merancang program latihan yang disesuaikan dengan kebutuhan Anda, memotivasi Anda selama sesi, dan memastikan teknik latihan yang benar untuk menghindari cedera.</p>
            </div>
            <div
                data-aos="zoom-out-up"
                data-aos-duration="1000"
                style={{
                    flex: '1 1 300px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <img src="/img/trainer/content.jpg" alt="Personal Trainer" style={{
                    width: '100%',
                    maxWidth: '400px',
                    height: 'auto',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }} />
            </div>
        </section>
    )
}

export default Content;