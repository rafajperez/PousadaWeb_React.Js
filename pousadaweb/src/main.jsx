import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home';
import Quartos from './routes/Quartos';
import App from './App.jsx'
import About from './routes/About';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      {
        path: "/home",
        element: <div> <Home /></div>
      },
      {
        path: "/quartos",
        element: <div> <Quartos /> </div>
      },
      {
        path: "/about",
        element: <div> <About /> </div>
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
