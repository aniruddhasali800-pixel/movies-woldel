import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { pdfs } from '../data/pdfs';
import PDFCard from '../components/PDFCard';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AdSense from '../components/AdSense';

const ResourcePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Math', 'Physics', 'Manufacturing Technology', 'Programming in C'];
  
  const filteredPdfs = pdfs.filter(pdf => {
    const matchesSearch = pdf.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         pdf.subjectCode.includes(searchQuery);
    const matchesCategory = selectedCategory === 'All' || pdf.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page-wrapper">
      <div className="bg-gradient"></div>
      <Navbar onSearch={setSearchQuery} />
      
      <div className="container">
        <Hero />
        
        <AdSense adSlot="1234567890" />
        
        <div className="category-tabs glass">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="resources-section"
        >
          <div className="section-header">
            <h2>{selectedCategory === 'All' ? 'All' : selectedCategory} <span>Resources</span></h2>
            <p>Showing {filteredPdfs.length} results for your search</p>
          </div>

          <div className="grid">
            <AnimatePresence mode="popLayout">
              {filteredPdfs.map((pdf) => (
                <motion.div
                  key={pdf.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <PDFCard pdf={pdf} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredPdfs.length === 0 && (
            <div className="no-results">
              <h3>No resources found</h3>
              <p>Try adjusting your search or category filter</p>
            </div>
          )}
        </motion.section>
      </div>

      <style>{`
        .page-wrapper {
          min-height: 100vh;
          padding-bottom: 5rem;
        }
        .category-tabs {
          display: flex;
          gap: 0.5rem;
          padding: 0.5rem;
          border-radius: 16px;
          margin-top: 2rem;
          width: fit-content;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .category-tabs::-webkit-scrollbar { display: none; }
        
        .tab-btn {
          padding: 0.6rem 1.2rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-muted);
          background: transparent;
          transition: var(--transition);
          white-space: nowrap;
        }
        .tab-btn:hover {
          color: var(--text);
          background: rgba(255, 255, 255, 0.05);
        }
        .tab-btn.active {
          color: var(--text);
          background: var(--primary);
          box-shadow: 0 4px 12px var(--primary-glow);
        }
        
        .resources-section {
          margin-top: 3rem;
        }
        .section-header {
          margin-bottom: 2rem;
          text-align: left;
        }
        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        .section-header h2 span {
          color: var(--primary);
        }
        .section-header p {
          color: var(--text-muted);
          font-size: 1rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        .no-results {
          text-align: center;
          padding: 4rem 2rem;
          background: var(--glass);
          border-radius: 24px;
          margin-top: 2rem;
        }
        .no-results h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .no-results p {
          color: var(--text-muted);
        }
        @media (max-width: 768px) {
          .section-header h2 { font-size: 2rem; }
          .grid { gap: 1.5rem; }
          .resources-section { margin-top: 2rem; }
          .category-tabs { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default ResourcePage;
