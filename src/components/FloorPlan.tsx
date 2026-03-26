import React from 'react';
import { motion } from 'framer-motion';
import './FloorPlan.css';
import floorPlanImage from '../assets/images/realistic_floorplan.png';
import floorPlanTopView from '../assets/images/floorplan_topview.png';

export const FloorPlan: React.FC = () => {
  return (
    <section className="floorplan-section" id="floorplan">
      <div className="section-header">
        <h2 className="section-title">The <span className="text-gradient-gold-shimmer">Blueprint</span></h2>
        <div className="gold-divider"></div>
        <p className="section-subtitle">A realistic view of the 200m² L-shaped layout.</p>
      </div>

      <div className="floorplan-grid">
        <motion.div 
          className="floorplan-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={floorPlanImage} alt="Floor Plan Angle View" loading="lazy" />
          <p className="caption">Perspectiva Isométrica</p>
        </motion.div>

        <motion.div 
          className="floorplan-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img src={floorPlanTopView} alt="Floor Plan Top View" loading="lazy" />
          <p className="caption">Planta Técnica Superior</p>
        </motion.div>
      </div>

      <motion.div 
        className="glass-panel-dark floorplan-info"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-gradient-gold">Spatial Flow</h3>
        <p>This 200m² single-story design features a perfect "L" shape with 3 master suites, seamlessly wrapping around an elegant outdoor patio and pool area. Every room connects to the central courtyard for maximum natural light.</p>
      </motion.div>
    </section>
  );
};
