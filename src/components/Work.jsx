import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import RevealText from './RevealText';

const PROJECTS = [
  {
    title:       'Shelby Floral',
    description:
      'A responsive marketing website built to support pricing transparency, portfolio display, and client inquiry flows for a floral business. Focused on clean UX and conversion.',
    tags:        ['React', 'Firebase', 'Tailwind CSS', 'Responsive Design'],
    image:       '/shelbyFloral.png',
    live:        'https://shelby-floral.com',
    github:      'https://github.com/tcolson10',
    accent:      '#10b981',
  },
  {
    title:       'Monthly Blooms',
    description:
      'A full-stack subscription platform with Stripe billing, admin dashboards, and operational reporting. Supports revenue tracking, subscriber management, and automated billing cycles.',
    tags:        ['React', 'Firebase', 'Stripe', 'Admin Dashboard'],
    image:       '/monthlyBlooms.png',
    live:        'https://monthlyblooms.com',
    github:      'https://github.com/tcolson10',
    accent:      '#7c3aed',
  },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Projects = () => {
  return (
    <section
      name="projects"
      className="relative w-full py-32 bg-[#070707] overflow-hidden"
    >
      {/* Accent orb */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.06), transparent 70%)',
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
          Projects
        </motion.p>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 leading-tight">
          <RevealText delay={0.1}>Things I've</RevealText>
          {' '}
          <RevealText delay={0.25} wordClassName="gradient-text">built.</RevealText>
        </h2>

        <div className="space-y-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="glass glass-hover overflow-hidden"
            >
              <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image */}
                <div
                  className={`relative h-56 sm:h-72 lg:h-auto overflow-hidden ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  {/* Overlay gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${project.accent}20, rgba(7,7,7,0.3))`,
                    }}
                  />
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center p-8 lg:p-10 ${i % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div
                    className="text-xs font-semibold tracking-widest uppercase mb-3"
                    style={{ color: project.accent }}
                  >
                    Featured Project
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{
                          background: `${project.accent}12`,
                          border: `1px solid ${project.accent}25`,
                          color: project.accent,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#00d4ff] transition-colors duration-200"
                    >
                      <FiExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <FiGithub size={16} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
