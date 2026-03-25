import React from 'react';
import { BookOpen, Search, Home, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const Navbar = ({ onSearch }) => {
  return (
    <nav className="glass sticky-nav">
      <div className="container nav-content">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="logo"
        >
          <GraduationCap className="icon-primary" />
          <span>MSBTE<span>Hub</span></span>
        </motion.div>

        <div className="nav-links">
          <a href="/" className="nav-link"><Home size={18} /> Home</a>
          <a href="/math" className="nav-link active"><BookOpen size={18} /> Math Resources</a>
        </div>

        <div className="right-nav">
          <div className="search-bar glass">
            <Search size={18} className="text-muted" />
            <input 
              type="text" 
              placeholder="Search resources..." 
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <style>{`
        .sticky-nav {
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 1rem 0;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--glass-border);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          letter-spacing: -0.5px;
        }
        .logo span span {
          color: var(--primary);
        }
        .icon-primary {
          color: var(--primary);
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: var(--transition);
        }
        .nav-link:hover, .nav-link.active {
          color: var(--text);
        }
        .right-nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .search-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 1rem;
          border-radius: 99px;
          flex: 1;
          max-width: 400px;
        }
        @media (max-width: 768px) {
          .nav-content {
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
            padding: 1rem 0;
          }
          .nav-links {
            width: 100%;
            justify-content: center;
            gap: 1.5rem;
            order: 3;
          }
          .search-bar {
            width: 100%;
            max-width: none;
            order: 2;
          }
          .right-nav {
            width: 100%;
            justify-content: center;
            gap: 1.5rem;
          }
          .logo {
            font-size: 1.25rem;
            order: 1;
          }
          .nav-link {
            font-size: 0.9rem;
          }
        }
        .search-bar input {
          background: transparent;
          border: none;
          color: var(--text);
          outline: none;
          width: 100%;
          font-size: 0.9rem;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
