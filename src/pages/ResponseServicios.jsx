import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment-timezone";

function ResponseServicios() {
  const { idService } = useParams();
  const [servicio, setServicio] = useState(null);

  useEffect(() => {
    const responseFetch = async () => {
      try {
        await fetch(`/extraerServicio/${idService}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((DataServices) => {
            setServicio(DataServices);
          })
          .catch((e) => console.log(e));
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    responseFetch();
  }, [idService]);

  const formatearFechaHora = (date, hora, minutes) => {
    const fechaHoraConvertida = moment(date).tz("America/Bogota");
    const fechaFormateada = fechaHoraConvertida.format("YYYY-MM-DD");
    const horarioFormateado = fechaHoraConvertida.format("HH:mm:ss");
    return (
      <>
        <li>{`Fecha Solicitada: ${hora}:${minutes}:00 Hrs - ${fechaFormateada}`}</li>
        <li>{`Fecha de envío: ${horarioFormateado} Hrs - ${fechaFormateada}`}</li>
      </>
    );
  };

  return (
    <div>
      {servicio ? (
        <div>
          <h1>Cliente:</h1>
          <ul>
            <li>Nombre: {servicio.Cliente.nombres}</li>
            <li>Apellido: {servicio.Cliente.apellidos}</li>
            <li>Habitación: {servicio.Cliente.habitacion}</li>
          </ul>
          <h1>Servicio:</h1>
          <ul>
            <li>Servicio: {servicio.Servicios.nombreServicio}</li>
            <li>Detalles del servicio: {servicio.Servicios.descripcion}</li>
            <li>
              {formatearFechaHora(
                servicio.Servicios.created_at,
                servicio.Servicios.hora,
                servicio.Servicios.minutes
              )}
            </li>
          </ul>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}

      <Link to={`/dashboard/${servicio && servicio.Cliente.id}`}>
        <button>Volver a Dashboard</button>
      </Link>
    </div>
  );
}

export default ResponseServicios;
