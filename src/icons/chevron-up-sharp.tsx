import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const ChevronUpSharpIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 512 512"
    fill="currentcolor"
    stroke="currentcolor"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeMiterlimit="10"
      strokeWidth="48"
      d="M112 328l144-144 144 144"
    />
  </Icon>
);
