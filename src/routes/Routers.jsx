
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
<<<<<<< HEAD
import Error from '../pages/Error';
import Dashboard from '../components/Dashboard';
=======
import Layout from '../Layout/Layout';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';
>>>>>>> frontend

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
<<<<<<< HEAD
    </div>
=======
      <Route path="/*" element={<NotFound />} />
    </Routes>
>>>>>>> frontend
  );
}

export default Routers;
