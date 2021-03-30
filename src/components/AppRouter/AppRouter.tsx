import React from 'react';

import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouterSwitch from './AppRouterSwitch';

const AppRouter: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <AppRouterSwitch />
      </Router>
    </HelmetProvider>
  );
};

export default AppRouter;
