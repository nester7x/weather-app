import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routes';
import Layout from './components/Layout';

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const loaderElement = document.querySelector('.preloader');
    if (loaderElement) {
      loaderElement.remove();
      setLoading(!isLoading);
    }
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <Router>
      <Layout>{AppRoutes()}</Layout>
    </Router>
  );
};

export default App;
