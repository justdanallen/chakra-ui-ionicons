import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const TodayOutlineIcon = (props: IconProps) => (
<Icon viewBox='0 0 512 512' fill="currentcolor" stroke="currentcolor" {...props}>
  <rect  fill='none' stroke='currentColor' strokeLinejoin='round' strokeWidth='32' x='48' y='80' width='416' height='384' rx='48'/>
  <path  fill='none' stroke='currentColor' strokeLinejoin='round' strokeWidth='32' strokeLinecap='round' d='M128 48v32M384 48v32'/>
  <rect  fill='none' stroke='currentColor' strokeLinejoin='round' strokeWidth='32' strokeLinecap='round' x='112' y='224' width='96' height='96' rx='13'/>
  <path  fill='none' stroke='currentColor' strokeLinejoin='round' strokeWidth='32' strokeLinecap='round' d='M464 160H48'/>
</Icon>
);