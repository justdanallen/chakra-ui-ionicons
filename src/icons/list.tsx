import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const ListIcon = (props: IconProps) => (
<Icon viewBox='0 0 512 512' fill="currentcolor" stroke="currentcolor" {...props}>
  <path  fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='48' d='M160 144h288M160 256h288M160 368h288'/>
  <circle  cx='80' cy='144' r='16' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
  <circle  cx='80' cy='256' r='16' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
  <circle  cx='80' cy='368' r='16' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
</Icon>
);