function Experience() {
  return (
    <div id="content" className="single-wide">
      <h1 className="main-title">
        Experience
      </h1>

      <div className="entry" style={{ gridColumn: '1 / -1', marginTop: '40px' }}>
        <h3>Software Engineer / Research Assistant <span style={{ fontSize: '0.8em', fontWeight: '300', float: 'right' }}>2025 &ndash; Present</span></h3>
        <p><em>Company / Institution Name</em></p>
        <ul>
          <li>Bullet point describing key responsibilities, achievements, and impact.</li>
          <li>Another key project or technical task accomplished during this role.</li>
        </ul>
        <hr />

        <h3>Previous Position <span style={{ fontSize: '0.8em', fontWeight: '300', float: 'right' }}>2024 &ndash; 2025</span></h3>
        <p><em>Company / Institution Name</em></p>
        <ul>
          <li>Summary of role and major contributions.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
