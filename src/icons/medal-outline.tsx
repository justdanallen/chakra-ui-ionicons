import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const MedalOutlineIcon = (props: IconProps) => (
<Icon viewBox='0 0 512 512' fill="currentcolor" stroke="currentcolor" {...props}>
  <circle  cx='256' cy='352' r='112' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
  <circle  cx='256' cy='352' r='48' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
  <path  d='M147 323L41.84 159.32a32 32 0 01-1.7-31.61l31-62A32 32 0 0199.78 48h312.44a32 32 0 0128.62 17.69l31 62a32 32 0 01-1.7 31.61L365 323M371 144H37M428.74 52.6L305 250M140.55 144L207 250' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
</Icon>
);