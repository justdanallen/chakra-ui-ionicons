import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const AlbumsOutlineIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 512 512"
    fill="currentcolor"
    stroke="currentcolor"
    {...props}
  >
    <rect
      x="64"
      y="176"
      width="384"
      height="256"
      rx="28.87"
      ry="28.87"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
      d="M144 80h224M112 128h288"
    />
  </Icon>
);
