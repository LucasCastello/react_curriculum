import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import ContentHolder from './contentHolder/ContentHolder.tsx'
import Portfolio from './portfolio/Portfolio.tsx'
import './index.css'
import AboutMe from './about-me/AboutMe.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <AboutMe />
      },
      {
        path: 'resume',
        element: <ContentHolder />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
