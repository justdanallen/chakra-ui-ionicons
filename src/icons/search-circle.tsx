import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const SearchCircleIcon = (props: IconProps) => (
<Icon viewBox='0 0 512 512' fill="currentcolor" stroke="currentcolor" {...props}>
  <path  d='M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192 192-86.13 192-192S361.87 64 256 64zm91.31 283.31a16 16 0 01-22.62 0l-42.84-42.83a88.08 88.08 0 1122.63-22.63l42.83 42.84a16 16 0 010 22.62z'/>
  <circle  cx='232' cy='232' r='56'/>
</Icon>
);