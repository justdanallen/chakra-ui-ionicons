import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const EllipsisVertical = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <circle  cx='256' cy='256' r='48'/>
    <circle  cx='256' cy='416' r='48'/>
    <circle  cx='256' cy='96' r='48'/>
  </Icon>
);