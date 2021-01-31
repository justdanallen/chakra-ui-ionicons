import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const BanIcon = (props: IconProps) => (
<Icon viewBox='0 0 512 512' fill="currentcolor" stroke="currentcolor" {...props}>
  <circle  fill='none' stroke='currentColor' strokeMiterlimit='10' strokeWidth='48' cx='256' cy='256' r='200'/>
  <path  stroke='currentColor' strokeMiterlimit='10' strokeWidth='48' d='M114.58 114.58l282.84 282.84'/>
</Icon>
);