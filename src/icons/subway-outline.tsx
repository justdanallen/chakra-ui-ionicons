import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const SubwayOutlineIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 512 512"
    fill="currentcolor"
    stroke="currentcolor"
    {...props}
  >
    <rect
      x="112"
      y="32"
      width="288"
      height="352"
      rx="48"
      ry="48"
      fill="none"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M208 80h96"
    />
    <rect
      x="112"
      y="128"
      width="288"
      height="96"
      rx="32"
      ry="32"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <circle
      cx="176"
      cy="320"
      r="16"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <circle
      cx="336"
      cy="320"
      r="16"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M144 464h224M336 432l48 48M176 432l-48 48"
    />
  </Icon>
);
