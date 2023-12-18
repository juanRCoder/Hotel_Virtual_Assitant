import React from 'react';
import servicios from '../../assets/images/frontdesk.png';

function BodyServicios() {


  return (
    <div className="flex items-center mx-4">
      <img className="w-200" src={servicios} alt="SERVICIOS" />
      <div className='flex flex-col w-full h-full ml-4'>
        <form action="" className="border border-black rounded-3xl p-4">
          <label htmlFor="servicio1">Servicio </label>
          <input
            type="text"
            id="servicio1"
            placeholder='Ingrese el tipo de servicio '
            className='border border-black p-2 mb-4 w-full'
          />
                
          <label htmlFor="descripcion">Tipo de Servicio </label>
          <select id="servicio" className='border border-black p-2 mb-4 w-full'>
            <option value="">selecione el tipo de servicio</option>
            <option value="servicio">toallas</option>
            <option value="servicio">lavanderia</option>
            
          </select>
      
          <label htmlFor="descripcion">descripcion</label>
          <input
            type="text"
            id="descripcion"
            placeholder='descripcion'
            className='border border-black p-2 w-full'
          />
          <label htmlFor="fecha">fecha </label>
          <select id="fecha" className='border border-black p-2 mb-4 w-full'>
            <option value="fecha">fecha1</option>
            <option value="fecha">fecha2</option>
            <option value="fecha">fecha3</option>
            
          </select>
          <label htmlFor="codigo">codigo </label>
          <input
            type="text"
            id="codigo"
            placeholder='Ingrese su codigo de usuario'
            className='border border-black p-2 w-full'
          />
        </form>
      </div>
    </div>
  );
}

export default BodyServicios;
