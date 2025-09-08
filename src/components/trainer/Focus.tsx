const TrainerBenefits = () => {
  const benefits = [
    {
      title: "POSTURE",
      description: "Postur yang baik dapat mengurangi beban tubuh, bikin gerak lebih bebas, dan tubuh terasa lebih segar."
    },
    {
      title: "MOBILITY",
      description: "Mobilitas yang baik membuat sendi dan otot bisa bergerak dengan efisien dalam rentang geraknya secara penuh."
    },
    {
      title: "CORE",
      description: "Otot core berperan di hampir setiap gerakan tubuh. Core yang kuat bantu jaga stabilitas, lindungi tulang belakang, dan bikin gerakan jadi lebih terkendali, lebih kuat, dan lebih efisien."
    },
    {
      title: "STRENGTH",
      description: "Latihan kekuatan bantu tulang jadi lebih kuat, berat badan lebih terkontrol, dan aktivitas sehari-hari terasa lebih ringan."
    },
    {
      title: "CARDIO",
      description: "Latihan kardio yang konsisten bikin stamina makin kuat dan daya tahan meningkat. Hasilnya? Bisa latihan lebih lama dan bakar lebih banyak kalori."
    }
  ];

  return (
    <section style={{
      padding: 'clamp(4rem, 8vw, 5rem) 0',
      margin: 0,
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 clamp(1rem, 5vw, 2rem)',
      }}>
        <div style={{
          display: 'flex',
          gap: 'clamp(2rem, 5vw, 3.75rem)',
          alignItems: 'flex-start',
          justifyContent: 'center',
          maxWidth: '100%',
          flexWrap: 'wrap'
        }}>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            style={{
              flex: '1 1 300px',
              maxWidth: '500px',
              textAlign: 'left'
            }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 6vw, 3.2rem)',
              fontWeight: 700,
              color: '#333',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}>
              5 Fokus Utama Personal Trainer Kami
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              color: '#666',
              fontWeight: 400,
              marginBottom: 0,
              lineHeight: '1.5'
            }}>
              Pelajari fokus utama yang menjadi prioritas personal trainer kami dalam membantu Anda mencapai tujuan fitness.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            style={{
              flex: '1 1 300px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              justifyContent: 'center'
            }}>
            {benefits.map((benefit, index) => (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '20px 16px',
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  minHeight: '150px',
                  textAlign: 'left',
                  flex: '1 1 250px',
                  maxWidth: '300px'
                }}
              >
                <div style={{
                  flex: 1,
                  paddingTop: 0,
                  textAlign: 'left',
                  width: '100%'
                }}>
                  <p style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                    color: '#333',
                    fontWeight: 700,
                    margin: 0,
                    lineHeight: '1.3'
                  }}>{benefit.title}</p>
                  <p style={{
                    fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                    color: '#666',
                    fontWeight: 400,
                    margin: '8px 0 0 0',
                    lineHeight: '1.4'
                  }}>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerBenefits;
