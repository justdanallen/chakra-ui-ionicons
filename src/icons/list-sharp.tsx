import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const ListSharp = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='48' d='M144 144h320M144 256h320M144 368h320'/>
    <path  fill='none' stroke='currentColor' stroke-linecap='square' stroke-linejoin='round' stroke-width='32' d='M64 128h32v32H64zM64 240h32v32H64zM64 352h32v32H64z'/>
  </Icon>
);