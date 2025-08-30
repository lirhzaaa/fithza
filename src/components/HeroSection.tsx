const HeroSection = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <section style={{
      position: 'relative',
      height: '60vh',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/background.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: isMobile ? '2.5rem' : '3.5rem',
        fontWeight: '700',
        textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
        margin: '0'
      }}>Tentang Kami</h1>
    </section>
  );
};

export default HeroSection;
