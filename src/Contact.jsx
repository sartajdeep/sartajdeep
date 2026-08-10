import { useState } from 'react';

function Contact() {
  const photoData = [
    // Originals
    { id: 1, src: './Photos/bio.JPG', alt: 'Sartajdeep Singh with Avni Gaur, Kanav Nanda, and Atri Tejaswi during Biomimicry class' },
    { id: 2, src: './Photos/class2.jpg', alt: 'Group photo at Spring Blossom School, Class 2' },
    { id: 3, src: './Photos/class12.jpg', alt: 'Group photo at Spring Dale Senior School, Class 12' },
    { id: 4, src: './Photos/delhigurudwara.jpg', alt: 'Gurudwara Bangla Sahib, Delhi' },
    { id: 5, src: './Photos/fieldvisit.JPG', alt: 'Sartajdeep Singh with Rudra Satwik and Shourrya Gupta during field visit' },
    { id: 6, src: './Photos/gaganhasteer.jpg', alt: 'Sartajdeep Singh with Gagan Hasteer (VP Content @ Netflix)' },
    { id: 7, src: './Photos/goldentemple.jpg', alt: 'Golden Temple, Amritsar' },
    { id: 8, src: './Photos/jefries.jpg', alt: 'Photo with Jeffries' },
    { id: 9, src: './Photos/lalitagarwal.jpg', alt: 'Photo with Lalit Agarwal and Mukul Agarwal' },
    { id: 10, src: './Photos/LKG.jpg', alt: 'LKG (Lower Kindergarten)' },
    { id: 11, src: './Photos/lohri.jpg', alt: 'Lohri celebration' },
    { id: 12, src: './Photos/mathlab.jpg', alt: 'Math Lab' },
    { id: 13, src: './Photos/mechatronics.JPG', alt: 'Mechatronics class at Plaksha' },
    { id: 14, src: './Photos/mohitthukral.jpg', alt: 'Photo with Mohit Thukral' },
    { id: 15, src: './Photos/mumbai.jpg', alt: 'Mumbai' },
    { id: 16, src: './Photos/neerajaggarwal.jpg', alt: 'Photo with Neeraj Aggarwal' },
    { id: 17, src: './Photos/neerajwife.jpg', alt: 'Photo with Neeraj\'s wife' },
    { id: 18, src: './Photos/springdale.jpg', alt: 'Spring Dale Senior School' },
    { id: 19, src: './Photos/ug24.JPG', alt: 'UG 24 batch at Plaksha University' },

    // New Additions
    { id: 20, src: './Photos/Abhaya, Nalin and Sartaj.jpeg', alt: 'Abhaya, Nalin and Sartaj' },
    { id: 21, src: "./Photos/Amaan's poster.jpeg", alt: "Amaan's poster" },
    { id: 22, src: './Photos/Anjaney and Friends at exibition.jpeg', alt: 'Anjaney and Friends at exhibition' },
    { id: 23, src: './Photos/Avni, Kanav & Sartaj.jpeg', alt: 'Avni, Kanav & Sartaj' },
    { id: 24, src: './Photos/Field Visit with Group 32- Ishita, Hussein, Mannan Sharma.jpeg', alt: 'Field Visit with Group 32 - Ishita, Hussein, Mannan Sharma' },
    { id: 25, src: './Photos/Field Visit.jpeg', alt: 'Field Visit' },
    { id: 26, src: './Photos/Fooling around with batchmates.jpeg', alt: 'Fooling around with batchmates' },
    { id: 27, src: './Photos/GOAT Advik- winner of Badminton Doubles at YTS+ .jpeg', alt: 'GOAT Advik - winner of Badminton Doubles at YTS+' },
    { id: 28, src: './Photos/GOAT kids @YTS+.jpeg', alt: 'GOAT kids @ YTS+' },
    { id: 29, src: "./Photos/Kanav's Surprise Birthday Celebration.jpeg", alt: "Kanav's Surprise Birthday Celebration" },
    { id: 30, src: './Photos/Nalin and Sartaj.jpeg', alt: 'Nalin and Sartaj' },
    { id: 31, src: './Photos/Niyant and Sartaj.jpeg', alt: 'Niyant and Sartaj' },
    { id: 32, src: "./Photos/Niyant's Phone wallpaper - with me .jpeg", alt: "Niyant's Phone wallpaper - with me" },
    { id: 33, src: './Photos/Reyansh and Sartaj.jpeg', alt: 'Reyansh and Sartaj' },
    { id: 34, src: './Photos/Reyansh, Sartaj and Sarthak (insider reference - GOTH).jpeg', alt: 'Reyansh, Sartaj and Sarthak (insider reference - GOTH)' },
    { id: 35, src: './Photos/Sartaj and Abhaya.jpeg', alt: 'Sartaj and Abhaya' },
    { id: 36, src: './Photos/Sartaj and Nalin.jpeg', alt: 'Sartaj and Nalin' },
    { id: 37, src: './Photos/Sartaj and Sameera.jpeg', alt: 'Sartaj and Sameera' },
    { id: 38, src: './Photos/Shiv and Sartaj.jpeg', alt: 'Shiv and Sartaj' },
    { id: 39, src: './Photos/Vijith, Rishi showing around their YTS project.jpeg', alt: 'Vijith, Rishi showing around their YTS project' },
    { id: 40, src: './Photos/Vishvag and Sartaj.jpeg', alt: 'Vishvag and Sartaj' },
    { id: 41, src: './Photos/Vishvag, Vijith, Rishi with Sartaj .jpeg', alt: 'Vishvag, Vijith, Rishi with Sartaj' },
    { id: 42, src: './Photos/With Atri at Navratri.jpeg', alt: 'With Atri at Navratri' },
    { id: 43, src: './Photos/With cousins - random day cake cutting.jpeg', alt: 'With cousins - random day cake cutting' },
    { id: 44, src: './Photos/YTS+.jpeg', alt: 'YTS+' },
    { id: 45, src: './Photos/Zohar and Sartaj.jpeg', alt: 'Zohar and Sartaj' }
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div id="content">
      <h1 className="main-title" style={{ gridColumn: '1 / -1' }}>
        Contact & Bio
      </h1>

      <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginBottom: '40px' }}>
        <img
          src="./plaksha_group_pic.jpeg"
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
          Location: Amritsar, Punjab, India 143001  <br />Plaksha University, Mohali, Punjab, India 140306
        </div>

        <div className="entry">
          <strong>Links:</strong><br /><br />
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

      {/* Clean Photo Collage Grid Section */}
      <div className="photo-collage-wrapper">
        <h2 className="photo-collage-title">Memories & Gallery</h2>
        <div className="photo-collage-grid">
          {photoData.map((photo) => (
            <div
              key={photo.id}
              className="photo-collage-item"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
              />
              <div className="photo-collage-caption">
                {photo.alt}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="collage-lightbox-overlay"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="collage-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="collage-lightbox-close"
              onClick={() => setSelectedPhoto(null)}
            >
              &times;
            </button>
            <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
            <div className="collage-lightbox-caption">
              {selectedPhoto.alt}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
