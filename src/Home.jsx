function Home() {
  return (
    <>
      <div className="entry top-right-nav">
        <a href="/research">RESEARCH</a> | <a href="/Resume.pdf" target="_blank" rel="noreferrer">RESUME</a> (<a href="/Resume.pdf" download>dl</a>) | <a href="/Projects.html">PROJECTS</a> | <a href="/contact.html">CONTACT</a>
      </div>

      <div id="content">
        <h1 className="main-title">
          Sartajdeep Singh<br />
          <span style={{ fontSize: '0.5em', fontWeight: 'normal', letterSpacing: '0.05em', display: 'inline-block', marginTop: '-0.7em' }}>
            <b>(ਸਰਤਾਜਦੀਪ ਸਿੰਘ)</b>
          </span>
        </h1>

        <div className="left">
          <img src="/SARTAJDEEP_SINGH.PHOTO.png" alt="Sartajdeep Singh" />
          <p style={{ textAlign: 'center' }}>
            <a href="mailto:sartajdeep.s.ug24@plaksha.edu.in" target="_blank" rel="noreferrer">sartajdeep.s.ug24@plaksha.edu.in</a>
          </p>
         
        </div>

        <div className="right entry">
          <div style={{ fontSize: '1.3em', marginBottom: '1em' }}>
            Computer Science and Artificial Intelligence (BTech) undergraduate at Plaksha University
          </div>

          <h3>Bio:</h3>

          <p>
            Hi, I'm Sartajdeep Singh, a Computer Science and Artificial Intelligence (BTech) undergraduate at <a href="https://plaksha.edu.in/" target="_blank" rel="noreferrer">Plaksha University</a>. Building on a strong academic foundation from <a href="https://springdaleeducation.com/" target="_blank" rel="noreferrer">Spring Dale Senior School</a>, I am deeply passionate about leveraging algorithmic thinking to build impactful, data-driven solutions, with hands-on experience designing an end-to-end AI hiring platform and engineering large-scale corporate leadership datasets. Proficient in technologies like Python, C++, and SQL, my technical expertise is complemented by my dedication to education and mentorship, having taught mathematical concepts to students and created engaging content to share clever solving tricks. As an innovative and adaptable strategic planner, I am always eager to blend my coding skills with creative problem-solving to tackle real-world challenges.
          </p>
          <hr></hr>
          <p style={{ textAlign: 'center', whiteSpace: 'nowrap', marginTop: '1em', fontSize: '1.2em', color: '#ffff' }}>
            LinkedIn: <a href="https://www.linkedin.com/in/sartajdeep-singh/" target="_blank" rel="noreferrer">LinkedIn</a> | GitHub: <a href="https://github.com/sartajdeep" target="_blank" rel="noreferrer">GitHub</a> | Resume: <a href="/Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </p>

        </div>
      </div>
    </>
  );
}

export default Home;
