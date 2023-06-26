import Menu from "../components/Menu.jsx"
import Footer from '../components/Footer.jsx'
import { collection, addDoc } from "firebase/firestore";
import { DataBase,  } from "../Config/DataBase.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Proveedores = () => {



  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [nit, setNit] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nombreGerente, setNombreGerente] = useState("");
  
  

  const returnListado = useNavigate();
  const agregarProveedor = async()=>{


    const servicioCollection = collection(DataBase,"Prooveedores");
    const servicio={
      nombre,
      direccion,
      ciudad,
      nit,
      telefono,
      nombreGerente
    };
    await addDoc(servicioCollection,servicio);
    returnListado("/prooveedores")
  };
  
 


  return (
    <div>
      <Menu/>
      <h1>Registrar Proveedores</h1>
      
      <section>
        <form className="formProoveedores">
        <input 
      

          onChange={(e) => setNombre(e.target.value)}
          placeholder={"Nombre "}
          type={"text"}
        />
        <input
        onChange={(e) => setDireccion(e.target.value)}
        placeholder={"Direccion "}
        type={"text"}
        />
        <input
        onChange={(e) => setCiudad(e.target.value)}
        placeholder={"Ciudad"}
        type={"text"}
        />
        <input
        onChange={(e) => setNit(e.target.value)}
        placeholder={"Nit"}
        type={"text"}
        />
        <input
        onChange={(e) => setTelefono(e.target.value)}
        placeholder={"Telefono"}
        type={"text"}
        />
        <input
        onChange={(e) => setNombreGerente(e.target.value)}
        placeholder={"Nombre Gerente"}
        type={"text"}
        />
        
        <input
          onClick={agregarProveedor}
          type={"button"}
          value={"Agregar proovedor"}
        />
        </form>
      </section>
      <Footer/>
      </div>
  )
}

export default Proveedores