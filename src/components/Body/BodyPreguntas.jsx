import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Acordeon from "./Acordeon";

function BodyPreguntas() {
  // Obtiene el parámetro de la URL usando useParams
  const { id } = useParams();

  // Estados para almacenar la lista de preguntas frecuentes y el ID del cliente
  const [faq, setFaq] = useState([]);
  const [clientID, setClientID] = useState(null);

  // Efecto secundario para realizar la solicitud de datos cuando el componente se monta
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/extraerFAQ/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        // Verifica si la respuesta es exitosa
        if (response.ok) {
          const data = await response.json();
          // Actualiza los estados con los datos obtenidos
          setFaq(data.faqs);
          setClientID(data.ClientId);
          console.log(data.ClientId);
        } else {
          console.error("Error en la solicitud:", response.status);
          // Muestra un mensaje de error al usuario si la solicitud no es exitosa
        }
      } catch (error) {
        console.error("Error:", error.message);
        // Muestra un mensaje de error al usuario
      }
    };

    // Llama a la función para obtener los datos
    fetchData();
  }, [id]); // Agrega 'id' como dependencia para que el efecto se vuelva a ejecutar cuando cambie 'id'

  return (
    <>
    <div className="
    justify-center
    text-center
    mt-6
    mb-8 
    ">
    <h1 className="
    text-6xl
    font-Abril-Fatface
    text-shadow-lg
    shadow-black/100
    text-green-800
    ">
        PREGUNTAS FRECUENTES
    </h1>
    </div>
      {/* Mapea las preguntas frecuentes y renderiza componentes Acordeon para cada una */}
      {faq.map((f) => (
        <div key={f.id} >
          <Acordeon question={f.pregunta} response={f.respuesta} className="
          text-center justify-center items-center w-96 h-auto mt-20" />
        </div>
      ))}

      {/* Renderiza el botón solo si 'clientID' tiene un valor 
      {clientID && (
        <button onClick={() => console.log("Botón clickeado")}>
          Acción con el cliente {clientID}
        </button>
      )}*/}
    </>
  );
}

export default BodyPreguntas;
