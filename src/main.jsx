import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// Check for publishable key and provide a fallback if missing
if (!PUBLISHABLE_KEY) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center', 
      color: 'white', 
      fontFamily: 'sans-serif',
      background: '#0f172a',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ color: '#f43f5e' }}>Missing Configuration</h1>
      <p>The <code>VITE_CLERK_PUBLISHABLE_KEY</code> is not set.</p>
      <p>Please add it to your <strong>.env.local</strong> or <strong>Vercel Environment Variables</strong>.</p>
    </div>
  )
} else {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
    </React.StrictMode>,
  )
}
