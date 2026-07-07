import { useState } from 'react';

function Contact() {
  const photoData = [
    { id: 1, src: '/Photos/bio.JPG', alt: 'In the picture - Sartajdeep Singh with Avni Gaur, Kanav Nanda, and Atri Tejaswi during Biomimicry class.' },
    { id: 2, src: '/Photos/class2.jpg', alt: 'Group photo at Spring Blossom School, Class 2.' },
    { id: 3, src: '/Photos/class12.jpg', alt: 'Group photo at Spring Dale Senior School, Class 12.' },
    { id: 4, src: '/Photos/delhigurudwara.jpg', alt: 'Group photo at Gurudwara Bangla Sahib, Delhi.' },
    { id: 5, src: '/Photos/fieldvisit.JPG', alt: 'In the picture - Sartajdeep Singh with Rudra Satwik and Shourrya Gupta during a field visit.' },
    { id: 6, src: '/Photos/gaganhasteer.jpg', alt: 'In the picture - Sartajdeep Singh with Gagan Hasteer (VP Content @ Netflix). ' },
    { id: 7, src: '/Photos/goldentemple.jpg', alt: 'Photo at Golden Temple.' },
    { id: 8, src: '/Photos/jefries.jpg', alt: 'Photo with Jeffries.' },
    { id: 9, src: '/Photos/lalitagarwal.jpg', alt: 'Photo with Lalit Agarwal and Mukul Agarwal.' },
    { id: 10, src: '/Photos/LKG.jpg', alt: 'Photo from LKG (Lower Kindergarten).' },
    { id: 11, src: '/Photos/lohri.jpg', alt: 'Photo during Lohri celebration.' },
    { id: 12, src: '/Photos/mathlab.jpg', alt: 'Photo from Math Lab.' },
    { id: 13, src: '/Photos/mechatronics.JPG', alt: 'Photo from Mechatronics class.' },
    { id: 14, src: '/Photos/mohitthukral.jpg', alt: 'Photo with Mohit Thukral.' },
    { id: 15, src: '/Photos/mumbai.jpg', alt: 'Photo from Mumbai.' },
    { id: 16, src: '/Photos/neerajaggarwal.jpg', alt: 'Photo with Neeraj Aggarwal.' },
    { id: 17, src: '/Photos/neerajwife.jpg', alt: 'Photo with Neeraj\'s wife.' },
    { id: 18, src: '/Photos/springdale.jpg', alt: 'Photo from Spring Dale School.' },
    { id: 19, src: '/Photos/ug24.JPG', alt: 'Photo with UG 24 batch at Plaksha University.' }
  ];

  // We duplicate the photos once to create a seamless infinite scrolling loop
  const reelPhotos = [...photoData, ...photoData];
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div id="content">
      <h1 className="main-title" style={{ gridColumn: '1 / -1' }}>
        Sartajdeep Singh: Contact & Bio
      </h1>

      <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginBottom: '40px' }}>
        <img 
          src="/plaksha_group_pic.jpeg" 
          alt="Group photo of Plaksha University students (UG 24), including Sartajdeep Singh" 
          style={{ width: '100%', maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '5px' }} 
        />
        
      </div>

      <div className="left" style={{ textAlign: 'left' }}>
        <div style={{ marginBottom: '30px' }}>
          <strong>Contact Info:</strong><br /><br />
          Email: <a href="mailto:sartajdeep.s.ug24@plaksha.edu.in">sartajdeep.s.ug24@plaksha.edu.in</a><br />
              <a href="mailto:sartajdeepsingh2005@gmail.com">sartajdeepsingh2005@gmail.com</a><br />
          Phone: <a href="tel:+916284696136">+91-6284696136</a><br />
          Location: Amritsar, Punjab, India 143001  <br/>Plaksha University, Mohali, Punjab, India 140306
        </div>

        <div className="entry">
          <strong>Links:</strong><br /><br />
          <a href="/Resume.pdf" target="_blank" rel="noreferrer">Curriculum Vitae</a><br />
          <a href="https://github.com/sartajdeep" target="_blank" rel="noreferrer">GitHub</a><br />
          <a href="https://www.linkedin.com/in/sartajdeep-singh-/" target="_blank" rel="noreferrer">LinkedIn</a><br />
        </div>
      </div>

      <div className="right entry" style={{ marginTop: '0' }}>
        <p>
          I am an undergraduate student pursuing a BTech in Computer Science and Artificial Intelligence (CSAI) at Plaksha University. My primary interests lie in applied artificial intelligence, large-scale data engineering, and leveraging algorithmic thinking to build impactful, data-driven solutions.
        </p>
        <p>
          Currently, my project work involves designing an end-to-end AI-driven hiring platform to manage recruitment lifecycles and engineering expansive corporate leadership datasets for publicly listed Indian companies. Previously, I served as a Research Assistant at Guru Nanak Dev University, where I collaborated on computing research, aided in data analysis, and managed research documentation.
        </p>
        <p>
          Beyond formal research and software development, I am deeply passionate about mathematics and education. I am the founder of "math.maverick," a platform dedicated to exploring intriguing mathematical questions and clever solving tricks. I have also volunteered as an instructor at Missiondeep Educational Trust, helping students grasp complex mathematical concepts.
        </p>
        <p>
          My foundational training in logic, algorithms, and languages like Python, C, and C++ continuously shapes my approach to both technical problem-solving and teaching.
        </p>
      </div>

      {/* Film Reel Section */}
      <div className="film-reel-container">
        <div className="film-reel-track">
          {reelPhotos.map((photo, index) => (
            <div
              key={`${photo.id}-${index}`}
              className="film-reel-item"
              onMouseEnter={() => setHoveredId(`${photo.id}-${index}`)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
              />
              {hoveredId === `${photo.id}-${index}` && (
                <div className="film-reel-alt-text">
                  {photo.alt}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
