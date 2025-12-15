import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 sm:py-12" style={{ borderColor: 'var(--border-10)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm"
          style={{ color: 'var(--text-60)' }}
        >
          <p style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            © {currentYear} {portfolioData.personal.name}
          </p>
          
          <div className="flex gap-4 sm:gap-6">
            <a
              href={`https://github.com/${portfolioData.personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:opacity-100"
              style={{ color: 'inherit' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-60)'}
            >
              GitHub
            </a>
            <a
              href={`https://linkedin.com/in/${portfolioData.personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:opacity-100"
              style={{ color: 'inherit' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-60)'}
            >
              LinkedIn
            </a>
            <a
              href={portfolioData.personal.x}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:opacity-100"
              style={{ color: 'inherit' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-60)'}
            >
              X
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="transition-colors hover:opacity-100"
              style={{ color: 'inherit' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-60)'}
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
