import React from 'react';


const Header = () => {
  return (
    <>
      <div className="container items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center flex-col pl-10">
            <h1
              className="font-bold text-4xl md:text-5xl lg:text-6xl text-center pt-2 text-green-500 opacity-90"
            >
              Double Tree by Hilton
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
