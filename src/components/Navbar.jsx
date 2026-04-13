import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const NAV_LINKS = [
  { label: 'Home',       to: 'home'       },
  { label: 'About',      to: 'about'      },
  { label: 'Experience', to: 'experience' },
  { label: 'Skills',     to: 'skills'     },
  { label: 'Projects',   to: 'projects'   },
  { label: 'Contact',    to: 'contact'    },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{
          background: scrolled ? 'rgba(7,7,7,0.7)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
          transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
        }}
      >
        {/* Left — fixed width so pill stays centered */}
        <div className="w-24 flex items-center">
          <Link to="home" smooth duration={500} className="text-white font-bold text-xl tracking-wider select-none">
            <span className="text-[#00d4ff]">T</span>
            <span>C</span>
          </Link>
        </div>

        {/* Center pill nav — desktop */}
        <div
          className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.09)',
          }}
        >
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={500}
              spy
              activeClass="!text-white !bg-white/10"
              className="px-4 py-1.5 rounded-full text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right — fixed width, mirror of left */}
        <div className="w-24 flex justify-end items-center">
          {/* Resume CTA — desktop */}
          <a
            href="/My Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-[#00d4ff] rounded-full px-4 py-2 transition-all duration-200 whitespace-nowrap"
            style={{ border: '1px solid rgba(0,212,255,0.3)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,212,255,0.08)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            Resume&nbsp;↗
          </a>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center"
            style={{ background: 'rgba(7,7,7,0.97)', backdropFilter: 'blur(24px)' }}
          >
            {/* Close button */}
            <button
              className="absolute top-5 right-6 text-white p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <FiX size={24} />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map(({ label, to }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={to}
                    smooth
                    duration={500}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-semibold text-gray-300 hover:text-[#00d4ff] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06 }}
                href="/My Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm font-medium text-[#00d4ff] border border-[#00d4ff]/30 rounded-full px-6 py-3"
              >
                Download Resume ↗
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
