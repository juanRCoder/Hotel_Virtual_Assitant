import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment-timezone";
import backgroundImage from '../assets/images/background.jpg'
import Lottie from 'lottie-react'
import animation from "../assets/back.json";
 
function ResponseReseva() {
  const { idReserva } = useParams();
  const [reserva, setReserva] = useState(null);

  useEffect(() => {
    const responseFetch = async () => {
      try {
        await fetch(`/extraerReserva/${idReserva}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((dataReserva) => {
            setReserva(dataReserva);
          })
          .catch((e) => console.log(e));
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    responseFetch();
  }, [idReserva]);

  const formatearFechaHora = (createdAt, fecha, hora, minutes) => {
    const fechaHoraConvertida = moment(createdAt).tz("America/Bogota");
    const fechaFormateada = fechaHoraConvertida.format("YYYY-MM-DD");
    const horarioFormateado = `${hora}:${minutes}:00`;
  
    return (
      <>
        <li>{`Fecha Solicitada: ${horarioFormateado} Hrs. - ${fecha}`}</li>
        <li>{`Fecha de envío: ${fechaHoraConvertida.format("HH:mm:ss")} Hrs. - ${fechaFormateada}`}</li>
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
      <div className="flex justify-center text-center mt-4"> 
        <h1 className="font-Abril-Fatface text-4xl text-green-800 text-shadow-lg shadow-black/100">Su reserva se genero con exito</h1>
      </div>
    <div className="flex justify-center items-center min-h-screen -mt-20  ">
      {reserva ? (
        <div className=" max-w-md p-6 bg-white rounded-lg shadow-md bg-gradient-to-br from-white via-lime-100 to-lime-200 border-l-8 border-r-2 border-y-2 border-green-800">
          <h1 className="text-2xl font-bold mb-4">Cliente:</h1>
          <ul>
            <li className="font-bold text-sm text-green-600 ">Nombre: {reserva.Cliente.nombres}</li>
            <li className="font-bold text-sm text-green-600 ">Apellido: {reserva.Cliente.apellidos}</li>
            <li className="font-bold text-sm text-green-600 ">Habitación: {reserva.Cliente.habitacion}</li>
          </ul>
          <h1 className="text-2xl font-bold mt-4">Reserva:</h1>
          <div className="max-w-full overflow-hidden whitespace-pre-line">
          <ul>
            <li className="font-bold text-sm text-green-600 ">Tipo: {reserva.ReservaRestaurant.tipoMesa}</li>
            <li className="font-bold text-sm text-green-600 ">Personas: {reserva.ReservaRestaurant.cantidad}</li>
            <li>
              {formatearFechaHora(
                reserva.ReservaRestaurant.updated_at,
                reserva.ReservaRestaurant.fecha,
                reserva.ReservaRestaurant.hora,
                reserva.ReservaRestaurant.minutes,
              )}
            </li>
          </ul>
          </div>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}

      <Link to={`/dashboard/${reserva && reserva.Cliente.id}`}>
        <button><Lottie
              className="w-12 absolute top-4 right-8 mt-2"
              animationData={animation}
            /></button>
      </Link>
    </div>
    </>
  );
}

export default ResponseReseva;
