const BannerClass: React.FC = () => {
    return (
        <section style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '4rem' }}>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundImage: 'url(/img/class-gym/banner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top' }}></div>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: '1' }}></div>
            <div style={{ position: 'relative', color: '#fff', textAlign: 'center', zIndex: '2', maxWidth: '850px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <h1 style={{ fontSize: '5rem', fontWeight: '500', marginBottom: '12px', color: '#ffffffff', lineHeight: '1.2' }}>KELAS FITHZA</h1>            </div>
        </section>
    );
};

export default BannerClass;