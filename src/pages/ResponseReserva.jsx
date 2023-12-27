import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment-timezone";

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
    <div>
      {reserva ? (
        <div>
          <h1>Cliente:</h1>
          <ul>
            <li>Nombre: {reserva.Cliente.nombres}</li>
            <li>Apellido: {reserva.Cliente.apellidos}</li>
            <li>Habitación: {reserva.Cliente.habitacion}</li>
          </ul>
          <h1>Reserva:</h1>
          <ul>
            <li>Tipo: {reserva.ReservaRestaurant.tipoMesa}</li>
            <li>Personas: {reserva.ReservaRestaurant.cantidad}</li>
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
      ) : (
        <p>Cargando datos...</p>
      )}

      <Link to={`/dashboard/${reserva && reserva.Cliente.id}`}>
        <button>Volver a Dashboard</button>
      </Link>
    </div>
  );
}

export default ResponseReseva;
