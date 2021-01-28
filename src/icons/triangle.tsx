import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const Triangle = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <path  d='M464 464H48a16 16 0 01-14.07-23.62l208-384a16 16 0 0128.14 0l208 384A16 16 0 01464 464z'/>
  </Icon>
);