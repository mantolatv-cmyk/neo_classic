import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import './Hotspots.css';
import detailImage from '../assets/images/hotspot_detail_neoclassic.png';

interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  description: string;
}

const hotspotsData: Hotspot[] = [
  {
    id: 'column',
    x: 40,
    y: 65,
    title: 'Travertine Marble',
    description: 'Imported Italian travertine base providing foundational strength with a textured, matte finish that interacts beautifully with the golden hour light.'
  },
  {
    id: 'window',
    x: 75,
    y: 40,
    title: 'Minimalist Framing',
    description: 'Ultra-thin, matte black anodized aluminum frames maximize natural light while maintaining the strict Neoclassical symmetry.'
  },
  {
    id: 'facade',
    x: 25,
    y: 35,
    title: 'High-Density EPS Molding',
    description: 'Precision-cut, high-density expanded polystyrene moldings offer intricate detailing without the structural weight of traditional stone.'
  }
];

export const Hotspots: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <section className="hotspots-section" id="materials">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Material <span className="text-gradient-gold-shimmer">Excellence</span>
        </motion.h2>
        <div className="gold-divider"></div>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hover over the points of interest to discover the specifications.
        </motion.p>
      </div>

      <div className="hotspots-container">
        <div className="image-wrapper">
          <img 
            src={detailImage} 
            alt="Neoclassical detail" 
            loading="lazy"
            className="hotspot-bg-image"
          />
          
          {hotspotsData.map((spot) => (
            <div 
              key={spot.id}
              className="hotspot-marker-container"
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              onMouseEnter={() => setActiveHotspot(spot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
            >
              <div className={`hotspot-dot ${activeHotspot === spot.id ? 'active' : ''}`}>
                <Plus size={16} strokeWidth={3} className="hotspot-icon" />
              </div>
              
              <div className="pulse-ring"></div>

              <AnimatePresence>
                {activeHotspot === spot.id && (
                  <motion.div 
                    className="glass-panel-dark hotspot-tooltip"
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h4 className="tooltip-title">{spot.title}</h4>
                    <p className="tooltip-desc">{spot.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
