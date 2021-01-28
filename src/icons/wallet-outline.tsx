import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const WalletOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <rect  x='48' y='144' width='416' height='288' rx='48' ry='48' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
    <path  d='M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
    <path  d='M368 320a32 32 0 1132-32 32 32 0 01-32 32z'/>
  </Icon>
);