import { Link } from "react-router-dom";

const CardHome = () => {
    const cards = [
        {
            title: "Tentang Kami",
            description: "Pelajari lebih lanjut tentang gym kami dan misi kami.",
            link: "/about",
            image: "/img/home-card/about.jpg"
        },
        {
            title: "Personal Trainer",
            description: "Temukan trainer pribadi yang sesuai dengan kebutuhan Anda.",
            link: "/trainer",
            image: "/img/home-card/trainer.jpg"
        },
        {
            title: "Kelas",
            description: "Jelajahi berbagai kelas yang tersedia di gym kami.",
            link: "/class",
            image: "/img/home-card/class.jpg"
        }
    ];

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{
                margin: 'clamp(3rem, 6vw, 3.75rem) 0',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 'clamp(1.5rem, 3vw, 1.875rem)',
                padding: '0 clamp(1rem, 5vw, 1.25rem)',
            }}>
            {cards.map((card, index) => (
                <Link key={index} to={card.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{
                        width: 'clamp(280px, 30vw, 350px)',
                        height: 'clamp(250px, 25vw, 300px)',
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: 'clamp(1rem, 3vw, 1.25rem)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        transition: 'transform 0.5s',
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <h3 style={{ margin: '0 0 clamp(0.5rem, 1.5vw, 0.625rem) 0', color: '#fff', textShadow: '1px 1px 2px rgba(0,0,0,0.7)', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>{card.title}</h3>
                        <p style={{ margin: '0', color: '#fff', textShadow: '1px 1px 2px rgba(0,0,0,0.7)', fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>{card.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CardHome;