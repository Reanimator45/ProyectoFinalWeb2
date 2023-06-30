import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Clientes from "./Pages/clientes";
import Empleados from "./Pages/Empleados";
import Productos from './Pages/Productos';
import Proveedores from './Pages/Proveedores';
import Bodega from './Pages/bodega';
import Home from './Pages/home.jsx';
import './App.css'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/Clientes',
    element: <Clientes />
  },
  {
    path: '/Empleados',
    element: <Empleados />
  },
  {
    path: '/Productos',
    element: <Productos />
  },
  {
    path: '/Proveedores',
    element: <Proveedores />
  },
  {
    path: '/Bodega',
    element: <Bodega/>
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

