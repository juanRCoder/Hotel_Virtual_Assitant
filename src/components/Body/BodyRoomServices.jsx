import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BodyRoomServices = () => {
  const navigate = useNavigate();
  const fechaInicial = new Date();
  const [formData, setFormData] = useState({
    bebidaOption: "",
    menuOption: "",
    cant_beb: 0,
    cant_menu: 0,
    otros_detalles: "",
    fecha: fechaInicial,
    hora: "",
    minutes: "",
  });

  const [bebidasOptions, setBebidasOptions] = useState([]);
  const [menuOptions, setMenuOptions] = useState([]);
  const { id } = useParams();
  // const clienteId = id;
  // console.log("clienteId: ", clienteId);
  console.log("ID: ", id);
  useEffect(() => {
    // Función para obtener informaicón de las bebidas y el menú
    const fetchData = async () => {
      try {
        const bebidasResponse = await fetch(`/extraerBebidas`);

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
    console.log("Datos enviados", formData);
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
      navigate(``);
      console.log("Datos enviado: ", responseData);
    } catch (err) {
      console.error("Error al enviar la solicitud:", err);
    }
    // handleClear();
  };

  // const handleClear = () => {
  //   setFormData({
  //     fecha: "",
  //     hora: 0,
  //     minutes: 0,
  //     bebidas: "",
  //     menu: "",
  //     cantidadBebidas: 0,
  //     cantidadMenu: 0,
  //     otros_detalles: "",
  //   });
  // };

  // const generateHoursOption = () => {
  //   const hoursOption = [];
  //   for (let i = 6; i < 24; i++) {
  //     hoursOption.push(
  //       <option key={i} value={i}>
  //         {i < 10 ? `0${i}` : i}
  //       </option>
  //     );
  //   }
  //   return hoursOption;
  // };

  // const generateMinutesOption = () => {
  //   const minutesOption = [];
  //   for (let i = 0; i <= 45; i += 15) {
  //     minutesOption.push(
  //       <option key={i} value={i}>
  //         {i < 10 ? `0${i}` : i}
  //       </option>
  //     );
  //   }
  //   return minutesOption;
  // };

  return (
    <>
      <div
        className="
      flex
      text-center
      justify-center
      mt-4
      
      "
      >
        <h1
          className="
        text-7xl
        font-Abril-Fatface
        text-green-800
        text-shadow-lg
        shadow-green-500/100
       
        mb-1
        "
        >
          ROOMSERVICE
        </h1>
      </div>
      <div
        className="
      flex 
      justify-center 
      items-center 
      h-screen
      -mt-24
      rounded-3xl
      
      "
      >
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
          <label
            className="
          block 
          text-gray-700 
          text-sm 
          font-bold 
          mb-2"
          >
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

          <div
            className="
          flex 
          justify-between 
          mb-4
          "
          >
            <div className="w-1/2 pr-2">
              <label
                className="
              block 
              text-gray-700 
              text-sm 
              font-bold 
              "
              >
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
                <option value="">...</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>

            <div
              className="
            w-1/2 
            pl-2
            "
            >
              <label
                className="
              block 
              text-gray-700 
              text-sm 
              font-bold 
              "
              >
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
                <option value="">...</option>
                <option value="00">00</option>
                <option value="05">05</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>

          <div
            className="
          flex 
          justify-between 
          mb-4"
          >
            <div
              className="
            w-1/2 
            pr-2"
            >
              <label
                className="
              block 
              text-gray-700 
              text-sm 
              font-bold 
              mb-1"
              >
                Bebidas
              </label>
              <select
                name="bebidas"
                value={formData.bebidasOption}
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

            <div
              className="
            w-1/2 
            pl-2"
            >
              <label
                className="
              block 
              text-gray-700 
              text-sm 
              font-bold 
              mb-1"
              >
                Cantidad de bebidas
              </label>
              <input
                type="number"
                name="cant_beb"
                value={formData.cant_beb}
                onChange={handleChange}
                className="
                w-full border 
                border-gray-300 
                p-2"
              />
            </div>
          </div>

          <div
            className="
          flex 
          justify-between 
          "
          >
            <div
              className="
            w-1/2 
            pr-2"
            >
              <label
                className="
              block 
              text-gray-700 
              text-sm 
              font-bold 
              "
              >
                Menu
              </label>
              <select
                name="menuOption"
                value={formData.menuOption}
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

            <div
              className="
            w-1/2 
            pl-2"
            >
              <label
                className="
              block 
              text-gray-700 
              text-sm 
              font-bold 
              "
              >
                Cantidad de comida
              </label>
              <input
                type="number"
                name="cant_menu"
                value={formData.cant_menu}
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
              name="otros_detalles"
              value={formData.otros_detalles}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2"
            />
          </div>

          {/* Resto del formulario ... */}

          <button
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
