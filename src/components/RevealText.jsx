import { motion } from 'framer-motion';

/**
 * Splits text into words, each word slides up from an overflow:hidden clip.
 * Use `wordClassName` to apply classes (e.g. "gradient-text") to the word spans.
 */
const RevealText = ({ children, className = '', wordClassName = '', delay = 0 }) => {
  const words = String(children).trim().split(/\s+/);

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}
        >
          <motion.span
            className={`inline-block ${wordClassName}`}
            initial={{ y: '115%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.65,
              delay: delay + i * 0.09,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && '\u00a0'}
        </span>
      ))}
    </span>
  );
};

export default RevealText;
