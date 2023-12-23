
function BodyTecnico() {
  return (
    <>
      <div className="flex justify-center text-center mt-2">
        <h1 className="
        text-4xl
        text-center
        ml-16 
        
        ">
          SERVICIO TECNICO</h1>
      </div>
      <div className="flex justify-center items-center text-center mt-6">
        <div
          className="flex flex-col items-center bg-gradient-to-br
        from-green-200
        via-lime-100
        to-lime-200
         ml-20 w-1/2 
         h-2/5 
         rounded-xl
         shadow-2xl
         shadow-green-950
         border border-black
         "
        >
          <h1 className="text-xl mt-6">Problema Tecnico</h1>
          <select
            id="servicio"
            className="
            border border-black
            p-2 
            mb-4 
            mt-2
            w-4/5
            text-center
            justify-center
            items-center 
            rounded-lg"
          >
            <option value="" disabled selected>
              Seleccione el problema
            </option>
            <option value="toallas">AGUA</option>
            <option value="lavanderia">LUZ</option>
            <option value="limpieza">INTERNET</option>
            <option value="amenities">TV</option>
            <option value="lavanderia">AIRE ACONDICADO</option>
            <option value="lavanderia">DUCHA</option>
            <option value="lavanderia">OTROS</option>
          </select>
          <h1>Descripcion del problema tecnico</h1>
          <input type="text" className="
          from-green-400
          via-lime-600
          to-lime-600
          shadow-md
          shadow-black 
          w-5/6
          p-20 
          my-2
          rounded-lg" />
          <h1 className="text-xl mt-6">Seleccione el Horario de atencion</h1>
             <select
            id="servicio"
            className="
            border border-black
            p-2 
            mb-4 
            mt-2
            w-4/5
            text-center
            justify-center
            items-center 
            rounded-lg"
          >

            <option value="date" disabled selected>
              Seleccione el horario de atencion
            </option>
            <option value="toallas">AGUA</option>
            <option value="lavanderia">LUZ</option>
            <option value="limpieza">INTERNET</option>
            <option value="amenities">TV</option>
            <option value="lavanderia">AIRE ACONDICADO</option>
            <option value="lavanderia">DUCHA</option>
            <option value="lavanderia">OTROS</option>
          </select>
          
        </div>
      
      </div>
    
    
 
    </>
  );
}

export default BodyTecnico;
