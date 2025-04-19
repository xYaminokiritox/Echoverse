import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-dark-darker/90 backdrop-blur-md z-50 border-b border-light-darker dark:border-dark-light shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-dark-darker dark:text-white font-display"
            >
              <span className="text-primary">Echo</span>verse
            </motion.div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-dark-darker dark:text-gray-200 hover:text-primary dark:hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#about" className="text-dark-darker dark:text-gray-200 hover:text-primary dark:hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
              <a href="#features" className="text-dark-darker dark:text-gray-200 hover:text-primary dark:hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
              <button
                onClick={toggleTheme}
                className="bg-primary/10 hover:bg-primary/20 text-primary-dark dark:text-primary-light px-4 py-2 rounded-md text-sm font-medium transition-all border border-primary/30 dark:border-primary/50 backdrop-blur-sm shadow-sm"
              >
                {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
              </button>
              <button className="bg-primary hover:bg-primary-dark dark:bg-primary dark:hover:bg-primary-light text-white px-4 py-2 rounded-md text-sm font-medium transition-all shadow-md">
                Start Your Legacy
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}