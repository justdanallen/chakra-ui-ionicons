import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const CloseOutlineIcon = (props: IconProps) => (
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
      d="M368 368L144 144M368 144L144 368"
    />
  </Icon>
);
