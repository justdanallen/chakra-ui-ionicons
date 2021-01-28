import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const PulseOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M48 320h64l64-256 64 384 64-224 32 96h64'/>
    <circle  cx='432' cy='320' r='32' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
  </Icon>
);