import * as React from 'react';
import { chakra, Text } from '@chakra-ui/react';
import { IconDisplayData } from '../search/icon-data';
import { useSelectedIcon, useSelectedIconType } from '../state';

type IconPreviewProps = {
  iconData: IconDisplayData;
  matches?: readonly [number, number][];
};

const highlightMatches = (
  input: string,
  matches: IconPreviewProps['matches']
) => {
  if (!matches) return [input];

  const highlights: React.ReactNode[] = [];

  matches.forEach((match, curr) => {
    const prior = curr - 1;
    const isLast = matches.length - 1 === curr;
    const isFirst = 0 === curr;

    if (isFirst) {
      const first = input.slice(0, match[0]);
      if (first.length) highlights.push(first);
    }

    // splice prior end => current start
    if (matches[prior])
      highlights.push(input.slice(matches[prior][1], match[0]));

    // splice current start -> current end
    highlights.push(
      <strong key={curr}>{input.slice(match[0], match[1] + 1)}</strong>
    );

    // splice current end to next start
    if (isLast) {
      highlights.push(input.slice(match[1] + 1));
    }
  });

  return highlights;
};

export function IconPreview({ iconData, matches }: IconPreviewProps) {
  const { selectedIconType } = useSelectedIconType();
  const setSelectedIcon = useSelectedIcon(state => state.setSelectedIcon);
  const Icon = iconData.logo ?? iconData[selectedIconType];

  return (
    <chakra.button
      padding={[3, 5]}
      mr={[3, 5]}
      mb={[3, 5]}
      display="flex"
      alignItems="center"
      flexDir="column"
      border="1px solid"
      borderColor="gray.100"
      rounded="lg"
      animation="border ease-out 500ms"
      _hover={{
        cursor: 'pointer',
        boxShadow: 'lg',
      }}
      onClick={() => {
        setSelectedIcon(iconData);
      }}
    >
      <Icon boxSize={10} />
      <Text
        color="gray.500"
        mt={2}
        textOverflow="ellipsis"
        overflow="hidden"
        whiteSpace="nowrap"
        maxWidth="7rem"
      >
        {highlightMatches(iconData.name, matches)}
      </Text>
    </chakra.button>
  );
}
