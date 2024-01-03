import React, { useState } from "react";

function Acordeon({ question, response }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="flex flex-col mb-4 justify-center items-center w-full">
      <div className="w-3/4">
        {" "}
        {/* Reducir el ancho al 75% del contenedor */}
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="
            w-full 
            h-14 
            border
            border-green-800
            border-l-8
            border-y-2 
            rounded-lg  
            bg-gray-100 
            py-3
            px-4
            flex
            justify-between
            items-center
            text-green-700
            text-xl
            mx-auto  /* Centrar horizontalmente */
          "
        >
          <span>{question}</span>
          {accordionOpen ? <span>-</span> : <span>+</span>}
        </button>
        <div
          className={`
            grid 
            overflow-hidden 
            transition-all 
            duration-300 
            ease-in-out  
            text-green-800 
            text-sm  
            ${
              accordionOpen
                ? "h-auto py-3 px-4 opacity-100 mx-auto" /* Estilos para respuesta visible y centrada */
                : "h-0 py-0 px-0 opacity-0"
            }`}
        >
          <div
            className="
              overflow-hidden
              bg-green-100
              border
              border-green-800
              w-full
              py-3
              px-4
              rounded-md
              mx-auto  /* Centrar horizontalmente */
            "
          >
            {response}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acordeon;
