import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MikaelResume from './mikael-resume.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MikaelResume/>
  </StrictMode>,
)
