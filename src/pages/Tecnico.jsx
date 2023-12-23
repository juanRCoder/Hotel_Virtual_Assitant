import BodyTecnico from "../components/Body/BodyTecnico";
import backgroundImage from "../assets/images/fondo-verde-amarillo-fondo-verde-naranja_873925-18302.jpg";
import HeaderDashboard from "../components/Header/HeaderDashboard";

function Tecnico() {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "blur(20px)",
          zIndex: -1,
          opacity: 0.9,
        }}
      ></div>
      <HeaderDashboard />
      <BodyTecnico />
    </>
  );
}

export default Tecnico;
