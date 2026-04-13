import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiChevronDown } from 'react-icons/fi';

const ROLES = ['Software Engineer', 'Problem Solver', 'Technologist', 'Builder'];

const useTypewriter = (words, typingSpeed = 90, deletingSpeed = 50, pauseMs = 2000) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;
    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseMs);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
};

// Helper: spread onto motion elements for fade-in gated by introComplete
const fade = (introComplete, delay = 0) => ({
  initial: { opacity: 0 },
  animate: introComplete ? { opacity: 1 } : { opacity: 0 },
  transition: { duration: 0.6, delay },
});

// Helper: word reveal gated by introComplete
const wordReveal = (introComplete, delay = 0) => ({
  initial: { y: '115%' },
  animate: introComplete ? { y: 0 } : { y: '115%' },
  transition: { duration: 0.78, delay, ease: [0.22, 1, 0.36, 1] },
});

const Home = ({ introComplete }) => {
  const typed = useTypewriter(ROLES);
  const heroRef = useRef(null);

  // Mouse spotlight spring values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 55, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 55, damping: 18 });

  const handleMouseMove = useCallback(
    (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  // Initialise spotlight to center
  useEffect(() => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      mouseX.set(rect.width / 2);
      mouseY.set(rect.height / 2);
    }
  }, [mouseX, mouseY]);

  return (
    <section
      ref={heroRef}
      name="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#070707]"
      onMouseMove={handleMouseMove}
    >
      {/* Background orbs */}
      <div className="orb orb-cyan" />
      <div className="orb orb-purple" />
      <div className="orb orb-blue" />

      {/* Mouse-tracking spotlight */}
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.07), transparent 60%)',
          filter: 'blur(80px)',
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          top: 0,
          left: 0,
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">

        {/* Open to work badge */}
        <motion.div
          {...fade(introComplete, 0)}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-gray-300 text-xs font-medium tracking-wide">
            Open to New Opportunities
          </span>
        </motion.div>

        {/* Hi, I'm */}
        <motion.p {...fade(introComplete, 0.15)} className="section-label mb-6">
          Hi, I'm
        </motion.p>

        {/* Name — word-by-word reveal */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[108px] font-bold text-white leading-none tracking-tight mb-6">
          <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
            <motion.span className="inline-block" {...wordReveal(introComplete, 0.08)}>
              Trevor
            </motion.span>
          </span>
          {'\u00a0'}
          <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
            <motion.span className="inline-block gradient-text" {...wordReveal(introComplete, 0.22)}>
              Colson
            </motion.span>
          </span>
          <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
            <motion.span
              className="inline-block"
              style={{ color: '#00d4ff' }}
              {...wordReveal(introComplete, 0.34)}
            >
              .
            </motion.span>
          </span>
        </h1>

        {/* Typewriter */}
        <motion.div
          {...fade(introComplete, 0.5)}
          className="text-xl sm:text-2xl text-gray-400 font-medium mb-10 h-8"
        >
          <span>{typed}</span>
          <span className="cursor-blink text-[#00d4ff] ml-0.5">|</span>
        </motion.div>

        {/* Bio */}
        <motion.p
          {...fade(introComplete, 0.65)}
          className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Software engineer based in Salt Lake City, UT.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fade(introComplete, 0.8)}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="projects" smooth duration={600}>
            <button className="btn-accent text-base">View My Work</button>
          </Link>
          <a href="/My Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="btn-outline text-base">Resume</button>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — chevron arrow */}
      <motion.div
        {...fade(introComplete, 1.4)}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-gray-600 text-xs tracking-widest uppercase mb-1">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <FiChevronDown size={22} color="rgba(0,212,255,0.7)" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
