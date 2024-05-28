import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster
      position="top-center"
      reverseOrder={true}
    />
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
