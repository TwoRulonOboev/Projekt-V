import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Register from './page/Register/Register.tsx'
import './index.css'
import Login from './page/Login/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login />
    <Register />
  </StrictMode>,
)
