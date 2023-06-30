import { collection, addDoc } from "firebase/firestore";
import { DataBase } from "../../Config/DataBase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GenerarProductos = () => {
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState("");

  const returnListado = useNavigate();

  const agregarProducto = async () => {
    const productoCollection = collection(DataBase, "Productos");
    const producto = {
      cantidad,
      categoria,
      descripcion,
      nombre,
      valor,
    };
    await addDoc(productoCollection, producto);

    returnListado("/Productos");
  };

  return (
    <div>
      <h1>Agregar producto</h1>
      <section>
        <form className="formProductos">
          <input
            onChange={(e) => setCantidad(e.target.value)}
            placeholder={"Cantidad"}
            type={"number"}
          />
          <input
            onChange={(e) => setCategoria(e.target.value)}
            placeholder={"Categoría"}
            type={"text"}
          />
          <input
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder={"Descripción"}
            type={"text"}
          />
          <input
            onChange={(e) => setNombre(e.target.value)}
            placeholder={"Nombre"}
            type={"text"}
          />
          <input
            onChange={(e) => setValor(e.target.value)}
            placeholder={"Valor"}
            type={"number"}
          />

          <input
            onClick={agregarProducto}
            type={"button"}
            value={"Agregar producto"}
          />
        </form>
      </section>
    </div>
  );
};

export default GenerarProductos;
