import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Work';
import Contact from './components/Contact';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIntroComplete(true);
  };

  return (
    <div className="bg-[#070707] noise">
      <AnimatePresence>
        {showIntro && <Intro key="intro" onComplete={handleIntroComplete} />}
      </AnimatePresence>
      <ScrollProgress />
      <Navbar />
      <Home introComplete={introComplete} />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
