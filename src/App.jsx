import { useEffect, useState } from 'react';
import Home from './Home';
import Research from './Research';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

function Header({ currentPath, navigate }) {
  const normalizedPath = currentPath.toLowerCase();

  const isLinkActive = (path) => {
    if (path.includes('research') && normalizedPath.includes('research')) return true;
    if (path.includes('experience') && normalizedPath.includes('experience')) return true;
    if (path.includes('projects') && normalizedPath.includes('projects')) return true;
    if (path.includes('contact') && normalizedPath.includes('contact')) return true;
    return false;
  };

  const navItems = [
    { label: 'RESEARCH', href: '#/research' },
    { label: 'EXPERIENCE', href: '#/experience' },
    { label: 'PROJECTS', href: '#/projects' },
    { label: 'CONTACT', href: '#/contact' },
  ];

  return (
    <header className="site-header">
      <div className="header-brand">
        <a 
          href="#/" 
          onClick={(e) => {
            e.preventDefault();
            navigate('#/');
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
  const getHashPath = () => window.location.hash || '#/';
  const [currentPath, setCurrentPath] = useState(getHashPath());

  useEffect(() => {
    const handleHashChange = () => setCurrentPath(window.location.hash || '#/');
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const navigate = (path) => {
    const targetHash = path.startsWith('#') ? path : `#${path}`;
    window.location.hash = targetHash;
    setCurrentPath(targetHash);
  };

  const Link = ({ href, children, style, className }) => (
    <a 
      href={href.startsWith('#') || href.startsWith('http') || href.startsWith('.') ? href : `#${href}`} 
      className={className}
      style={style}
      onClick={(e) => {
        if (!href.startsWith('http') && !href.startsWith('.')) {
          e.preventDefault();
          navigate(href);
        }
      }}
    >
      {children}
    </a>
  );

  const normalizedPath = currentPath.toLowerCase();

  const isResearch = normalizedPath.includes('research');
  const isExperience = normalizedPath.includes('experience');
  const isProjects = normalizedPath.includes('projects');
  const isContact = normalizedPath.includes('contact');

  const isHome = !isResearch && !isExperience && !isProjects && !isContact;

  let PageContent = <Home navigate={navigate} Link={Link} />;
  if (isResearch) {
    PageContent = <Research navigate={navigate} Link={Link} />;
  } else if (isExperience) {
    PageContent = <Experience navigate={navigate} Link={Link} />;
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
          onClick={() => navigate('#/')} 
          aria-label="Back to home"
        >
          &#8249;&#8249;
        </button>
      )}

      <Header currentPath={currentPath} navigate={navigate} />

      {PageContent}

      <div id="footer">
        <Link href="#/">main</Link> | <Link href="#/research">research</Link> | <Link href="#/experience">experience</Link> | <Link href="#/projects">Projects</Link> | <Link href="#/contact">contact and bio</Link>
      </div>
    </>
  );
}

export default App;
