import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const SchoolOutlineIcon = (props: IconProps) => (
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
      d="M32 192L256 64l224 128-224 128L32 192z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M112 240v128l144 80 144-80V240M480 368V192M256 320v128"
    />
  </Icon>
);
