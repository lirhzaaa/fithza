const PersonalTrainerSection: React.FC = () => {
    const trainers = [
        {
            name: 'Ahmad Rahman',
            specialty: 'Strength Training',
            experience: '8 tahun',
            image: '👨‍💼',
            description: 'Spesialis dalam pembentukan otot dan kekuatan fisik dengan metode latihan yang aman dan efektif.'
        },
        {
            name: 'Siti Nurhaliza',
            specialty: 'Cardio & Fitness',
            experience: '6 tahun',
            image: '👩‍💼',
            description: 'Ahli dalam program kardiovaskular dan kebugaran umum untuk kesehatan jantung yang optimal.'
        },
        {
            name: 'Budi Santoso',
            specialty: 'Weight Loss',
            experience: '7 tahun',
            image: '👨‍💼',
            description: 'Spesialis program penurunan berat badan dengan pendekatan nutrisi dan latihan terintegrasi.'
        },
        {
            name: 'Maya Sari',
            specialty: 'Yoga & Mind Body',
            experience: '5 tahun',
            image: '👩‍💼',
            description: 'Instruktur yoga profesional yang membantu mencapai keseimbangan antara tubuh dan pikiran.'
        }
    ];

    return (
        <section style={{
            padding: '80px 0',
            backgroundColor: '#f8f9fa'
        }}>
            <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
                <h2 style={{
                    fontSize: '2.5rem',
                    textAlign: 'center',
                    marginBottom: '20px',
                    color: '#2b4593ff',
                    fontWeight: 'bold'
                }}>
                    Personal Trainer Kami
                </h2>
                <p style={{
                    textAlign: 'center',
                    marginBottom: '50px',
                    color: '#666',
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    margin: '0 auto 50px'
                }}>
                    Tim trainer profesional siap membantu Anda mencapai tujuan kebugaran dengan pendekatan personal
                </p>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '30px'
                }}>
                    {trainers.map((trainer, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            borderRadius: '15px',
                            padding: '30px',
                            textAlign: 'center',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                fontSize: '4rem',
                                marginBottom: '20px'
                            }}>
                                {trainer.image}
                            </div>
                            <h3 style={{
                                fontSize: '1.5rem',
                                marginBottom: '10px',
                                color: '#2b4593ff',
                                fontWeight: 'bold'
                            }}>
                                {trainer.name}
                            </h3>
                            <p style={{
                                color: '#ff6b35',
                                fontWeight: 'bold',
                                marginBottom: '10px'
                            }}>
                                {trainer.specialty}
                            </p>
                            <p style={{
                                color: '#666',
                                marginBottom: '15px',
                                fontSize: '0.9rem'
                            }}>
                                Pengalaman: {trainer.experience}
                            </p>
                            <p style={{
                                color: '#666',
                                lineHeight: '1.6',
                                fontSize: '0.95rem'
                            }}>
                                {trainer.description}
                            </p>
                            <button style={{
                                backgroundColor: '#2b4593ff',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                marginTop: '15px',
                                transition: 'background-color 0.3s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1e3a8a'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2b4593ff'}
                            >
                                Hubungi Trainer
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PersonalTrainerSection;
