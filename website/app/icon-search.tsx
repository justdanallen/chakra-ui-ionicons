import {
  chakra,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { CloseCircle, Search } from 'chakra-ui-ionicons';
import Fuse from 'fuse.js';
import * as React from 'react';
import { useState } from 'react';
import { DefaultIconDisplay } from './default-icon-display';
import {
  iconData,
  IconDisplayData,
  DefaultIconDisplay as PreRendered,
} from './icon-data';
import { IconPreview } from './icon-preview';

const fuse = new Fuse(iconData.standard, {
  includeMatches: true,
  threshold: 0.1,
  minMatchCharLength: 2,
  keys: ['name'],
});

type IconSearchProps = {
  onSelect: (icon: IconDisplayData) => void;
  options?: React.ReactNode;
};

export function IconSearch({ options, onSelect }: IconSearchProps) {
  const [searchKey, setSearchKey] = useState('');
  const showSearch = searchKey.length > 1;
  const filteredIcons = showSearch ? fuse.search(searchKey) : [];

  return (
    <>
      <Flex dir="row" alignItems="center">
        <InputGroup>
          <InputLeftElement children={<Search />} />
          <Input
            value={searchKey}
            onChange={e => setSearchKey(e.target.value)}
            placeholder="Search icons"
          />
          {searchKey && (
            <InputRightElement
              children={
                <chakra.button lineHeight={0}>
                  <CloseCircle
                    color="gray.500"
                    onClick={() => setSearchKey('')}
                  />
                </chakra.button>
              }
            />
          )}
        </InputGroup>
        {options && <chakra.div ml={3}>{options}</chakra.div>}
      </Flex>
      <chakra.section
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gridAutoRows: 'minmax(70px, auto)',
          mt: [5, 7],
        }}
      >
        {showSearch &&
          (filteredIcons?.length > 0
            ? filteredIcons.map(({ item, matches }) => {
                console.log(matches?.[0].indices);
                return (
                  <IconPreview
                    key={item.name}
                    {...item}
                    matches={matches?.[0].indices}
                    onSelect={onSelect}
                  />
                );
              })
            : 'none found')}
        {!showSearch && <DefaultIconDisplay onSelect={onSelect} />}
        {/* {!showSearch && PreRendered} */}
      </chakra.section>
    </>
  );
}
