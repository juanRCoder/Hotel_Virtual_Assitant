import room from '../../assets/images/room.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Jhony/Header.AllHeaders.css'


function Body() {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [goToDashboard, setGoToDashboard] = useState(false);
  const navigate = useNavigate();


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
        const userId = await response.json();
          navigate(`/Dashboard/${userId}`); 
        setGoToDashboard(true);
      } else {
        console.error("Los datos no son correctos");
      }
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
    }
  };
  
 
  return (
    <div className="
    flex 
    flex-col 
    md:flex-row 
    items-center 
    justify-center 
    container-principal
    ">
      
      <img
        className="
        w-80
        md:w-3/5
        h-4/6
        shadow-2xl
        shadow-black
        hover:drop-shadow-2xl 
        rounded-xl
        mb-6 md:mr-6 
        border
        border-green-600
        hover:shadow-2xl
        rounded-s-2xl
        imagen-room
        "
        src={room}
        alt="frontdesk"
      />

      {/*  behind  the form */}
      <div className="
      bg-white
       p-8  
        rounded-3xl 
        shadow-2xl
        shadow-black
        border border-green-600 
        hover:shadow-2xl 
        w-full 
        md:w-80 
        bg-gradient-to-br
        from-white
        via-lime-100
        to-lime-200 
        ml-20 
        formulario-data
        ">
        {/* Formulario de login */}
        <form className="w-full">
          <div className=" formulario-login">
            <label
              className="
              block 
              text-green-600
              text-sm 
              font-bold 
              mb-2
              Nombres-login
              "
              htmlFor="nombres"
            >
              Nombres
            </label>
            <input
              className="
              shadow-md 
              shadow-green-950 
              appearance-none 
              border-l-4 border-y 
              border-r rounded-t-xl  
              border-green-400  
              w-full 
              py-2 px-3 
             text-black
              mb-3"
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
              className="
              block 
              text-green-600 
              text-sm 
              font-bold 
              mb-2"
              htmlFor="apellidos"
            >
              Apellidos
            </label>
            <input
              className="
              shadow-md 
              shadow-green-950 
              appearance-none 
              border-l-4 
              border-y-1 
              border-y 
              border-r 
              rounded-t-xl  
              border-green-400 
              w-full 
              py-2 px-3 
              text-black mb-3"
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
              className="
              block 
              text-green-600 
              text-sm 
              font-bold 
              mb-2"
              htmlFor="codigo"
            >
              Código
            </label>
            <input
              className="
              shadow-md 
              shadow-green-950
              appearance-none 
              border-l-4 
              border-y-1 
              border-y border-r 
              rounded-t-xl  
              border-green-400 
              w-full 
              py-2 px-3 
              text-black  
              mb-3 "
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
          <div className="flex items-center justify-center shadow-xl boton-ingresar">
            <button
              className="
              bg-green-300
              hover:bg-green-600 
              text-black font-bold py-4  
              rounded 
              focus:outline-none 
              focus:shadow-outline  
              w-full boton-ingresar"
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
