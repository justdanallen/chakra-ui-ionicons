import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const CellularOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <rect  x='416' y='96' width='64' height='320' rx='8' ry='8' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
    <rect  x='288' y='176' width='64' height='240' rx='8' ry='8' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
    <rect  x='160' y='240' width='64' height='176' rx='8' ry='8' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
    <rect  x='32' y='304' width='64' height='112' rx='8' ry='8' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
  </Icon>
);