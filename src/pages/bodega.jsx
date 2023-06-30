

import Menu from "../components/menu.jsx"
import Footer from '../components/Footer.jsx'

import GenerarBodega from "../layouts/serviciosbodega/generarbodega.jsx"
import ListarBodega from "../layouts/serviciosbodega/listarbodega.jsx"
const Bodega = () => {
  
  return (
    <div>
      <Menu/>

      <GenerarBodega/>
      <ListarBodega/>
      <Footer/>
      </div>
  )
}

export default Bodega