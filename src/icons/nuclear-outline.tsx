import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const NuclearOutlineIcon = (props: IconProps) => (
<Icon viewBox='0 0 512 512' fill="currentcolor" stroke="currentcolor" {...props}>
  <circle  cx='256' cy='256' r='192' fill='none' stroke='currentColor' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32'/>
  <circle  cx='256' cy='256' r='64' fill='none' stroke='currentColor' strokeMiterlimit='10' strokeWidth='32'/>
  <path  fill='none' stroke='currentColor' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M224 192L171 85M288 192l53-107M327.55 255.81l119.41.13M299.09 313.13l72.25 95.06M184.45 255.81l-119.41.13M212.91 313.13l-72.25 95.06'/>
</Icon>
);