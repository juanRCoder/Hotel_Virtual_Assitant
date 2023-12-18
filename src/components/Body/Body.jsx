import room from '../../assets/images/room.png';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';


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
    <div className="flex flex-col md:flex-row items-center justify-center mt-12">
      
      <img
        className="w-full md:w-3/5 h-70 rounded-3xl hover:drop-shadow-2xlxl mb-6 md:mr-6 border border-green-600 hover:shadow-2xl"
        src={room}
        alt="frontdesk"
      />

      {/*  behind  the form */}
      <div className="
      bg-white
       p-8 
       -mt-5 
        rounded-3xl 
        shadow-md 
        border border-green-600 
        hover:shadow-2xl 
        w-full 
        md:w-80 
        bg-gradient-to-br
        from-white
        via-lime-100
        to-lime-200 ">
        {/* Formulario de login */}
        <form className="w-full">
          <div className="mb-6">
            <label
              className="block text-green-600 text-sm font-bold mb-2"
              htmlFor="nombres"
            >
              Nombres
            </label>
            <input
              className="shadow-xl appearance-none border-l-4 border-y border-r rounded-t-xl  border-green-400  w-full py-2 px-3 text-black mb-3"
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
              className="block text-green-600 text-sm font-bold mb-2"
              htmlFor="apellidos"
            >
              Apellidos
            </label>
            <input
              className="shadow-xl appearance-none border-l-4 border-y-1 border-y border-r rounded-t-xl  border-green-400 w-full py-2 px-3 text-black mb-3"
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
              className="block text-green-600 text-sm font-bold mb-2"
              htmlFor="codigo"
            >
              Código
            </label>
            <input
              className="shadow-xl appearance-none border-l-4 border-y-1 border-y border-r rounded-t-xl  border-green-400 w-full py-2 px-3 text-black  mb-3 "
              id="codigo"
              type="text"
              name="codigo"
              value={nombreCompleto.codigo || ""}
              onChange={handleChange}
              placeholder="Código"
            />
            <p className="text-green-900  font-mono text-sm">
              Por favor, ingrese su código.
            </p>
          </div>
          <div className="flex items-center justify-center shadow-xl ">
            <button
              className="bg-green-300 hover:bg-green-600 text-black font-bold py-4  rounded focus:outline-none focus:shadow-outline  w-full "
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
