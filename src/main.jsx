import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import USPSection from './Usp section.jsx'
import ServicesSection from './ServicesSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <USPSection/> */}
    <ServicesSection/>
  </StrictMode>

)
