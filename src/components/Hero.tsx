import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/motion';
import { portfolioData } from '../data/portfolio';
import Section from './Section';
import profileImage from '../assets/profile.jpg';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <Section className="min-h-screen flex items-center pt-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="w-full"
      >
        {/* Profile Picture */}
        <motion.div variants={fadeInUp} className="mb-6 sm:mb-8">
          <img
            src={profileImage}
            alt={personal.name}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border"
            style={{ 
              borderColor: 'var(--border-10)', 
              objectFit: 'cover', 
              objectPosition: 'center 25%'
            }}
          />
        </motion.div>

        {/* Name - Primary Focus */}
        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight mb-3 sm:mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {personal.name}
        </motion.h1>

        {/* Role */}
        <motion.h2
          variants={fadeInUp}
          className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6"
          style={{ color: 'var(--text-70)' }}
        >
          {personal.role}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed"
          style={{ color: 'var(--text-60)' }}
        >
          {personal.tagline}
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 flex items-center gap-2 text-sm"
          style={{ color: 'var(--text-40)', fontFamily: 'JetBrains Mono, monospace' }}
        >
          <span>scroll to explore</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
