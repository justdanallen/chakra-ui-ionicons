import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const EllipsisHorizontalSharpIcon = (props: IconProps) => (
<Icon viewBox='0 0 512 512' fill="currentcolor" stroke="currentcolor" {...props}>
  <circle  cx='256' cy='256' r='48'/>
  <circle  cx='416' cy='256' r='48'/>
  <circle  cx='96' cy='256' r='48'/>
</Icon>
);