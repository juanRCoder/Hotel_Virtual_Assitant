import { Link, useParams } from "react-router-dom";



function BodyAyB() {
  return (
    <>
      <div>
        <div className="flex  flex-col justify-center ">
          <h1
            className="
                text-center
                text-green-800
                text-shadow-sm
                shadow-green-600/100
                font-Abril-Fatface
                text-5xl
                mt-10
                ">
            SERVICIOS DE ALIMENTOS Y BEBIDAS
          </h1>
          <h1
            className="
                text-center
                text-green-800
                text-shadow-sm
                shadow-black/100
                font-Abril-Fatface
                text-4xl
                mt-10

                ">
                    ESCOGE EL SERVICIO QUE DESEE 
          </h1>
          <div className=" mt-20 flex justify-center items-center">
          <Link to="/dashboard/restaurante/reserva/:id"> 
          <button className="
          font-Abril-Fatface
          text-4xl
          bg-green-200
          py-6
          px-6
          rounded-2xl
          border
          border-l-8
          border-green-800
          text-green-800
          text-shadow-lg
          shadow-black/100
          ">
                RESERVA RESTAURANTE
          </button >
          </Link>
          </div>
        
          

          <div className="flex justify-center items-center mt-14">
          <Link to="/dashboard/restaurante/roomservice/:id"> 
          <button className="
          font-Abril-Fatface
          text-4xl
          bg-green-200
          py-6
          px-20
          rounded-2xl
          border
          border-l-8
          border-green-800
          text-green-800
          text-shadow-sm
          shadow-black/50
          ">
                ROOM SERVICE
          </button>
          </Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default BodyAyB;
