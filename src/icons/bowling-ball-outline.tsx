import React from "react";
import { Icon, IconProps } from '@chakra-ui/icon';

export const BowlingBallOutline = (props: IconProps) => (
  <Icon viewBox='0 0 512 512' {...props}>
    <circle  cx='256' cy='256' r='208' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
    <circle  cx='288' cy='200' r='24'/>
    <circle  cx='296' cy='128' r='24'/>
    <circle  cx='360' cy='168' r='24'/>
  </Icon>
);