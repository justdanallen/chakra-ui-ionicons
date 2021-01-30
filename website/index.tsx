import 'react-app-polyfill/ie11';
import * as React from 'react';
import { render } from 'react-dom';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { App } from './app';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

const Root = () => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </>
  );
};

render(<Root />, document.getElementById('root'));
