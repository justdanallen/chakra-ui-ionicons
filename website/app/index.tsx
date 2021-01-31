import * as React from 'react';
import {
  Box,
  Heading,
  Text,
  ChakraProps,
  useColorMode,
  IconButton,
  VisuallyHidden,
} from '@chakra-ui/react';
import { IconSearch } from './icon-search';
import { MoonIcon, SunnyIcon } from '../../src';
import { ChakraLogo } from './chakra-logo';
import { IonIconLogo } from './ionicons-logo';

export function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const fullWidthCenter: ChakraProps = {
    width: '100%',
    textAlign: 'center',
  };

  return (
    <Box as="main" padding={[3, 5]} maxWidth="900px" m="0 auto">
      <Heading
        {...fullWidthCenter}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VisuallyHidden>Chakra</VisuallyHidden>
        <ChakraLogo height="100%" boxSize={[32, 48, 60]} mr={[3, 5]} /> +
        <VisuallyHidden>Ion Icons</VisuallyHidden>
        <IonIconLogo height="100%" boxSize={[32, 48, 60]} ml={[3, 5]} />
      </Heading>
      <Text {...fullWidthCenter} color="gray.500" mb={[5, 7]}>
        Chakra compatible Ion Icons. Click on an icon to see usage.
      </Text>

      <IconSearch
        onSelect={icon => console.log(icon)}
        options={
          <IconButton
            onClick={toggleColorMode}
            aria-label="change color mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunnyIcon />}
          />
        }
      />
    </Box>
  );
}
