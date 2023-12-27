import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import mongoose from "mongoose";

const BodyReservaRestaurant = () => {
  const { id } = useParams();
  const [mesas, setMesas] = useState(null);
  const [reservaInfo, setReservaInfo] = useState({
    tipoMesa: "",
    cantidadPersonas: "",
    hora: "",
    minutes: "",
    fecha: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMesas = async () => {
      try {
        const response = await fetch(" /extraerMesas");
        const data = await response.json();
        console.log("Mesas:", data);
        setMesas(data);
      } catch (err) {
        console.error("Error al obtener las mesas:", err);
      }
    };

    fetchMesas();
  }, []);

  const handleChange = (e) => {
    setReservaInfo({
      ...reservaInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleCrearReserva = async () => {
    try {
      const clienteId = new mongoose.Types.ObjectId();

      reservaInfo.tipoMesa =
        reservaInfo.tipoMesa || (mesas.length > 0 ? mesas[0].tipoMesa : "");

      const datosReserva = {
        reserva: reservaInfo.tipoMesa,
        cantidad: reservaInfo.cantidadPersonas || 1,
        fecha: reservaInfo.fecha || "15-01/2024",
        hora: reservaInfo.hora || "12",
        minutos: reservaInfo.minutes || "00",
      };

      const response = await fetch(
        `http://localhost:3004/enviarReserva/${clienteId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datosReserva),
        }
      );

      const data = await response.json();
      console.log("ID de la reserva:", data);

      navigate.goBack();
    } catch (error) {
      console.error("Error al crear la reserva:", error);
    }
  };

 
  return (
    <div className="
        flex 
        justify-center 
        items-center 
        text-center 
        flex-col">
  <form className="
        w-full 
        max-w-md">
    <h2 className="
        text-6xl 
        font-Abril-Fatface 
        mt-4 
        text-green-800 
        shadow-black/100 
        text-shadow-sm">
      RESERVA RESTAURANTE
    </h2>
    
    <div className="
        mx-4 
        my-8 border 
        border-black 
        p-6 
        rounded-md
        bg-">
      <div className="
      mb-4">
        <label htmlFor="tipoMesa">Tipo de mesa</label>
        <select
          name="tipoMesa"
          id="tipoMesa"
          value={reservaInfo.tipoMesa}
          onChange={handleChange}
          className="
          w-full 
          border 
          rounded
          py-2 
          px-3"
        >
            <option value="">...</option>
              {mesas ? (
                mesas.map((mesa) => (
                <option key={mesa.id} value={mesa.tipoMesa}>{mesa.tipoMesa}</option>
              ))
            ) : (
              <option disabled>No hay datos disponibles</option>
            )}
          </select>
      </div>
      <div className="mb-4">
        <label htmlFor="cantidadPersonas">Cantidad de Personas</label>
        <input
          type="number"
          id="cantidadPersonas"
          name="cantidadPersonas"
          value={reservaInfo.cantidadPersonas}
          onChange={handleChange}
          className="
          w-full 
          border 
          rounded 
          py-2 
          px-3"
        />
      </div>
      {/* time to book a table in restaurant */}
      <div className="flex justify-center">
        <div className="mr-4">
          <label htmlFor="hora">Hora</label>
          <select
            name="hora"
            id="hora"
            value={reservaInfo.hora}
            onChange={handleChange}
            className="
            w-full 
            border 
            rounded 
            py-2 
            px-3"
          >
            {/* Opciones de hora */}
            <option value="">...</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <div>
          <label htmlFor="minutes">Minutos</label>
          <select
            name="minutes"
            id="minutes"
            value={reservaInfo.minutes}
            onChange={handleChange}
            className="
            w-full 
            border 
            rounded 
            py-2 
            px-3"
          >
            {/* Opciones para los minutos */}
            <option value="">...</option>
            <option value="00">00</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={reservaInfo.fecha}
          onChange={handleChange}
          className="
          w-full 
          border 
          rounded 
          py-2 
          px-3"
        />
      </div>
      {/* Botones para enviar o cancelar la reserva */}
      <button
        type="button"
        onClick={handleCrearReserva}
        className="
        bg-blue-500 
        hover:bg-blue-700 
        text-white 
        font-bold 
        py-2 
        px-4 
        mr-2 
        rounded"
      >
        Enviar reserva
      </button>
      
    </div>
  </form>
</div>

  );
};

export default BodyReservaRestaurant;

