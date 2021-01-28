import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const RepeatSharp = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  fill='none' stroke='currentColor' stroke-linecap='square' stroke-miterlimit='10' stroke-width='32' d='M320 120l48 48-48 48'/>
    <path  fill='none' stroke='currentColor' stroke-linecap='square' stroke-miterlimit='10' stroke-width='32' d='M352 168H64v96M192 392l-48-48 48-48'/>
    <path  fill='none' stroke='currentColor' stroke-linecap='square' stroke-miterlimit='10' stroke-width='32' d='M160 344h288v-96'/>
  </Icon>
);