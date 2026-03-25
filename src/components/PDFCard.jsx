import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FileText, Download, Calendar, Tag } from 'lucide-react';

const PDFCard = ({ pdf }) => {
  const handleDownload = () => {
    window.open(`/data/${pdf.filename}`, '_blank');
  };

  return (
    <motion.div 
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="glass pdf-card"
    >
      <div className="card-header">
        <div className="icon-badge">
          <FileText size={24} color="var(--primary)" />
        </div>
        <div className="type-badge">{pdf.type}</div>
      </div>

      <div className="card-body">
        <h3>{pdf.title}</h3>
        <div className="meta-info">
          <span><Calendar size={14} /> {pdf.year} {pdf.term}</span>
          <span><Tag size={14} /> {pdf.subjectCode}</span>
        </div>
      </div>

      <div className="card-footer">
        <button onClick={handleDownload} className="btn-download">
          <Download size={18} /> View PDF
        </button>
      </div>

      <style>{`
        .pdf-card {
          padding: 1.5rem;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          height: 100%;
          transition: var(--transition);
        }
        .pdf-card:hover {
          border-color: var(--primary);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .icon-badge {
          background: rgba(99, 102, 241, 0.1);
          padding: 0.75rem;
          border-radius: 12px;
        }
        .type-badge {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          background: var(--surface);
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          color: var(--text-muted);
        }
        h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--text);
        }
        .meta-info {
          display: flex;
          gap: 1rem;
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 500;
        }
        .meta-info span {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .btn-download {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text);
          border: 1px solid var(--glass-border);
          padding: 0.75rem;
          border-radius: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: var(--transition);
        }
        .btn-download:hover {
          background: var(--primary);
          border-color: var(--primary);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }
      `}</style>
    </motion.div>
  );
};

export default PDFCard;
