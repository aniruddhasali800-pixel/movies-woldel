import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Sparkles, ArrowRight } from 'lucide-react';
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5719665546463228"
     crossorigin="anonymous"></script>
const Hero = () => {
  return (
    <div className="hero-container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <div className="badge animate-glow">
          <Sparkles size={14} />
          <span>New Math Resources Added</span>
        </div>
        <h1>Elevate Your <span>MSBTE Study</span> Experience</h1>
        <p>Access high-quality model answers, question papers, and study notes with a single click. Designed for excellence, built for students.</p>
        
        <div className="hero-actions">
          <button className="btn-primary">
            Explore Math <ArrowRight size={18} />
          </button>
          <button className="btn-glass">Join Community</button>
        </div>
      </motion.div>

      <style>{`
        .hero-container {
          padding: 6rem 0;
          text-align: center;
          position: relative;
        }
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid var(--primary);
          padding: 0.5rem 1rem;
          border-radius: 99px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 2rem;
        }
        h1 {
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -2px;
        }
        h1 span {
          background: linear-gradient(to right, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 3rem;
          line-height: 1.6;
        }
        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: var(--transition);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(99, 102, 241, 0.6);
        }
        .btn-glass {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text);
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          border: 1px solid var(--glass-border);
          transition: var(--transition);
        }
        .btn-glass:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .hero-container { padding: 4rem 0; }
          h1 { font-size: 2.2rem; margin-bottom: 1rem; }
          p { font-size: 1.1rem; margin-bottom: 2rem; }
          .hero-actions { 
            flex-direction: column; 
            align-items: stretch; 
            gap: 1rem; 
            padding: 0 1rem;
          }
          .badge { margin-bottom: 1.5rem; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
