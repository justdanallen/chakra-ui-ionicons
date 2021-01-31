import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const EllipseOutlineIcon = (props: IconProps) => (
<Icon viewBox='0 0 512 512' fill="currentcolor" stroke="currentcolor" {...props}>
  <circle  cx='256' cy='256' r='192' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
</Icon>
);