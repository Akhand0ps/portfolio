import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/motion';
import { portfolioData } from '../data/portfolio';
import Section from './Section';

export default function EngineeringPrinciples() {
  return (
    <Section id="principles" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Label */}
        <motion.h2
          variants={fadeInUp}
          className="text-sm mb-12"
          style={{ color: 'var(--text-50)', fontFamily: 'JetBrains Mono, monospace' }}
        >
          /engineering-signals
        </motion.h2>

        {/* Principles List */}
        <motion.ul
          variants={staggerContainer}
          className="space-y-4 max-w-3xl"
        >
          {portfolioData.principles.map((principle, index) => (
            <motion.li
              key={index}
              variants={fadeInUp}
              className="text-base pl-6 border-l-2"
              style={{ color: 'var(--text-70)', borderColor: 'var(--border-10)', lineHeight: '1.7' }}
            >
              {principle}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </Section>
  );
}
