import React from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Lottie from "lottie-react";
import animation from "../../assets/back.json";

function AllHeaders() {
  const { id } = useParams();
  return (
    <div className="flex flex-col items-center relative">
    <div className="absolute top-0 left-0 w-14 sm:w-20 md:w-28 mt-2 sm:mt-4 md:block">
      <img src={logo} alt="LOGO" />
    </div>
  
    <div>
      <Link to={`/dashboard/${id}`}>
        <button>
          <Lottie className="w-10 sm:w-12 md:w-16 absolute top-2 sm:top-4 right-2 sm:right-4 md:right-8 mt-1 sm:mt-2" animationData={animation} />
        </button>
      </Link>
    </div>
  </div>
  
  );
}

export default AllHeaders;
