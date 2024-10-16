import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Xyz from './context/DataContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
<Xyz>
  <StrictMode>
    <App />
    </StrictMode>
  </Xyz>

)
