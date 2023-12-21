import React from 'react';
import imagen from '../../assets/images/frontdesk.png';
import Acordeon from './Acordeon';

function BodyPreguntas() {
    return (
      <div className="flex mx-4">
        <div className="w-40%">
          <img src={imagen} alt="" className="w-full h-auto" />
        </div>
        <div className="">
         
        </div>
        <div className='mt-20 flex w-1/2 text-sm font-mono h-full rounded-xl '>
        <Acordeon />
        </div>
      </div>
    );
  }
  

// function BodyPreguntas() {
//   return (
//     <>
//       <div className="flex items-center mx-4 absolute">
//         <img src={imagen} alt="" />

    /* <div className="ml-40 ">
          <h1 className='text-lg font-semibold block ml-'>Descripción del problema</h1>
          <div className="bg-red border border-black mt-4 p-4">
          <select
            id="servicio"
            className="border border-black p-2 mb-4 w-full rounded"
          >
            
            <option value="" disabled selected>Seleccione el servicio</option>
            <option value="">horario de desayuno</option>
            <option value="">horario de lavanderia</option>
            <option value="">roomservice</option>
            <option value="">restaurante</option>
            <option value=""></option>
            
          </select>
          <input
            type="text"
            id="descripcion"
            placeholder="Descripción"
            className="border border-black p-2  rounded w-full h-40 "
          />

          <input
            type="text"
            id="descripcion"
            placeholder=""
            className="border border-black p-2  rounded w-full mt-6"
          />

          </div>
          <button
            id="submitButton"
            type="button"
            className="text-center justify-center items-center flex border-black 
            text-2xl rounded-xl w-full bg-green-400 mt-4"
          >
                Regreso
          </button>
        </div> */
//       </div>
//     </>
//   );
// }

export default BodyPreguntas;
