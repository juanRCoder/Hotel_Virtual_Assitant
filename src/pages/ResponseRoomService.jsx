import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment-timezone";

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
        <li>{`Hora Solicitada: ${horarioFormateado} Hrs.`}</li>
        <li>{`Fecha de envío: ${fechaHoraConvertida.format(
          "HH:mm:ss"
        )} Hrs. - ${fechaFormateada}`}</li>
      </>
    );
  };

  return (
    <div>
      {roomService ? (
        <div>
          <h1>Cliente:</h1>
          <ul>
            <li>Nombre: {roomService.Cliente.nombres}</li>
            <li>Apellido: {roomService.Cliente.apellidos}</li>
            <li>Habitación: {roomService.Cliente.habitacion}</li>
          </ul>
          <h1>RoomService:</h1>
          <ul>
            <li>Comida: {roomService.RoomService.comida}</li>
            <li>Cantidad: {roomService.RoomService.cant_comida}</li>
            <li>Bebida: {roomService.RoomService.bebida}</li>
            <li>Cantidad: {roomService.RoomService.cant_comida}</li>
            <li>
              {formatearFechaHora(
                roomService.RoomService.updated_at,
                roomService.RoomService.hora,
                roomService.RoomService.minutes
              )}
            </li>
          </ul>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}

      <Link to={`/dashboard/${roomService && roomService.Cliente.id}`}>
        <button>Volver a Dashboard</button>
      </Link>
    </div>
  );
}

export default ResponseRoomServices;