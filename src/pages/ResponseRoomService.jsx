import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment-timezone";
import backgroundImage from '../assets/images/background.jpg'
import Lottie from 'lottie-react'
import animation from "../assets/back.json";

function ResponseRoomServices() {
  const { idRoomService } = useParams();
  const [roomService, setRoomService] = useState(null);

  useEffect(() => {
    const responseFetch = async () => {
      try {
        await fetch(`/extraerRoomService/${idRoomService}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((dataRoomService) => {
            setRoomService(dataRoomService);
          })
          .catch((e) => console.log(e));
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    responseFetch();
  }, [idRoomService]);

  const formatearFechaHora = (update_at, hora, minutes) => {
    const fechaHoraConvertida = moment(update_at).tz("America/Bogota");
    const fechaFormateada = fechaHoraConvertida.format("YYYY-MM-DD");
    const horarioFormateado = `${hora}:${minutes}:00`;

    return (
      <>
        <li className="font-bold text-sm text-green-600 ">{`Hora Solicitada: ${horarioFormateado} Hrs.`}</li>
        <li className="font-bold text-sm text-green-600 ">{`Fecha de envío: ${fechaHoraConvertida.format(
          "HH:mm:ss"
        )} Hrs. - ${fechaFormateada}`}</li>
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
        <h1 className="font-Abril-Fatface text-4xl text-green-800 text-shadow-lg shadow-black/100">Su pedido se genero con exito</h1>
      </div>
    <div className="flex justify-center items-center  min-h-screen -mt-20  ">
      {roomService ? (
        <div  className="max-w-md p-6 bg-white rounded-lg shadow-md bg-gradient-to-br from-white via-lime-100 to-lime-200 border-l-8 border-r-2 border-y-2 border-green-800 " >
          <h1 className="text-2xl font-bold mb-4">Cliente:</h1>
          <ul>
            <li className="font-bold text-sm text-green-600 ">Nombre: {roomService.Cliente.nombres}</li>
            <li className="font-bold text-sm text-green-600 ">Apellido: {roomService.Cliente.apellidos}</li>
            <li className="font-bold text-sm text-green-600 ">Habitación: {roomService.Cliente.habitacion}</li>
          </ul>
          <h1 className="text-2xl font-bold mt-4" >RoomService:</h1>
          <div className="max-w-full overflow-hidden whitespace-pre-line">
          <ul>
            <li className="font-bold text-sm text-green-600 ">Comida: {roomService.RoomService.comida}</li>
            <li className="font-bold text-sm text-green-600 ">Cantidad: {roomService.RoomService.cant_comida}</li>
            <li className="font-bold text-sm text-green-600 " >Bebida: {roomService.RoomService.bebida}</li>
            <li className="font-bold text-sm text-green-600 ">Cantidad: {roomService.RoomService.cant_comida}</li>
            <li>
              {formatearFechaHora(
                roomService.RoomService.updated_at,
                roomService.RoomService.hora,
                roomService.RoomService.minutes
              )}
            </li>
          </ul>
          </div>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}

      <Link to={`/dashboard/${roomService && roomService.Cliente.id}`}>
        <button> <Lottie
              className="w-12 absolute top-4 right-8 mt-2"
              animationData={animation}/> </button>
      </Link>
    </div>
    </>
  );
}

export default ResponseRoomServices;