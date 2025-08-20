import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import AuthProvider from './components/AuthProvider/AuthProvider'
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <App />
        <ToastContainer />
      </Router>
    </AuthProvider>
  </StrictMode>,
)
