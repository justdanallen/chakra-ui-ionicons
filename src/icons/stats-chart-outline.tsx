import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const StatsChartOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <rect  x='64' y='320' width='48' height='160' rx='8' ry='8' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <rect  x='288' y='224' width='48' height='256' rx='8' ry='8' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <rect  x='400' y='112' width='48' height='368' rx='8' ry='8' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <rect  x='176' y='32' width='48' height='448' rx='8' ry='8' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
  </Icon>
);