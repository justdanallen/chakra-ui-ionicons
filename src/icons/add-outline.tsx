import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const AddOutlineIcon = (props: IconProps) => (
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
      strokeWidth="32"
      d="M256 112v288M400 256H112"
    />
  </Icon>
);
