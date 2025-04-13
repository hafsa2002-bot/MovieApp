import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary fallback={<div className='w-full h-screen flex justify-center items-center'><img className='' src="https://0effortthemes.com/400-error-page/demo/images/landing/thumb-4.jpg" /></div>}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
