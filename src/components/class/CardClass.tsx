import type { CSSProperties } from 'react';

const CardClass: React.FC = () => {
    const styles: { [key: string]: CSSProperties } = {
        section: { padding: '60px 0', backgroundColor: '#f9f9f9' },
        container: { maxWidth: '1400px', margin: '0 auto', padding: '0 20px' },
        h2: { textAlign: 'left', fontSize: '2.5rem', marginBottom: '20px', color: '#333' },
        subtitle: { textAlign: 'left', fontSize: '1.1rem', color: '#666', marginBottom: '40px', lineHeight: '1.6' },
        classCategoryWrapper: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' },
        cardCategoryWrapper: { position: 'relative', textDecoration: 'none', color: 'inherit', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', height: '300px' },
        cardBgCategory: { height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.8)' },
        cardCategoryContent: { position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6))', color: 'white', padding: '20px', textAlign: 'center' },
        cardCategoryName: { fontSize: '1.4rem', margin: '0', fontWeight: 'bold' }
    };

    return (
        <div style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.h2}>Nikmati berbagai kelas favoritmu</h2>
                <p style={styles.subtitle}>Tubuh makin FIT &amp; olahraga makin seru dengan kelas berkelompok. Akses ke 50+ variasi kelas ini sudah termasuk dalam paket membership, jadi kamu bebas memilih kelas semaumu.</p>
                <div style={styles.classCategoryWrapper}>
                    <a style={styles.cardCategoryWrapper} href="/class/class-mind-body">
                        <div style={{ ...styles.cardBgCategory, backgroundImage: 'url(https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/Mind_and_Body_Hatha_Yoga_c9bc329096.JPG)' }}></div>
                        <div style={styles.cardCategoryContent}>
                            <h2 style={styles.cardCategoryName}>Mind &amp; Body Class</h2>
                        </div>
                    </a>
                    <a style={styles.cardCategoryWrapper} href="/class/class-cardio">
                        <div style={{ ...styles.cardBgCategory, backgroundImage: 'url(https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/BODYCOMBAT_2089700eff.JPG)' }}></div>
                        <div style={styles.cardCategoryContent}>
                            <h2 style={styles.cardCategoryName}>Cardio Class</h2>
                        </div>
                    </a>
                    <a style={styles.cardCategoryWrapper} href="/class/class-strength">
                        <div style={{ ...styles.cardBgCategory, backgroundImage: 'url(https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/BOOTCAMP_afcff062bc.JPG)' }}></div>
                        <div style={styles.cardCategoryContent}>
                            <h2 style={styles.cardCategoryName}>Strength Class</h2>
                        </div>
                    </a>
                    <a style={styles.cardCategoryWrapper} href="/class/dance-class">
                        <div style={{ ...styles.cardBgCategory, backgroundImage: 'url(https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/K_POP_DANCE_8511b475b2.JPG)' }}></div>
                        <div style={styles.cardCategoryContent}>
                            <h2 style={styles.cardCategoryName}>Dance Class</h2>
                        </div>
                    </a>
                    <a style={styles.cardCategoryWrapper} href="/class/class-cycling">
                        <div style={{ ...styles.cardBgCategory, backgroundImage: 'url(https://photo-fhad-fithub.s3.ap-southeast-1.amazonaws.com/CYCLING_CLASS_123456789.JPG)' }}></div>
                        <div style={styles.cardCategoryContent}>
                            <h2 style={styles.cardCategoryName}>Cycling Class</h2>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CardClass;