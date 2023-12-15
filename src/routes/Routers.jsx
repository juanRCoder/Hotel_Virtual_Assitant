
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Layout from '../Layout/Layout';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default Routers;
