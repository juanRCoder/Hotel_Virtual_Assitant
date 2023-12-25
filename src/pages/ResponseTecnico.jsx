import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment-timezone";
import Routers from '../routes/Routers';

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
      {serviceTecnico ? (
        <div>
          <h1>Cliente:</h1>
          <ul>
            <li>Nombre: {serviceTecnico.Cliente.nombres}</li>
            <li>Apellido: {serviceTecnico.Cliente.apellidos}</li>
            <li>Habitación: {serviceTecnico.Cliente.habitacion}</li>
          </ul>
          <h1>Servicio Tecnico:</h1>
          <ul>
            <li>Tipo de problema: {serviceTecnico.Tecnico.problema}</li>
            <li>Detalle del problema: {serviceTecnico.Tecnico.descripcion}</li>
            <li>
              {formatearFechaHora(
                serviceTecnico.Tecnico.created_at,
                serviceTecnico.Tecnico.hora,
                serviceTecnico.Tecnico.minutes
              )}
            </li>
          </ul>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}

      <Link to={`/dashboard/${serviceTecnico && serviceTecnico.Cliente.id}`}>
        <button>Volver a Dashboard</button>
      </Link>
    </>
  );
}

export default ResponseTecnico;
