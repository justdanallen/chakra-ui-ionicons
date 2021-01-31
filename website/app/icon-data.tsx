import { Icon } from '@chakra-ui/react';
import * as Icons from '../../src';
import * as React from 'react';
import { ReactElement } from 'react';
import { IconPreview } from './icon-preview';

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

// const getIcons = (type: IconType) => Object.entries(Icons).reduce()
export const defaultIconData: IconDisplayData[] = [];
export const DefaultIconDisplay: ReactElement[] = [];

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

    defaultIconData.push({
      name: key,
      Icon: value,
    });

    DefaultIconDisplay.push(<IconPreview key={key} name={key} Icon={value} />);

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
