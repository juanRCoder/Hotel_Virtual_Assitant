import BodyServicios from '../components/Body/BodyServicios'
import AllHeaders from '../components/Header/AllHeaders'
import backgroundImage from '..//../src/assets/images/fondo-verde-amarillo-fondo-verde-naranja_873925-18302.jpg'

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
    <AllHeaders/>
    <BodyServicios/>

    </>
  )
}

export default Servicios