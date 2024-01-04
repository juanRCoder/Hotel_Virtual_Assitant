import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment-timezone";
import backgroundImage from "../assets/images/background.jpg";
import Lottie from "lottie-react";
import animation from "../assets/back.json";

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

  const formatearFechaHora = (date) => {
    const fechaHoraConvertida = moment(date).tz("America/Bogota");
    const fechaFormateada = fechaHoraConvertida.format("YYYY-MM-DD");
    const horarioFormateado = fechaHoraConvertida.format("HH:mm:ss");
    return (
      <>
        <li className="font-bold text-sm text-green-600 ">{`Fecha de solicitud: ${horarioFormateado} Hrs - ${fechaFormateada}`}</li>
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

      <div className="
      flex justify-center text-center mt-12 md:mt-8">
        <h1 className="
        font-Abril-Fatface text-6xl md:text-6xl mt-8 md:mt-0 text-green-800 text-shadow-lg shadow-black/100">
          SERVICIO ENVIADO!
        </h1>
      </div>
      <div className="
      flex justify-center text-center mt-4 mb:mt-8">
        <h1 className="
        font-Abril-Fatface text-5xl md:text-4xl 
        text-green-800 text-shadow-lg shadow-black/100">
          Nuestro personal pronto se pondra en contacto!
        </h1>
      </div>
      <div className="
      flex justify-center items-center min-h-screen -mt-60 md:-mt-20  ">
        {servicio ? (
          <div
            class="max-w-2xl p-6 bg-white rounded-lg shadow-md bg-gradient-to-br
          from-white
          via-lime-100
          to-lime-200
          border-l-8
          border-r-2
          border-y-2
          border-green-800"
          >
            <h1 className="text-2xl font-bold mb-4">Huesped:</h1>
            <ul>
              <li className="font-bold text-sm text-green-600 ">
                Nombre: {servicio.Cliente.nombres}
              </li>
              <li className="font-bold text-sm text-green-600 ">
                Apellido: {servicio.Cliente.apellidos}
              </li>
              <li className="font-bold text-sm text-green-600 ">
                Habitación: {servicio.Cliente.habitacion}
              </li>
            </ul>
            <h1 className="text-2xl font-bold mt-4">Servicio:</h1>
            <div className="max-w-full overflow-hidden whitespace-pre-line">
              <ul>
                <li className="font-bold text-sm text-green-600 ">
                  Problema: {servicio.Servicios.nombreServicio}
                </li>
                <li className="font-bold text-sm text-green-600">
                  Detalles del problema: {servicio.Servicios.descripcion}
                </li>
                <li>
                  {formatearFechaHora(
                    servicio.Servicios.created_at,
                  )}
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <p>Cargando datos...</p>
        )}
        <Link to={`/dashboard/${servicio && servicio.Cliente.id}`}>
          <button>
            <Lottie
              className="w-12 absolute top-4 right-6 md:right-2 mt-2"
              animationData={animation}
            />
          </button>
        </Link>
      </div>
    </>
  );
}

export default ResponseServicios;
