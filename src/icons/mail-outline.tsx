import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const MailOutlineIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 512 512"
    fill="currentcolor"
    stroke="currentcolor"
    {...props}
  >
    <rect
      x="48"
      y="96"
      width="416"
      height="320"
      rx="40"
      ry="40"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M112 160l144 112 144-112"
    />
  </Icon>
);
