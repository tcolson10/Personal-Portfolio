import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Intro = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1700);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ background: '#070707' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Ambient glow behind logo */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0,212,255,0.14), transparent 70%)',
          filter: 'blur(80px)',
        }}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      {/* TC Monogram */}
      <motion.div
        className="relative z-10 select-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-9xl font-bold tracking-tighter leading-none">
          <span className="text-[#00d4ff]">T</span>
          <span className="text-white">C</span>
        </span>
      </motion.div>

      {/* Progress bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <motion.div
          className="h-full origin-left"
          style={{ background: 'linear-gradient(90deg, #00d4ff, #7c3aed)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.55, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
};

export default Intro;
