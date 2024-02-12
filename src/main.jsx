// Packages
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Styling
import './styles/main.scss'



//  Page components
import App from './App.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Skills from './Components/Skills.jsx'
import Projects from './Components/Projects.jsx'
import Background from './Components/Background.jsx'


// ! Router & paths
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/skills',
        element: <Skills />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/background',
        element: <Background />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

