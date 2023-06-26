import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Clientes from "./pages/Clientes";
import Empleados from "./pages/Empleados";
import Productos from './Pages/Productos';
import Proveedores from './pages/Proveedores';
import Bodega from './pages/Bodega';
import Home from './pages/Home';
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

