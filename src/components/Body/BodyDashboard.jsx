import React from "react";
import { Link, useParams } from "react-router-dom";
import frontdesk from "../../assets/images/frontdesk.png";
import './animations.css'

function BodyDashboard() {
  const { id } = useParams();
  return (
    <>
      <div className="flex justify-center items-center pt-10">
        <img
          className="w-60 h-60 rounded-3xl"
          src={frontdesk}
          alt="frontdesk"
        />
      </div>

      <div className="flex pt-30 space-x-2 p-12">
        <Link to={`/dashboard/servicios/${id}`}>
          <button
            className="
            font-mono 
            text-4xl
            rounded-2xl
            h-36 w-80 
            border
            border-green-800
            shadow-2xl
            bg-gradient-to-br
            from-white
            via-lime-200
            to-green-300 
            animation  -ripple
            ">

            SERVICIOS
          </button>
        </Link>

        <Link to={`/dashboard/preguntas/${id}`}>
          <button
            className="
            font-mono 
            text-4xl
            bg-white 
            rounded-2xl
            h-36 w-80 
            border
            border-green-800
            bg-gradient-to-br
            from-white
            via-lime-200
            to-green-300 
            shadow-2xl
          "
          >
            PREGUNTAS FRECUENTES
          </button>
        </Link>

        <Link to={`/dashboard/tecnico/${id}`}>
          <button
            className="
            font-mono 
            text-4xl
            bg-white 
            rounded-2xl
            h-36 w-80 
            border
            border-green-800
            bg-gradient-to-br
            from-white
            via-lime-200
            to-green-300 
            shadow-2xl
          "
          >
            PROBLEMAS
          </button>
        </Link>

        <Link to="/dashboard/restaurante">
          <button
            className="
            font-mono 
            text-4xl
            bg-white 
            rounded-2xl
            h-36 w-80 
            border
            border-green-800
            bg-gradient-to-br
            from-white
            via-lime-200
            to-green-300 
            shadow-2xl 
          "
          >
            RESTAURANTE
          </button>
        </Link>
      </div>
    </>
  );
}

export default BodyDashboard;
