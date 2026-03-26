import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Shield, Utensils, Trophy, Sun, Wind } from 'lucide-react';
import './AboutProperty.css';
import resortImage from '../assets/images/montaresa_resort.png';

export const AboutProperty: React.FC = () => {
  const features = [
    {
      icon: <Wind className="feature-icon" />,
      title: "Golf & Natureza",
      desc: "Campo de golfe exclusivo e integração total com a paisagem de Atibaia."
    },
    {
      icon: <Sun className="feature-icon" />,
      title: "Lazer de Resort",
      desc: "Prainha artificial, piscinas de borda infinita e lago ornamental."
    },
    {
      icon: <Utensils className="feature-icon" />,
      title: "Alta Gastronomia",
      desc: "Dois restaurantes exclusivos com cardápios assinados por chefs renomados."
    },
    {
      icon: <Trophy className="feature-icon" />,
      title: "Resort Esportivo",
      desc: "Quadras de beach tênis, tênis (saibro) e academia com vista panorâmica."
    },
    {
      icon: <Shield className="feature-icon" />,
      title: "Segurança 24h",
      desc: "Monitoramento inteligente, portaria presencial e fiação 100% subterrânea."
    },
    {
      icon: <MapPin className="feature-icon" />,
      title: "Localização",
      desc: "No bairro Ressaca, Atibaia, a apenas 45 min de SP e próximo à Rod. Fernão Dias."
    }
  ];

  return (
    <section className="about-section" id="sobre">
      <div className="about-container">
        <div className="about-grid">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="about-overline">Sobre o Imóvel</h4>
            <h2 className="about-title">Condomínio <span className="text-gradient-gold-shimmer">Montaresa</span> Atibaia</h2>
            <div className="gold-divider" style={{ margin: '1.5rem 0' }}></div>
            <p className="about-description">
              O Condomínio Montaresa Club Resort redefine o conceito de viver bem. 
              Localizado em uma das regiões mais privilegiadas de Atibaia, este empreendimento 
              combina a sofisticação de um resort de luxo com a privacidade e a segurança que 
              sua família merece.
            </p>
            <p className="about-description">
              Cercado por natureza exuberante, o projeto oferece uma infraestrutura completa 
              com foco na qualidade de vida, integrando lazer de classe mundial a uma 
              paisagem serena e revigorante.
            </p>

            <div className="features-grid">
              {features.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <div className="feature-icon-wrapper">
                    {feature.icon}
                  </div>
                  <div>
                    <h5 className="feature-title">{feature.title}</h5>
                    <p className="feature-desc">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img 
              src={resortImage} 
              alt="Montaresa Club Resort Lifestyle" 
              className="about-image"
            />
            <div className="about-image-overlay"></div>
            <div className="image-badge glass-panel-dark">
              <span className="badge-text">Vida Resort em Atibaia</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
