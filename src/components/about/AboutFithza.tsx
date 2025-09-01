import React from 'react';

const AboutFithza = () => {
    return (
        <section style={{
            width: '100%',
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'blue',
            padding: '40px 20px'
        }}>
            <div style={{
                textAlign: 'center',
                maxWidth: '70rem',
                animation: 'fadeIn 1s ease-in-out'
            }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    marginBottom: '40px',
                    lineHeight: '1.2',
                }}>
                    Mari Berkenalan Dengan Fithza Indonesia
                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.6',
                    margin: '0 auto'
                }}>
                    Fithza Indonesia adalah pusat kebugaran terdepan yang berkomitmen untuk membantu Anda mencapai gaya hidup sehat dan aktif. Dengan fasilitas modern, pelatih profesional, dan komunitas yang mendukung, kami siap menjadi mitra perjalanan kebugaran Anda menuju versi terbaik diri. Kami menawarkan berbagai kelas kebugaran seperti yoga, pilates, kardio, dan latihan kekuatan yang disesuaikan dengan tingkat kebugaran Anda. Tim pelatih kami yang berpengalaman akan memandu Anda melalui setiap sesi, memastikan keselamatan dan efektivitas latihan. Bergabunglah dengan komunitas kami dan rasakan perubahan positif dalam hidup Anda, baik secara fisik maupun mental. Fithza Indonesia bukan hanya tempat olahraga, tetapi juga rumah bagi mereka yang ingin hidup lebih sehat dan bahagia.
                </p>
            </div>
        </section>
    );
};

export default AboutFithza;