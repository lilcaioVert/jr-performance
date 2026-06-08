'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre JF', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Programas', href: '#programas' },
    { name: 'Onde Treinar', href: '#onde-estamos' },
  ];

  return (
    <header 
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-zinc-900 py-3 shadow-xl shadow-black/40' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex flex-col group">
            <span className="font-display font-black text-2xl tracking-tighter italic text-white flex items-center">
              JF<span className="text-blue-500 ml-1">PERFORMANCE</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-medium -mt-1 group-hover:text-blue-400 transition-colors">
              Personal &amp; Assessoria
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-300 hover:text-blue-400 transition-colors font-medium text-sm tracking-wide hover:scale-105 transform duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/message/47DJ7YXUY5PII1"
              target="_blank"
              rel="noopener noreferrer"
              id="cta-nav-desktop"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              Fale Conosco
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-menu-toggle"
            className="md:hidden justify-center rounded-lg p-2 text-zinc-400 hover:bg-zinc-900 hover:text-white focus:outline-none transition-colors"
            aria-label="Alternar Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-zinc-950 border-b border-zinc-900 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-zinc-300 hover:bg-zinc-900 hover:text-blue-500 transition-all border-l-2 border-transparent hover:border-blue-500"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="https://wa.me/message/47DJ7YXUY5PII1"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cta-nav-mobile"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-center font-bold py-3 px-4 rounded-xl shadow-lg shadow-orange-500/25 transition-colors flex items-center justify-center gap-2"
                >
                  Fale Conosco
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
