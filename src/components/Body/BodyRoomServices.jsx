import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 

const BodyRoomServices = () => {
    const [formData, setFormData ] = useState({
        fecha: '',
        hora: 0,
        minutes: 0,
        bebidas: '',
        menu: '',
        cantidadBebidas: 0,
        cantidadMenu: 0,
        resumen: ''
    });

    const [bebidasOptions, setBebidasOptions] = useState([]);
    const [menuOptions, setMenuOptions] = useState([]);
    const { id } = useParams();
    const clienteId = id;
    console.log('clienteId: ', clienteId)
    console.log('ID: ',id);
    useEffect(() => {
        // Función para obtener informaicón de las bebidas y el menú
        const fetchData = async () => {
            try {
                const bebidasResponse = await fetch(`http://localhost:3004/extraerBebidas/`);

                const menuResponse = await fetch('http://localhost:3004/extraerMenu/');

                const bebidasData = await bebidasResponse.json();

                const menuData = await menuResponse.json();

                setBebidasOptions(bebidasData);
                setMenuOptions(menuData);
            } catch (error) {
                console.error('Error al obtener opciones', error);
            };
        };
        fetchData();

    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [ name ]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Datos enviados', formData);
        try {
          const response = await fetch(`http://localhost:3004/dashboard/enviarRoomService/:${clienteId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });

          if(!response.ok) {
            throw new Error(`Error al enviar la solicitud: ${response.statusText}`);
          }

          const responseData = await response.json();
          console.log('Datos enviado: ', responseData);
        } catch (err) {
          console.error("Error al enviar la solicitud:", err);
        }
        handleClear();
    };

    const handleClear = () => {
        setFormData({
            fecha: '',
            hora: 0,
            minutes: 0,
            bebidas: '',
            menu: '',
            cantidadBebidas: 0,
            cantidadMenu: 0,
            otros_detalles: ''
        });
    };

    const generateHoursOption = () => {
        const hoursOption = [];
        for(let i = 6; i < 24; i++){
            hoursOption.push(
                <option key={ i } value={ i }>
                    { i < 10 ? `0${i}` : i}
                </option>
            );
        }
        return hoursOption;
    };

    const generateMinutesOption = () => {
        const minutesOption = [];
        for(let i = 0; i <= 45; i += 15) {
            minutesOption.push(
                <option key={ i } value={ i }>
                    { i < 10 ? `0${i}` : i }
                </option>
            );
        }
        return minutesOption;
    }


  return (
    <>
      <div
      className="
      flex
      text-center
      justify-center
      mt-4
      
      ">
        <h1 className="
        text-7xl
        font-Abril-Fatface
        text-green-800
        text-shadow-lg
        shadow-green-500/100
       
        mb-1
        ">ROOMSERVICE</h1>
      </div>
      <div className="
      flex 
      justify-center 
      items-center 
      h-screen
      -mt-24
      rounded-3xl
      
      ">
        <form
          onSubmit={handleSubmit}
          className="
          w-full 
          max-w-md 
          bg-lime-100 
          p-8
          rounded-green-600 
          rounded-2xl 
          shadow-md
          border
        border-black"
        >
          <label className="
          block 
          text-gray-700 
          text-sm 
          font-bold 
          mb-2">
            Fecha
          </label>
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange} 
            className="
            w-full border 
            border-gray-300 
            p-2 
            mb-4"
          />

          <div className="
          flex 
          justify-between 
          mb-4
          ">
            <div className="w-1/2 pr-2">
              <label className="
              block 
              text-gray-700 
              text-sm 
              font-bold 
              ">
                Hora
              </label>
              <select
                name="hora"
                value={formData.hora}
                onChange={handleChange}
                className="
                w-full border 
                border-gray-300 
                p-2
                "
                
              >
                {generateHoursOption()}
              </select>
            </div>

            <div className="
            w-1/2 
            pl-2
            ">
              <label className="
              block 
              text-gray-700 
              text-sm 
              font-bold 
              ">
                Minutos
              </label>
              <select
                name="minutes"
                value={formData.minutes}
                onChange={handleChange}
                className="
                w-full 
                border 
                border-gray-300 
                p-2"
              >
                {generateMinutesOption()}
              </select>
            </div>
          </div>

          <div className="
          flex 
          justify-between 
          mb-4">
            <div className="
            w-1/2 
            pr-2">
              <label className="
              block 
              text-gray-700 
              text-sm 
              font-bold 
              mb-1">
                Bebidas
              </label>
              <select
                name="bebidas"
                value={formData.bebidas}
                onChange={handleChange}
                className="
                w-full border 
                border-gray-300 
                p-2"
              >
                <option value="">Seleccionar Bebida</option>
                {bebidasOptions.map((bebida) => (
                  <option key={bebida.id} value={bebida.nombres}>
                    {bebida.nombres}
                  </option>
                ))}
              </select>
            </div>

            <div className="
            w-1/2 
            pl-2">
              <label className="
              block 
              text-gray-700 
              text-sm 
              font-bold 
              mb-1">
                Cantidad de bebidas
              </label>
              <input
                type="number"
                name="cantidadBebidas"
                value={formData.cantidadBebidas}
                onChange={handleChange}
                className="
                w-full border 
                border-gray-300 
                p-2"
              />
            </div>
          </div>

          <div className="
          flex 
          justify-between 
          ">
            <div className="
            w-1/2 
            pr-2">
              <label className="
              block 
              text-gray-700 
              text-sm 
              font-bold 
              ">
                Menu
              </label>
              <select
                name="menu"
                value={formData.menu}
                onChange={handleChange}
                className="
                w-full 
                border 
                border-gray-300 
                p-2"
              >
                <option value="">Seleccionar menu</option>
                {menuOptions.map((menu) => (
                  <option key={menu.id} value={menu.nombres}>
                    {menu.nombres}
                  </option>
                ))}
              </select>
            </div>

            <div className="
            w-1/2 
            pl-2">
              <label className="
              block 
              text-gray-700 
              text-sm 
              font-bold 
              ">
                Cantidad de comida
              </label>
              <input
                type="number"
                name="cantidadMenu"
                value={formData.cantidadMenu}
                onChange={handleChange}
                className="
                w-full 
                border 
                border-gray-300 
                p-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-1">
              Información adicional
            </label>
            <textarea
              name="resumen"
              value={formData.otros_detalles}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2"
            />
          </div>

          {/* Resto del formulario ... */}

          <button
            type="submit"
            className="
            flex
            ml-28
            bg-green-600 
            hover:bg-green-800
            text-white font-bold 
            py-3 
            px-8 
            mr-2 
            rounded
            mt-2"
            
          >
            Enviar
          </button>

          
        </form>
      </div>
    </>
  );
};

export default BodyRoomServices;
