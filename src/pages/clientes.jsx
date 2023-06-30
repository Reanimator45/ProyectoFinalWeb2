import GenerarClientes from "../layouts/serviciosclientes/GenerarClientes.jsx"

import Menu from "../components/menu.jsx"
import Footer from '../components/Footer.jsx'
import ListaDeClientes from "../layouts/serviciosclientes/ListaDeClientes.jsx"
const Clientes = () => {
  
  return (
    <div>
      <Menu/>

      <GenerarClientes/>
      <ListaDeClientes/>
      <Footer/>
      </div>
  )
}

export default Clientes