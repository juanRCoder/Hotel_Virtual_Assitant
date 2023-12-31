import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
        const response = await fetch("/extraerMesas");
        const data = await response.json();
        console.log("Mesas", data);
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

  const handleCrearReserva = async (e) => {
    e.preventDefault();
    try {
      reservaInfo.tipoMesa =
        reservaInfo.tipoMesa || (mesas.length > 0 ? mesas[0].tipoMesa : "");

      const datosReserva = {
        reserva: reservaInfo.tipoMesa,
        cantidad: reservaInfo.cantidadPersonas || 1,
        fecha: reservaInfo.fecha || "15-01/2024",
        hora: reservaInfo.hora || "12",
        minutes: reservaInfo.minutes || "00",
      };

      const response = await fetch(`/enviarReserva/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosReserva),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("ID de la reserva:", data);
        navigate(`/dashboard/restaurant/reserva/resultReserva/${data}`);
      }
    } catch (error) {
      console.error("Error al crear la reserva:", error);
    }
  };

  return (
    <>
      <div
        className="
  flex 
  justify-center 
  items-center 
  text-center 
  flex-col
  py-4 md:py-0 px-4 md
  "
      >
        <form
          onSubmit={handleCrearReserva}
          className="
    w-full 
    max-w-md"
        >
          <div
            className="
      mx-4 
      my-8 border 
      border-black 
      p-4 sm:p-6 lg:p-8 
      rounded-2xl
      pt-8 md:pt-0
      bg-lime-100"
          >
            <div className="mb-4">
              <label htmlFor="tipoMesa">Tipo de mesa</label>
              <select
                required
                name="tipoMesa"
                id="tipoMesa"
                value={reservaInfo.tipoMesa}
                onChange={handleChange}
                className="
            w-full 
            border 
            rounded 
            py-2 
            px-3
          "
              >
                <option>Selecciona el tipo de mesa</option>
                {mesas ? (
                  mesas.map((mesa) => (
                    <option key={mesa.id} value={mesa.tipoMesa}>
                      {mesa.tipoMesa}
                    </option>
                  ))
                ) : (
                  <option disabled>No hay datos disponibles</option>
                )}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="cantidadPersonas">Cantidad de Personas</label>
              <input
                required
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
            px-3
          "
              />
            </div>
            {/* time to book a table in restaurant */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between">
              <div className="mb-4 sm:mr-4">
                <label htmlFor="hora">Hora</label>
                <select
                  required
                  name="hora"
                  id="hora"
                  value={reservaInfo.hora}
                  onChange={handleChange}
                  className="
              w-full 
              border 
              rounded 
              py-2 
              px-3
            "
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
              <div className="mb-4">
                <label htmlFor="minutes">Minutos</label>
                <select
                  required
                  name="minutes"
                  id="minutes"
                  value={reservaInfo.minutes}
                  onChange={handleChange}
                  className="
              w-full 
              border 
              rounded 
              py-2 
              px-3
            "
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
                required
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
            px-3
            mb-6  mb:mb-4
          "
              />
            </div>
            {/* Botones para enviar o cancelar la reserva */}
            <button className="
            flex ml-20 md:ml-20  
            bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-8 mr-2 rounded ">
              Generar Reseva
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BodyReservaRestaurant;
