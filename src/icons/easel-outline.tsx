import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const EaselOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <rect  x='48' y='80' width='416' height='272' rx='32' ry='32' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
    <path  fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M256 416v-64M256 80V48M400 464l-32-112M112 464l32-112'/>
  </Icon>
);