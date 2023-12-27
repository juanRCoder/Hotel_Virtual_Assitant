

function BodyRoomService ()  {
  return (
    <>
    <div>
<div className="flex justify-center text-center">
  <h1 className="text-5xl font-Abril-Fatface text-green-800 shadow-black/100 text-shadow-lg mt-4">
    RESERVACION EN RESTAURANTE
  </h1>
</div>
<div className="flex items-center justify-center mx-4 mt-4">
  <form
    action=""
    className="flex flex-col items-center ml-20 w-2/5 h-3/5 rounded-3xl shadow-2xl shadow-green-900 border border-green-800 hover:shadow-2xl border-l-8 border-y-2 p-8 bg-gray-100"
  >
    <div>
      <label
        htmlFor="descripcion"
        className="text-lg font-mono mb-2"
      >
        Tipo de Mesa
      </label>
      <select
        id="servicio"
        className="border border-green-800 p-2 mb-4 w-full rounded border-l-2 border-y-2 border-x-2"
        name="nombreServicio"
        required
      >
        <option value="" defaultValue>
          Seleccione el servicio
        </option>
        <option value="toallas">Toallas</option>
        <option value="lavanderia">Lavandería</option>
        <option value="limpieza">limpieza</option>
        <option value="amenities">amenities</option>
        <option value="lavanderia">No limpieza</option>
      </select>
      <label
        htmlFor="descripcion"
        className="text-lg font-mono mb-2"
      >
        cantidad de comensales
      </label>
      <select
        id="servicio"
        className="border border-green-800 p-2 mb-4 w-full rounded border-l-2 border-y-2 border-x-2"
        name="nombreServicio"
        required
      >
        <option value="" defaultValue>
          Seleccione el servicio
        </option>
        <option value="toallas">Toallas</option>
        <option value="lavanderia">Lavandería</option>
        <option value="limpieza">limpieza</option>
        <option value="amenities">amenities</option>
        <option value="lavanderia">No limpieza</option>
      </select>
    </div>
    <label htmlFor="descripcion" className="
text-lg 
font-mono 
mb-2">
  Horario De La Reserva
</label>
        <div className="
        flex 
        items-center 
        border 
        border-green-800 
        mt-2 
         
        rounded-md 
        border-l-2 
        border-y-2 
        border-x-2">
      <label htmlFor="horario" className="">
        Horario :
      </label>
      <select
        id="hora"
        name="hora"
        required
        className="
        appearance-none 
        w-16 
        h-10  
        border
        border-green-100
        border-l-2
        border-r-2
        border-y-2
        ">
        <option value="" className="text-center">...</option>
        <option value="17" className="text-end">00</option>
        <option value="18" className="text-end">20</option>
        <option value="19" className="text-end">40</option>
        <option value="21" className="text-end">00</option>
      </select>

      <select
        id="minutes"
        name="minutes"
        required
        className="
        appearance-none 
        w-16 
        h-10  
        border
        border-green-100
        border-l-2
        border-r-2
        border-y-2"
      >
        <option value="" className="text-center">...</option>
        <option value="00">:00</option>
        <option value="10">:10</option>
        <option value="15">:15</option>
        <option value="30">:30</option>
        <option value="35">:35</option>
        <option value="40">:40</option>
      </select>
      
    </div>
    <label
        htmlFor="descripcion"
        className="text-lg font-mono mb-2 mt-4"
      >
        cantidad de comensales
      </label>
      <select
        id="servicio"
        className="border border-green-800 p-2 mb-4 w-full rounded border-l-2 border-y-2 border-x-2"
        name="nombreServicio"
        required
      >
        <option value="" defaultValue>
          Seleccione el servicio
        </option>
        <option value="toallas">Toallas</option>
        <option value="lavanderia">Lavandería</option>
        <option value="limpieza">limpieza</option>
        <option value="amenities">amenities</option>
        <option value="lavanderia">No limpieza</option>
      </select>

    <button
      id="submitButton"
      type="button"
      className="border border-black mt-4 shadow-xl shadow-green-400 bg-green-500 hover:bg-green-950 text-black w-24 h-12 rounded focus:outline-none focus:shadow-outline font-bold text-xl jello-vertical"
    >
      Enviar
    </button>
  </form>
</div>
</div>
      
    </>
  )
}

export default BodyRoomService
