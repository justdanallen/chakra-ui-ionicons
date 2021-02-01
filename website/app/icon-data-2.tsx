import { Icon } from '@chakra-ui/react';
import * as Icons from '../../src';

enum IconIconSearchKey {
  logo = 'Logo',
  outline = 'Outline',
  sharp = 'Sharp',
}

const IconKeys = Object.values(IconIconSearchKey);

export type IconDisplayData = {
  name: string;
  filled: typeof Icon;
  outline: typeof Icon;
  sharp: typeof Icon;
  logo: typeof Icon;
};

export type SelectedIconType = keyof Omit<IconDisplayData, 'name'>;

type IconData = {
  [key: string]: IconDisplayData;
};

/**
 * This recursively searches for a match to see which key is matched.
 * If a key is found the key is returned with the root name.
 * @param input Icon name
 * @param keys An array of keys to search on
 */
const getIonIconKey = (
  input: string,
  keys: string[]
): { key?: string; name: string } => {
  if (keys.length === 0) {
    return {
      name: input,
    };
  }

  const key = keys.pop();
  if (!key) throw new Error("Key can't be an empty string or falsy");
  const result = input.split(key);

  if (result.length > 1) {
    return {
      key: key.toLowerCase(),
      name: key !== IconIconSearchKey.logo ? result[0] : result[1],
    };
  } else {
    return getIonIconKey(input, keys);
  }
};

export const iconData = Object.entries(Icons).reduce(
  (acc, [iconName, Component]) => {
    const { key, name } = getIonIconKey(iconName.split('Icon')[0], [
      ...IconKeys,
    ]);

    return {
      ...acc,
      [name]: {
        ...acc[name],
        name,
        [key ?? 'filled']: Component,
      },
    };
  },
  {} as IconData
);

console.log(iconData);
