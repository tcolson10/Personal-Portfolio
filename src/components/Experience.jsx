import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RevealText from './RevealText';

const JOBS = [
  {
    company:   'Optix Inspections',
    role:      'Software Engineer',
    period:    'Oct 2025 — Present',
    location:  'Salt Lake City, UT',
    color:     '#00d4ff',
    bullets: [
      'Built and enhanced core features for a React + Firebase platform used by 50+ operators for heavy machinery inspections',
      'Enabled real-time step logging, photo/video uploads, and progress tracking across inspection workflows',
      'Worked with operations teams to analyze workflows, gather requirements, and ship data-driven product improvements',
      'Built internal dashboards and reports to track usage, completion rates, and operational performance',
    ],
  },
  {
    company:   'Utah Jazz & Utah Mammoth',
    role:      'Data Asset Management Intern',
    period:    'Oct 2024 — Oct 2025',
    location:  'Salt Lake City, UT',
    color:     '#7c3aed',
    bullets: [
      'Reviewed and tagged game footage in the DAM system, categorizing clips by player, play type, and content ratings',
      'Ensured consistent metadata to improve asset discoverability and accelerate content creation for marketing',
      'Supported a full NBA media day — ingested, organized, and sorted large volumes of photo and video assets',
      'Collaborated with marketing, media, and creative teams to align tagging standards and optimize asset organization',
    ],
  },
  {
    company:   'Fidelity Investments',
    role:      'Full-Stack Software Engineer Intern',
    period:    'May 2024 — Aug 2024',
    location:  'Salt Lake City, UT',
    color:     '#10b981',
    bullets: [
      'Built CI/CD pipelines using Jenkins, Docker, and Kubernetes for modernized enterprise deployments',
      'Developed cloud microservices in Python, Go, and Groovy to improve backend performance',
      'Supported large-scale financial systems through data analysis and system monitoring',
      'Collaborated with engineering, DevOps, and security stakeholders to improve deployment reliability',
    ],
  },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Experience = () => {
  const [activeJob, setActiveJob] = useState(0);
  const job = JOBS[activeJob];

  return (
    <section
      name="experience"
      className="relative w-full py-32 bg-[#070707] overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.05), transparent 70%)',
          filter: 'blur(100px)',
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
          Experience
        </motion.p>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 leading-tight">
          <RevealText delay={0.1}>Where I've</RevealText>
          {' '}
          <RevealText delay={0.25} wordClassName="gradient-text">worked.</RevealText>
        </h2>

        <motion.div
          className="grid md:grid-cols-[240px_1fr] gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Tab list */}
          <motion.div
            variants={fadeUp}
            className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0"
          >
            {JOBS.map((j, i) => (
              <button
                key={j.company}
                onClick={() => setActiveJob(i)}
                className="flex-shrink-0 text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 relative"
                style={{
                  background: activeJob === i ? 'rgba(255,255,255,0.06)' : 'transparent',
                  border: activeJob === i
                    ? `1px solid rgba(255,255,255,0.1)`
                    : '1px solid transparent',
                  color: activeJob === i ? '#fff' : '#64748b',
                }}
              >
                {/* Active accent line */}
                {activeJob === i && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
                    style={{ background: j.color }}
                  />
                )}
                <span className="pl-3">{j.company}</span>
              </button>
            ))}
          </motion.div>

          {/* Job detail panel */}
          <motion.div
            key={activeJob}
            variants={fadeUp}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="glass p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {job.role}{' '}
                  <span style={{ color: job.color }}>@ {job.company}</span>
                </h3>
                <p className="text-gray-500 text-sm">{job.location}</p>
              </div>
              <span
                className="text-xs font-medium px-3 py-1.5 rounded-full self-start sm:self-auto flex-shrink-0"
                style={{
                  background: `${job.color}15`,
                  border: `1px solid ${job.color}30`,
                  color: job.color,
                }}
              >
                {job.period}
              </span>
            </div>

            <ul className="space-y-4">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: job.color }}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
