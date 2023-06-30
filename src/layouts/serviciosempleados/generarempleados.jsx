import { collection, addDoc } from "firebase/firestore";
import { DataBase } from "../../Config/DataBase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GenerarEmpleados = () => {
  const [cargo, setCargo] = useState("");
  const [correo, setCorreo] = useState("");
  const [cuenta, setCuenta] = useState("");
  const [direccion, setDireccion] = useState("");
  const [documento, setDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [salario, setSalario] = useState("");

  const returnListado = useNavigate();

  const agregarEmpleado = async () => {
    const empleadoCollection = collection(DataBase, "Empleados");
    const empleado = {
      cargo,
      correo,
      cuenta,
      direccion,
      documento,
      nombre,
      salario,
    };
    await addDoc(empleadoCollection, empleado);

    returnListado("/Empleados");
  };

  return (
    <div>
      <h1>Agregar empleado</h1>
      <section>
        <form className="formEmpleados">
          <input
            onChange={(e) => setCargo(e.target.value)}
            placeholder={"Cargo"}
            type={"text"}
          />
          <input
            onChange={(e) => setCorreo(e.target.value)}
            placeholder={"Correo"}
            type={"text"}
          />
          <input
            onChange={(e) => setCuenta(e.target.value)}
            placeholder={"Cuenta"}
            type={"text"}
          />
          <input
            onChange={(e) => setDireccion(e.target.value)}
            placeholder={"Dirección"}
            type={"text"}
          />
          <input
            onChange={(e) => setDocumento(e.target.value)}
            placeholder={"Documento"}
            type={"text"}
          />
          <input
            onChange={(e) => setNombre(e.target.value)}
            placeholder={"Nombre"}
            type={"text"}
          />
          <input
            onChange={(e) => setSalario(e.target.value)}
            placeholder={"Salario"}
            type={"text"}
          />

          <input
            onClick={agregarEmpleado}
            type={"button"}
            value={"Agregar empleado"}
          />
        </form>
      </section>
    </div>
  );
};

export default GenerarEmpleados;
