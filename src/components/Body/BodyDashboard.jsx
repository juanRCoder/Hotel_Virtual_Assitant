import frontdesk from "../../assets/images/frontdesk.png";
import React from "react";

function BodyDashboard() {
  return (
    <>
      <div className="flex justify-center items-center pt-10">
        <img
          className=" w-60 h-60 rounded-3xl"
          src={frontdesk}
          alt="frontdesk"
        />
      </div>

      <div className="flex pt-30 space-x-2 p-12">
        <button
          className="
         font-mono 
         text-3xl
         bg-white 
          rounded-xl
          h-36 w-80 
          border
          // border-green-500
          // bg-gradient-to-br
          // from-slate-400
          // via-red-400
          // to-amber-500 
          //   shadow-lg
          
          "
        >
          SERVICIOS
        </button>

        <button className="font-mono text-3xl bg-white rounded-xl h-36 w-80 border border-green-500">
          PREGUNTAS FRECUENTES
        </button>
        <button className="font-mono text-3xl bg-white rounded-xl h-36 w-80 border border-green-500">
          TECNICO
        </button>
        <button className="font-mono text-3xl bg-white rounded-xl h-36 w-80 border border-green-500">
          RESTAURANTE
        </button>
      </div>
    </>
  );
}

export default BodyDashboard;
