import React, { useState } from 'react';
import {useParams } from "react-router-dom";
import servicios from '../../assets/images/frontdesk.png';
import DateTimePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';


function BodyServicios() {
  const { id } = useParams();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('12:00'); 
  const handleClick = () => { 
   
    const button = document.getElementById('submitButton');
    button.classList.add('jello-vertical');

 /*post*/
//  try {
//   await fetch(`/enviarServicio/${id}`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       nombreServicio,
//       descripcion,
//       horario,
//       fecha,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) =>
//       navigate(`/dashboard/servicios/resultService/${data.serviceId}`)
//     )
//     .catch((e) => console.log(e));
// } catch (error) {
//   console.error("Error")}



    setTimeout(() => {
      button.classList.remove('jello-vertical');
    }, 500);
  };

  return (
    <div className="flex items-center mx-4">
      <img className="w-200" src={servicios} alt="SERVICIOS" />
      <div className="flex flex-col w-full h-full ml-4">
        <form action="" className="border border-black rounded-3xl p-8 bg-gray-100">
          <div className="flex mb-2 mr-8">
            <div className="w-1/2 pr-2">
              <label htmlFor="fecha" className="text-lg font-semibold ">
                Fecha<br/>
              </label>
              <DateTimePicker
                selected={date}
                onChange={(date) => setDate(date)}
                className="border border-black p-2 w-full rounded"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor="hora" className="text-lg font-semibold mb-2">
                Hora
              </label>
              {/* <TimePicker
                value={time}
                onChange={(newTime) => setTime(newTime)}
                minDate={new Date().setHours(8, 0)} // Hora mínima a las 8:00 AM
                maxDate={new Date().setHours(20, 0)} // Hora máxima a las 8:00 PM
                className="border border-black p-2 w-full rounded"
                
              /> */}
            </div>
          </div>
          
          

          <label htmlFor="descripcion" className="text-lg font-semibold mb-2">
            Tipo de Servicio
          </label>
          <select
            id="servicio"
            className="border border-black p-2 mb-4 w-full rounded"
          >
             <option value="" disabled selected>Seleccione el servicio</option>
            <option value="toallas">Toallas</option>
            <option value="lavanderia">Lavandería</option>
            <option value="limpieza">limpieza</option>
            <option value="amenities">amenities</option>
            <option value="lavanderia">No limpieza</option>
            
          </select>

          <label htmlFor="descripcion" className="text-lg font-semibold mb-2">
            Descripción
          </label>
          <input
            type="text"
            id="descripcion"
            placeholder="Descripción"
            className="border border-black p-2 w-full rounded"
          />

         
          <button 
          onClick={handleClick}
          id="submitButton"
          type='button' 
          className='text-center 
          justify-center 
          items-center flex
           border-black text-2xl
            rounded-xl w-full
             bg-green-400 mt-6 
             jello-vertical
            default:'>

            Enviar informacion
      </button>
        </form>
    
      </div>
      
    </div>
  );
}

export default BodyServicios;
