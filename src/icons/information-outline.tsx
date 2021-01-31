import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const InformationOutlineIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 512 512"
    fill="currentcolor"
    stroke="currentcolor"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="40"
      d="M196 220h64v172"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="40"
      d="M187 396h138"
    />
    <path d="M256 160a32 32 0 1132-32 32 32 0 01-32 32z" />
  </Icon>
);
