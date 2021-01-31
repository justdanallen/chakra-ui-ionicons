import {
  chakra,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { CloseCircleIcon, SearchIcon } from '../../src';
import Fuse from 'fuse.js';
import * as React from 'react';
import { useState } from 'react';
import { iconData, IconDisplayData } from './icon-data';
import { IconPreview } from './icon-preview';

function createFilteredFuse<T = unknown>(
  list: T[],
  options?: Fuse.IFuseOptions<T>
) {
  const fuse = new Fuse(list, options);

  const defaultList = list.map(
    (doc, idx) =>
      ({
        item: doc,
        score: 1,
        refIndex: idx,
      } as Fuse.FuseResult<T>)
  );

  const search = (query: string) => {
    const results = fuse.search<T>(query);
    return {
      isDefault: !!results.length,
      numFound: results.length,
      results: results.length ? results : defaultList,
    };
  };

  return search;
}

const iconSearch = createFilteredFuse(iconData.standard, {
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
  const { results: filteredIcons, numFound } = iconSearch(searchKey);

  return (
    <>
      <Flex dir="row" alignItems="center">
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
        {!(searchKey.length && numFound === 0)
          ? filteredIcons.map(({ item, matches, idx }) => {
              return (
                <IconPreview
                  key={item.name + `-${idx}`}
                  {...item}
                  matches={matches?.[0].indices}
                  onSelect={onSelect}
                />
              );
            })
          : 'none found'}
      </chakra.section>
    </>
  );
}
