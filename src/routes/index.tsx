import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { routes } from 'constants/routes';
import Preloader from 'components/Preloader';
import lazyLoad from 'components/LazyLoad';

const Home = lazyLoad(() => import('screens/Home'), <Preloader inscription='Loading...' />);

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
    </Routes>
  );
}
