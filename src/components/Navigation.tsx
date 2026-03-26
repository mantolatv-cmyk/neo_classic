import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navigation.css';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'The Architecture', href: '#architecture' },
    { name: 'Materials', href: '#materials' },
    { name: 'Floor Plan', href: '#floorplan' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-brand">
          NEO<span className="text-gradient-gold">LUX</span>
        </div>
        
        <button 
          className="menu-button" 
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={28} strokeWidth={1.5} />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="menu-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="menu-header">
              <div className="navbar-brand" style={{ color: 'var(--color-bg)' }}>
                NEO<span className="text-gradient-gold">LUX</span>
              </div>
              <button 
                className="close-button" 
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
              >
                <X size={32} strokeWidth={1.5} color="var(--color-bg)" />
              </button>
            </div>

            <div className="menu-content">
              <ul className="menu-links">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  >
                    <a href={link.href} onClick={() => setIsOpen(false)}>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div 
                className="menu-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="contact-info">
                  <p>123 Luxury Ave, Beverly Hills, CA</p>
                  <p>contact@neolux.arc</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
