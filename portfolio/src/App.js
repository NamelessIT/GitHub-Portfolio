// App.js
import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Navigate from './components/Navigate';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ActionRpgDemo from './components/ActionRpgDemo';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeDemo, setActiveDemo] = useState(null); // null | 'action-rpg'

  // Hiệu ứng loading lúc đầu
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  const openDemo = (id) => {
    setActiveDemo(id);
    window.scrollTo(0, 0);
  };

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
            <Projects onOpenDemo={openDemo} />
            <Contact />
          </div>
          {activeDemo === 'action-rpg' && (
            <ActionRpgDemo onBack={() => setActiveDemo(null)} />
          )}
        </div>
      )}
    </>
  );
}

export default App;
