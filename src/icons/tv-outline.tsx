import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const TvOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <rect  x='32' y='96' width='448' height='272' rx='32.14' ry='32.14' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
    <path  stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32' d='M128 416h256'/>
  </Icon>
);