import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/motion';
import { portfolioData } from '../data/portfolio';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="experience">
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
          /experience-and-learning
        </motion.h2>

        {/* Experience Timeline */}
        <div className="space-y-8 max-w-3xl">
          {portfolioData.experience.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative pl-8 border-l-2"
              style={{ borderColor: 'var(--border-10)' }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--text-primary)' }} />

              {/* Type Badge */}
              <span className="inline-block text-xs px-2 py-1 rounded mb-2" style={{ backgroundColor: 'var(--bg-hover)', fontFamily: 'JetBrains Mono, monospace' }}>
                {item.type}
              </span>

              {/* Title and Organization */}
              <h3 className="text-lg font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                {item.title}
              </h3>
              <p className="text-sm mb-2" style={{ color: 'var(--text-60)' }}>
                {item.organization} • {item.period}
              </p>

              {/* Description */}
              <p className="text-sm" style={{ color: 'var(--text-70)', lineHeight: '1.7' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
