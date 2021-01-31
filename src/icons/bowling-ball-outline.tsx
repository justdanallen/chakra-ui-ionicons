import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const BowlingBallOutlineIcon = (props: IconProps) => (
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
    <circle cx="288" cy="200" r="24" />
    <circle cx="296" cy="128" r="24" />
    <circle cx="360" cy="168" r="24" />
  </Icon>
);
