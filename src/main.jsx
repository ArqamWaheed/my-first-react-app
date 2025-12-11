import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mf from './greetings.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mf name="Gamma"/>
  </StrictMode>,
)
