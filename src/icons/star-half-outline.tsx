import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const StarHalfOutlineIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 512 512"
    fill="currentcolor"
    stroke="currentcolor"
    {...props}
  >
    <path
      d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <path d="M256 48v316L118 464l54-160-140-96h172l52-160z" />
  </Icon>
);
