
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Operations from './pages/Operations';
import Skills from './pages/Skills';
import { Sun, Moon, Terminal, Menu, X, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return false;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Apply theme-specific body background
  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = '#0a0a0a';
      document.body.classList.add('dark');
    } else {
      document.body.style.backgroundColor = '#f0f4f8';
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/skills', label: 'Skills' },
    { path: '/operations', label: 'Experience' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
  ];

  return (
    <HashRouter>
      <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark bg-[#0a0a0a] text-white' : 'bg-[#f0f4f8] text-slate-900'}`}>
        
        {/* Navigation Bar */}
        <nav className={`fixed top-0 left-0 right-0 z-[60] px-4 sm:px-6 py-4 flex justify-between items-center backdrop-blur-md bg-opacity-80 border-b border-opacity-10 transition-all duration-300
          ${isDarkMode ? 'bg-[#0a0a0a] border-red-500/20' : 'bg-white/80 border-blue-500/20'}`}>
          
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <Terminal className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 group-hover:scale-110 ${isDarkMode ? 'text-red-600' : 'text-blue-600'}`} />
            <span className="font-gaming font-bold tracking-tighter text-sm sm:text-lg uppercase whitespace-nowrap">SHIVAMANI PORTFOLIO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-sm font-gaming uppercase tracking-widest transition-all duration-300 relative group
                  ${isDarkMode ? 'hover:text-red-500' : 'hover:text-blue-600'}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isDarkMode ? 'bg-red-600' : 'bg-blue-600'}`}></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 transform hover:rotate-12 active:scale-95 border
                ${isDarkMode 
                  ? 'bg-red-950/20 border-red-500/30 text-red-500 hover:border-red-500' 
                  : 'bg-blue-100 border-blue-500/30 text-blue-600 hover:border-blue-500'}`}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button 
              onClick={toggleMenu}
              className={`lg:hidden p-2 rounded-xl border transition-all duration-300 active:scale-95
                ${isDarkMode 
                  ? 'bg-zinc-900 border-red-500/30 text-red-500 hover:border-red-500' 
                  : 'bg-white border-blue-500/30 text-blue-600 hover:border-blue-500'}`}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile/Tablet Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed inset-0 z-[55] lg:hidden flex flex-col p-8 pt-28 backdrop-blur-2xl
                ${isDarkMode ? 'bg-[#0a0a0a]/95 text-white' : 'bg-white/95 text-slate-900'}`}
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link 
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`group flex items-center justify-between py-4 border-b border-current border-opacity-10 transition-colors duration-300
                        ${isDarkMode ? 'hover:text-red-500' : 'hover:text-blue-600'}`}
                    >
                      <span className="text-xl sm:text-2xl font-gaming font-black uppercase tracking-tighter">
                        {link.label}
                      </span>
                      <ChevronRight className={`w-6 h-6 transition-transform group-hover:translate-x-2`} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-current border-opacity-10 flex flex-col items-center gap-4">
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-50">Website Loaded</p>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${isDarkMode ? 'border-red-500/20' : 'border-blue-500/20'}`}>
                   <div className={`w-2 h-2 rounded-full animate-pulse ${isDarkMode ? 'bg-red-500' : 'bg-blue-600'}`}></div>
                   <span className="text-[10px] font-mono uppercase font-bold tracking-tighter">Status: Online</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Page Content */}
        <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route path="/operations" element={<Operations isDarkMode={isDarkMode} />} />
            <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
            <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
            <Route path="/skills" element={<Skills isDarkMode={isDarkMode} />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className={`py-8 text-center border-t transition-colors duration-300 ${isDarkMode ? 'border-red-900/30 text-red-900/50' : 'border-blue-200 text-blue-900/30'}`}>
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest">
            Portfolio Website // Established 2024 // All Rights Reserved
          </p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
