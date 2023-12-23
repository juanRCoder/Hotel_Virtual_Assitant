<<<<<<< HEAD

function BodyTecnico() {
  return (
    <>
      <div className="flex justify-center text-center mt-2">
        <h1 className="
        text-4xl
        text-center
        ml-16 
        
        ">
          SERVICIO TECNICO</h1>
      </div>
      <div className="flex justify-center items-center text-center mt-6">
        <div
          className="flex flex-col items-center bg-gradient-to-br
        from-green-200
        via-lime-100
        to-lime-200
         ml-20 w-1/2 
         h-2/5 
         rounded-xl
         shadow-2xl
         shadow-green-950
         border border-black
         "
        >
          <h1 className="text-xl mt-6">Problema Tecnico</h1>
          <select
            id="servicio"
            className="
            border border-black
            p-2 
            mb-4 
            mt-2
            w-4/5
            text-center
            justify-center
            items-center 
            rounded-lg"
          >
            <option value="" disabled selected>
              Seleccione el problema
            </option>
            <option value="toallas">AGUA</option>
            <option value="lavanderia">LUZ</option>
            <option value="limpieza">INTERNET</option>
            <option value="amenities">TV</option>
            <option value="lavanderia">AIRE ACONDICADO</option>
            <option value="lavanderia">DUCHA</option>
            <option value="lavanderia">OTROS</option>
          </select>
          <h1>Descripcion del problema tecnico</h1>
          <input type="text" className="
          from-green-400
          via-lime-600
          to-lime-600
          shadow-md
          shadow-black 
          w-5/6
          p-20 
          my-2
          rounded-lg" />
          <h1 className="text-xl mt-6">Seleccione el Horario de atencion</h1>
             <select
            id="servicio"
            className="
            border border-black
            p-2 
            mb-4 
            mt-2
            w-4/5
            text-center
            justify-center
            items-center 
            rounded-lg"
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
          </select>
          
        </div>
      
      </div>
    
    
 
=======
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
      <h1>Problemas:</h1>
      <form className="w-full" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="problema">Tipo de Problema: </label>
          <select
            id="problema"
            name="problema"
            value={problema}
            onChange={handleChange}
          >
            <option value="">Escoge...</option>
            <option value="Limpieza">Electricidad</option>
            <option value="Gasfiteria">Gasfiteria</option>
            <option value="Plagas">Plagas</option>
          </select>
        </div>
        <div>
          <label htmlFor="descripcion">descripcion: </label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={descripcion}
            placeholder="descripcion..."
            onChange={handleChange}
          ></textarea>
        </div>
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
            <option value="">Escoger...</option>
            <option value="00">00</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
          </select>
        </div>

        <button type="submit">Enviar</button>
      </form>
      <Link to={`/dashboard/${id}`}>
        <button>Volver a Dashboard</button>
      </Link>

      {/* <div className="flex mx-4">
        <div className="w-40%">
          <img src={imagen} alt="" className="w-full h-auto" />
        </div>
        <div className="flex flex-col bg-red-400 ml-20  w-1/2 rounded-xl">
          <form action="" className="">
            <input
              className="w-full bg-green-100 mt-2 h-20"
              type="text"
              placeholder="Agua"
            />
            <div className="flex justify-center items-center mt-2">
              <button className=" bg-yellow-500 py-2 w-20 rounded-lg border boder-black">
                enviar{" "}
              </button>
            </div>
            <input
              className="w-full bg-green-100 mt-2 h-20"
              type="text"
              placeholder="luz"
            />
            <div className="flex justify-center items-center mt-2">
              <button className=" bg-yellow-500 py-2 w-20 rounded-lg border boder-black">
                enviar{" "}
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center mt-72">
            <button className="bg-green-400 py-2 w-20 flex justify-center border border-black rounded-xl">
              REGRESAR
            </button>
          </div>
        </div>
      </div> */}
>>>>>>> 7fb218b5d9e0d660061b4b169f3cbf31a58c4bb9
    </>
  );
}
export default BodyTecnico