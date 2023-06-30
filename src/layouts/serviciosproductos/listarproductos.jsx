import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { DataBase } from "../../Config/DataBase";

const ListarProductos = () => {
  const [productos, setProductos] = useState([]);

  const mostrarProductos = async () => {
    const productosCollection = collection(DataBase, "Productos");
    const productosSnapshot = await getDocs(productosCollection);
    const productosData = productosSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setProductos(productosData);
  };

  const eliminarProducto = async (id) => {
    const productoEliminado = doc(DataBase, "Productos", id);
    await deleteDoc(productoEliminado);
    mostrarProductos();
  };

  useEffect(() => {
    mostrarProductos();
  }, []);

  return (
    <div>
      <h1>Listado de Productos</h1>
      <section>
        {productos.map((producto) => (
          <div key={producto.id}>
            <h1>{producto.nombre}</h1>
            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ListarProductos;
