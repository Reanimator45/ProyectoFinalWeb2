import { collection, addDoc } from "firebase/firestore";
import { DataBase } from "../../Config/DataBase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GenerarClientes = () => {

    const [nombre, setNombre] = useState("");
  const [documento, setDocumento] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [barrio, setBarrio] = useState("");
  const [ciudad, setCiudad] = useState("");

  
  const returnListado = useNavigate();
  const agregarCliente = async () => {
   
    
    const servicioCollection = collection(DataBase, "Clientes");
    const servicio = {
      nombre,
      documento,
      correo,
      telefono,
      direccion,
      barrio,
      ciudad
      
    };
    await addDoc(servicioCollection, servicio);
 
    returnListado("/Clientes");
  };
  return (
    <div><h1>Agregar cliente</h1>
    <section >
    <form className="formClientes">
      <input
        onChange={(e) => setNombre(e.target.value)}
        placeholder={"Nombre "}
        type={"text"}
      />
      <input
        onChange={(e) => setDocumento(e.target.value)}
        placeholder={"Documento "}
        type={"text"}
        max={'50'}
      />
      <input
        onChange={(e) => setCorreo(e.target.value)}
        placeholder={"Correo"}
        type={"text"}
      />
      <input
        onChange={(e) => setTelefono(e.target.value)}
        placeholder={"Telefono"}
        type={"text"}
      />
      <input
        onChange={(e) => setDireccion(e.target.value)}
        placeholder={"Direccion"}
        type={"text"}
      />
      <input
        onChange={(e) => setBarrio(e.target.value)}
        placeholder={"Barrio"}
        type={"text"}
      />
      <input
        onChange={(e) => setCiudad(e.target.value)}
        placeholder={"Ciudad"}
        type={"text"}
      />
    
      <input
        onClick={agregarCliente}
        type={"button"}
        value={"Agregar cliente"}
      />
    </form>
  </section></div>
  )
}

export default GenerarClientes