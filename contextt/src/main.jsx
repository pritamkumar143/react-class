import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Datacontext from './context/DataContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
<Datacontext>
  <StrictMode>
    <App />
    </StrictMode>
  </Datacontext>

)
