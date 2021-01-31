import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const MaleFemaleOutlineIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 512 512"
    fill="currentcolor"
    stroke="currentcolor"
    {...props}
  >
    <circle
      cx="216"
      cy="200"
      r="136"
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
      d="M216 352v128M272 416H160M432 112V32h-80M335.28 128.72L432 32"
    />
  </Icon>
);
