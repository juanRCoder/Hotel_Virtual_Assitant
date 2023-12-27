import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BodyServicios() {
  const { id } = useParams();
  const [nombreServicio, setNombreServicio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [hora, setHora] = useState("");
  const [minutes, setMinutes] = useState("");

  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "nombreServicio") {
      setNombreServicio(value);
    } else if (name === "descripcion") {
      setDescripcion(value);
    } else if (name === "hora") {
      setHora(value);
    } else if (name === "minutes") {
      setMinutes(value);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    /*post*/
    try {
      await fetch(`/enviarServicio/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombreServicio,
          descripcion,
          hora,
          minutes,
        }),
      })
        .then((res) => res.json())
        .then((serviceId) => {
          navigate(`/dashboard/servicios/resultService/${serviceId}`);
          console.log("Servicio Enviado");
        })
        .catch((e) => console.log(e));
    } catch (error) {
      console.error("Error");
    }

    setTimeout(() => {
      button.classList.remove("jello-vertical");
    }, 500);
  };

  return (
    <>
    <div className="
      flex 
      justify-center 
      text-center
      ml-16">
      <h1 className="
      text-6xl
      font-Abril-Fatface
      text-green-800
      text-shadow-lg
      shadow-black/100
      
      ">
        SERVICIO DE HOUSEKEEPING
      </h1>
    </div>
    <div className="
    flex 
    items-center 
    justify-center 
    mx-4 
    mt-4">
    <form
    onSubmit={handleClick}
      action=""
      className=" 
          flex 
          flex-col
          items-center
          ml-20 
          w-2/5 
          h-3/5 
          rounded-3xl 
          shadow-2xl 
          shadow-green-900 
          border 
          border-green-800 
          hover:shadow-2xl 
          border-l-8 
          border-y-2
          p-8
          bg-gray-100"
    >
      {/* SELECCIONAR TIPO DE SERVICIO */}
      <div>
        <label htmlFor="descripcion"  className="
        text-lg 
        font-mono 
        mb-2
        
        ">
          
          Tipo de Servicio
        </label>
        <select
          id="servicio"
          name="nombreServicio"
          value={nombreServicio}
          onChange={handleChange}
          required
          className="border 
          border-green-800
          p-2 
          mb-4 
          w-full 
          rounded
          border-l-2
          border-y-2
          border-x-2"  
        >
          <option value="">
            Seleccione el servicio
          </option>
          <option value="toallas">Toallas</option>
          <option value="lavanderia">Lavandería</option>
          <option value="limpieza">limpieza</option>
          <option value="amenities">amenities</option>
          <option value="lavanderia">No limpieza</option>
        </select>
      </div>

      {/* DETALLES DEL SERVICIO */}
      <div>
        <label htmlFor="descripcion" 
        className="
        text-lg 
        font-mono 
        mb-2">
          Detalles del servicio.
        </label>
        <textarea
          type="text"
          id="descripcion"
          name="descripcion"
          value={descripcion}
          placeholder="Descripción"
          className="
          rounded-xl
          border 
          border-green-800
          border-l-8 border-y-2
          shadow-xl
          shadow-emerald-200 
          p-2 
          w-full
          h-40"
          required
          onChange={handleChange}
        ></textarea>
      </div>

      {/* HORARIO DEL SERVICIO */}
      <div className="
      flex 
      items-center
      border border-green-800
      mt-4
      px-2
      py-1
      rounded-md
      border-l-2
      border-y-2
      border-x-2
      ">
        <label htmlFor="horario" className="mr-2" >
          Horario:
        </label>
        <select 
        id="hora"
        name="hora" 
        value={hora} 
        onChange={handleChange} required 
        className="appearance-none" >
          <option value="">...</option>
          <option value="Inmediata">Inmediata</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
        </select>{" "}
        :{" "}
        <select 
        id="minutes" 
        name="minutes" 
        value={minutes} 
        onChange={handleChange} 
        required 
        className="appearance-none" >
          <option value="">...</option>
          <option value="00">00</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="40">40</option>
        </select>
      </div>

      <button
        className="
       
        border
        border-black 
        mt-4
        shadow-xl
        shadow-green-400
        bg-green-500
        hover:bg-green-950
        text-black 
        w-24
        h-12 
        rounded 
        focus:outline-none 
        focus:shadow-outline  
        font-bold
        text-xl
        ">
        Enviar 
      </button>
    </form>
  </div>
  </>
  );
}

export default BodyServicios;
