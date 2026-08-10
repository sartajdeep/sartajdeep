import { useEffect, useState } from 'react';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Acknowledgements from './Acknowledgements';

function Header({ currentPath, navigate }) {
  const normalizedPath = currentPath.toLowerCase();

  const isLinkActive = (path) => {
    if (path.includes('experience') && normalizedPath.includes('experience')) return true;
    if (path.includes('projects') && normalizedPath.includes('projects')) return true;
    if (path.includes('contact') && normalizedPath.includes('contact')) return true;
    if (path.includes('acknowledgements') && normalizedPath.includes('acknowledgements')) return true;
    return false;
  };

  const navItems = [
    { label: 'EXPERIENCE', href: '#/experience' },
    { label: 'PROJECTS', href: '#/projects' },
    { label: 'CONTACT', href: '#/contact' },
    { label: 'ACKNOWLEDGEMENTS', href: '#/acknowledgements' },
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

    // Security & Anti-Screenshot Protections
    const handleContextMenu = (e) => e.preventDefault();

    const handleKeyDown = (e) => {
      // PrintScreen key
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        e.preventDefault();
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText('Content is protected.');
        }
      }
      // Ctrl+P / Cmd+P (Print)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
      }
      // Ctrl+S / Cmd+S (Save Page)
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
      }
      // Win/Cmd + Shift + S (Snipping tool)
      if (e.shiftKey && (e.metaKey || e.key === 'Meta') && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText('Content is protected.');
        }
      }
    };

    // Auto-blur content when window loses focus (e.g. Snipping tool opens)
    const handleBlur = () => {
      document.body.classList.add('blurred-screen');
    };
    const handleFocus = () => {
      document.body.classList.remove('blurred-screen');
    };
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.body.classList.add('blurred-screen');
      } else {
        document.body.classList.remove('blurred-screen');
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
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

  const isExperience = normalizedPath.includes('experience');
  const isProjects = normalizedPath.includes('projects');
  const isContact = normalizedPath.includes('contact');
  const isAcknowledgements = normalizedPath.includes('acknowledgements');

  const isHome = !isExperience && !isProjects && !isContact && !isAcknowledgements;

  let PageContent = <Home navigate={navigate} Link={Link} />;
  if (isExperience) {
    PageContent = <Experience navigate={navigate} Link={Link} />;
  } else if (isProjects) {
    PageContent = <Projects navigate={navigate} Link={Link} />;
  } else if (isContact) {
    PageContent = <Contact navigate={navigate} Link={Link} />;
  } else if (isAcknowledgements) {
    PageContent = <Acknowledgements navigate={navigate} Link={Link} />;
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
        <Link href="#/">main</Link> | <Link href="#/experience">experience</Link> | <Link href="#/projects">Projects</Link> | <Link href="#/contact">contact and bio</Link> | <Link href="#/acknowledgements">acknowledgements</Link>
      </div>
    </>
  );
}

export default App;
