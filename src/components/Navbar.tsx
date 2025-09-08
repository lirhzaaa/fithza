import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
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
    <>
      <div style={{position: 'fixed', top: '0', width: '100%', backgroundColor: '#f7f7f7ff', zIndex: '1000', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
        <nav style={{maxWidth: '1200px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', minHeight: '60px'}}>
            <div style={{flex: '0 0 auto', minWidth: '0'}}>
              <a href="/" style={{textDecoration: 'none'}}>
                <h1 style={{
                  color: '#2b4593ff', 
                  margin: '0', 
                  fontSize: isMobile ? '1.5rem' : 'clamp(1.2rem, 4vw, 1.5rem)', 
                  fontWeight: '700',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                Fithza Indonesia
                </h1>
              </a>
            </div>
            
            <div style={{display: isMobile ? 'none' : 'flex', flex: '1', justifyContent: 'center'}}>
              <ul style={{display: 'flex', listStyle: 'none', margin: '0', padding: '0', gap: '2.5rem'}}>
                <li>
                  <a 
                    href="/" 
                    style={{color: isActive('/') ? '#2b4593ff' : '#000000ff', fontWeight: '500', transition: 'color 0.3s', fontSize: '0.9rem', position: 'relative', paddingBottom: '0.5rem'}}
                    onMouseEnter={(e) => { const target = e.currentTarget as HTMLElement; target.style.color = '#2b4593ff'; (target.lastElementChild as HTMLElement).style.width = '100%'; }}
                    onMouseLeave={(e) => { const target = e.currentTarget as HTMLElement; target.style.color = isActive('/') ? '#2b4593ff' : '#000000ff'; (target.lastElementChild as HTMLElement).style.width = '0'; }}
                  >
                    <span>Home</span>
                    <span style={{position: 'absolute', bottom: 0, left: 0, width: '0', height: '2px', backgroundColor: '#2b4593ff', transition: 'width 0.3s'}}></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/about" 
                    style={{color: isActive('/about') ? '#2b4593ff' : '#000000ff', fontWeight: '500', transition: 'color 0.3s', fontSize: '0.9rem', position: 'relative', paddingBottom: '0.5rem'}}
                    onMouseEnter={(e) => { const target = e.currentTarget as HTMLElement; target.style.color = '#2b4593ff'; (target.lastElementChild as HTMLElement).style.width = '100%'; }}
                    onMouseLeave={(e) => { const target = e.currentTarget as HTMLElement; target.style.color = isActive('/about') ? '#2b4593ff' : '#000000ff'; (target.lastElementChild as HTMLElement).style.width = '0'; }}
                  >
                    <span>Tentang</span>
                    <span style={{position: 'absolute', bottom: 0, left: 0, width: '0', height: '2px', backgroundColor: '#2b4593ff', transition: 'width 0.3s'}}></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/membership" 
                    style={{color: isActive('/membership') ? '#2b4593ff' : '#000000ff', fontWeight: '500', transition: 'color 0.3s', fontSize: '0.9rem', position: 'relative', paddingBottom: '0.5rem'}}
                    onMouseEnter={(e) => { const target = e.currentTarget as HTMLElement; target.style.color = '#2b4593ff'; (target.lastElementChild as HTMLElement).style.width = '100%'; }}
                    onMouseLeave={(e) => { const target = e.currentTarget as HTMLElement; target.style.color = isActive('/membership') ? '#2b4593ff' : '#000000ff'; (target.lastElementChild as HTMLElement).style.width = '0'; }}
                  >
                    <span>Member</span>
                    <span style={{position: 'absolute', bottom: 0, left: 0, width: '0', height: '2px', backgroundColor: '#2b4593ff', transition: 'width 0.3s'}}></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/trainer" 
                    style={{color: isActive('/trainer') ? '#2b4593ff' : '#000000ff', fontWeight: '500', transition: 'color 0.3s', fontSize: '0.9rem', position: 'relative', paddingBottom: '0.5rem'}}
                    onMouseEnter={(e) => { const target = e.currentTarget as HTMLElement; target.style.color = '#2b4593ff'; (target.lastElementChild as HTMLElement).style.width = '100%'; }}
                    onMouseLeave={(e) => { const target = e.currentTarget as HTMLElement; target.style.color = isActive('/trainer') ? '#2b4593ff' : '#000000ff'; (target.lastElementChild as HTMLElement).style.width = '0'; }}
                  >
                    <span>Trainer</span>
                    <span style={{position: 'absolute', bottom: 0, left: 0, width: '0', height: '2px', backgroundColor: '#2b4593ff', transition: 'width 0.3s'}}></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/class" 
                    style={{color: isActive('/class') ? '#2b4593ff' : '#000000ff', fontWeight: '500', transition: 'color 0.3s', fontSize: '0.9rem', position: 'relative', paddingBottom: '0.5rem'}}
                    onMouseEnter={(e) => { const target = e.currentTarget as HTMLElement; target.style.color = '#2b4593ff'; (target.lastElementChild as HTMLElement).style.width = '100%'; }}
                    onMouseLeave={(e) => { const target = e.currentTarget as HTMLElement; target.style.color = isActive('/class') ? '#2b4593ff' : '#000000ff'; (target.lastElementChild as HTMLElement).style.width = '0'; }}
                  >
                    <span>Class</span>
                    <span style={{position: 'absolute', bottom: 0, left: 0, width: '0', height: '2px', backgroundColor: '#2b4593ff', transition: 'width 0.3s'}}></span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div style={{display: isMobile ? 'flex' : 'none', alignItems: 'center', gap: '0.5rem', flex: '0 0 auto'}}>
              <button
                onClick={toggleMenu}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  color: '#2b4593ff',
                  padding: '0.5rem',
                  transition: 'transform 0.3s ease',
                  minWidth: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
              </button>
            </div>
            
            <div style={{display: isMobile ? 'none' : 'flex', flex: '0 0 auto', justifyContent: 'flex-end'}}>
              <button
                style={{
                  backgroundColor: '#2b4593ff', 
                  color: '#ffffff', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '5px', 
                  textDecoration: 'none', 
                  fontWeight: '600', 
                  transition: 'background-color 0.3s',
                  fontSize: '0.9rem',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#3a42a0'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = '#2b4593ff'; }}
                onClick={() => navigate('/free-trail')}
              >
                Klaim Free Trial
              </button>
            </div>
          </div>
        </nav>
      </div>
      
      <div style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#f7f7f7ff',
        zIndex: '999',
        padding: '2rem 1rem',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: isMenuOpen ? 1 : 0,
        pointerEvents: isMenuOpen ? 'auto' : 'none',
        transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease, opacity 0.3s ease'
      }}>
          <ul style={{
            listStyle: 'none', 
            margin: '0', 
            padding: '0', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '1rem',
            width: '100%',
            maxWidth: '400px'
          }}>
            <li>
              <a 
                href="/" 
                style={{
                  color: isActive('/') ? '#2b4593ff' : '#000000ff', 
                  fontWeight: '500', 
                  transition: 'color 0.3s',
                  padding: '0.75rem 1rem',
                  display: 'block',
                  fontSize: '1.2rem',
                  position: 'relative',
                  paddingBottom: '0.5rem'
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => { const target = e.currentTarget as HTMLElement; target.style.color = '#2b4593ff'; (target.lastElementChild as HTMLElement).style.width = '100%'; }}
                onMouseLeave={(e) => { const target = e.currentTarget as HTMLElement; target.style.color = isActive('/') ? '#2b4593ff' : '#000000ff'; (target.lastElementChild as HTMLElement).style.width = '0'; }}
              >
                <span>Home</span>
                <span style={{position: 'absolute', bottom: 0, left: 0, width: '0', height: '2px', backgroundColor: '#2b4593ff', transition: 'width 0.3s'}}></span>
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                style={{
                  color: isActive('/about') ? '#2b4593ff' : '#000000ff', 
                  fontWeight: '500', 
                  transition: 'color 0.3s',
                  padding: '0.75rem 1rem',
                  display: 'block',
                  fontSize: '1.2rem',
                  position: 'relative',
                  paddingBottom: '0.5rem'
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => { const target = e.currentTarget as HTMLElement; target.style.color = '#2b4593ff'; (target.lastElementChild as HTMLElement).style.width = '100%'; }}
                onMouseLeave={(e) => { const target = e.currentTarget as HTMLElement; target.style.color = isActive('/about') ? '#2b4593ff' : '#000000ff'; (target.lastElementChild as HTMLElement).style.width = '0'; }}
              >
                <span>Tentang Kami</span>
                <span style={{position: 'absolute', bottom: 0, left: 0, width: '0', height: '2px', backgroundColor: '#2b4593ff', transition: 'width 0.3s'}}></span>
              </a>
            </li>
            <li>
              <a 
                href="/membership" 
                style={{
                  color: isActive('/membership') ? '#2b4593ff' : '#000000ff', 
                  fontWeight: '500', 
                  transition: 'color 0.3s',
                  padding: '0.75rem 1rem',
                  display: 'block',
                  fontSize: '1.2rem',
                  position: 'relative',
                  paddingBottom: '0.5rem'
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => { const target = e.currentTarget as HTMLElement; target.style.color = '#2b4593ff'; (target.lastElementChild as HTMLElement).style.width = '100%'; }}
                onMouseLeave={(e) => { const target = e.currentTarget as HTMLElement; target.style.color = isActive('/membership') ? '#2b4593ff' : '#000000ff'; (target.lastElementChild as HTMLElement).style.width = '0'; }}
              >
                <span>Membership</span>
                <span style={{position: 'absolute', bottom: 0, left: 0, width: '0', height: '2px', backgroundColor: '#2b4593ff', transition: 'width 0.3s'}}></span>
              </a>
            </li>
            <li>
              <a 
                href="/trainer" 
                style={{
                  color: isActive('/trainer') ? '#2b4593ff' : '#000000ff', 
                  fontWeight: '500', 
                  transition: 'color 0.3s',
                  padding: '0.75rem 1rem',
                  display: 'block',
                  fontSize: '1.2rem',
                  position: 'relative',
                  paddingBottom: '0.5rem'
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => { const target = e.currentTarget as HTMLElement; target.style.color = '#2b4593ff'; (target.lastElementChild as HTMLElement).style.width = '100%'; }}
                onMouseLeave={(e) => { const target = e.currentTarget as HTMLElement; target.style.color = isActive('/trainer') ? '#2b4593ff' : '#000000ff'; (target.lastElementChild as HTMLElement).style.width = '0'; }}
              >
                <span>Personal Trainer</span>
                <span style={{position: 'absolute', bottom: 0, left: 0, width: '0', height: '2px', backgroundColor: '#2b4593ff', transition: 'width 0.3s'}}></span>
              </a>
            </li>
            <li>
              <a 
                href="/class" 
                style={{
                  color: isActive('/class') ? '#2b4593ff' : '#000000ff', 
                  fontWeight: '500', 
                  transition: 'color 0.3s',
                  padding: '0.75rem 1rem',
                  display: 'block',
                  fontSize: '1.2rem',
                  position: 'relative',
                  paddingBottom: '0.5rem'
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => { const target = e.currentTarget as HTMLElement; target.style.color = '#2b4593ff'; (target.lastElementChild as HTMLElement).style.width = '100%'; }}
                onMouseLeave={(e) => { const target = e.currentTarget as HTMLElement; target.style.color = isActive('/class') ? '#2b4593ff' : '#000000ff'; (target.lastElementChild as HTMLElement).style.width = '0'; }}
              >
                <span>Class</span>
                <span style={{position: 'absolute', bottom: 0, left: 0, width: '0', height: '2px', backgroundColor: '#2b4593ff', transition: 'width 0.3s'}}></span>
              </a>
            </li>
            <li style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid #e0e0e0' }}>
              <button
                style={{
                  backgroundColor: '#2b4593ff', 
                  color: '#ffffff', 
                  padding: '0.75rem 1.5rem', 
                  borderRadius: '5px', 
                  fontWeight: '600', 
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'background-color 0.3s'
                }}
                onClick={() => {
                  navigate('/free-trail');
                  setIsMenuOpen(false);
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#3a42a0'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = '#2b4593ff'; }}
              >
                Klaim Free Trial
              </button>
            </li>
          </ul>
        </div>
    </>
  );
};

export default Navbar;