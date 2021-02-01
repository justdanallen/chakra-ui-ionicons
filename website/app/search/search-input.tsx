import {
  chakra,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import * as React from 'react';
import { SearchIcon, CloseCircleIcon } from '../../../src';
import { useSearchKey } from '../state';

export function SearchInput() {
  const { searchKey, setSearchKey } = useSearchKey();

  return (
    <InputGroup>
      <InputLeftElement children={<SearchIcon />} />
      <Input
        value={searchKey}
        onChange={e => setSearchKey(e.target.value)}
        placeholder="Search icons"
      />
      {searchKey && (
        <InputRightElement
          children={
            <chakra.button lineHeight={0}>
              <CloseCircleIcon
                color="gray.500"
                onClick={() => setSearchKey('')}
              />
            </chakra.button>
          }
        />
      )}
    </InputGroup>
  );
}
