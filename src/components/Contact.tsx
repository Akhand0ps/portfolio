import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/motion';
import { portfolioData } from '../data/portfolio';
import Section from './Section';

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <Section id="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-2xl"
      >
        {/* Section Label */}
        <motion.h2
          variants={fadeInUp}
          className="text-sm mb-8"
          style={{ color: 'var(--text-50)', fontFamily: 'JetBrains Mono, monospace' }}
        >
          /contact
        </motion.h2>

        {/* Simple Message */}
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl mb-8"
          style={{ color: 'var(--text-80)', lineHeight: '1.7' }}
        >
          Open to backend engineering opportunities and technical discussions about
          distributed systems, API design, and data modeling.
        </motion.p>

        {/* Contact Links */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center justify-center px-5 py-3 border rounded-lg transition-colors text-xs sm:text-sm min-h-11"
            style={{ borderColor: 'var(--border-20)', fontFamily: 'JetBrains Mono, monospace' }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-20)'}
          >
            Send Email
          </a>
          <a
            href={`https://github.com/${personal.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 border rounded-lg transition-colors text-xs sm:text-sm min-h-11"
            style={{ borderColor: 'var(--border-20)', fontFamily: 'JetBrains Mono, monospace' }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-20)'}
          >
            View GitHub
          </a>
          <a
            href={`https://linkedin.com/in/${personal.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border rounded-lg transition-colors text-sm"
            style={{ borderColor: 'var(--border-20)', fontFamily: 'JetBrains Mono, monospace' }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-20)'}
          >
            LinkedIn
          </a>
          <a
            href={personal.x}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border rounded-lg transition-colors text-sm"
            style={{ borderColor: 'var(--border-20)', fontFamily: 'JetBrains Mono, monospace' }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-20)'}
          >
            X
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
}
