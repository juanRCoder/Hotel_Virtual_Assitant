
function BodyTecnico() {
  return (
    <>
      <div className="flex justify-center text-center -mt-2">
        <h1 className="
        text-5xl
        text-shadow-lg
        shadow-black/100
        text-center
        ml-16
        font-bold 
        ">
          SERVICIO TECNICO</h1>
      </div>
      <div className="flex justify-center items-center text-center mt-3">
        <div
          className="
        bg-white
        flex flex-col 
        items-center
        ml-20 
        w-2/5 
        h-2/5
        rounded-3xl
        shadow-2xl
        shadow-green-900
        border border-green-800
        hover:shadow-2xl
        border-l-4 border-y-2 "
        >
          <h1 className="text-xl mt-6 font-mono" >Problema Tecnico</h1>
          <select
            id="servicio"
            className="
            border border-green-400
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
          <h1 className="font-mono text-xl">Descripcion del problema tecnico</h1>
          <textarea type="text" className="
         shadow-2xl
         shadow-cocoa-900
         w-5/6
         h-48
         p-4  // Adjusted padding
         mt-2  // Removed my-2 margin
         rounded-3xl
         border-l-8 border-y-0
         border border-green-400
         hover:shadow-sm" >
          </textarea>
          
          <h1 className="text-xl font-mono mt-6">Seleccione el Horario de atencion</h1>
             <select
            id="servicio"
            className="
            border border-green-400
            p-2 
            mb-4 
            mt-2
            w-4/5
            text-center
            justify-center
            items-center 
            rounded-lg
            "
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
          <div className="
          flex 
          items-center 
          justify-center 
          shadow-xl 
          py-2">
            <button
              className="
              bg-green-500
              hover:bg-green-950
              text-black 
              w-24
              h-12 
              rounded 
              focus:outline-none 
              focus:shadow-outline  
              font-bold
              text-xl
              jello-vertical
              default
              "
              type="button"
             
            >
              ENVIAR
            </button>
          </div>
        </div>
        
      
      </div>
    
    
 

    </>
  );
}
export default BodyTecnico