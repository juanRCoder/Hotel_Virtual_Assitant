import React from 'react';
import logo from '../../assets/images/logo-removebg-preview.png';
import Lottie from "lottie-react";
import animation from "../../assets/back.json";



function HeaderDashboard() {
  
  return (
    
    <div className="flex flex-col items-center relative">
      <div className="absolute  top-0 left-0 w-20 h-1 mt-5 ">
        <img className="" src={logo} alt="LOGO" />
      </div>
      <div>
        
        <Lottie className="w-12 absolute top-4 right-6" animationData={animation} />
      </div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="font-Oswald text-7xl text-center pt-5">
          HOTEL OTELERO
        </h1>
      </div>
    </div>
  );
}

export default HeaderDashboard;
