import React from 'react';
import HeaderDashboard from '../components/Header/HeaderDashboard';
import BodyDashboard from '../components/Body/BodyDashboard';
import backgroundImage from '../assets/images/fondo-verde-amarillo-fondo-verde-naranja_873925-18302.jpg';


const Dashboard = () => {
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
       <div
        className="absolute top-1/2 -right-1/4 transform translate-x-1/2 -translate-y-1/2 w-4/12 h-4/12 z-1"
        style={{
          zIndex: 1,
        }}
      ></div>
      <HeaderDashboard />
      <BodyDashboard />
    </div>
  );
}

export default Dashboard;
