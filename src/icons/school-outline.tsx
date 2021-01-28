import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const SchoolOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M32 192L256 64l224 128-224 128L32 192z'/>
    <path  fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M112 240v128l144 80 144-80V240M480 368V192M256 320v128'/>
  </Icon>
);