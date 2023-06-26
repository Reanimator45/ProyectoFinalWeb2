import Menu from "../components/Menu.jsx"
import Footer from '../components/Footer.jsx'
import { collection, addDoc } from "firebase/firestore";
import { DataBase,  } from "../Config/DataBase.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




const Bodega = () => {

  const [nombre,setNombre]=useState("");
  const [urlImagen,setUrlImagen]=useState("")
  const [contrasena,setContrasena]=useState("");
  const [usuario,setUsuario]=useState("");
 
  
  const returnListado =useNavigate();

  const agregarBodega= async()=>{


    const servicioCollection = collection(DataBase,"Bodegas");
    const servicio = {
      nombre,
      urlImagen,
      contrasena,
      usuario
    };

    await addDoc(servicioCollection,servicio);
    returnListado("/Bodegas");
     
  };







  return (
    <div>
      <Menu/>
     <h1>Registrar Bodega</h1>
     <section>
      <form className="formBodegas">
        <input
          onChange={(e) => setNombre(e.target.value)}
          placeholder={"Nombre"}
          type={"text"}
        />
        <input
          onChange={(e) => setUrlImagen(e.target.value)}
          placeholder={"Url de Imagen"}
          type={"text"}
        />
        <input
          onChange={(e) => setContrasena(e.target.value)}
          placeholder={"Contraseña"}
          type={"text"}
        />
        <input
          onChange={(e) => setUsuario(e.target.value)}
          placeholder={"Usuario"}
          type={"text"}
        />
         <input
          onClick={agregarBodega}
          type={"button"}
          value={"Agregar Bodega"}
        />
        
      </form>
     </section>
     <Footer/>
      </div>
  )
}

export default Bodega