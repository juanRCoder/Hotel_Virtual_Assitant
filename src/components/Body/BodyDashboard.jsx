import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import frontdesk from "../../assets/images/frontdesk.png";
import './animations.css'

function BodyDashboard() {
  const { id } = useParams();
  const [name, setName] = useState(null);

  useEffect(() => {
    const sendFetch = async () => {
      try {
        await fetch(`/extraerUser/${id}`)
          .then((res) => res.json())
          .then((nameUser) => {
            setName(nameUser);
          })
          .catch((e) => console.log(e));
      } catch (e) {
        console.error("Error:", error.message);
      }
    };
    sendFetch();
  }, [id]);

  return (
  <>
    <div className="flex justify-center items-center mt-20 md:mt-0">
  <img
    className="w-60 h-56 md:w-80 md:h-72 rounded-3xl"
    src={frontdesk}
    alt="frontdesk"
  />
</div>

<div className="text-center flex justify-center  mt-20 md:mt-0">
  <h1 className="
    text-3xl md:text-5xl
    font-Abril-Fatface
    text-green-900
    text-shadow-sm
    shadow-green-800/100
  ">
    Bienvenido {name}!
  </h1>
</div>

<div className="
  flex
  flex-wrap
  justify-around
  pt-14
  p-4 md:p-12
">

  <Link to={`/dashboard/servicios/${id}`}>
    <button
      className="
        font-semibold 
        text-2xl md:text-xl
        rounded-2xl
        h-36 w-48
        md:h-20 md:w-52 
        lg:h-24 lg:w-72
        xl:h-22 xl:w-60
        border
        border-green-800
        shadow-2xl
        bg-gradient-to-br
        from-white
        via-lime-200
        to-green-300 
        animation -ripple
        border-y-2
        border-x-2
        text-green-950
      "
    >
      SERVICIOS
    </button>
  </Link>

  <Link to={`/dashboard/preguntas/${id}`}>
    <button
      className="
        font-semibold 
        text-2xl md:text-xl
        bg-white 
        rounded-2xl
        h-36 w-48
        md:h-20 md:w-52 
        lg:h-24 lg:w-72
        xl:h-22 xl:w-60
        border
        border-green-800
        bg-gradient-to-br
        from-white
        via-lime-200
        to-green-300 
        shadow-2xl
        border-y-2
        border-x-2
        text-green-950
      "
    >
      PREGUNTAS FRECUENTES
    </button>
  </Link>

  <Link to={`/dashboard/tecnico/${id}`}>
    <button
      className="
        font-semibold 
        text-2xl md:text-xl
        bg-white 
        rounded-2xl
        h-36 w-48
        md:h-20 md:w-52 
        lg:h-24 lg:w-72
        xl:h-22 xl:w-60
        border
        border-green-800
        bg-gradient-to-br
        from-white
        via-lime-200
        to-green-300 
        shadow-2xl
        border-y-2
        border-x-2
        text-green-950
      "
    >
      PROBLEMAS
    </button>
  </Link>

  <Link to={`/dashboard/restaurante/${id}`}>
    <button
      className="
        font-semibold 
        text-2xl md:text-xl
        bg-white 
        rounded-2xl
        h-36 w-48
       
        md:h-20 md:w-52 
        lg:h-24 lg:w-72
        xl:h-22 xl:w-60
        border
        border-green-800
        bg-gradient-to-br
        from-white
        via-lime-200
        to-green-300 
        shadow-2xl 
        border-y-2
        border-x-2
        text-green-950
      "
    >
      RESTAURANTE
    </button>
  </Link>
</div>

  </>
  
  );
}

export default BodyDashboard;
