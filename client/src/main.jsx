import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './router/router.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import Aos from 'aos'
import 'aos/dist/aos.css';


Aos.init({
  duration: 800, 
  once: true,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
