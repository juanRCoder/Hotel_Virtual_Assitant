import { Link, useParams } from "react-router-dom";



function BodyAyB() {
  const { id } = useParams();
  return (
    <>
  

<div className="mt-20 flex justify-center items-center">
    <Link to={`/dashboard/restaurante/reserva/${id}`}>
      <button className="font-Abril-Fatface text-4xl md:text-4xl bg-green-200 py-6 px-6 sm:px-4 rounded-2xl border border-l-8 border-green-800 text-green-800 text-shadow-lg shadow-black/100">
        RESERVA RESTAURANTE
      </button>
    </Link>
  </div>

  <div className="flex justify-center items-center mt-14">
    <Link to={`/dashboard/restaurante/roomservice/${id}`}>
      <button className="
      font-Abril-Fatface md:text-4xl text-4xl
        sm:text-5xl bg-green-200 py-4 px-12 sm:px-20 rounded-2xl border border-l-8 border-green-800 text-green-800 text-shadow-sm shadow-black/50">
         RESERVA ROOM SERVICE
      </button>
    </Link>
  </div>
</>

   
  );
}

export default BodyAyB;