// App.js
import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Navigate from './components/Navigate';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  // Hiệu ứng loading lúc đầu
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading && <div id="loader" className="loading-text">Loading...</div>}
      {!loading && (
        <div className="App">
          <Navigate />
          <div className="main-content">
            <Home />
            <About />
            <Education />
            <div id='Projects'>
              <Projects />
            </div>
            {/* Truyền hàm setLoading xuống */}
            <Contact triggerLoading={() => {
              setLoading(true);
              setTimeout(() => setLoading(false), 1000);
            }} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
