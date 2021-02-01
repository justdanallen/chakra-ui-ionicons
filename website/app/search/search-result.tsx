import { chakra, ChakraProps } from '@chakra-ui/react';
import * as React from 'react';
import { createFilteredFuse } from './create-filtered-fuse';
import { iconData } from './icon-data';
import { IconPreview } from '../parts/icon-preview';
import { useSearchKey } from '../state';

const MIN_MATCH_LENGTH = 2;

const iconSearch = createFilteredFuse(Object.values(iconData), {
  includeMatches: true,
  threshold: 0.1,
  minMatchCharLength: MIN_MATCH_LENGTH,
  keys: ['name'],
});

export function SearchResult(prop: ChakraProps) {
  const searchKey = useSearchKey(state => state.searchKey);

  const { results: filteredIcons, numFound } = iconSearch(searchKey);

  return (
    <chakra.div
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gridAutoRows: 'minmax(70px, auto)',
        mt: [5, 7],
      }}
      {...prop}
    >
      {!(searchKey.length >= MIN_MATCH_LENGTH && numFound === 0)
        ? filteredIcons.map(({ item, matches }, idx) => {
            return (
              <IconPreview
                key={item + `-${idx}`}
                iconData={item}
                matches={matches?.[0].indices}
              />
            );
          })
        : 'none found'}
    </chakra.div>
  );
}
