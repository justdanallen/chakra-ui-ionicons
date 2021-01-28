import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const FemaleOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <circle  cx='256' cy='184' r='152' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <path  fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M256 336v144M314 416H198'/>
  </Icon>
);