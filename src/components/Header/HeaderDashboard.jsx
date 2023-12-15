import React from 'react';
import logo from '../../assets/images/logo-removebg-preview.png';
import Lottie from 'lottie-react';
import Buzzer from '../../assets/goldenBuzzer.json';
import Hotel24 from '../../assets/hotel-24.json'
import Hotel from '..//../assets/hotel.json'
import buzzer from '../../assets/images/buzzer.png'

function HeaderDashboard() {
  return (
    <div className="flex flex-col items-center relative">
      <div className="absolute  top-0 left-0 w-40 h-1 mt-5">
        <img className="" src={logo} alt="LOGO" />
      </div>
      <div className="absolute top-4 right-4">
        {/* <Lottie
          className='w-32 h-28'
          animationData={Hotel24}
        /> */}
        <img className='w-28 -h20' src={buzzer} alt="buzzer" />
      </div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="font-mono text-6xl text-center pt-5">
          HOTEL OTELERO
        </h1>
      </div>
    </div>
  );
}

export default HeaderDashboard;
