import * as React from 'react';
import {
  Box,
  Heading,
  Text,
  ChakraProps,
  useColorMode,
  IconButton,
  VisuallyHidden,
  Flex,
} from '@chakra-ui/react';
import create from 'zustand';
import { IconSearch } from './icon-search';
import { LogoGithubIcon, LogoNpmIcon, MoonIcon, SunnyIcon } from '../../src';
import { ChakraLogo } from './chakra-logo';
import { IonIconLogo } from './ionicons-logo';
import { SelectIconType } from './select-icon-type';
import { SelectedIconType } from './icon-data-2';

type AppStore = {
  selectedIconType: SelectedIconType;
  setSelectedIconType: (selected: SelectedIconType) => void;
};

export const useAppStore = create<AppStore>(set => ({
  selectedIconType: 'filled',
  setSelectedIconType: selected =>
    set(state => ({
      ...state,
      selectedIconType: selected,
    })),
}));

export function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const fullWidthCenter: ChakraProps = {
    width: '100%',
    textAlign: 'center',
  };

  return (
    <>
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
            <>
              <SelectIconType />
              <IconButton
                onClick={toggleColorMode}
                aria-label="change color mode"
                icon={colorMode === 'light' ? <MoonIcon /> : <SunnyIcon />}
              />
            </>
          }
        />
      </Box>
      <Flex
        position="absolute"
        top={0}
        right={0}
        p={4}
        sx={{
          '> a': {
            ml: 2,
          },
        }}
      >
        <IconButton
          aria-label="github repo"
          as="a"
          href={'https://github.com/justdanallen/chakra-ui-ionicons'}
          rel="noopener norefferer nofollow"
          icon={<LogoGithubIcon />}
        />
        <IconButton
          aria-label="go to npm package"
          as="a"
          href={'https://www.npmjs.com/package/chakra-ui-ionicons'}
          rel="noopener norefferer nofollow"
          icon={<LogoNpmIcon />}
        />
      </Flex>
    </>
  );
}
