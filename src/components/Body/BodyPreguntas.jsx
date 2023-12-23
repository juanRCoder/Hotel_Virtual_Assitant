import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Acordeon from "./Acordeon";

function BodyPreguntas() {
  const { id } = useParams();
  const [faq, setFaq] = useState([]);
  const [clientID, setClientID] = useState(null);

  useEffect(() => {
    const responseFetch = async () => {
      try {
        await fetch(`/extraerFAQ/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            setFaq(data.faqs);
            setClientID(data.ClientId);
            console.log(data.ClientId);
          })
          .catch((e) => console.log(e));
      } catch (error) {
        console.error("Error:", error.message);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    };
    responseFetch();
  }, []);

  return (
    <>
      {faq.map((f) => {
        return (
          <div key={f.id}>
            <Acordeon question={f.pregunta} response={f.respuesta} />
          </div>
        );
      })}
      {clientID && ( // Renderiza el botón solo si 'clientId' tiene un valor
        <Link to={`/dashboard/${clientID}`}>
          <button>Volver a Dashboard</button>
        </Link>
      )}
    </>
  );
}

// function BodyPreguntas() {
//   return (
//     <>
//       <div className="flex items-center mx-4 absolute">
//         <img src={imagen} alt="" />

/* <div className="ml-40 ">
          <h1 className='text-lg font-semibold block ml-'>Descripción del problema</h1>
          <div className="bg-red border border-black mt-4 p-4">
          <select
            id="servicio"
            className="border border-black p-2 mb-4 w-full rounded"
          >
            
            <option value="" disabled selected>Seleccione el servicio</option>
            <option value="">horario de desayuno</option>
            <option value="">horario de lavanderia</option>
            <option value="">roomservice</option>
            <option value="">restaurante</option>
            <option value=""></option>
            
          </select>
          <input
            type="text"
            id="descripcion"
            placeholder="Descripción"
            className="border border-black p-2  rounded w-full h-40 "
          />

          <input
            type="text"
            id="descripcion"
            placeholder=""
            className="border border-black p-2  rounded w-full mt-6"
          />

          </div>
          <button
            id="submitButton"
            type="button"
            className="text-center justify-center items-center flex border-black 
            text-2xl rounded-xl w-full bg-green-400 mt-4"
          >
                Regreso
          </button>
        </div> */
//       </div>
//     </>
//   );
// }

export default BodyPreguntas;
