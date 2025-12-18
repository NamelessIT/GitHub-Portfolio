import React,{ useEffect, useRef } from "react";

const Home = () => {
  const typingRef = useRef(null);
  const cursorRef = useRef(null);
  const PUBLIC_URL = process.env.PUBLIC_URL;

  useEffect(() => {
    const phrases = [
      "Application Developer",
      "Software Engineer",
      "Game Developer",
      "Web Developer"
    ];

    let phraseIndex = 0;
    let letterIndex = 0;
    let typing = true;

    const typeEffect = () => {
      const currentPhrase = phrases[phraseIndex];

      if (!typingRef.current) return;

      if (typing) {
        typingRef.current.textContent = currentPhrase.substring(0, letterIndex + 1);
        letterIndex++;

        if (letterIndex === currentPhrase.length) {
          typing = false;
          setTimeout(typeEffect, 1500);
          return;
        }
      } else {
        typingRef.current.textContent = currentPhrase.substring(0, letterIndex - 1);
        letterIndex--;

        if (letterIndex === 0) {
          typing = true;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }

      setTimeout(typeEffect, typing ? 100 : 50);
    };

    typeEffect();
  }, []);

  return (
    <section className="home section" id="Home">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">Hello, my name is <span className="name">Lê Hoàng Huy</span></h3>
            <h3 className="profession">
              I'm a 
              <span> </span>
              <span className="typing" ref={typingRef}></span>
              <span className="typed-cursor typed-cursor--blink" ref={cursorRef} aria-hidden="true">|</span>
            </h3>
            <p>I am studying software engineering, and my expertise is to create websites, applications, develop video-games</p>
            <a href="#Contact"  rel="noopener noreferrer" className="btn hire-me">Hire Me</a>
          </div>
          <div className="home-img padd-15">
            <img src={PUBLIC_URL + "/logo192.png"} alt="home-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
