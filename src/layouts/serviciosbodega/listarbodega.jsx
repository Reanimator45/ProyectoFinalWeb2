import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { DataBase } from "../../Config/DataBase";

const ListarBodega = () => {
  const [bodegas, setBodegas] = useState([]);

  const mostrarBodegas = async () => {
    const bodegasCollection = collection(DataBase, "Bodegas");
    const bodegasSnapshot = await getDocs(bodegasCollection);
    const bodegasData = bodegasSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setBodegas(bodegasData);
  };

  const eliminarBodega = async (id) => {
    const bodegaEliminada = doc(DataBase, "Bodegas", id);
    await deleteDoc(bodegaEliminada);
    mostrarBodegas();
  };

  useEffect(() => {
    mostrarBodegas();
  }, []);

  return (
    <div>
      <h1>Listado de Bodegas</h1>
      <section>
        {bodegas.map((bodega) => (
          <div key={bodega.id}>
            <h1>{bodega.nombre}</h1>
            <button onClick={() => eliminarBodega(bodega.id)}>Eliminar</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ListarBodega;
