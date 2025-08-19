import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import Home from './Pages/Home.jsx';
import Sobre from './Pages/Sobre.jsx';
import Servicos from './Pages/Servicos.jsx';
import Depoimentos from './Pages/Depoimentos.jsx';
import Contato from './Pages/Contato.jsx';

import './index.css' // Mantenha seu CSS global

// Aqui definimos nossas rotas (as páginas)
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // O App será o layout principal (com Header e Footer)
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "servicos",
        element: <Servicos />,
      },
      {
        path: "depoimentos",
        element: <Depoimentos />,
      },
      {
        path: "contato",
        element: <Contato />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)