import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const MenuOutlineIcon = (props: IconProps) => (
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
      strokeMiterlimit="10"
      strokeWidth="32"
      d="M80 160h352M80 256h352M80 352h352"
    />
  </Icon>
);
