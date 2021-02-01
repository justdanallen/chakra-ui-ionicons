import { chakra, Flex, Heading, Text } from '@chakra-ui/react';
import * as React from 'react';
import { SearchInput } from './search-input';
import { SearchResult } from './search-result';
import { ColorModeToggle } from '../parts/color-mode-toggle';
import { SelectIconType } from '../parts/select-icon-type';

export function IconSearchSection() {
  return (
    <chakra.section>
      <Flex dir="row" alignItems="center">
        <SearchInput />
        <ColorModeToggle ml={3} />
      </Flex>
      <Flex dir="row" alignItems="end" justifyContent="space-between" mt={10}>
        <Heading as="h2" size="xl" color="gray.500">
          Icons
        </Heading>
        <SelectIconType />
      </Flex>
      <SearchResult />
    </chakra.section>
  );
}
