import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import Routers from './routes';
import theme from './utils/theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routers />
    </ChakraProvider>
  )
};

export default App;
