import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const EllipsisVerticalCircle = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <circle  cx='256' cy='256' r='26'/>
    <circle  cx='256' cy='346' r='26'/>
    <circle  cx='256' cy='166' r='26'/>
    <path  d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
  </Icon>
);