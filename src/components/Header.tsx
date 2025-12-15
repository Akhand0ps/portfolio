import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b"
      style={{ 
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-10)',
        opacity: 0.95 
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="text-xs sm:text-sm" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            portfolio
          </span>
        </motion.div>

        <motion.button
          onClick={toggleTheme}
          className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors min-w-15"
          style={{ backgroundColor: 'var(--bg-hover)' }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          aria-label="Toggle theme"
        >
          <span className="text-xs sm:text-sm" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            {isDark ? 'light' : 'dark'}
          </span>
        </motion.button>
      </nav>
    </header>
  );
}
