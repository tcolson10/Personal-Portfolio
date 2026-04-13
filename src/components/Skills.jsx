import React from 'react';
import { motion } from 'framer-motion';
import RevealText from './RevealText';

const SKILL_GROUPS = [
  {
    category: 'Languages',
    color:    '#f59e0b',
    skills: [
      { name: 'JavaScript', dot: '#f7df1e' },
      { name: 'Python',     dot: '#3b82f6' },
      { name: 'Java',       dot: '#ef4444' },
      { name: 'SQL',        dot: '#8b5cf6' },
      { name: 'HTML',       dot: '#f97316' },
      { name: 'CSS',        dot: '#38bdf8' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    color:    '#00d4ff',
    skills: [
      { name: 'React',    dot: '#61dafb' },
      { name: 'Next.js',  dot: '#e2e8f0' },
      { name: 'Django',   dot: '#10b981' },
    ],
  },
  {
    category: 'Tools & Platforms',
    color:    '#10b981',
    skills: [
      { name: 'Firebase',   dot: '#f59e0b' },
      { name: 'Docker',     dot: '#2496ed' },
      { name: 'Jenkins',    dot: '#e2e8f0' },
      { name: 'Kubernetes', dot: '#326ce5' },
      { name: 'Git/GitHub', dot: '#e2e8f0' },
      { name: 'Tableau',    dot: '#1f77b4' },
    ],
  },
  {
    category: 'Core Competencies',
    color:    '#7c3aed',
    skills: [
      { name: 'Business Systems Analysis', dot: '#7c3aed' },
      { name: 'Process Improvement',       dot: '#7c3aed' },
      { name: 'Data Analysis',             dot: '#7c3aed' },
      { name: 'English & Spanish (Fluent)', dot: '#7c3aed' },
    ],
  },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Skills = () => {
  return (
    <section
      name="skills"
      className="relative w-full py-32 bg-[#070707] overflow-hidden"
    >
      {/* Accent orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.05), transparent 60%)',
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
          Technical Skills
        </motion.p>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 leading-tight">
          <RevealText delay={0.1}>What I</RevealText>
          {' '}
          <RevealText delay={0.2} wordClassName="gradient-text">work with.</RevealText>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={{
                hidden:  {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: gi * 0.1 } },
              }}
              className="glass p-6"
            >
              {/* Category header */}
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-5">
                <div
                  className="w-1.5 h-5 rounded-full"
                  style={{ background: group.color }}
                />
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: group.color }}
                >
                  {group.category}
                </span>
              </motion.div>

              {/* Badge grid */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map(({ name, dot }) => (
                  <motion.span
                    key={name}
                    variants={fadeUp}
                    className="skill-badge"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: dot }}
                    />
                    {name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
