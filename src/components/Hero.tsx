import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Hero.css';
import heroImage from '../assets/images/hero_facade_neoclassic.png';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // useScroll tracks the scroll progress relative to the container element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Reverse Zoom effect: Start at 1.5x, scale down to 1x as we scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  
  // Fade out the overlay text as we scroll
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Parallax for text: move up slightly as we scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div ref={containerRef} className="hero-container" id="home">
      <div className="hero-sticky">
        <motion.div 
          className="hero-image-wrapper"
          style={{ scale }}
        >
          <img 
            src={heroImage} 
            alt="Neoclassical Architecture Facade" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </motion.div>

        <motion.div 
          className="hero-content"
          style={{ opacity, y }}
        >
          <h1 className="hero-title">NEO<span className="text-gradient-gold-shimmer">LUX</span></h1>
          <div className="gold-divider"></div>
          <p className="hero-subtitle">The Neoclassical Revival</p>
          
          <div className="scroll-indicator">
            <span className="scroll-text">Discover</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown color="var(--color-gold)" size={24} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
