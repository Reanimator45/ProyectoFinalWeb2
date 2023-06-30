import { collection, addDoc } from "firebase/firestore";
import { DataBase } from "../../Config/DataBase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GenerarProveedor = () => {
  const [ciudad, setCiudad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [nit, setNit] = useState("");
  const [nombre, setNombre] = useState("");
  const [nombreGerente, setNombreGerente] = useState("");
  const [telefono, setTelefono] = useState("");

  const returnListado = useNavigate();

  const agregarProveedor = async () => {
    const proveedorCollection = collection(DataBase, "Proveedores");
    const proveedor = {
      ciudad,
      direccion,
      nit,
      nombre,
      nombreGerente,
      telefono,
    };
    await addDoc(proveedorCollection, proveedor);

    returnListado("/Proveedores");
  };

  return (
    <div>
      <h1>Agregar proveedor</h1>
      <section>
        <form className="formProveedores">
          <input
            onChange={(e) => setCiudad(e.target.value)}
            placeholder={"Ciudad"}
            type={"text"}
          />
          <input
            onChange={(e) => setDireccion(e.target.value)}
            placeholder={"Dirección"}
            type={"text"}
          />
          <input
            onChange={(e) => setNit(e.target.value)}
            placeholder={"NIT"}
            type={"text"}
          />
          <input
            onChange={(e) => setNombre(e.target.value)}
            placeholder={"Nombre"}
            type={"text"}
          />
          <input
            onChange={(e) => setNombreGerente(e.target.value)}
            placeholder={"Nombre del Gerente"}
            type={"text"}
          />
          <input
            onChange={(e) => setTelefono(e.target.value)}
            placeholder={"Teléfono"}
            type={"text"}
          />

          <input
            onClick={agregarProveedor}
            type={"button"}
            value={"Agregar proveedor"}
          />
        </form>
      </section>
    </div>
  );
};

export default GenerarProveedor;
