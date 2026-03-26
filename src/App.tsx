import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Hotspots } from './components/Hotspots';
import { AboutProperty } from './components/AboutProperty';
import { FloorPlan } from './components/FloorPlan';
import './App.css';

// Simple particles component for the "golden hour" light dust effect
const LightParticles = () => {
  return (
    <div className="particles-container">
      {[...Array(8)].map((_, i) => (
        <div 
          key={i} 
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="app-container">
      <LightParticles />
      <Navigation />
      <main>
        <Hero />
        <AboutProperty />
        <Hotspots />
        <FloorPlan />
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            NEO.<span className="text-gradient-gold-shimmer">LUX</span>
            <div className="gold-divider"></div>
            <p className="footer-motto">Symmetry. Elegance. Timelessness.</p>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} NeoLux Architecture. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
