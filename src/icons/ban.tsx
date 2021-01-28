import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const Ban = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <circle  fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='48' cx='256' cy='256' r='200'/>
    <path  stroke='currentColor' stroke-miterlimit='10' stroke-width='48' d='M114.58 114.58l282.84 282.84'/>
  </Icon>
);