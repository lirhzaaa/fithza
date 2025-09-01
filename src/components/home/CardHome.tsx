import { Link } from "react-router-dom";

const CardHome: React.FC = () => {
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
        <div style={{ 
            margin: '50px 0',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '25px',
            padding: '20px',
         }}>
            {cards.map((card, index) => (
                <Link key={index} to={card.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{
                        width: 'min(350px, 90vw)', // Responsif: max 350px atau 90% viewport width
                        height: '300px',
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <h3 style={{ margin: '0 0 10px 0', color: '#fff', textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>{card.title}</h3>
                        <p style={{ margin: '0', color: '#fff', textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>{card.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CardHome;