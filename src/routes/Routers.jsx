
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
import Restaruante from '../pages/Restaurante';


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
      <Route path="/dashboard/restaurante" element={<Restaruante />} />
      <Route path="/*" element={<NotFound />} />

    </Routes>
   
       
  );
}

export default Routers;
