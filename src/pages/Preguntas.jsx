import React from "react";
import BodyPreguntas from "../components/Body/BodyPreguntas";
import backgroundImage from '../assets/images/background.jpg';
import AllHeaders from "../components/Header/AllHeaders";

function Preguntas() {
  return (
    <>
      <div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            filter: "blur(150px)",
            zIndex: -1,
            opacity: 0.9,
          }}
        ></div>
        <AllHeaders/>
        <BodyPreguntas />
      </div>
    </>
  );
}

export default Preguntas;
