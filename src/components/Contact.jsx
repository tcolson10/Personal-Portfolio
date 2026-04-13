import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import RevealText from './RevealText';

const SOCIALS = [
  {
    label: 'LinkedIn',
    icon:  FiLinkedin,
    href:  'https://www.linkedin.com/in/trevor-colson/',
    color: '#0a66c2',
  },
  {
    label: 'GitHub',
    icon:  FiGithub,
    href:  'https://github.com/tcolson10',
    color: '#e2e8f0',
  },
  {
    label: 'Email',
    icon:  FiMail,
    href:  'mailto:tcolson10@gmail.com',
    color: '#00d4ff',
  },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Contact = () => {
  const [focused, setFocused] = useState(null);

  const inputStyle = (field) => ({
    background:   'rgba(255,255,255,0.04)',
    border:       `1px solid ${focused === field ? 'rgba(0,212,255,0.4)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: '12px',
    color:        '#e2e8f0',
    padding:      '14px 18px',
    width:        '100%',
    fontSize:     '0.9375rem',
    outline:      'none',
    transition:   'border-color 0.2s, box-shadow 0.2s',
    boxShadow:    focused === field ? '0 0 0 3px rgba(0,212,255,0.08)' : 'none',
  });

  return (
    <section
      name="contact"
      className="relative w-full py-32 bg-[#070707] overflow-hidden"
    >
      {/* Accent orbs */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.07), transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.05), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy + socials */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p className="section-label" variants={fadeUp}>
              Get In Touch
            </motion.p>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              <RevealText delay={0.1}>Let's</RevealText>
              {' '}
              <RevealText delay={0.2} wordClassName="gradient-text">work together.</RevealText>
            </h2>

            <motion.p
              className="text-gray-400 text-lg leading-relaxed mb-10"
              variants={fadeUp}
            >
              I'm currently open to new opportunities. Whether you have a role in mind, a project
              to build, or just want to connect — my inbox is always open.
            </motion.p>

            {/* Socials */}
            <motion.div className="flex flex-col gap-3" variants={fadeUp}>
              {SOCIALS.map(({ label, icon: Icon, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover flex items-center gap-4 px-5 py-4 group"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={{ background: `${color}18`, border: `1px solid ${color}28` }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-sm font-medium">{label}</span>
                    {label === 'Email' && (
                      <span className="text-gray-500 text-xs">tcolson10@gmail.com</span>
                    )}
                    {label === 'LinkedIn' && (
                      <span className="text-gray-500 text-xs">linkedin.com/in/trevor-colson</span>
                    )}
                    {label === 'GitHub' && (
                      <span className="text-gray-500 text-xs">github.com/tcolson10</span>
                    )}
                  </div>
                  <span className="ml-auto text-gray-600 group-hover:text-[#00d4ff] transition-colors duration-200 text-lg">
                    ↗
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
          >
            <motion.div variants={fadeUp} className="glass p-5 sm:p-8">
              <form
                method="POST"
                action="https://getform.io/f/0f62fa35-34fd-4175-a8b9-b8ec2c5b1800"
                className="flex flex-col gap-5"
              >
                <div>
                  <label className="block text-gray-400 text-sm mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    required
                    style={inputStyle('name')}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    required
                    style={inputStyle('email')}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project or opportunity..."
                    required
                    style={{ ...inputStyle('message'), resize: 'vertical' }}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-accent w-full mt-2 text-base font-semibold"
                  style={{ borderRadius: '12px' }}
                >
                  Send Message →
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-24 border-t border-white/5 pt-8 text-center"
      >
        <p className="text-gray-600 text-sm">
          Designed & built by{' '}
          <span className="text-[#00d4ff]">Trevor Colson</span>
          {' '}· {new Date().getFullYear()}
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
