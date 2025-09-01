const CTAClass: React.FC = () => {
    return (
        <div style={{ 
            minHeight: '50vh',
            backgroundColor: '#ffffffff',
            padding: '20px 10px',
         }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{ 
                    padding: '60px 20px', 
                    textAlign: 'center',
                }}>
                    <div>
                        <h2 
                            style={{ 
                                fontSize: '2.5rem', 
                                marginBottom: '20px', 
                                color: '#000' 
                            }}
                        >
                            Siap Jadi Versi Terbaik Dirimu?
                        </h2>
                        <p 
                            style={{ 
                                fontSize: '1.1rem', 
                                marginBottom: '40px', 
                                color: '#666' 
                            }}
                        >
                            Yuk, mulai perjalanan sehatmu bersama FitHza Indonesia dan rasakan perubahannya!
                        </p>
                        <a 
                            href="http://selfregist.ftlgym.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                                display: 'inline-block', 
                                padding: '12px 24px', 
                                borderRadius: '10px',
                                backgroundColor: '#2b4593ff', 
                                color: '#ffffffff', 
                                textDecoration: 'none', 
                                fontWeight: 'bold', 
                            }}
                        >
                            Daftar Sekarang
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTAClass;