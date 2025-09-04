const Content = () => {
    return (
        <section style={{
            width: '100%',
            minHeight: '70vh',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '40px',
            padding: '20px 7rem 0',
        }}>
            <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{
                    flex: 1,
                    textAlign: 'left',
                    padding: '40px',
                    maxWidth: '600px',
                }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    marginBottom: '20px',
                    color: '#333',
                }}>Nge-gym lebih efektif bareng Personal Trainer!</h1>
                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    color: '#666',
                    textAlign: 'justify'
                }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorem, tempora, nisi quos suscipit porro possimus modi nihil architecto ratione minus hic quaerat alias! Quisquam reiciendis ipsum ipsa sequi molestias.</p>
            </div>
            <div
                data-aos="zoom-out-up"
                data-aos-duration="1000"
                style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <img src="/img/trainer/content.jpg" alt="Personal Trainer" style={{
                    width: '80%',
                    height: 'auto',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }} />
            </div>
        </section>
    )
}

export default Content;