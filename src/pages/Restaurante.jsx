import BodyAyB from "../components/Body/BodyAyB"
import backgroundImage from '../assets/images/background.jpg'
import HeaderRestaurante from "../components/Header/HeaderRestaurante";


function Restaurante  () {
  return (
    
    <>
       <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "blur(150px)",
          zIndex: -1,
          opacity: 0.9,
        }}
      ></div>
     <HeaderRestaurante/>
     <BodyAyB></BodyAyB>
    </>

)}
export default Restaurante;