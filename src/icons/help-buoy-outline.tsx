import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const HelpBuoyOutlineIcon = (props: IconProps) => (
<Icon viewBox='0 0 512 512' fill="currentcolor" stroke="currentcolor" {...props}>
  <circle  cx='256' cy='256' r='208' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
  <circle  cx='256' cy='256' r='80' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
  <path  fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M208 54l8 132M296 186l8-132M208 458l8-132M296 326l8 132M458 208l-132 8M326 296l132 8M54 208l132 8M186 296l-132 8'/>
</Icon>
);