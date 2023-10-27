import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'screens/Home';
import { routes } from 'constants/routes';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
    </Routes>
  );
}
