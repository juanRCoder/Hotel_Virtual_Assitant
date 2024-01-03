import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BodyRoomServices = () => {
  const fechaInicial = new Date();
  const formattedDate = fechaInicial.toISOString().split("T")[0];
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bebidaOption: "",
    menuOption: "",
    cant_beb: 0,
    cant_menu: 0,
    otros_detalles: "",
    fecha: formattedDate,
    hora: 0,
    minutes: 0,
  });

  const [bebidasOptions, setBebidasOptions] = useState([]);
  const [menuOptions, setMenuOptions] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Función para obtener informaicón de las bebidas y el menú
    const fetchData = async () => {
      try {
        const bebidasResponse = await fetch("/extraerBebidas");
        const menuResponse = await fetch("/extraerMenu");

        const bebidasData = await bebidasResponse.json();
        const menuData = await menuResponse.json();

        setBebidasOptions(bebidasData);
        setMenuOptions(menuData);
      } catch (error) {
        console.error("Error al obtener opciones", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/enviarRoomService/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`Error al enviar la solicitud: ${response.statusText}`);
      }

      const responseData = await response.json();
      navigate(
        `/dashboard/restaurante/roomservice/resultRoomService/${responseData}`
      );
      console.log("Id RoomService: ", responseData);
    } catch (err) {
      console.error("Error al enviar la solicitud:", err);
    }
  };

  const generateHoursOption = () => {
    const hoursOption = [];
    for (let i = 6; i < 24; i++) {
      hoursOption.push(
        <option key={i} value={i}>
          {i < 10 ? `0${i}` : i}
        </option>
      );
    }
    return hoursOption;
  };

  const generateMinutesOption = () => {
    const minutesOption = [];
    for (let i = 0; i <= 45; i += 15) {
      minutesOption.push(
        <option key={i} value={i}>
          {i < 10 ? `0${i}` : i}
        </option>
      );
    }
    return minutesOption;
  };

  return (
    <>
     <div className="flex justify-center items-center h-screen -mt-10 rounded-3xl">
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-md bg-lime-100 p-8 rounded-green-600 rounded-2xl shadow-md border border-black px-6 py-4"
  >
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Fecha
    </label>
    <input
      type="date"
      name="fecha"
      value={formData.fecha}
      onChange={handleChange}
      className="w-full border border-gray-300 p-2 mb-4"
    />

    <div className="flex justify-between mb-4">
      <div className="w-full sm:w-1/2 pr-2">
        <label className="block text-gray-700 text-sm font-bold">
          Hora
        </label>
        <select
          name="hora"
          value={formData.hora}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        >
          {generateHoursOption()}
        </select>
      </div>

      <div className="w-full sm:w-1/2 pl-2">
        <label className="block text-gray-700 text-sm font-bold">
          Minutos
        </label>
        <select
          name="minutes"
          value={formData.minutes}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        >
          {generateMinutesOption()}
        </select>
      </div>
    </div>

    <div className="flex justify-between mb-4">
      <div className="w-full sm:w-1/2 pr-2">
        <label className="block text-gray-700 text-sm font-bold mb-1">
          Bebidas
        </label>
        <select
          name="bebidaOption"
          value={formData.bebidaOption}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        >
          <option value="">Seleccionar Bebida</option>
          {bebidasOptions &&
            bebidasOptions.map((bebida) => (
              <option key={bebida.id} value={bebida.nombres}>
                {bebida.nombres}
              </option>
            ))}
        </select>
      </div>

      <div className="w-full sm:w-1/2 pl-2">
        <label className="block text-gray-700 text-sm font-bold mb-1">
          Cantidad de bebidas
        </label>
        <input
          type="number"
          name="cant_beb"
          value={formData.cant_beb}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
    </div>

    <div className="flex justify-between">
      <div className="w-full sm:w-1/2 pr-2">
        <label className="block text-gray-700 text-sm font-bold">
          Menu
        </label>
        <select
          name="menuOption"
          value={formData.menuOption}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        >
          <option value="">Seleccionar menu</option>
          {menuOptions &&
            menuOptions.map((menu) => (
              <option key={menu.id} value={menu.nombres}>
                {menu.nombres}
              </option>
            ))}
        </select>
      </div>

      <div className="w-full sm:w-1/2 pl-2">
        <label className="block text-gray-700 text-sm font-bold">
          Cantidad de comida
        </label>
        <input
          type="number"
          name="cant_menu"
          value={formData.cant_menu}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2"
        />
      </div>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-1">
        Información adicional
      </label>
      <textarea
        name="otros_detalles"
        value={formData.otros_detalles}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2"
      />
    </div>

    <button className="flex ml-4 sm:ml-28 bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-8 mr-2 rounded mt-2">
      Pedir
    </button>
  </form>
</div>

      
    </>
  );
};

export default BodyRoomServices;
