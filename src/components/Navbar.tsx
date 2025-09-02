import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isActive = (path: string): boolean => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath === path) return true;
    return false;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <div style={{position: 'fixed', top: '0', width: '100%', backgroundColor: '#f7f7f7ff', zIndex: '999', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
      <nav style={{maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2rem)'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0'}}>
          <div>
            <a href="/" style={{textDecoration: 'none'}}><h1 style={{color: '#2b4593ff', margin: '0', fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', fontWeight: '700'}}>Fithza Indonesia</h1></a>
          </div>
          
          <div style={{display: isMobile ? 'none' : 'block'}}>
            <ul style={{display: 'flex', listStyle: 'none', margin: '0', padding: '0', gap: 'clamp(1rem, 3vw, 2rem)'}}>
              <li>
                <a 
                  href="/" 
                  style={{color: isActive('/') ? '#2b4593ff' : '#000000ff', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s'}}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  style={{color: isActive('/about') ? '#2b4593ff' : '#000000ff', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s'}}
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a 
                  href="/membership" 
                  style={{color: isActive('/membership') ? '#2b4593ff' : '#000000ff', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s'}}
                >
                  Membership
                </a>
              </li>
              <li>
                <a 
                  href="/trainer" 
                  style={{color: isActive('/trainer') ? '#2b4593ff' : '#000000ff', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s'}}
                >
                  Personal Trainer
                </a>
              </li>
              <li>
                <a 
                  href="/class" 
                  style={{color: isActive('/class') ? '#2b4593ff' : '#000000ff', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s'}}
                >
                  Class
                </a>
              </li>
            </ul>
          </div>
          
          {/* Mobile Menu Button */}
          <div style={{display: isMobile ? 'flex' : 'none', alignItems: 'center', gap: '1rem'}}>
            <button
              onClick={toggleMenu}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#2b4593ff',
                padding: '0.5rem',
                transition: 'transform 0.3s ease'
              }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          
          <div style={{display: isMobile ? 'none' : 'block'}}>
            <button
              style={{
                backgroundColor: '#2b4593ff', 
                color: '#ffffff', 
                padding: 'clamp(0.4rem, 2vw, 0.5rem) clamp(0.8rem, 3vw, 1rem)', 
                borderRadius: '5px', 
                textDecoration: 'none', 
                fontWeight: '600', 
                transition: 'background-color 0.3s',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#3a42a0'; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = '#2b4593ff'; }}
              onClick={() => navigate('/free-trail')}
            >
              Klaim Free Trail
            </button>
          </div>
        </div>
        
        {isMenuOpen && isMobile && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            width: '100%',
            backgroundColor: '#f7f7f7ff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            padding: '1rem 0'
          }}>
            <ul style={{
              listStyle: 'none', 
              margin: '0', 
              padding: '0', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '1rem'
            }}>
              <li>
                <a 
                  href="/" 
                  style={{
                    color: isActive('/') ? '#2b4593ff' : '#000000ff', 
                    textDecoration: 'none', 
                    fontWeight: '500', 
                    transition: 'color 0.3s',
                    padding: '0.5rem 1rem',
                    display: 'block'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  style={{
                    color: isActive('/about') ? '#2b4593ff' : '#000000ff', 
                    textDecoration: 'none', 
                    fontWeight: '500', 
                    transition: 'color 0.3s',
                    padding: '0.5rem 1rem',
                    display: 'block'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a 
                  href="/membership" 
                  style={{
                    color: isActive('/membership') ? '#2b4593ff' : '#000000ff', 
                    textDecoration: 'none', 
                    fontWeight: '500', 
                    transition: 'color 0.3s',
                    padding: '0.5rem 1rem',
                    display: 'block'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Membership
                </a>
              </li>
              <li>
                <a 
                  href="/trainer" 
                  style={{
                    color: isActive('/trainer') ? '#2b4593ff' : '#000000ff', 
                    textDecoration: 'none', 
                    fontWeight: '500', 
                    transition: 'color 0.3s',
                    padding: '0.5rem 1rem',
                    display: 'block'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Personal Trainer
                </a>
              </li>
              <li>
                <a 
                  href="/class" 
                  style={{
                    color: isActive('/class') ? '#2b4593ff' : '#000000ff', 
                    textDecoration: 'none', 
                    fontWeight: '500', 
                    transition: 'color 0.3s',
                    padding: '0.5rem 1rem',
                    display: 'block'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Class
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;