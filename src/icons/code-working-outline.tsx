import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const CodeWorkingOutlineIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 512 512"
    fill="currentcolor"
    stroke="currentcolor"
    {...props}
  >
    <circle cx="256" cy="256" r="26" />
    <circle cx="346" cy="256" r="26" />
    <circle cx="166" cy="256" r="26" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M160 368L32 256l128-112M352 368l128-112-128-112"
    />
  </Icon>
);
