import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/motion';
import { portfolioData } from '../data/portfolio';
import Section from './Section';

export default function Projects() {
  return (
    <Section id="projects" style={{ backgroundColor: 'var(--bg-secondary)' }}>
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
          /projects
        </motion.h2>

        {/* Projects List */}
        <div className="space-y-8 sm:space-y-12">
          {portfolioData.projects.map((project, index) => (
            <motion.article
              key={index}
              variants={fadeInUp}
              className="border rounded-lg p-5 sm:p-6 md:p-8 transition-colors hover:border-opacity-100"
              style={{ borderColor: 'var(--border-10)' }}
            >
              {/* Title and GitHub Link */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium" style={{ color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm shrink-0 transition-colors py-1"
                  style={{ color: 'var(--text-60)', fontFamily: 'JetBrains Mono, monospace' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-60)'}
                >
                  github ↗
                </a>
              </div>

              {/* Problem Statement */}
              <div className="mb-6">
                <p className="text-sm mb-2" style={{ color: 'var(--text-50)', fontFamily: 'JetBrains Mono, monospace' }}>
                  Problem
                </p>
                <p className="text-base" style={{ color: 'var(--text-80)', lineHeight: '1.7' }}>
                  {project.problem}
                </p>
              </div>

              {/* Backend Responsibilities */}
              <div className="mb-6">
                <p className="text-sm mb-3" style={{ color: 'var(--text-50)', fontFamily: 'JetBrains Mono, monospace' }}>
                  Backend Implementation
                </p>
                <ul className="space-y-2">
                  {project.backend.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm pl-4 border-l-2"
                      style={{ color: 'var(--text-70)', borderColor: 'var(--border-10)', lineHeight: '1.7' }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded"
                    style={{ backgroundColor: 'var(--bg-hover)', fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
