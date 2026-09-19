function Projects() {
  return (
    <div id="content" className="single-wide">
      <h1 className="main-title">
        Projects
      </h1>

      <div className="entry" style={{ gridColumn: '1 / -1', marginTop: '10px' }}>
        <h3>AI Powered Geospatial IDE - DISHA <span style={{ fontSize: '0.8em', fontWeight: '300', float: 'right' }}>July 2026 &ndash; Present</span></h3>
        <p><em>Advisor: <a href="mailto:anupam.sobti@plaksha.edu.in" target="_blank" rel="noreferrer">Dr. Anupam Sobti</a></em></p>
        <ul>
          <li>Built a desktop IDE for urban planners to run GIS analysis in simple English prompts using <b>React</b>, <b>FastAPI</b>, and <b>Electron</b>.</li>
          <li>Engineered an <b>MCP tool server</b> across 8 domain engines to analyze transit feeds, zoning rules, land use, and demographics.</li>
          <li>Integrated <b>Google Earth Engine</b> satellite data and <b>GTFS transit feeds</b> to compute optimal multimodal routes.</li>
          <li>Streamed model actions and tool calls over <b>WebSockets</b> to render live geospatial vector layers on the map canvas.</li>
        </ul>
        <hr />

        <h3>AI Hiring Platform - HIRIS <span style={{ fontSize: '0.8em', fontWeight: '300', float: 'right' }}>Jan 2026 &ndash; May 2026</span></h3>
        <p><em>Advisors: <a href="mailto:anupam.sobti@plaksha.edu.in" target="_blank" rel="noreferrer">Dr. Anupam Sobti</a>, <a href="mailto:prakarsh.singh@plaksha.edu.in" target="_blank" rel="noreferrer">Dr. Prakarsh Singh</a></em></p>
        <ul>
          <li>Designed a full-stack ATS to unify institutional hiring in one secure, role-based platform on <b>React</b>, <b>Node.js</b>, and <b>PostgreSQL</b>.</li>
          <li>Built an <b>interactive interview room</b> that prompts real-time AI questions tailored to candidate resumes and conversations.</li>
          <li>Integrated institutional policy document parsing to evaluate candidate alignment with <b>organization core values</b>.</li>
          <li>Maintained a detailed, structured log of every AI and human interview review and candidate conversation for seamless handoff to the next interviewer.</li>
        </ul>
        <hr />

        <h3>ML - Framing Bias Detection <span style={{ fontSize: '0.8em', fontWeight: '300', float: 'right' }}>Jan 2026 &ndash; May 2026</span></h3>
        <p><em>Advisor: Dr. Siddharth</em></p>
        <ul>
          <li>Built a model to detect <b>framing bias</b> hidden in everyday news headlines by training <b>XGBoost</b> and <b>Random Forest</b> models.</li>
          <li>Fused <b>28 engineered linguistic features</b> with <b>768-dimensional transformer embeddings</b> to capture framing signals.</li>
          <li>Outperformed published academic benchmarks by <b>8.8 F1 points</b> with a statistically significant <b>0.888 Macro-F1</b>.</li>
          <li>Developed an <b>ordinal ridge regression model</b> that reduced bias scoring error by <b>60%</b> over zero-shot LLM baselines.</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
