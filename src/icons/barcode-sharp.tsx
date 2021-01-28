import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const BarcodeSharp = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  fill='none' stroke='currentColor' stroke-linecap='square' stroke-linejoin='round' stroke-width='32' d='M400 400.33l48-.33V112l-48 .33M112 112l-48 .33v288l48-.33M384 192v128M320 160v192M256 176v160M192 160v192M128 192v128'/>
  </Icon>
);