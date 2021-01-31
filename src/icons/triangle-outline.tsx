import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const TriangleOutlineIcon = (props: IconProps) => (
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
      d="M48 448L256 64l208 384H48z"
    />
  </Icon>
);
