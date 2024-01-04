import React from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Lottie from "lottie-react";
import animation from "../../assets/back.json";

 function HeaderAyB  ()  {
    const { id } = useParams();
  return (
    <>
   <div className="flex flex-col items-center relative">
  <div className="absolute top-0 left-0 w-14 sm:w-20 md:w-32 mt-5 sm:mt-15 ml-2">
    <img className="" src={logo} alt="LOGO" />
  </div>
  <h2 className="
    text-5xl md:text-3xl lg:text-6xl 
    font-Abril-Fatface 
    md:mt-8
    text-green-800 
    shadow-black/100 
    text-shadow-sm mt-20 ">
    RESERVACIÓN
  </h2>
  <div>
    <Link to={`/dashboard/restaurante/${id}`}>
      <button>
        <Lottie
          className="w-10 sm:w-12 md:w-16 absolute top-2 sm:top-15 right-4 md:right-8 mt-4 sm:mt-15"
          animationData={animation}
        />
      </button>
    </Link>
  </div>
</div>
    </>
  )
}

export default HeaderAyB
