import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/motion';
import { portfolioData } from '../data/portfolio';
import Section from './Section';

export default function EngineeringSummary() {
  return (
    <Section id="summary">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Label */}
        <motion.h2
          variants={fadeInUp}
          className="text-sm mb-6"
          style={{ color: 'var(--text-50)', fontFamily: 'JetBrains Mono, monospace' }}
        >
          /engineering-summary
        </motion.h2>

        {/* Content */}
        <div className="space-y-6 max-w-3xl">
          {portfolioData.summary.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={fadeInUp}
              className="text-base md:text-lg"
              style={{ color: 'var(--text-80)', lineHeight: '1.7' }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
