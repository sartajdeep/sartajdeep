import { useEffect, useState } from 'react';
import Home from './Home';
import Research from './Research';
import Projects from './Projects';
import Contact from './Contact';

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

  const goHome = async () => {
    try {
      await fetch('/', { method: 'GET', cache: 'no-store' });
    } catch (error) {
      console.warn('Home fetch failed, still navigating home.', error);
    }
    navigate('/');
  };

  // Custom link internal component so it prevents reload 
  // on standard links within the React frontend
  const Link = ({ href, children }) => (
    <a 
      href={href} 
      onClick={(e) => {
        if(href.startsWith('/')) {
            e.preventDefault();
            navigate(href);
        }
      }}
    >
      {children}
    </a>
  );

  const normalizedPath = currentPath.toLowerCase();
  const isHome = normalizedPath === '/' || normalizedPath === '/index.html';

  let PageContent = <Home />;
  if (normalizedPath === '/research' || normalizedPath === '/research.html') {
    PageContent = <Research />;
  } else if (normalizedPath === '/projects' || normalizedPath === '/projects.html') {
    PageContent = <Projects />;
  } else if (normalizedPath === '/contact' || normalizedPath === '/contact.html') {
    PageContent = <Contact />;
  }

  return (
    <>
      {!isHome && (
        <button className="back-to-home" onClick={goHome} aria-label="Back to home">
          &#8249;&#8249;
        </button>
      )}

      {PageContent}

      <div id="footer">
        <Link href="/">main</Link> | <Link href="/research">research</Link> | <a href="/Resume.pdf" target="_blank" rel="noreferrer">Resume</a> (<a href="/Resume.pdf" download>dl</a>) | <Link href="/Projects.html">Projects</Link> | <Link href="/contact.html">contact and bio</Link>
      </div>
    </>
  );
}

export default App;
