import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const ToggleOutlineIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 512 512"
    fill="currentcolor"
    stroke="currentcolor"
    {...props}
  >
    <circle
      cx="368"
      cy="256"
      r="128"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <rect
      x="16"
      y="128"
      width="480"
      height="256"
      rx="128"
      ry="128"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </Icon>
);
