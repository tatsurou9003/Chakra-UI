import { Button, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import { store } from '../../store';
// import { Layout } from '../Layout/Layout';
// import { Routes } from '../Routes/Routes';

export const App = () => {
  return (
    <ChakraProvider>
      <Button colorScheme="teal">ボタン</Button>
    </ChakraProvider>
  );
};
