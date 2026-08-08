import { useEffect, useState } from 'react';
import Home from './Home';
import Research from './Research';
import Projects from './Projects';
import Contact from './Contact';

function Header({ currentPath, navigate }) {
  const normalizedPath = currentPath.toLowerCase();

  const isLinkActive = (path) => {
    if (path === '/research' && (normalizedPath === '/research' || normalizedPath === '/research.html')) return true;
    if (path === '/projects' && (normalizedPath === '/projects' || normalizedPath === '/projects.html')) return true;
    if (path === '/contact' && (normalizedPath === '/contact' || normalizedPath === '/contact.html')) return true;
    return false;
  };

  const navItems = [
    { label: 'RESEARCH', href: '/research' },
    { label: 'RESUME (dl)', href: './Resume.pdf', external: true, download: true },
    { label: 'PROJECTS', href: '/projects' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className="site-header">
      <div className="header-brand">
        <a 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          className="brand-title"
        >
          SARTAJDEEP SINGH
        </a>
        <div className="brand-subtitle">
          (ਸਰਤਾਜਦੀਪ ਸਿੰਘ)
        </div>
      </div>

      <nav className="header-nav">
        {navItems.map((item, index) => {
          if (item.external) {
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                download={item.download}
                className="nav-link"
              >
                {item.label}
              </a>
            );
          }

          const active = isLinkActive(item.href);
          return (
            <a
              key={index}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                navigate(item.href);
              }}
              className={`nav-link ${active ? 'active' : ''}`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Handle browser back and forward buttons
  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const Link = ({ href, children, style, className }) => (
    <a 
      href={href} 
      className={className}
      style={style}
      onClick={(e) => {
        if (href.startsWith('/')) {
          e.preventDefault();
          navigate(href);
        }
      }}
    >
      {children}
    </a>
  );

  const normalizedPath = currentPath.toLowerCase();

  const isResearch = normalizedPath.endsWith('/research') || normalizedPath.endsWith('/research.html');
  const isProjects = normalizedPath.endsWith('/projects') || normalizedPath.endsWith('/projects.html');
  const isContact = normalizedPath.endsWith('/contact') || normalizedPath.endsWith('/contact.html');

  const isHome = !isResearch && !isProjects && !isContact;

  let PageContent = <Home navigate={navigate} Link={Link} />;
  if (isResearch) {
    PageContent = <Research navigate={navigate} Link={Link} />;
  } else if (isProjects) {
    PageContent = <Projects navigate={navigate} Link={Link} />;
  } else if (isContact) {
    PageContent = <Contact navigate={navigate} Link={Link} />;
  }

  return (
    <>
      {!isHome && (
        <button 
          className="back-to-home" 
          onClick={() => navigate('/')} 
          aria-label="Back to home"
        >
          &#8249;&#8249;
        </button>
      )}

      <Header currentPath={currentPath} navigate={navigate} />

      {PageContent}

      <div id="footer">
        <Link href="/">main</Link> | <Link href="/research">research</Link> | <a href="./Resume.pdf" target="_blank" rel="noreferrer">Resume</a> (<a href="./Resume.pdf" download>dl</a>) | <Link href="/projects">Projects</Link> | <Link href="/contact">contact and bio</Link>
      </div>
    </>
  );
}

export default App;
