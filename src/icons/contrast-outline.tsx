import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const ContrastOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <circle  cx='256' cy='256' r='208' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
    <path  d='M256 464c-114.88 0-208-93.12-208-208S141.12 48 256 48z'/>
  </Icon>
);