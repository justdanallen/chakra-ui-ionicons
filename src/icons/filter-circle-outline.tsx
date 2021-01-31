import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const FilterCircleOutlineIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 512 512"
    fill="currentcolor"
    stroke="currentcolor"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="32"
      strokeMiterlimit="10"
      d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="32"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M144 208h224M176 272h160M224 336h64"
    />
  </Icon>
);
