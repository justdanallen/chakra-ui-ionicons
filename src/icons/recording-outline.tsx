import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const RecordingOutlineIcon = (props: IconProps) => (
<Icon viewBox='0 0 512 512' fill="currentcolor" stroke="currentcolor" {...props}>
  <circle  cx='128' cy='256' r='96' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
  <circle  cx='384' cy='256' r='96' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
  <path  fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M128 352h256'/>
</Icon>
);