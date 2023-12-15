import React from 'react';
import logo from '../../assets/images/logo-removebg-preview.png';

const Header = () => {
  return (
    <>
      <div className=" items-center ">
        <div className="flex flex-col  justify-center items-center">
          <div className="w-20 h-1 mt-5 mr-auto">
            <img className=" -mt-5  ml-4 brightness-100  opacity-60" src={logo} alt="LOGO" />
          </div>
          <div className="flex items-center justify-center flex-col">
            <h1 className="font-bold hover:shadow-2xl text-6xl text-center pt-6 m text-amber-900">
              Double Tree by hilton 
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
