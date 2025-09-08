import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

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
                    padding: '0 clamp(1rem, 5vw, 2rem)',
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
                                fontSize: 'clamp(1.2rem, 4vw, 2rem)',
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
                                    alignItems: 'center',
                                    padding: 'clamp(0.5rem, 2vw, 0.7rem) clamp(1rem, 3vw, 1.5rem)',
                                    backgroundColor: 'white',
                                    color: '#4D55CC',
                                    borderRadius: '7px',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                                }}
                                onClick={() => navigate('/membership')}
                            >
                                Daftar Sekarang
                                <FontAwesomeIcon icon={faArrowRightFromBracket} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CTAAbout;