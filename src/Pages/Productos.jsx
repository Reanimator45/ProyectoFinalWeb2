

import Menu from "../components/menu.jsx"
import Footer from '../components/Footer.jsx'

import GenerarProductos from "../layouts/serviciosproductos/generarproductos.jsx"
import ListarProductos from "../layouts/serviciosproductos/listarproductos.jsx"
const Productos = () => {
  
  return (
    <div>
      <Menu/>

      <GenerarProductos/>
      <ListarProductos/>
      <Footer/>
      </div>
  )
}

export default Productos