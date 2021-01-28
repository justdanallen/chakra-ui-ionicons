import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const ToggleOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <circle  cx='368' cy='256' r='128' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
    <rect  x='16' y='128' width='480' height='256' rx='128' ry='128' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
  </Icon>
);