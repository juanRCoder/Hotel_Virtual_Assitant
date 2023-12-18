
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';

import Layout from '../Layout/Layout';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';
import Servicios from '../pages/Servicios';
import Preguntas from '../pages/Preguntas';
import Tecnico from '../pages/Tecnico';
import Restaruante from '../pages/Restaurante';


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/dashboard/servicios" element={<Servicios />} />
      <Route path="/dashboard/preguntas" element={<Preguntas />} />
      <Route path="/dashboard/tecnico" element={<Tecnico />} />
      <Route path="/dashboard/restaurante" element={<Restaruante />} />
      <Route path="/*" element={<NotFound />} />

    </Routes>

  );
}

export default Routers;
