import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import clientes from "./pages/clientes";
import empleados from "./pages/empleados";
import productos from './Pages/productos';
import proveedores from './pages/proveedores';
import bodega from './pages/bodega';
import home from './pages/home';
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
    path: '/Boveda',
    element: <Boveda/>
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

