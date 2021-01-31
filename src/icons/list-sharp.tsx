import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const ListSharpIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 512 512"
    fill="currentcolor"
    stroke="currentcolor"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="48"
      d="M144 144h320M144 256h320M144 368h320"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M64 128h32v32H64zM64 240h32v32H64zM64 352h32v32H64z"
    />
  </Icon>
);
