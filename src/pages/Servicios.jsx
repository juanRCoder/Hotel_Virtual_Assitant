import BodyServicios from '../components/Body/BodyServicios'

import backgroundImage from '../assets/images/background.jpg';
import HeaderSerivicios from '../components/Header/HeaderSerivicios';
import AllHeaders from '../components/Header/AllHeaders';

function Servicios ()  {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "blur(110px)",
          zIndex: -1,
          opacity: 1.0,
        }}
      ></div>
    <AllHeaders></AllHeaders>
    <BodyServicios/>

    </>
  )
}

export default Servicios