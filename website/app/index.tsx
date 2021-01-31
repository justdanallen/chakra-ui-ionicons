import * as React from 'react';
import {
  Box,
  Heading,
  Text,
  ChakraProps,
  useColorMode,
  IconButton,
} from '@chakra-ui/react';
import { IconSearch } from './icon-search';
import { MoonIcon, SunnyIcon } from '../../src';

export function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const fullWidthCenter: ChakraProps = {
    width: '100%',
    textAlign: 'center',
  };

  return (
    <Box as="main" padding={[3, 5]} maxWidth="900px" m="0 auto">
      <Heading {...fullWidthCenter}>Chakra + Ion Icons</Heading>
      <Text {...fullWidthCenter} color="gray.500" my={[5, 7]}>
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
