import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const ReorderThreeIcon = (props: IconProps) => (
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
      strokeWidth="44"
      d="M102 256h308M102 176h308M102 336h308"
    />
  </Icon>
);
