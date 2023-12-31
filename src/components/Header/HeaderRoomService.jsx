import React from "react";
import { Link, useParams} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Lottie from "lottie-react";
import animation from "../../assets/back.json";

function HeaderRoomService  ()  {
  const { id } = useParams();
  return (
    <>

<div className="flex flex-col items-center relative">
  <div className="absolute top-0 left-0 w-20 md:w-28 mt-8 md:mt-4 md:block">
    <img src={logo} alt="LOGO" />
  </div>
  <div className="flex text-center justify-center">
    <h1 className="
      text-5xl  md:text-7xl
      font-Abril-Fatface
      text-green-800
      text-shadow-lg
      shadow-green-500/100
      mt-28 md:mt-4
      -mb-28 md:-mb-8">
      ROOMSERVICE
    </h1>
  </div>
  <div>
    <Link to={`/dashboard/${id}`}>
      <button>
        <Lottie className="w-16 md:w-12 absolute top-2 sm:top-4 right-2 sm:right-4 md:right-8 mt-6 md:mt-2" animationData={animation} />
      </button>
    </Link>
  </div>
</div>
   
    </>
  )
}

export default HeaderRoomService