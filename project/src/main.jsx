import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Create a loading indicator
const loadingIndicator = document.createElement('div')
loadingIndicator.id = 'loading-indicator'
loadingIndicator.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #646cff, #535bf2);
  animation: loading 1s ease-in-out infinite;
  z-index: 9999;
`
document.head.insertAdjacentHTML('beforeend', `
  <style>
    @keyframes loading {
      0% { width: 0; }
      100% { width: 100%; }
    }
  </style>
`)
document.body.appendChild(loadingIndicator)

// Remove loading indicator when the app is ready
window.addEventListener('load', () => {
  setTimeout(() => {
    loadingIndicator.style.opacity = '0'
    setTimeout(() => {
      document.body.removeChild(loadingIndicator)
    }, 500)
  }, 100)
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
