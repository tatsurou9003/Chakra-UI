import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '../../router/Router';

import theme from '../../theme/theme';

// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import { store } from '../../store';
// import { Layout } from '../Layout/Layout';
// import { Routes } from '../Routes/Routes';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
};
