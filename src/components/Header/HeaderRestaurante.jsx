import React from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../assets/images/logo-removebg-preview.png";
import Lottie from "lottie-react";
import animation from "../../assets/back.json";

function HeaderRestaurante  () {
    const { id } = useParams();
  return (
    <>
  <div className="flex flex-col items-center relative">
    <div className="absolute top-0 left-0 w-14 sm:w-16 md:w-28 mt-2 sm:mt-15 ml-2">
      <img src={logo} alt="LOGO" />
    </div>
    <div>
      <Link to={`/dashboard/${id}`}>
        <button>
          <Lottie
            className="w-12 sm:w-16 md:w-20 absolute top-2 sm:top-15 right-4 md:right-8 mt-1 sm:mt-15"
            animationData={animation}
          />
        </button>
      </Link>
    </div>

    <div className="flex flex-col justify-center mt-6">
      <h1 className="text-center text-green-800 text-shadow-sm shadow-green-600/100 font-Abril-Fatface text-3xl md:text-5xl mt-6">
        SERVICIOS DE ALIMENTOS Y BEBIDAS
      </h1>
      <h1 className="text-center text-green-800 text-shadow-sm shadow-black/100 font-Abril-Fatface text-2xl md:text-4xl mt-6">
        ESCOGE EL SERVICIO QUE DESEE
      </h1>
    </div>
  </div>
</>

   
  
  )
}

export default HeaderRestaurante