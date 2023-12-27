import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function BodyTecnico() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [problema, setProblema] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [minutes, setMinutes] = useState("");
  const [hora, setHora] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "problema") {
      setProblema(value);
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

    try {
      await fetch(`/enviarServiciosTec/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          problema,
          descripcion,
          hora,
          minutes,
        }),
      })
        .then((res) => res.json())
        .then((tecnicoId) => {
          navigate(`/dashboard/serviciosTec/resultServiceTec/${tecnicoId}`);
          console.log({ tecnicoId });
        })

        .catch((e) => console.log(e));
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <div
        className="
        flex 
        justify-center 
        text-center
        ml-16"
      >
        <h1
          className="
            text-6xl
            font-Abril-Fatface
          text-green-800
            text-shadow-lg
          shadow-black/100
      
      "
        >
<<<<<<< HEAD
          <h1 className="text-xl mt-4 font-mono">Tipo de Problema:</h1>
          <select
            required
            id="problema"
            name="problema"
            value={problema}
            onChange={handleChange}
            className="
            border border-green-800
            p-2 
            mb-4 
            mt-2
            w-4/5
            text-center
            justify-center
            items-center 
            rounded-lg
            border-l-2
            border-y-2
            border-x-2"
          >
            <option value="">
=======
          PROBLEMA
        </h1>
      </div>
      <div
        className="
          flex 
          items-center 
          justify-center 
          mx-4 
          mt-4"
      >
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
            <label
              htmlFor="descripcion"
              className="
              text-lg 
              font-mono 
              mb-2
              ">
            Seleccione el problema

            </label>
            <select
              id="problema"
              name="problema"
              value={problema}
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
             <option value="" disabled selected>
>>>>>>> main
              Seleccione el problema
            </option>
            <option value="AGUA">AGUA</option>
            <option value="LUZ">LUZ</option>
            <option value="INTERNET">INTERNET</option>
            <option value="TV">TV</option>
            <option value="AIRE ACONDICIONADO">AIRE ACONDICIONADO</option>
            <option value="DUCHA">DUCHA</option>
            <option value="OTROS">OTROS</option>
            </select>
          </div>

          {/* DETALLES DEL SERVICIO */}
          <div>
            <label
              htmlFor="descripcion"
              className="
                text-lg 
                font-mono 
                mb-2"
            >
              
            </label>
            <h1 className="font-mono text-xl">Detalles del problema</h1>
            <textarea
            type="text"
            required
            id="descripcion"
            name="descripcion"
            value={descripcion}
            placeholder="descripcion"
            onChange={handleChange}
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
            ></textarea>
          </div>

          {/* HORARIO DEL SERVICIO */}
          <div
            className="
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
              "
          >
            <label htmlFor="horario" className="mr-2">
              Horario:
            </label>
            <select
              id="hora"
              name="hora"
              value={hora}
              onChange={handleChange}
              required
              className="appearance-none"
            >
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
              className="appearance-none"
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
export default BodyTecnico;

