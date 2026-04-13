import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import RevealText from './RevealText';

const STATS = [
  { target: 3,   suffix: '+', decimals: 0, label: 'Years of Experience'  },
  { target: 3.5, suffix: '',  decimals: 1, label: 'University GPA'       },
];

const StatCounter = ({ target, suffix, decimals, label, inView }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime = null;
    const duration = 1400;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };

    requestAnimationFrame(step);
  }, [inView, target, decimals]);

  return (
    <div className="glass glass-hover p-6 flex flex-col">
      <span className="text-4xl font-bold text-[#00d4ff] mb-2 tabular-nums">
        {decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}
        {suffix}
      </span>
      <span className="text-gray-400 text-sm leading-snug">{label}</span>
    </div>
  );
};

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const About = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <section
      name="about"
      className="relative w-full py-32 bg-[#070707] overflow-hidden"
    >
      {/* Subtle orb accent */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.08), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.p
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          About Me
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — statement + bio */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-8">
              <RevealText delay={0.1}>Passionate about building</RevealText>
              {' '}
              <RevealText delay={0.35} wordClassName="gradient-text">products that matter.</RevealText>
            </h2>

            <motion.p
              className="text-gray-400 text-lg leading-relaxed mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] } } }}
            >
              I'm a software engineer based in Salt Lake City, Utah. I recently graduated with a
              B.S. in Information Systems from the University of Utah's David Eccles School of
              Business, where I was awarded a full-tuition scholarship and maintained a 3.5 GPA.
            </motion.p>

            <motion.p
              className="text-gray-400 text-lg leading-relaxed mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] } } }}
            >
              I've shipped production software at Optix Inspections, worked as a full-stack intern
              at Fidelity Investments building CI/CD pipelines and cloud microservices, and supported
              digital operations at the Utah Jazz & Utah Mammoth. I'm actively looking for my next
              opportunity to build something great.
            </motion.p>

            <motion.div
              className="flex gap-4 flex-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] } } }}
            >
              <a
                href="https://www.linkedin.com/in/trevor-colson/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ padding: '10px 20px', fontSize: '0.875rem' }}
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/tcolson10"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ padding: '10px 20px', fontSize: '0.875rem' }}
              >
                GitHub ↗
              </a>
            </motion.div>
          </div>

          {/* Right — animated stats + education card */}
          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden:  {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            }}
          >
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <StatCounter {...stat} inView={statsInView} />
              </motion.div>
            ))}

            {/* Education card spans full width */}
            <motion.div
              variants={fadeUp}
              className="glass glass-hover col-span-2 p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: 'rgba(0,212,255,0.12)',
                    border: '1px solid rgba(0,212,255,0.2)',
                  }}
                >
                  <span className="text-[#00d4ff] text-sm font-bold">U</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">University of Utah</p>
                  <p className="text-gray-400 text-sm">B.S. Information Systems · May 2025</p>
                  <p className="text-gray-500 text-xs mt-1">
                    Full Tuition Scholarship · MTC Scholarship
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
