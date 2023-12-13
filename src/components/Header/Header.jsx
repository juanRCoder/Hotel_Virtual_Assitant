import React from 'react';
import logo from '../../assets/images/logo-removebg-preview.png';

const Header = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center">
          <div className="w-40 h-1 mt-5 mr-auto">
            <img className="bg-white hover:bg-slate-400" src={logo} alt="LOGO" />
          </div>
          <div className="flex items-center justify-center flex-col">
            <h1 className="font-mono text-6xl text-center pt-5">
              HOTEL OTELERO
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
