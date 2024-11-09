import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import CepPage from './pages/CepPage';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CepPage />
  </StrictMode>,
)
