import {
  Box,
  HStack,
  useColorMode,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';
import * as React from 'react';
import { useSelectedIconType } from '../state';

function RadioItem(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  const mode = useColorMode();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        color="gray.500"
        cursor="pointer"
        _checked={{
          color: mode.colorMode === 'light' ? 'gray.700' : 'white',
          borderBottom: '3px solid',
          borderColor: 'blue.400',
        }}
        _focus={{
          boxShadow: 'outline',
          borderColor: 'blue.400',
        }}
        px={3}
        py={1}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export function SelectIconType() {
  const { selectedIconType, setSelectedIconType } = useSelectedIconType();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'icon-type',
    defaultValue: 'filled',
    value: selectedIconType,
    onChange: value =>
      setSelectedIconType(String(value).toLowerCase() as SelectedIconType),
  });

  const options: SelectedIconType[] = ['filled', 'outline', 'sharp'];

  return (
    <HStack {...getRootProps()}>
      {options.map(value => {
        const radio = getRadioProps({ value });
        return (
          <RadioItem key={value} {...radio}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </RadioItem>
        );
      })}
    </HStack>
  );
}
