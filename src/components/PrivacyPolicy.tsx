const PrivacyPolicy: React.FC = () => {
    return (
        <section style={{
            padding: '80px 0',
            backgroundColor: 'white'
        }}>
            <div style={{maxWidth: '800px', margin: '0 auto', padding: '0 20px'}}>
                <h1 style={{
                    fontSize: '2.5rem',
                    textAlign: 'center',
                    marginBottom: '30px',
                    color: '#2b4593ff',
                    fontWeight: 'bold'
                }}>
                    Kebijakan Privasi
                </h1>

                <div style={{lineHeight: '1.8', color: '#666'}}>
                    <h2 style={{
                        fontSize: '1.5rem',
                        marginTop: '30px',
                        marginBottom: '15px',
                        color: '#2b4593ff'
                    }}>
                        1. Pengumpulan Informasi
                    </h2>
                    <p>
                        Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami, seperti nama, alamat email, nomor telepon, dan informasi kesehatan dasar yang diperlukan untuk memberikan layanan kebugaran yang aman dan efektif.
                    </p>

                    <h2 style={{
                        fontSize: '1.5rem',
                        marginTop: '30px',
                        marginBottom: '15px',
                        color: '#2b4593ff'
                    }}>
                        2. Penggunaan Informasi
                    </h2>
                    <p>
                        Informasi yang kami kumpulkan digunakan untuk:
                    </p>
                    <ul style={{marginLeft: '20px'}}>
                        <li>Menyediakan layanan membership dan kebugaran</li>
                        <li>Mengkomunikasikan informasi penting tentang gym</li>
                        <li>Meningkatkan pengalaman kebugaran Anda</li>
                        <li>Memastikan keamanan dan kenyamanan di fasilitas kami</li>
                    </ul>

                    <h2 style={{
                        fontSize: '1.5rem',
                        marginTop: '30px',
                        marginBottom: '15px',
                        color: '#2b4593ff'
                    }}>
                        3. Perlindungan Data
                    </h2>
                    <p>
                        Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi informasi pribadi Anda dari akses yang tidak sah, perubahan, pengungkapan, atau penghancuran.
                    </p>

                    <h2 style={{
                        fontSize: '1.5rem',
                        marginTop: '30px',
                        marginBottom: '15px',
                        color: '#2b4593ff'
                    }}>
                        4. Berbagi Informasi
                    </h2>
                    <p>
                        Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. Informasi hanya dibagikan jika diperlukan untuk memberikan layanan atau diwajibkan oleh hukum.
                    </p>

                    <h2 style={{
                        fontSize: '1.5rem',
                        marginTop: '30px',
                        marginBottom: '15px',
                        color: '#2b4593ff'
                    }}>
                        5. Hak Anda
                    </h2>
                    <p>
                        Anda memiliki hak untuk:
                    </p>
                    <ul style={{marginLeft: '20px'}}>
                        <li>Mengakses informasi pribadi yang kami simpan</li>
                        <li>Memperbaiki informasi yang tidak akurat</li>
                        <li>Meminta penghapusan informasi pribadi</li>
                        <li>Menolak atau membatasi pemrosesan data</li>
                    </ul>

                    <h2 style={{
                        fontSize: '1.5rem',
                        marginTop: '30px',
                        marginBottom: '15px',
                        color: '#2b4593ff'
                    }}>
                        6. Kontak Kami
                    </h2>
                    <p>
                        Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin menggunakan hak Anda terkait data pribadi, silakan hubungi kami di:
                    </p>
                    <p style={{marginTop: '10px'}}>
                        Email: privacy@fithza.id<br/>
                        Telepon: +62 812-3456-7890<br/>
                        Alamat: Jakarta, Indonesia
                    </p>

                    <p style={{
                        marginTop: '30px',
                        fontSize: '0.9rem',
                        color: '#999'
                    }}>
                        Kebijakan privasi ini terakhir diperbarui pada: Januari 2025
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
