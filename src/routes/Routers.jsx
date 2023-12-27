
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';
import Servicios from '../pages/Servicios';
import ResponseServicios from '../pages/ResponseServicios';
import Preguntas from '../pages/Preguntas';
import Tecnico from '../pages/Tecnico';
import ResponseTecnico from "../pages/ResponseTecnico";
import Restaurante from '../pages/Restaurante';
import Reserva from '../pages/Reserva';
import Roomservice from '../pages/Roomservice';


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/Dashboard/:id" element={<Dashboard />} />
      <Route path="/dashboard/servicios/:id" element={<Servicios />} />
      <Route path="/dashboard/servicios/resultService/:idService" element={<ResponseServicios />} />
      <Route path="/dashboard/preguntas/:id" element={<Preguntas />} />
      <Route path="/dashboard/tecnico/:id" element={<Tecnico />} />
      <Route path="/dashboard/serviciosTec/resultServiceTec/:idServiceTec" element={<ResponseTecnico />} />
      <Route path="/dashboard/restaurante/:id" element={<Restaurante />} />
      <Route path="/dashboard/restaurante/reserva/:id" element={<Reserva/>} />
      <Route path="/dashboard/restaurant/reserva/resultReserva/:idReserva" element={<ResponseReseva />} />
      <Route path="/dashboard/restaurante/roomservice/:id" element={<Roomservice />} />
      <Route path="/*" element={<NotFound />} />

    </Routes>
   
       
  );
}

export default Routers;
