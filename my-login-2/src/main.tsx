import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './routes/Login.tsx'
import Home from './routes/Home.tsx'
import Proteccion from './routes/Proteccion.tsx'
import Overview from './routes/Overview.tsx'
import Contact from './routes/Contact.tsx'
import { Navigate } from "react-router-dom";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from './auth/AuthProv.tsx'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/*",
    element: <Navigate to="/login" />,
  },
  {
    path: "/",
    element: <Proteccion />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/*",
        element: <Navigate to="/" />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider> 
  </React.StrictMode>,
)
