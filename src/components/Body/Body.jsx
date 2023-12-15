import frontdesk from '../../assets/images/frontdesk.png';
import React, { useState } from 'react';

function Body() {
  const [nombreCompleto, setNombreCompleto] = useState("");

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
        console.log("Datos enviados correctamente");
      } else {
        console.error("Error al enviar los datos");
      }
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
    }
  };

  return (
    <div className="flex items-center justify-center pt-10">
      {/* <img
        className=" w-80 h-70 rounded-3xl  brightness-75 contrast-150 mt-16"
        src={frontdesk}
        alt="frontdesk"
      /> */}
  
      <div className="ml-6  w-1/4 ">
        <form className="bg-neutral-100 rounded-3xl hover:shadow-2xl px-8 pt-6 pb-8 mb-4 focus:ring outline outline-stone-400 ring-indigo-500 focus:border-indigo-500">
          <div className="mb-4 ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nombres"
            >
              Nombres
            </label>
            <input
              className="shadow-xl appearance-none border-x-2 border-y-2 border-gray-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border-x-2 border-y-2 border-gray-600 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
              className="block text-gray-800 text-sm font-bold mb-2"
              htmlFor="codigo"
            >
              Código
            </label>
            <input
              className="shadow appearance-none border-x-2 border-y-2 border-gray-600 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
              className="bg-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  
}

export default Body;
