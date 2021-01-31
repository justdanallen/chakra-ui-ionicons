import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const CartOutlineIcon = (props: IconProps) => (
<Icon viewBox='0 0 512 512' fill="currentcolor" stroke="currentcolor" {...props}>
  <circle  cx='176' cy='416' r='16' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
  <circle  cx='400' cy='416' r='16' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
  <path  fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M48 80h64l48 272h256'/>
  <path  d='M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
</Icon>
);