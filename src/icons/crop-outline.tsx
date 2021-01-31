import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const CropOutlineIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 512 512"
    fill="currentcolor"
    stroke="currentcolor"
    {...props}
  >
    <path
      d="M144 48v272a48 48 0 0048 48h272"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <path
      d="M368 304V192a48 48 0 00-48-48H208M368 368v96M144 144H48"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </Icon>
);
