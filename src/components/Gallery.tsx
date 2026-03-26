import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

import foyerImg from '../assets/images/gallery_foyer.png';
import sculptureImg from '../assets/images/gallery_sculpture.png';
import libraryImg from '../assets/images/gallery_library.png';
import nightImg from '../assets/images/gallery_night.png';

const galleryItems = [
  {
    id: 1,
    image: foyerImg,
    title: "The Grand Foyer",
    category: "Architecture",
    size: "large"
  },
  {
    id: 2,
    image: sculptureImg,
    title: "Classic Sculpture Gallery",
    category: "Detail",
    size: "small"
  },
  {
    id: 3,
    image: libraryImg,
    title: "The Neoclassical Library",
    category: "Interior",
    size: "small"
  },
  {
    id: 4,
    image: nightImg,
    title: "Facade at Twilight",
    category: "Exterior",
    size: "wide"
  }
];

export const Gallery: React.FC = () => {
  return (
    <section className="gallery-section" id="galeria">
      <div className="gallery-container">
        <div className="section-header">
          <motion.h4 
            className="about-overline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Visual Experience
          </motion.h4>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            The <span className="text-gradient-gold-shimmer">Neoclassical</span> Essence
          </motion.h2>
          <div className="gold-divider"></div>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`gallery-item ${item.size}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <div className="gallery-image-wrapper">
                <img src={item.image} alt={item.title} className="gallery-image" loading="lazy" />
                <div className="gallery-overlay">
                  <div className="gallery-content">
                    <span className="gallery-category">{item.category}</span>
                    <h3 className="gallery-title">{item.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
