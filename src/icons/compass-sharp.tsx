import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const CompassSharp = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <circle  cx='256' cy='256' r='24'/>
    <path  d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm48 256l-160 64 64-160 160-64z'/>
  </Icon>
);