import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const CalendarClearOutlineIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 512 512"
    fill="currentcolor"
    stroke="currentcolor"
    {...props}
  >
    <rect
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="32"
      x="48"
      y="80"
      width="416"
      height="384"
      rx="48"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="32"
      strokeLinecap="round"
      d="M128 48v32M384 48v32M464 160H48"
    />
  </Icon>
);
