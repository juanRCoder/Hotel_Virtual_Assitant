import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/Login';
import Error from '../pages/Error';
import Dashboard from '../components/Dashboard';

const Routers = () => {
  return (
    <div>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </div>
  );
}

export default Routers;
