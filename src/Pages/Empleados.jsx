import Menu from "../components/menu.jsx"
import Footer from '../components/Footer.jsx'

import { collection, addDoc } from "firebase/firestore";
import { DataBase } from "../Config/DataBase.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Empleados = () => {
  

      const [nombre,setNombre]=useState("");
      const [documento,setDocumento]=useState("");
      const [correo,setCorreo]=useState("");
      const [cargo,setCargo]=useState("");
      const [salario,setSalario]=useState("");
      const [direccion,setDireccion]=useState("");
      const [cuenta,setCuenta]=useState("");
     


     const returnListado = useNavigate();
     const agregarEmpleado =async()=>{

      const servicioCollection=collection(DataBase,"Empleados");
      const servicio={
        nombre,
        documento,
        correo,
        cargo,
        salario,
        direccion,
        cuenta
      };
      await addDoc(servicioCollection,servicio);
      returnListado("/Empleados")

     }





  return (
   
    <div> <Menu/>
    <h1>Registrar Empleados</h1>
    <section>
      <form className="formEmpleados">
        <input

       
        onChange={(e)=>setNombre(e.target.value)}
        placeholder={"Nombre"}
        type={"text"}
        />
        <input 
        onChange={(e)=>setDocumento(e.target.value)}
        placeholder={"Documento"}
        type={"text"} 
        />
        <input
        onChange={(e)=>setCorreo(e.target.value)}
        placeholder={"Correo"}
        type={"text"}
        />
        <input
        onChange={(e)=>setCargo(e.target.value)}
        placeholder={"Cargo"}
        type={"text"}
        />
        <input
        onChange={(e)=>setSalario(e.target.value)}
        placeholder={"salario"}
        type={"text"}
        />
        <input
        onChange={(e)=>setDireccion(e.target.value)}
        placeholder={"Direccion"}
        type={"text"}
        />
        <input
        onChange={(e)=>setCuenta(e.target.value)}
        placeholder={"Cuenta"}
        type={"text"}
        />
        
        <input
          onClick={agregarEmpleado}
          type={"button"}
          value={"Agregar empleados"}
        />
      </form>
    </section> 
    <Footer/></div>
  )
}

export default Empleados