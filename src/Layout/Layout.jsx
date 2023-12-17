// Archivo: Layout.js
import React from 'react';
import Header from '../components/Header/Header';
import Routers from '../routes/Routers';
import Body from '../components/Body/Body';
import backgroundImage from '../assets/images/fondo-verde-amarillo-fondo-verde-naranja_873925-18302.jpg';
import overlayImage from '../assets/images/room.png';  // Ruta de la imagen overlay
import Logo from '../components/Logo/Logo';

const Layout = () => {
  return (
    <div className="relative bg-cover bg-center h-screen">
      {/* Fondo con opacidad y efecto de desenfoque con gradiente */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: 'blur(250px)', // Ajusta el valor de blur según sea necesario
          zIndex: -1,
          opacity: 0.9,
        }}
      ></div>
      {/* <div
        className="relative h-screen"
        style={{
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity:0.9,
          background: 'linear-gradient(to right, #badea5       , #a5de91     , #ffffc2     , #feff61     , #ffff92     )',
          filter: 'blur(10px)', // Ajusta el valor de blur según sea necesario
          zIndex: -1,
        }}
      ></div> */}

      {/* Capa de la imagen encima del fondo */}
      <div
        className="absolute top-1/2 -right-1/4 transform translate-x-1/2 -translate-y-1/2 w-4/12 h-4/12 z-1"
        style={{
          zIndex: 1,
        }}
      >
        {/* Imagen overlay */}
        <img
          src={overlayImage}
          alt="Overlay"
          className="absolute top-1/2 left-1/12 transform -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 z-1 "
        />
      </div>

      {/* Contenedor para todos los componentes y la "hoja de cuaderno" */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
        {/* "Hoja de cuaderno" importada */}
        <Header />
        <Logo/>
        <Body>
          {/* Rutas */}
          <Routers />
        </Body>
      </div>
    </div>
  );
}

export default Layout;
