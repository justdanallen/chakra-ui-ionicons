import { ChakraProps, IconButton, useColorMode } from '@chakra-ui/react';
import * as React from 'react';
import { MoonIcon, SunnyIcon } from '../../../src';

export function ColorModeToggle(props: ChakraProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      {...props}
      onClick={toggleColorMode}
      aria-label="change color mode"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunnyIcon />}
    />
  );
}
