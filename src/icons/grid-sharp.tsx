import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const GridSharp = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  d='M240 240H32V32h208zM480 240H272V32h208zM240 480H32V272h208zM480 480H272V272h208z'/>
  </Icon>
);