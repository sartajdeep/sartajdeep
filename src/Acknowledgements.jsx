import { useState, useEffect, useRef, useCallback } from 'react';

const NAMES_LIST = [
  // Mentors & Teachers
  'DR. PRAKARSH SINGH',
  'DR. ANUPAM SOBTI',
  'MS. NAMITA LIKHARI',
  'MS. VANDANA SHARMA',
  'MS. RANJEET KAUR',
  'MS. JYOTI SEHGAL',
  'MS. NEHA',

  // YTS+ Mentees & Sartaj FC
  'VIJITH KAPOOR',
  'VISHVAG TANEJA',
  'SHIV AHUJA',
  'RISHI GUPTA',
  'ABHAYA SINGH',
  'ADVIK SHANKER AGARWAL',
  'ANJANEY PANDEY',
  'ZOHARFATEH SINGH',
  'NALIN CHANDRA',
  'REYANSH CHAUDHARI',
  'NIYANT',
  'SARTHAK SINGLA',
  'REYANSH AGARWALLA',
  'MAHIR GORADIA',

  // Friends & College Life
  'KANAV NANDA',
  'PULKIT SAREEN',
  'ANANYA SINGH',
  'JIVTESHWAR SINGH',
  'OJ SINGH DHILLON',
  'AMAAN MEHRA',
];

const CHAR_SET = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-&+\'';
const BOARD_SLOTS = 22;

function SplitFlapBoard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedChars, setDisplayedChars] = useState(
    Array(BOARD_SLOTS).fill(' ')
  );
  const [flippingSlots, setFlippingSlots] = useState(
    Array(BOARD_SLOTS).fill(false)
  );
  const [isPaused, setIsPaused] = useState(false);

  const currentName = NAMES_LIST[currentIndex];
  const targetText = currentName.padEnd(BOARD_SLOTS, ' ').slice(0, BOARD_SLOTS);
  const intervalRef = useRef(null);

  const nextItem = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % NAMES_LIST.length);
  }, []);

  // Character flipping engine
  useEffect(() => {
    let currentChars = [...displayedChars];
    const targetChars = targetText.split('');
    let activeFlips = Array(BOARD_SLOTS).fill(true);
    let stepCount = Array(BOARD_SLOTS).fill(0);

    // Staggered mechanical wave delay
    const delays = Array.from({ length: BOARD_SLOTS }, (_, i) => Math.floor(i * 1.2));

    const interval = setInterval(() => {
      let anyActive = false;
      const nextChars = [...currentChars];
      const nextFlipping = Array(BOARD_SLOTS).fill(false);

      for (let i = 0; i < BOARD_SLOTS; i++) {
        if (!activeFlips[i]) continue;

        if (stepCount[i] < delays[i]) {
          stepCount[i]++;
          anyActive = true;
          continue;
        }

        const currentTarget = targetChars[i];
        const currentChar = currentChars[i];

        if (currentChar === currentTarget) {
          activeFlips[i] = false;
        } else {
          anyActive = true;
          nextFlipping[i] = true;
          const currIdx = CHAR_SET.indexOf(currentChar);
          const nextIdx = currIdx === -1 ? 0 : (currIdx + 1) % CHAR_SET.length;
          nextChars[i] = CHAR_SET[nextIdx];
        }
      }

      currentChars = nextChars;
      setDisplayedChars([...nextChars]);
      setFlippingSlots(nextFlipping);

      if (!anyActive) {
        clearInterval(interval);
        setFlippingSlots(Array(BOARD_SLOTS).fill(false));
      }
    }, 38);

    return () => clearInterval(interval);
  }, [currentIndex, targetText]);

  // Automatic cycle timer
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setTimeout(() => {
      nextItem();
    }, 3200);

    return () => clearTimeout(intervalRef.current);
  }, [currentIndex, isPaused, nextItem]);

  return (
    <div
      className="split-flap-board"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={nextItem}
      title="Click to skip to next name · Hover to pause"
      role="region"
      aria-label="Airport departure-style acknowledgements board"
    >
      <div className="split-flap-row">
        {displayedChars.map((char, index) => (
          <div
            key={index}
            className={`split-flap-tile ${flippingSlots[index] ? 'flipping' : ''}`}
          >
            <div className="split-flap-top">
              <span>{char === ' ' ? '\u00A0' : char}</span>
            </div>
            <div className="split-flap-divider"></div>
            <div className="split-flap-bottom">
              <span>{char === ' ' ? '\u00A0' : char}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Acknowledgements() {
  return (
    <div id="content" className="single-wide">
      <h1 className="main-title">
        Acknowledgements & Gratitude
      </h1>

      {/* Floating Black Flaps */}
      <SplitFlapBoard />

      <div className="entry" style={{ gridColumn: '1 / -1', marginTop: '30px' }}>
        <p style={{ fontSize: '1.15em', marginBottom: '30px', fontStyle: 'italic', color: '#444444' }}>
          I am deeply grateful to the mentors, teachers, friends, and students whose guidance, friendship, and presence have enriched my life and taught me invaluable lessons.
        </p>

        <h3>Mentors & Teachers</h3>
        <p>
          I am forever indebted to my mentors and teachers for their unwavering guidance, intellectual encouragement, and wisdom:
        </p>
        <ul>
          <li><strong>Dr. Prakarsh Singh</strong></li>
          <li><strong>Dr. Anupam Sobti</strong></li>
          <li><strong>Ms. Namita Likhari</strong></li>
          <li><strong>Ms. Vandana Sharma</strong></li>
          <li><strong>Ms. Ranjeet Kaur</strong></li>
          <li><strong>Ms. Jyoti Sehgal</strong></li>
          <li><strong>Ms. Neha</strong></li>
        </ul>
        <hr />

        <h3>YTS Mentees & &ldquo;Sartaj FC&rdquo; ❤️</h3>
        <p>
          A special mention to the wonderful students I had the privilege to mentor during <strong>YTS+</strong>. They taught me so much, were exceptionally respectful, and made the experience truly unforgettable &mdash; even forming a football team named <strong>Sartaj FC</strong> ❤️:
        </p>
        <p style={{ lineHeight: '1.8em' }}>
          Vijith Kapoor, Vishvag Taneja, Shiv Ahuja, Rishi Gupta, Abhaya Singh, Advik Shanker Agarwal, Anjaney Pandey, Zoharfateh Singh Deepak, Nalin Chandra, Reyansh Chaudhari, Niyant, Sarthak Singla, Reyansh Agarwalla, Mahir Goradia.
        </p>
        <hr />

        <h3>Friends & College Life</h3>
        <ul>
          <li>
            <strong>Kanav Nanda</strong> &ndash; My best; grateful for his constant presence and support.
          </li>
          <li>
            <strong>School Friends</strong> &ndash; Pulkit Sareen, Ananya Singh, Jivteshwar Singh, Oj Singh Dhillon, Amaan Mehra. Grateful to have every single one of them in my life.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Acknowledgements;
