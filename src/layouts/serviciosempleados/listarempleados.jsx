import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { DataBase } from "../../Config/DataBase";

const ListarEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);

  const mostrarEmpleados = async () => {
    const empleadosCollection = collection(DataBase, "Empleados");
    const empleadosSnapshot = await getDocs(empleadosCollection);
    const empleadosData = empleadosSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setEmpleados(empleadosData);
  };

  const eliminarEmpleado = async (id) => {
    const empleadoEliminado = doc(DataBase, "Empleados", id);
    await deleteDoc(empleadoEliminado);
    mostrarEmpleados();
  };

  useEffect(() => {
    mostrarEmpleados();
  }, []);

  return (
    <div>
      <h1>Listado de Empleados</h1>
      <section>
        {empleados.map((empleado) => (
          <div key={empleado.id}>
            <h1>{empleado.nombre}</h1>
            <button onClick={() => eliminarEmpleado(empleado.id)}>Eliminar</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ListarEmpleados;
