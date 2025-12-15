import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/motion';
import { portfolioData } from '../data/portfolio';
import Section from './Section';

export default function Skills() {
  const { skills } = portfolioData;

  const skillDomains = [
    { title: 'Backend', key: 'backend' as const },
    { title: 'Databases', key: 'databases' as const },
    { title: 'APIs & Auth', key: 'apis' as const },
    { title: 'DevOps / Tooling', key: 'devops' as const },
    { title: 'Frontend', key: 'frontend' as const },
  ];

  return (
    <Section id="skills">
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
          /core-technical-skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillDomains.map((domain) => (
            <motion.div
              key={domain.key}
              variants={fadeInUp}
              className="space-y-3"
            >
              <h3 className="font-medium" style={{ color: 'var(--text-primary)' }}>
                {domain.title}
              </h3>
              <ul className="space-y-2">
                {skills[domain.key].map((skill) => (
                  <li
                    key={skill}
                    className="text-sm"
                    style={{ color: 'var(--text-70)', fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
