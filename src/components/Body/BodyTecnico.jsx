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
        text-5xl
        text-shadow-lg
        shadow-black/100
        text-center
        ml-16
        font-bold 
        ">
          SERVICIO TECNICO</h1>
      </div>
      <div className="flex justify-center items-center text-center mt-10">
        <div
          className="
        bg-white
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
          <h1 className="text-xl mt-6 font-mono">Tipo de Problema:</h1>
          <select
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
            <option value="" disabled selected>
              Seleccione el problema
            </option>
            <option value="toallas">AGUA</option>
            <option value="lavanderia">LUZ</option>
            <option value="limpieza">INTERNET</option>
            <option value="amenities">TV</option>
            <option value="aire acondicionado">AIRE ACONDICIONADO</option>
            <option value="ducha">DUCHA</option>
            <option value="otros">OTROS</option>
          </select>
          <h1 className="font-mono text-xl">Descripcion del problema tecnico</h1>
          <textarea type="text" className="
         shadow-2xl
        
         w-5/6
         h-48
         p-4  
         mt-2 
         rounded-3xl
         border-l-8 border-y-0
         border border-green-400
         hover:shadow-sm" >
          </textarea>
          
          {/* <h1 className="text-xl font-mono mt-6">Seleccione el Horario de atencion</h1>
             <select
            id="servicio"
            className="
            border border-green-400
            p-2 
            mb-4 
            mt-2
            w-4/5
            text-center
            justify-center
            items-center 
            rounded-lg
            "
          >

            <option value="date" disabled selected>
              Seleccione el horario de atencion
            </option>
            <option value="toallas">AGUA</option>
            <option value="lavanderia">LUZ</option>
            <option value="limpieza">INTERNET</option>
            <option value="amenities">TV</option>
            <option value="lavanderia">AIRE ACONDICADO</option>
            <option value="lavanderia">DUCHA</option>
            <option value="lavanderia">OTROS</option>
          </select> */}
           <div className="
      flex 
      items-center
      border border-emerald-600
      mt-4">
        <label htmlFor="horario" className="mr-2">
          Horario:
        </label>
        <select id="hora" name="hora" >
          <option value="">...</option>
          <option value="Inmediata">Inmediata</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
        </select>{" "}
        :{" "}
        <select id="minutes" name="minutes"  >
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
              "
              type="submit"
              onClick={handleSubmit}
            >
              ENVIAR
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default BodyTecnico;
