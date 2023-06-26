import generarclientes from "../layouts/serviciosclientes/generarclientes.jsx"

import menu from "../components/menu.jsx"
import footer from '../components/footer.jsx'
import listadeclientes from "../layouts/serviciosclientes/listadeclientes.jsx"
const clientes = () => {
  
  return (
    <div>
      <menu/>

      <generarclientes/>
      <listadeclientes/>
      <footer/>
      </div>
  )
}

export default clientes