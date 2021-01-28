import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const DiscOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <circle  cx='256' cy='256' r='208' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
    <circle  cx='256' cy='256' r='96' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
    <circle  cx='256' cy='256' r='32'/>
  </Icon>
);