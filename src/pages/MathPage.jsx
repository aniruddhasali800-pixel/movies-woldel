import React, { useState } from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { pdfs } from '../data/pdfs';
import PDFCard from '../components/PDFCard';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AdSense from '../components/AdSense';

const MathPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const mathPdfs = pdfs.filter(pdf => 
    pdf.category === 'Math' && 
    (pdf.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     pdf.subjectCode.includes(searchQuery))
  );

  return (
    <div className="page-wrapper">
      <div className="bg-gradient"></div>
      <Navbar onSearch={setSearchQuery} />
      
      <div className="container">
        <Hero />
        
        <AdSense adSlot="1234567890" />
        
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="resources-section"
        >
          <div className="section-header">
            <h2>Mathematics <span>Resources</span></h2>
            <p>Showing {mathPdfs.length} results for your search</p>
          </div>

          <div className="grid">
            {mathPdfs.map((pdf, index) => (
              <motion.div
                key={pdf.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <PDFCard pdf={pdf} />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      <style>{`
        .page-wrapper {
          min-height: 100vh;
          padding-bottom: 5rem;
        }
        .resources-section {
          margin-top: 4rem;
        }
        .section-header {
          margin-bottom: 3rem;
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
        @media (max-width: 768px) {
          .section-header h2 { font-size: 2rem; }
          .grid { gap: 1.5rem; }
          .resources-section { margin-top: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default MathPage;
