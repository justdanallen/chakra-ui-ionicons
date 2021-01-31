import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const DiscOutlineIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 512 512"
    fill="currentcolor"
    stroke="currentcolor"
    {...props}
  >
    <circle
      cx="256"
      cy="256"
      r="208"
      fill="none"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
    <circle
      cx="256"
      cy="256"
      r="96"
      fill="none"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
    <circle cx="256" cy="256" r="32" />
  </Icon>
);
