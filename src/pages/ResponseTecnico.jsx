import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment-timezone";
import Routers from '../routes/Routers';
import backgroundImage from '../assets/images/background.jpg'
import Lottie from 'lottie-react'
import animation from "../assets/back.json";

function ResponseTecnico() {
  const { idServiceTec } = useParams();
  const [serviceTecnico, setServiceTecnico] = useState(null);

  useEffect(() => {
    const sendFetch = async () => {
      try {
        await fetch(`/extraerServiciosTec/${idServiceTec}`)
          .then((res) => res.json())
          .then((dataServiceTecnico) => {
            setServiceTecnico(dataServiceTecnico);
            console.log(dataServiceTecnico);
          })
          .catch((e) => console.log(e));
      } catch (e) {
        console.error("Error:", error.message);
      }
    };
    sendFetch();
  }, []);

  const formatearFechaHora = (date, hora, minutes) => {
    const fechaHoraConvertida = moment(date).tz("America/Bogota");
    const fechaFormateada = fechaHoraConvertida.format("YYYY-MM-DD");
    const horarioFormateado = fechaHoraConvertida.format("HH:mm:ss");
    return (
      <>
        <li>{`Fecha Solicitada: ${hora}:${minutes}:00 hrs. - ${fechaFormateada}`}</li>
        <li>{`Fecha de envío: ${horarioFormateado} hrs. - ${fechaFormateada}`}</li>
      </>
    );
  };

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
      <div className="flex justify-center text-center mt-8">
        <h1 className="font-Abril-Fatface text-6xl text-green-800 text-shadow-lg shadow-black/100">SERVICIO ENVIADO !</h1>
      </div>
    <div className="flex justify-center items-center min-h-screen -mt-20">
  {serviceTecnico ? (
    <div className="relative"> 
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md bg-gradient-to-br
        from-white
        via-lime-100
        to-lime-200
        border-l-8
        border-r-2
        border-y-2
        border-green-800
      ">
        <h1 className="text-2xl font-bold mb-4">Cliente:</h1>
        <ul>
          <li className="font-bold text-sm text-green-600 ">Nombre: {serviceTecnico?.Cliente?.nombres}</li>
          <li className="font-bold text-sm text-green-600 ">Apellido: {serviceTecnico?.Cliente?.apellidos}</li>
          <li className="font-bold text-sm text-green-600 ">Habitación: {serviceTecnico?.Cliente?.habitacion}</li>
        </ul>
        <h1 className="text-2xl font-bold mt-4">Servicio Técnico:</h1>
        <div className="max-w-full overflow-hidden whitespace-pre-line">
          <ul>
            <li className="font-bold text-sm text-green-600 ">Tipo de problema: {serviceTecnico?.Tecnico?.problema}</li>
            <li className="font-bold text-sm text-green-600 ">Detalle del problema: {serviceTecnico?.Tecnico?.descripcion}</li>
            <li>
              {formatearFechaHora(
                serviceTecnico?.Tecnico?.created_at,
                serviceTecnico?.Tecnico?.hora,
                serviceTecnico?.Tecnico?.minutes
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <p>Cargando datos...</p>
  )}

  <Link to={`/dashboard/${serviceTecnico && serviceTecnico.Cliente.id}`}>
    <button> 
      <Lottie
        className="w-12 absolute top-4 right-8 mt-2"
        animationData={animation}
      />
    </button>
  </Link>
</div>


    </>
  );
}

export default ResponseTecnico;
