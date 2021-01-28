import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const MedkitOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <rect  x='32' y='112' width='448' height='352' rx='48' ry='48' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
    <path  d='M144 112V80a32 32 0 0132-32h160a32 32 0 0132 32v32M256 208v160M336 288H176' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
  </Icon>
);