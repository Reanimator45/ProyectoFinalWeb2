

import Menu from "../components/menu.jsx"
import Footer from '../components/Footer.jsx'

import GenerarProveedor from "../layouts/serviciosproveedores/generarproveedores.jsx"
import ListarProveedores from "../layouts/serviciosproveedores/listarproveedores.jsx"
const Proveedores = () => {
  
  return (
    <div>
      <Menu/>

      <GenerarProveedor/>
      <ListarProveedores/>
      <Footer/>
      </div>
  )
}

export default Proveedores