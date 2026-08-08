function Acknowledgements() {
  return (
    <div id="content" className="single-wide">
      <h1 className="main-title">
        Acknowledgements & Gratitude
      </h1>

      <div className="entry" style={{ gridColumn: '1 / -1', marginTop: '30px' }}>
        <p style={{ fontSize: '1.15em', marginBottom: '30px', fontStyle: 'italic', color: '#444444' }}>
          I am deeply grateful to the mentors, professors, family, and friends whose guidance, wisdom, and presence have shaped my journey and taught me invaluable lessons in life and learning.
        </p>

        <h3>Mentors & Professors</h3>
        <ul>
          <li>
            <strong>Dr. Prakarsh Singh</strong> &ndash; For guidance, intellectual encouragement, and mentorship in research.
          </li>
          <li>
            <strong>Professors & Advisors</strong> &ndash; For inspiring curiosity and sharing technical and life wisdom.
          </li>
        </ul>
        <hr />

        <h3>Family & Loved Ones</h3>
        <ul>
          <li>
            <strong>My Family</strong> &ndash; For unconditional love, continuous support, and foundational values.
          </li>
        </ul>
        <hr />

        <h3>Friends & Collaborators</h3>
        <ul>
          <li>
            <strong>Friends & Peers</strong> &ndash; For their presence, camaraderie, and shared learning experiences.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Acknowledgements;
