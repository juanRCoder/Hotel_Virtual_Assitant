import BodyTecnico from "../components/Body/BodyTecnico";
import backgroundImage from '../assets/images/background.jpg';
import HeaderDashboard from "../components/Header/HeaderDashboard";
import AllHeaders from "../components/Header/AllHeaders";

function Tecnico() {
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
      <AllHeaders />
      <BodyTecnico />
    </>
  );
}

export default Tecnico;
