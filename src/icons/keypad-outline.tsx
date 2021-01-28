import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const KeypadOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <circle  cx='256' cy='448' r='32' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
    <circle  cx='256' cy='320' r='32' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
    <path  d='M288 192a32 32 0 11-32-32 32 32 0 0132 32z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
    <circle  cx='256' cy='64' r='32' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
    <circle  cx='384' cy='320' r='32' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
    <circle  cx='384' cy='192' r='32' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
    <circle  cx='384' cy='64' r='32' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
    <circle  cx='128' cy='320' r='32' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
    <circle  cx='128' cy='192' r='32' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
    <circle  cx='128' cy='64' r='32' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
  </Icon>
);