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
import { IconSearch } from './icon-search';
import { LogoGithubIcon, LogoNpmIcon, MoonIcon, SunnyIcon } from '../../src';
import { ChakraLogo } from './chakra-logo';
import { IonIconLogo } from './ionicons-logo';
import { SquareRadio } from './square-radio';
import { useState } from 'react';
import { SelectedIconType } from './icon-data-2';

export function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [selectedIconType, setSelectedIconType] = useState<SelectedIconType>(
    'filled'
  );

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
          selectedIconType={selectedIconType}
          options={
            <>
              <SquareRadio
                options={['Filled', 'Outline', 'Sharp']}
                onChange={value =>
                  setSelectedIconType(
                    value.toLocaleLowerCase() as SelectedIconType
                  )
                }
              />
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
