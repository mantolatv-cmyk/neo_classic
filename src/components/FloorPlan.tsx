import React from 'react';
import { motion } from 'framer-motion';
import './FloorPlan.css';
import floorPlanImage from '../assets/images/realistic_floorplan.png';

export const FloorPlan: React.FC = () => {
  return (
    <section className="floorplan-section" id="floorplan">
      <div className="section-header">
        <h2 className="section-title">The <span className="text-gradient-gold-shimmer">Blueprint</span></h2>
        <div className="gold-divider"></div>
        <p className="section-subtitle">A realistic view of the 200m² L-shaped layout.</p>
      </div>

      <div className="floorplan-image-container">
        <img 
          src={floorPlanImage} 
          alt="Realistic 3 Suite L-Shape Floor Plan" 
          loading="lazy"
          className="floorplan-image"
        />

        <motion.div 
          className="glass-panel-dark overlay-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3>Spatial Flow</h3>
          <p>This 200m² single-story design features a perfect "L" shape with 3 master suites, seamlessly wrapping around an elegant outdoor patio and pool area.</p>
        </motion.div>
      </div>
    </section>
  );
};
