import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-removebg-preview.png";
import Lottie from "lottie-react";
import animation from "../../assets/back.json";

function AllHeaders({ serviceTecnico }) {
  return (
    <div className="flex flex-col items-center relative">
      <div className="absolute top-0 left-0  w-28  mt-2 ml-2">
        <img className="" src={logo} alt="LOGO" />
      </div>

      <div>
        <Link to={`/dashboard/${serviceTecnico && serviceTecnico.Cliente.id}`}>
          <button>
            <Lottie
              className="w-12 absolute top-4 right-8 mt-2"
              animationData={animation}
            />
          </button>
        </Link>
      </div>

      {/* <div className="flex items-center justify-center flex-col">
        <h1 className="font-Oswald text-7xl text-center pt-5">
          HOTEL OTELERO
        </h1>
      </div> */}
    </div>
  );
}

export default AllHeaders;