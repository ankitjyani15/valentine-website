import { useMemo, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { FaGift } from 'react-icons/fa6'
import animationImageOne from './assets/images/animation-image1.PNG'
import animationImageTwo from './assets/images/animation-image2.JPG'
import bothImageOne from './assets/images/bothimage1.JPG'
import imageOne from './assets/images/image1.JPG'
import imageTwo from './assets/images/image2.JPG'
import imageThree from './assets/images/image3.JPG'
import imageFour from './assets/images/image4.JPG'
import imageFive from './assets/images/image5.JPG'
import videocallImageOne from './assets/images/Videocall-image1.PNG'
import videocallImageTwo from './assets/images/videocall-image2.PNG'
import videocallImageThree from './assets/images/videocall-image3.JPG'
import videocallImageFour from './assets/images/videocall-image4.PNG'
import videocallImageFive from './assets/images/videocall-image5.PNG'
import videocallImageSix from './assets/images/videocall-image6.PNG'
import './App.css'

function FloatingHearts({ count = 14 }) {
  return (
    <div className="floating-hearts" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={`heart-${index}`}
          className="floating-heart"
          style={{
            left: `${(index * 7) % 100}%`,
            animationDelay: `${(index % 6) * 0.7}s`,
            animationDuration: `${7 + (index % 5)}s`,
          }}
        >
          {index % 2 === 0 ? '💖' : '✨'}
        </span>
      ))}
    </div>
  )
}

function ValentineQuestionPage() {
  const navigate = useNavigate()
  const [showNoMessage, setShowNoMessage] = useState(false)
  const [noClicks, setNoClicks] = useState(0)
  const [noPosition, setNoPosition] = useState({ top: 0, left: 0 })
  const [isTransitioning, setIsTransitioning] = useState(false)

  const rethinkLines = useMemo(
    () => [
      'Please rethink this once more... my heart is soft.',
      'One more thought? You are my favorite person.',
      'I promise unlimited love, warm hugs, and cute dates.',
      'Still no? I am almost about to cry... :(',
      'I can offer bonus chocolates and your favorite snacks too.',
      'Imagine us watching sunsets and taking cute selfies together.',
      'My playlist already has your songs in the top spot.',
      'Final warning: puppy eyes activated... do not ignore this face.',
      'I will write you a tiny love note every single day.',
      'No button is being dramatic, but my love is still calm and real.',
      'Okay last-last chance... say yes and make this heart very happy.',
    ],
    []
  )

  const moveNoButton = () => {
    setShowNoMessage(true)
    setNoClicks((prev) => prev + 1)

    const maxTop = 80
    const maxLeft = 70
    const randomTop = Math.floor(Math.random() * maxTop)
    const randomLeft = Math.floor(Math.random() * maxLeft)
    setNoPosition({ top: randomTop, left: randomLeft })
  }

  const activeRethinkLine = rethinkLines[Math.min(noClicks, rethinkLines.length - 1)]

  const handleYesClick = () => {
    setIsTransitioning(true)
    window.setTimeout(() => {
      navigate('/yes')
    }, 520)
  }

  return (
    <main className="app-shell">
      <FloatingHearts />
      {isTransitioning && (
        <div className="page-transition">
          <p className="transition-text">Loading your special love page...</p>
        </div>
      )}
      <section className="card glow-card">
        <p className="intro-line">For the girl who makes every day beautiful</p>
        <h1 className="title">Will you be my Valentine, Lakshita?</h1>
        <p className="heart">❤️</p>
        <p className="sub-line">
          You are my sweetest thought, my calm place, and my favorite smile.
        </p>

        <div className="button-zone">
          <div className="button-row">
            <button className="btn btn-yes btn-main-pulse" onClick={handleYesClick}>
              Yes
            </button>
            <button
              className={`btn btn-no ${showNoMessage ? 'btn-no-floating' : ''}`}
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              style={
                showNoMessage
                  ? {
                      top: `${noPosition.top}%`,
                      left: `${noPosition.left}%`,
                    }
                  : undefined
              }
            >
              No
            </button>
          </div>
        </div>

        {showNoMessage && (
          <div className="no-message">
            <p>{activeRethinkLine}</p>
            <p className="cry">Please rethink... I am about to cry 🥺</p>
          </div>
        )}
      </section>
    </main>
  )
}

function YesPage() {
  const [showTooLate, setShowTooLate] = useState(false)
  const [showSecretNote, setShowSecretNote] = useState(false)
  const [openedMemories, setOpenedMemories] = useState({})

  const memories = [
    {
      image: videocallImageOne,
      line: 'This moment proves we are the cutest duo ever.',
    },
    {
      image: videocallImageTwo,
      line: 'Even silence with you feels warm and lovely.',
    },
    {
      image: videocallImageThree,
      line: 'That smile in this call made my full day better.',
    },
    {
      image: videocallImageFour,
      line: 'One more memory where I forgot everything except you.',
    },
    {
      image: videocallImageFive,
      line: 'Our random talks are my favorite comfort place.',
    },
    {
      image: videocallImageSix,
      line: 'Your laugh here is still living in my heart.',
    },
  ]

  const timelineMoments = [
    {
      phase: 'Tiny angel days',
      title: 'Tiny sunshine era',
      line: 'One tiny smile, and the world already looked brighter.',
      image: imageFive,
    },
    {
      phase: 'Little star days',
      title: 'Cutie with big dreams',
      line: 'That spark in your eyes already said you were special.',
      image: imageFour,
    },
    {
      phase: 'Beautiful now',
      title: 'Glow level: unstoppable',
      line: 'The same pure heart, now with extra grace and confidence.',
      image: imageOne,
    },
    {
      phase: 'Beautiful now',
      title: 'My favorite face',
      line: 'This smile is still my happy place after every long day.',
      image: imageTwo,
    },
    {
      phase: 'Beautiful now',
      title: 'You in Saree = 🔥',
      line: 'Past, present, forever - you keep becoming more beautiful.',
      image: imageThree,
    },
  ]

  const toggleMemory = (index) => {
    setOpenedMemories((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <main className="app-shell">
      <FloatingHearts count={18} />
      <section className="card yes-card glow-card">
        <div className="celebration-ribbon">Our forever story starts here 💞</div>
        <h2 className="yes-title">Good Choice Lakshu (Kuchu Puchu) 😌</h2>
        <p className="yes-text">
          You just unlocked unlimited hugs, kisses, cuddles as soon as we meet.
        </p>
        <div className="promise-tags">
          <span>Forever us</span>
          <span>Unlimited cuddles</span>
          <span>One heart, two souls</span>
        </div>

        <div className="hug-strip" aria-label="hugging and cheek kissing animation images">
          <img
            className="hug-image"
            src={animationImageOne}
            alt="Hugging animation"
          />
          <img
            className="hug-image"
            src={animationImageTwo}
            alt="Kiss on cheek animation"
          />
        </div>

        <h3 className="yes-subtitle">Now you are stuck with me forever ♾️</h3>

        <div className="decision-block reveal-up">
          <p className="decision-title">Wait... do you want to change your decision? 🤔</p>
          <button className="btn btn-no-switch" onClick={() => setShowTooLate(true)}>
            Actually... No
          </button>
        </div>

        {showTooLate && (
          <>
            <div className="late-block reveal-up">
              <p className="late-badge">Official Relationship Rules</p>
              <h3 className="late-title">Too late! 😠</h3>
              <p className="late-line">You already said yes, which means your forever contract is active:</p>
              <ul className="late-list">
                <li>
                  <span className="late-point-icon">💘</span>
                  <span>Now you are only mine for all the seven births.</span>
                </li>
                <li>
                  <span className="late-point-icon">📸</span>
                  <span>A photo of you every morning, afternoon, and evening.</span>
                </li>
                <li>
                  <span className="late-point-icon">📞</span>
                  <span>Daily VC karni chahiye, without any nakhre.</span>
                </li>
                <li>
                  <span className="late-point-icon">🫶</span>
                  <span>Mujhse gussa toh bilkul bhi nahi ho sakte.</span>
                </li>
              </ul>
            </div>

            <div className="together-block reveal-up">
              <h3 className="together-title">
                We need to meet soon, so we do not need these AI-generated pictures 😌💕
              </h3>
              <img className="together-image" src={bothImageOne} alt="Us together" />
            </div>
          </>
        )}

        <div className="secret-note-section reveal-up">
          <h3 className="yes-subtitle">Secret note for you 💌</h3>
          <p className="yes-text">Click on the envelope to see it.</p>

          <button
            className="envelope-shell"
            onClick={() => setShowSecretNote((prev) => !prev)}
            aria-expanded={showSecretNote}
          >
            <span className={`envelope-flap ${showSecretNote ? 'envelope-flap-open' : ''}`} />
            <span className="envelope-body" />
            <span className={`note-paper ${showSecretNote ? 'note-paper-open' : ''}`}>
              You are my safe place, my cutest habit, and my favorite notification every day.
              <br />
              Meet me soon because hugs are pending and my heart already belongs to you.
            </span>
          </button>
        </div>

        <div className="memories-section reveal-up">
          <h3 className="yes-subtitle memories-title">Our cute memories 📷</h3>
          <div className="memory-grid">
            {memories.map((memory, index) => (
              <div className="memory-card" key={memory.image}>
                <button
                  className="memory-toggle"
                  onClick={() => toggleMemory(index)}
                  aria-expanded={Boolean(openedMemories[index])}
                  aria-label={openedMemories[index] ? `Hide memory ${index + 1}` : `Open memory ${index + 1}`}
                >
                  {!openedMemories[index] ? (
                    <div className="memory-reveal memory-reveal-open">
                      <div className="memory-visual memory-visual-placeholder gift-placeholder">
                        <FaGift className="gift-icon" aria-hidden="true" />
                        <p className="gift-text">Tap to open gift memory</p>
                      </div>
                      <p className="memory-line memory-line-placeholder">
                        Tap the gift to reveal this cute memory
                      </p>
                    </div>
                  ) : (
                    <div className="memory-reveal memory-reveal-open">
                      <div className="memory-visual memory-visual-open">
                        <img
                          src={memory.image}
                          alt={`Cute memory ${index + 1}`}
                          className="memory-image"
                        />
                      </div>
                      <p className="memory-line">{memory.line}</p>
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-section reveal-up">
          <h3 className="timeline-title">Her cute timeline that stole my heart ✨</h3>
          <p className="timeline-subtitle">From baby Lakshu to my forever favorite person.</p>
          <div className="timeline-track timeline-track-top">
            {timelineMoments.slice(0, 2).map((moment) => (
              <article className="timeline-card" key={`top-${moment.title}`}>
                <p className="timeline-chip">{moment.phase}</p>
                <img src={moment.image} alt={moment.title} className="timeline-image" />
                <h4 className="timeline-card-title">{moment.title}</h4>
                <p className="timeline-line">{moment.line}</p>
              </article>
            ))}
          </div>
          <div className="timeline-track timeline-track-bottom">
            {timelineMoments.slice(2).map((moment) => (
              <article className="timeline-card" key={`bottom-${moment.title}`}>
                <p className="timeline-chip">{moment.phase}</p>
                <img src={moment.image} alt={moment.title} className="timeline-image" />
                <h4 className="timeline-card-title">{moment.title}</h4>
                <p className="timeline-line">{moment.line}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="love-section reveal-up">
          <h3 className="love-title">Things I love about You 💭</h3>
          <p className="love-intro">
            You were, you are, you will be my comfort place always. Distance is just a number, but
            us? we are infinite.
          </p>

          <div className="love-grid">
            <article className="love-card">
              <h4 className="love-card-title">Your voice</h4>
              <p className="love-card-text">
                I can listen to your voice 24*7 for my whole life, and still want one more minute.
              </p>
            </article>
            <article className="love-card">
              <h4 className="love-card-title">Your smile</h4>
              <p className="love-card-text">
                One smile from you and my tiredness, gussa, and every heavy thought just melts away.
              </p>
            </article>
            <article className="love-card">
              <h4 className="love-card-title">Your caring nature</h4>
              <p className="love-card-text">
                The way you check on me, even in tiny moments, makes me feel truly loved.
              </p>
            </article>
            <article className="love-card">
              <h4 className="love-card-title">Your expressions</h4>
              <p className="love-card-text">
                Your expressions are the cutest language in the world and my personal happiness boost.
              </p>
            </article>
            <article className="love-card">
              <h4 className="love-card-title">Your maturity in problems</h4>
              <p className="love-card-text">
                The way you deal with problems, and even our fights, teaches me love with patience.
              </p>
            </article>
            <article className="love-card">
              <h4 className="love-card-title">Everything that is you</h4>
              <p className="love-card-text">
                I love the way you are. I love everything about you, today and always.
              </p>
            </article>
          </div>
        </div>

        <div className="final-note-section reveal-up">
          <p className="final-note-text">
            Sorry in advance for my upcoming mistakes. I will try my best to make fewer mistakes. I
            am ready to accept every mistake I make, and even when I fail, I will still keep trying.
            What I cannot afford is losing you. I want to spend the rest of my life with you - in
            happiness, sadness, enjoyment, celebrations, and success. I love you so so much Lakshu
            ❤️🤗
          </p>
          <p className="final-note-sign">Made with love by your innocent boyfriend.</p>
        </div>
      </section>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<ValentineQuestionPage />} />
      <Route path="/yes" element={<YesPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
