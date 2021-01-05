import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
// import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import 'mixins/chartjs';
import store from 'store/store';
import routes from 'routes';

const AppClient = () => {
  const routing = useRoutes(routes);

  return (
    <Provider store={store}>

      <HelmetProvider>
        {routing}
      </HelmetProvider>
    </Provider>
  );
};

export default AppClient;
