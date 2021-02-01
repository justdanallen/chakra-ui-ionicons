import { Icon } from '@chakra-ui/react';
import * as Icons from '../../src';

export type IconDisplayData = {
  name: string;
  Icon: typeof Icon;
};

type IconData = {
  standard: IconDisplayData[];
  sharp: IconDisplayData[];
  outline: IconDisplayData[];
};

enum IconType {
  standard = 'standard',
  outline = 'Outline',
  sharp = 'Sharp',
  logo = 'Logo',
}

export const iconData = Object.entries(Icons).reduce(
  (acc, [key, value]) => {
    if (key.includes(IconType.outline)) {
      return {
        ...acc,
        outline: [
          ...acc.outline,
          {
            name: key,
            Icon: value,
          },
        ],
      };
    }

    if (key.includes(IconType.sharp)) {
      return {
        ...acc,
        sharp: [
          ...acc.sharp,
          {
            name: key,
            Icon: value,
          },
        ],
      };
    }

    return {
      ...acc,
      standard: [
        ...acc.standard,
        {
          name: key,
          Icon: value,
        },
      ],
    };
  },
  { standard: [], outline: [], sharp: [] } as IconData
);
