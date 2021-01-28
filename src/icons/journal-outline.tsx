import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const JournalOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <rect  x='96' y='48' width='320' height='416' rx='48' ry='48' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
    <path  fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='60' d='M320 48v416'/>
  </Icon>
);