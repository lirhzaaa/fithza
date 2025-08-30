const Navbar: React.FC = () => {
  const currentPath = window.location.pathname;

  const isActive = (path: string): boolean => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath === path) return true;
    return false;
  };

  return (
    <div style={{position: 'fixed', top: '0', width: '100%', backgroundColor: '#f7f7f7ff', zIndex: '999', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
      <nav style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0'}}>
          <div>
            <a href="/" style={{textDecoration: 'none'}}><h1 style={{color: '#2b4593ff', margin: '0', fontSize: '2rem', fontWeight: '700'}}>FitHza Indonesia</h1></a>
          </div>
          <div>
            <ul style={{display: 'flex', listStyle: 'none', margin: '0', padding: '0', gap: '2rem'}}>
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
                  About
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
                  href="/personal-trainer" 
                  style={{color: isActive('/personal-trainer') ? '#2b4593ff' : '#000000ff', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s'}}
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
              <li>
                <a 
                  href="/contact" 
                  style={{color: isActive('/contact') ? '#2b4593ff' : '#000000ff', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s'}}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <a
            href="/join"
            style={{backgroundColor: '#2b4593ff', color: '#ffffff', padding: '0.5rem 1rem', borderRadius: '5px', textDecoration: 'none', fontWeight: '600', transition: 'background-color 0.3s'}}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#3a42a0'; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = '#2b4593ff'; }}
          >
            Join Now
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
