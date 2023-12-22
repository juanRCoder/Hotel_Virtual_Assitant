import React, { useState } from "react";
import { useParams } from "react-router-dom";
import servicios from "../../assets/images/frontdesk.png";
// import DateTimePicker from "react-datepicker";
// import TimePicker from "react-time-picker";
// import "react-datepicker/dist/react-datepicker.css";
// import "react-time-picker/dist/TimePicker.css";

function BodyServicios() {
  const { id } = useParams();
  const [nombreServicio, setNombreServicio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [hora, setHora] = useState("");
  const [minutes, setMinutes] = useState("");

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
    const button = document.getElementById("submitButton");
    button.classList.add("jello-vertical");
    e.eventPrevenDefault();

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
    <div className="flex items-center mx-4">
      <img className="w-200" src={servicios} alt="SERVICIOS" />
      <div className="flex flex-col w-full h-full ml-4">
        <form
          action=""
          className="border border-black rounded-3xl p-8 bg-gray-100"
        >
          {/*SELECCIONAR TIPO DE SERVICIO*/}
          <div>
            <label htmlFor="descripcion" className="text-lg font-semibold mb-2">
              Tipo de Servicio
            </label>
            <select
              id="servicio"
              className="border border-black p-2 mb-4 w-full rounded"
              name="nombreServicio"
              value={nombreServicio}
              onChange={handleChange}
            >
              <option value="" disabled selected>
                Seleccione el servicio
              </option>
              <option value="toallas">Toallas</option>
              <option value="lavanderia">Lavandería</option>
              <option value="limpieza">limpieza</option>
              <option value="amenities">amenities</option>
              <option value="lavanderia">No limpieza</option>
            </select>
          </div>

          {/*DETALLES DEL SERVICIO*/}
          <div>
            <label htmlFor="descripcion" className="text-lg font-semibold mb-2">
              Detalles del servicio.
            </label>
            <textarea
              type="text"
              id="descripcion"
              name="descripcion"
              value={descripcion}
              placeholder="Descripción"
              className="border border-black p-2 w-full rounded"
              onChange={handleChange}
            ></textarea>
          </div>

          {/*HORARIO DEL SERVICIO*/}
          <div>
            <label htmlFor="horario">Horario: </label>
            <select id="hora" name="hora" value={hora} onChange={handleChange}>
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
            >
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
            onClick={handleClick}
            id="submitButton"
            type="button"
            className="text-center 
          justify-center 
          items-center flex
           border-black text-2xl
            rounded-xl w-full
             bg-green-400 mt-6 
             jello-vertical
            default:"
          >
            Enviar informacion
          </button>
        </form>
      </div>
    </div>
  );
}

export default BodyServicios;
