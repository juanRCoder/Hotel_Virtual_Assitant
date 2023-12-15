import React from 'react';
import Header from '../components/Header/Header';
import Routers from '../routes/Routers';
import Body from '../components/Body/Body';
import backgroundImage from '../assets/images/bg-hotel.jpg';

const Layout = () => {
  return (
    <div className="relative bg-cover bg-center h-screen">
      <div
        style={{
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          filter: 'blur(px)', // Ajusta el valor de blur según sea necesario
          zIndex: -1,          
        }}
      ></div>
      <Header />
      <Body>
        <Routers />
      </Body>
    </div>
  );
}

export default Layout;
