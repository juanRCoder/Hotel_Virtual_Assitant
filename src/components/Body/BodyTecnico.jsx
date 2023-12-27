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
  const handleSubmit = async (e) => {
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
      <div className="flex justify-center text-center -mt-2">
        <h1
          className="
          text-6xl
          text-shadow-lg
          shadow-green-950/100
          text-center
          ml-16
          font-Abril-Fatface
          text-green-800
          mt-2 
          "
          >
          PROBLEMA{" "}
        </h1>
      </div>
      <div
        className="
        flex 
        justify-center 
        items-center 
        text-center 
        "
        >
        <div
          className="
        bg-gray-100
        flex flex-col 
        items-center
        ml-20 
        w-2/5 
        h-2/5
        rounded-3xl
        shadow-2xl
        shadow-green-900
        border border-green-800
        hover:shadow-2xl
        border-l-8
        border-y-2

      
         "
        >
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

              shadow-2xl
              required
              w-5/6
              h-48
              p-4  
              mt-2 
              rounded-3xl
              border-l-8
              border-y-2
              border-x-2
              border border-green-800
              hover:shadow-sm
              "
          ></textarea>

          <div
            className="
              flex 
              items-center
              border border-green-800
              border-y-2
              border-x-2
              mt-4
              rounded-md
              py-2
              px-1"
          >
            <label htmlFor="horario" className="mr-2">
              Horario:
            </label>
            <select 
            id="hora" 
            name="hora" 
            value={hora} 
            required>
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
            required>
              <option value="">...</option>
              <option value="00">00</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
            </select>
          </div>

          <div
            className="
              flex 
              items-center 
              justify-center 
              shadow-xl 
              py-2"
          >
            <button
              className="
              bg-green-500
              hover:bg-green-800
              text-black 
              w-24
              h-12
              px-2   
              rounded 
              focus:outline-none 
              focus:shadow-outline  
              font-bold
              text-xl
              jello-vertical
              default
              border
              border-black
              border-l-2
              border-y-2
              border-x-2
              mt-4
              "
              type="submit"
              onClick={handleSubmit}
            >
              REPORTAR
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default BodyTecnico;
