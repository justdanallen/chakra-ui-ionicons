import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const ColorFilterOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <circle  cx='256' cy='184' r='120' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
    <circle  cx='344' cy='328' r='120' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
    <circle  cx='168' cy='328' r='120' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
  </Icon>
);