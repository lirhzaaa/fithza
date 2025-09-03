import { useNavigate } from "react-router-dom";

const CTAAbout = () => {
    const navigate = useNavigate();
    return (
        <>
            <div style={{
                padding: '2rem 0 3rem'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 20px',
                    backgroundImage: 'url(/img/about.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '15px',
                    position: 'relative'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '15px'
                    }}></div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '35vh',
                        position: 'relative',
                        zIndex: 1
                    }}>
                        <div style={{
                            textAlign: 'center'
                        }}>
                            <h2 style={{
                                color: 'white',
                                marginBottom: '20px',
                                fontSize: '2rem',
                                fontWeight: '650',
                            }}
                                data-aos="fade-down"
                                data-aos-duration="1000"
                            >Bergabung Sekarang Bersama Fithza Indonesia</h2>
                            <button
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                role="button"
                                aria-label="button start"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    padding: '7px 15px',
                                    backgroundColor: 'white',
                                    color: '#4D55CC',
                                    borderRadius: '7px',
                                    textDecoration: 'none',
                                    fontWeight: 'bold'
                                }}
                                onClick={() => navigate('/membership')}
                            >
                                Daftar Sekarang
                                <span data-testid="icon-button">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="chevron-right"
                                        style={{
                                            marginLeft: '10px',
                                            width: '16px',
                                            height: '16px',
                                        }}
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CTAAbout;