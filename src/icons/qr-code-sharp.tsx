import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const QrCodeSharpIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 512 512"
    fill="currentcolor"
    stroke="currentcolor"
    {...props}
  >
    <path d="M336 336h80v80h-80zM272 272h64v64h-64zM416 416h64v64h-64zM432 272h48v48h-48zM272 432h48v48h-48zM336 96h80v80h-80z" />
    <path d="M480 240H272V32h208zm-164-44h120V76H316zM96 96h80v80H96z" />
    <path d="M240 240H32V32h208zM76 196h120V76H76zM96 336h80v80H96z" />
    <path d="M240 480H32V272h208zM76 436h120V316H76z" />
  </Icon>
);
