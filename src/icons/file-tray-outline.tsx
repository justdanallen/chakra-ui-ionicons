import React from 'react';
import { Icon, IconProps } from '@chakra-ui/icon';

export const FileTrayOutlineIcon = (props: IconProps) => (
  <Icon
    viewBox="0 0 512 512"
    fill="currentcolor"
    stroke="currentcolor"
    {...props}
  >
    <path
      d="M384 80H128c-26 0-43 14-48 40L48 272v112a48.14 48.14 0 0048 48h320a48.14 48.14 0 0048-48V272l-32-152c-5-27-23-40-48-40z"
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
      d="M48 272h144M320 272h144M192 272a64 64 0 00128 0"
    />
  </Icon>
);
