import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const ServerOutlineIcon = (props: IconProps) => (
<Icon viewBox='0 0 512 512' fill="currentcolor" stroke="currentcolor" {...props}>
  <ellipse  cx='256' cy='128' rx='192' ry='80' fill='none' stroke='currentColor' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32'/>
  <path  d='M448 214c0 44.18-86 80-192 80S64 258.18 64 214M448 300c0 44.18-86 80-192 80S64 344.18 64 300' fill='none' stroke='currentColor' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32'/>
  <path  d='M64 127.24v257.52C64 428.52 150 464 256 464s192-35.48 192-79.24V127.24' fill='none' stroke='currentColor' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32'/>
</Icon>
);