import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const AlertSharpIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 512 512"
    fill="currentcolor"
    stroke="currentcolor"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeMiterlimit="10"
      strokeWidth="32"
      d="M240 80l8 240h16l8-240h-32zM240 400h32v32h-32z"
    />
  </Icon>
);
