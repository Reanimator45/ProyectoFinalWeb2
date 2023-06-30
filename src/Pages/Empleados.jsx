import GenerarEmpleados from "../layouts/serviciosempleados/generarempleados.jsx"

import Menu from "../components/menu.jsx"
import Footer from '../components/Footer.jsx'
import ListarEmpleados from "../layouts/serviciosempleados/listarempleados.jsx"
const Clientes = () => {
  
  return (
    <div>
      <Menu/>

      <GenerarEmpleados/>
      <ListarEmpleados/>
      <Footer/>
      </div>
  )
}

export default Clientes