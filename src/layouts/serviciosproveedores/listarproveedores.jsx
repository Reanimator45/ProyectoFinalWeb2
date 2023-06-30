import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { DataBase } from "../../Config/DataBase";

const ListarProveedores = () => {
  const [proveedores, setProveedores] = useState([]);

  const mostrarProveedores = async () => {
    const proveedoresCollection = collection(DataBase, "Proveedores");
    const proveedoresSnapshot = await getDocs(proveedoresCollection);
    const proveedoresData = proveedoresSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setProveedores(proveedoresData);
  };

  const eliminarProveedor = async (id) => {
    const proveedorEliminado = doc(DataBase, "Proveedores", id);
    await deleteDoc(proveedorEliminado);
    mostrarProveedores();
  };

  useEffect(() => {
    mostrarProveedores();
  }, []);

  return (
    <div>
      <h1>Listado de Proveedores</h1>
      <section>
        {proveedores.map((proveedor) => (
          <div key={proveedor.id}>
            <h1>{proveedor.nombre}</h1>
            <button onClick={() => eliminarProveedor(proveedor.id)}>Eliminar</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ListarProveedores;
