import React from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Lottie from "lottie-react";
import animation from "../../assets/back.json";


function HeaderSerivicios  ()  {
    const { id } = useParams();
  return (
    <>
    <div className="
    flex justify-center text-center md:ml-16 md:justify-center">
      <h1 className="
      text-5xl md:text-6xl font-Abril-Fatface text-green-800
       text-shadow-lg shadow-black/100  md:-mb-10 pt-20 md:pt-10 mr-18 md:mr-0">
        SERVICIO DE HOUSEKEEPING
      </h1>
    </div>

    <div className="flex flex-col items-center relative mt-8  mb:mt-0">
      <div className="absolute -top-44 md:-top-20 left-0  w-14 sm:w-20 md:w-28 mt-0 sm:mt-0 md:block">
        <img src={logo} alt="LOGO" />
      </div>

      <div>
        <Link to={`/dashboard/${id}`}>
          <button className="relative">
            <Lottie
             
             className=" 
             w-10 bm:w-12 md:w-16 xl:w-14 absolute top-0 sm:top-0 md:top-0 xl:top-0 right-0 sm:right-0 md:right-0 xl:right-0 mt-0 sm:mt-2"
              animationData={animation}
            />
          </button>
        </Link>
      </div>
    </div>
  </>
    
    
    )
}

export default HeaderSerivicios