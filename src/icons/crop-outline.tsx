import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const CropOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  d='M144 48v272a48 48 0 0048 48h272' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
    <path  d='M368 304V192a48 48 0 00-48-48H208M368 368v96M144 144H48' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
  </Icon>
);