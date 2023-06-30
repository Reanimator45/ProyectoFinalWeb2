import { collection, addDoc } from "firebase/firestore";
import { DataBase } from "../../Config/DataBase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GenerarBodega = () => {
  const [contraseña, setContraseña] = useState("");
  const [nombre, setNombre] = useState("");
  const [urlImagen, setUrlImagen] = useState("");
  const [usuario, setUsuario] = useState("");

  const returnListado = useNavigate();

  const agregarBodega = async () => {
    const bodegaCollection = collection(DataBase, "Bodegas");
    const bodega = {
      contraseña,
      nombre,
      urlImagen,
      usuario,
    };
    await addDoc(bodegaCollection, bodega);

    returnListado("/Bodega");
  };

  return (
    <div>
      <h1>Agregar bodega</h1>
      <section>
        <form className="formBodegas">
          <input
            onChange={(e) => setContraseña(e.target.value)}
            placeholder={"Contraseña"}
            type={"password"}
          />
          <input
            onChange={(e) => setNombre(e.target.value)}
            placeholder={"Nombre"}
            type={"text"}
          />
          <input
            onChange={(e) => setUrlImagen(e.target.value)}
            placeholder={"URL de imagen"}
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
            value={"Agregar bodega"}
          />
        </form>
      </section>
    </div>
  );
};

export default GenerarBodega;
