import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/Login';
import Error from '../pages/Error';

const Routers = () => {
  return (
    <div>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/*" element={<Error />} />
    </div>
  );
}

export default Routers;
