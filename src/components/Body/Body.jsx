import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import frontdesk from '../../assets/images/frontdesk.png';

function Body() {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [goToDashboard, setGoToDashboard] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNombreCompleto((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/enviarRegistro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nombreCompleto),
      });

      if (response.ok) {
        setGoToDashboard(true);
      } else {
        console.error("Los datos no son correctos");
      }
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
    }
  };

  if (goToDashboard) {
    return <Navigate to="Dashboard" />;
  }

  return (
    <>
      <div className="flex justify-center items-center pt-20">
        <img
          className="bg-slate-100 w-80 h-70 rounded-3xl"
          src={frontdesk}
          alt="frontdesk"
        />
      </div>
      <br />
      <div className="w-full max-w-xs mt-5 bg-slate-800 mx-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nombres"
            >
              Nombres
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nombres"
              type="text"
              name="nombres"
              value={nombreCompleto.nombres || ""}
              placeholder="Nombres"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="apellidos"
            >
              Apellidos
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="apellidos"
              type="text"
              name="apellidos"
              value={nombreCompleto.apellidos || ""}
              onChange={handleChange}
              placeholder="Apellidos"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="codigo"
            >
              Código
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="codigo"
              type="text"
              name="codigo"
              value={nombreCompleto.codigo || ""}
              onChange={handleChange}
              placeholder="Código"
            />
            <p className="text-red-500 text-xs italic">
              Por favor, ingrese su código.
            </p>
          </div>
          <div className="flex items-center justify-between pl-20">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Ingresar
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Hotel Transilvania. Todos los derechos reservados.
        </p>
      </div>
    </>
  );
}

export default Body;
