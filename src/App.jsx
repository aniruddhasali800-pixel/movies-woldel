import React from 'react';
import MathPage from './pages/MathPage';
import './index.css';

function App() {
  return (
    <div className="App">
      </SignedIn>
      <SignedOut>
        <div className="auth-container">
          <SignIn />
        </div>
      </SignedOut>
      <style>{`
        .auth-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: var(--background);
        }
      `}</style>
    </div>
  );
}

export default App;
