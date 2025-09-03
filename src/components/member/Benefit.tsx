const MemberBenefits = () => {
  const benefits = [
    {
      icon: "/id/id/-/media/project/evolution-wellness/fitness-first/indonesia/personal-training/icon/yoga_red-(1).png?extension=webp",
      title: "Bebas Akses Ke Semua Fasilitas Kami",
      description: "Postur yang baik dapat mengurangi beban tubuh, bikin gerak lebih bebas, dan tubuh terasa lebih segar."
    },
    {
      icon: "/id/id/-/media/project/evolution-wellness/fitness-first/shared/base/5-key-pillars-icon/mobility.svg?extension=webp",
      title: "Memiliki banyak Kelas Eksklusif",
      description: "Mobilitas yang baik membuat sendi dan otot bisa bergerak dengan efisien dalam rentang geraknya secara penuh."
    },
    {
      icon: "/id/id/-/media/project/evolution-wellness/fitness-first/shared/base/5-key-pillars-icon/core.svg?extension=webp",
      title: "Fasilitas Lengkap & Modern",
      description: "Otot core berperan di hampir setiap gerakan tubuh. Core yang kuat bantu jaga stabilitas, lindungi tulang belakang, dan bikin gerakan jadi lebih terkendali, lebih kuat, dan lebih efisien."
    },
    {
      icon: "/id/id/-/media/project/evolution-wellness/fitness-first/shared/base/5-key-pillars-icon/strength.svg?extension=webp",
      title: "Akses 24 Jam Setiap Hari",
      description: "Latihan kekuatan bantu tulang jadi lebih kuat, berat badan lebih terkontrol, dan aktivitas sehari-hari terasa lebih ringan."
    },
    {
      icon: "/id/id/-/media/project/evolution-wellness/fitness-first/shared/base/5-key-pillars-icon/cardio.svg?extension=webp",
      title: "Tersedia Personal Trainer Profesional",
      description: "Latihan kardio yang konsisten bikin stamina makin kuat dan daya tahan meningkat. Hasilnya? Bisa latihan lebih lama dan bakar lebih banyak kalori."
    },
    {
      icon: "/id/id/-/media/project/evolution-wellness/fitness-first/shared/base/5-key-pillars-icon/cardio.svg?extension=webp",
      title: "Tersedia Peminjaman Handuk Gratis",
      description: "Latihan kardio yang konsisten bikin stamina makin kuat dan daya tahan meningkat. Hasilnya? Bisa latihan lebih lama dan bakar lebih banyak kalori."
    }
  ];

  return (
    <section style={{
      padding: '80px 0',
      margin: 0,
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        maxWidth: '155vh',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'flex',
          gap: '60px',
          alignItems: 'flex-start',
          justifyContent: 'center',
          maxWidth: '100%'
        }}>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            style={{
              flex: '0 0 40%',
              maxWidth: '40%',
              textAlign: 'left'
            }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 700,
              color: '#333',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}>
              KEUNTUNGAN <span style={{
                color: '#4D55CC'
              }}>JOIN MEMBERSHIP</span>
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              fontWeight: 400,
              marginBottom: 0,
              lineHeight: '1.5'
            }}>
              Nikmati akses penuh ke semua fasilitas dan kelas eksklusif kami, serta dapatkan bimbingan dari pelatih profesional untuk mencapai tujuan kebugaran Anda.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            style={{
              flex: '0 0 50%',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: 'repeat(3, auto)',
              gap: '24px',
              maxWidth: '50%'
            }}>
            {benefits.map((benefit, index) => (
              <div
                data-aos="fade-up"
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
                }}
              >
                <img src={benefit.icon} alt={benefit.title} style={{
                  width: '48px',
                  height: '48px',
                  flexShrink: 0,
                }} />
                <div style={{
                  flex: 1,
                  paddingTop: 0,
                  textAlign: 'left',
                  width: '100%'
                }}>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#333',
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: '1.3'
                  }}>{benefit.title}</p>
                  <p style={{
                    fontSize: '0.9rem',
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

export default MemberBenefits;