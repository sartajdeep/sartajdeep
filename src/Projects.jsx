function Projects() {
  return (
    <div id="content" className="single-wide">
      <h1 className="main-title">
        Projects
      </h1>

      <div className="entry" style={{ gridColumn: '1 / -1', marginTop: '10px' }}>
        <h3>CEO Project <span className="entry-date">Feb 2026 &ndash; Present</span></h3>
        <p><em>Collaborators: <a href="mailto:prakarsh.singh@plaksha.edu.in" target="_blank" rel="noreferrer">Dr. Prakarsh Singh</a>, <a href="mailto:anshika.arora@plaksha.edu.in" target="_blank" rel="noreferrer">Ms. Anshika Arora</a></em></p>
        <ul>
          <li>Engineered a large-scale corporate leadership dataset by extracting executive-level information for all Indian publicly listed companies. Covered leadership ranks 1&ndash;5 and consolidated a structured dataset of 32,352 records.</li>
          <li>Developed automated data extraction workflows to gather and standardize leadership information from NSE/BSE filings and company disclosures. This significantly reduced manual data collection effort and ensured consistency across firms.</li>
        </ul>
        <hr />
        <h3>AI Hiring Assistant <span className="entry-date">Jan 2026 &ndash; Present</span></h3>
        <p><em>Collaborators: <a href="mailto:nimrata.kapoor@plaksha.edu.in" target="_blank" rel="noreferrer">Ms. Nimrata</a>, <a href="mailto:anupam.sobti@plaksha.edu.in" target="_blank" rel="noreferrer">Dr. Anupam Sobti</a>, <a href="mailto:prakarsh.singh@plaksha.edu.in" target="_blank" rel="noreferrer">Dr. Prakarsh Singh</a></em></p>
        <ul>
          <li>Designing an end-to-end AI-driven hiring platform to manage the full recruitment lifecycle. The system stores and tracks structured data for all applicants, shortlisted candidates, and active employees within a unified service-based architecture.</li>
          <li>Developing an AI-assisted behavioral interview framework that generates tailored interview questions aligned with institutional values, helping HR teams assess cultural fit.</li>
          <li>Building automated candidate evaluation mechanisms that analyze interview responses and score candidates on behavioral competencies, streamlining HR rounds and improving consistency in hiring decisions.</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
