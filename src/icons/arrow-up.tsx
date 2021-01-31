import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const ArrowUpIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 512 512"
    fill="currentcolor"
    stroke="currentcolor"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="48"
      d="M112 244l144-144 144 144M256 120v292"
    />
  </Icon>
);
