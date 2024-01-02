import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-removebg-preview.png';
import Lottie from 'lottie-react';
import animation from '../../assets/door.json';

function HeaderDashboard({ serviceTecnico }) {
  return (
    <div className="flex flex-col items-center relative">
    <div className="absolute top-0 left-0 w-14 sm:w-16 md:w-28 mt-2 sm:mt-15 ml-2">
      <img src={logo} alt="LOGO" />
    </div>
  
    <div className="text-center flex justify-center mt-4">
    </div>
  
    <div className="flex justify-center text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-Abril-Fatface text-green-800 text-shadow-lg shadow-black/100">
        HOTEL <br className="sm:hidden md:inline" /> VIRTUAL ASSISTANT
      </h1>
    </div>
  
    <div>
      <Link to={'/'}>
        <button>
          <Lottie className="w-10 sm:w-12 md:w-16 absolute top-2 sm:top-15 right-2 sm:right-4 md:right-8 mt-1 sm:mt-15" animationData={animation} />
        </button>
      </Link>
    </div>
  </div>
  
     
  );
}

export default HeaderDashboard;
