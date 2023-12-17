import React from 'react';
import logo from '../../assets/images/logo-removebg-preview.png';

function Logo() {
  return (
    <div className="absolute top-0 left-0 m-3 brightness-200 opacity-80">
      <div className="flex items-center">
        <img
          className="hover:drop-shadow-2xl w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28"
          src={logo}
          alt="LOGO"
        />
      </div>
    </div>
  );
}

export default Logo;