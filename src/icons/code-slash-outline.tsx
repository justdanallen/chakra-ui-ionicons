import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const CodeSlashOutlineIcon = (props: IconProps) => (
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
      d="M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"
    />
  </Icon>
);
