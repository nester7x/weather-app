import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import AppRoutes from './routes';
import Layout from './components/Layout';
import Logo from 'assets/Images/logo.png';

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>Weather App</title>
        <link rel='icon' type='image/png' href={Logo} />
      </Helmet>
      <Layout>{AppRoutes()}</Layout>
    </Router>
  );
};

export default App;
