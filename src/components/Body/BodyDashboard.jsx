import React from "react";
import { Link, useParams } from "react-router-dom";
import frontdesk from "../../assets/images/frontdesk.png";
import './animations.css'

function BodyDashboard() {
  const { id } = useParams();
  return (
    <>
    <div className="
    flex
    justify-center
    text-center
    ">
      <h1 className="
      text-6xl
      font-Abril-Fatface
      mt-4
      text-green-800
      text-shadow-lg
      shadow-black/100
      ">
        HOTEL CASA ANDINA
      </h1>
    </div>
      <div className="flex justify-center items-center pt-10">
        <img
          className="w-60 h-56 rounded-3xl"
          src={frontdesk}
          alt="frontdesk"
        />
      </div>
      <div className="
      text-center flex justify-center mt-4  
      ">
        <h1 className="
        text-5xl
        font-Abril-Fatface
        text-green-900
        text-shadow-sm
        shadow-green-800/100
        mt-2  
        ">
           Bienvenido Huesped</h1>
      </div>
      <div className="
      flex 
      justify-around 
      pt-14   
      p-12">
        <Link to={`/dashboard/servicios/${id}`}>
          <button
            className="
            font-semibold 
            text-xl
            rounded-2xl
            h-20 
             w-52 
            border
            border-green-800
            shadow-2xl
            bg-gradient-to-br
            from-white
            via-lime-200
            to-green-300 
            animation  -ripple
            border-y-2
            border-x-2
            text-green-950
            ">

            SERVICIOS
          </button>
        </Link>

        <Link to={`/dashboard/preguntas/${id}`}>
          <button
            className="
            font-semibold 
            text-xl
            bg-white 
            rounded-2xl
            h-20 w-52 
            border
            border-green-800
            bg-gradient-to-br
            from-white
            via-lime-200
            to-green-300 
            shadow-2xl
            border-y-2
            border-x-2
            text-green-950
          "
          >
            PREGUNTAS FRECUENTES
          </button>
        </Link>

        <Link to={`/dashboard/tecnico/${id}`}>
          <button
            className="
            font-semibold 
            text-xl
            bg-white 
            rounded-2xl
            h-20 w-52 
            border
            border-green-800
            bg-gradient-to-br
            from-white
            via-lime-200
            to-green-300 
            shadow-2xl
            border-y-2
            border-x-2
            text-green-950
          "
          >
            PROBLEMAS
          </button>
        </Link>

        <Link to={`/dashboard/restaurante/${id}`}>
          <button
            className="
            font-semibold 
            text-xl
            bg-white 
            rounded-2xl
            h-20 w-52 
            border
            border-green-800
            bg-gradient-to-br
            from-white
            via-lime-200
            to-green-300 
            shadow-2xl 
            border-y-2
            border-x-2
            text-green-950
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
