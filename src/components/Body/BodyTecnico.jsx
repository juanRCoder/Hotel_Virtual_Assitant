function BodyTecnico() {
  return (
    <>
      <div className="flex justify-center text-center mt-2">
        <h1 className="
          text-6xl
          font-Oswald
          text-center
          ml-16 
        ">
          SERVICIO TECNICO
        </h1>
      </div>

      <div className="flex justify-center items-center text-center mt-6">
        <div
          className="flex flex-col items-center bg-gradient-to-br
          from-green-200
          via-lime-100
          to-lime-200
          ml-20 w-2/5 
          h-96 
          rounded-xl
          shadow-2xl
          shadow-green-950
          border border-black"
        >
          <h1 className="text-xl mt-6">Problema Tecnico</h1>
          <select
            id="servicio"
            className="
              border border-black
              p-2 
              mb-4 
              mt-2
              w-1/2
              text-center
              justify-center
              items-center 
              rounded-lg"
          >
            <option value="" disabled defaultValue>
              Seleccione el problema
            </option>
            {/* Options corrected: each value should be unique */}
            <option value="agua">AGUA</option>
            <option value="luz">LUZ</option>
            <option value="internet">INTERNET</option>
            <option value="tv">TV</option>
            <option value="aire-acondicionado">AIRE ACONDICADO</option>
            <option value="ducha">DUCHA</option>
            <option value="otros">OTROS</option>
          </select>

          <h1>Descripcion del problema tecnico</h1>
          <input 
            type="text" 
            className="
              from-green-400
              via-lime-600
              to-lime-600
              shadow-md
              shadow-black 
              w-1/2
              p-2 
              my-2
              rounded-lg"
          />

          <h1 className="text-xl mt-6">Seleccione el Horario de atencion</h1>
          <select
            id="horario"
            className="
              border border-black
              p-2 
              mb-4 
              mt-2
              w-1/2
              text-center
              justify-center
              items-center 
              rounded-lg"
          >
            <option value="" disabled defaultValue>
              Seleccione el horario de atencion
            </option>
            {/* Options corrected: each value should be unique */}
            <option value="manana">Mañana</option>
            <option value="tarde">Tarde</option>
            <option value="noche">Noche</option>
          </select>
        </div>
      </div>
    </>
  );
}
export default BodyTecnico