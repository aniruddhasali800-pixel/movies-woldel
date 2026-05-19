import React from 'react';

import ResourcePage from './pages/ResourcePage';
import SparklingBackground from './components/SparklingBackground';
import './index.css';

function App() {
  return (
    <div className="app">
      <SparklingBackground />
      <ResourcePage />
    </div>
  );
}

export default App;
