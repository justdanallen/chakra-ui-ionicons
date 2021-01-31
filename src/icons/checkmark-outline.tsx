import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const CheckmarkOutlineIcon = (props: IconProps) => (
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
      d="M416 128L192 384l-96-96"
    />
  </Icon>
);
