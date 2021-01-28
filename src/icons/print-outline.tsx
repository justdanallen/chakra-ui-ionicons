import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const PrintOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  d='M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
    <rect  x='128' y='240' width='256' height='208' rx='24.32' ry='24.32' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
    <path  d='M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
    <circle  cx='392' cy='184' r='24'/>
  </Icon>
);