import { Box, HStack, useRadio, useRadioGroup } from '@chakra-ui/react';
import * as React from 'react';
import { useAppStore } from '.';
import { SelectedIconType } from './icon-data-2';

function RadioItem(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export function SelectIconType() {
  const { setSelected, selected } = useAppStore(state => ({
    selected: state.selectedIconType,
    setSelected: state.setSelectedIconType,
  }));

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'icon-type',
    defaultValue: 'filled',
    value: selected,
    onChange: value =>
      setSelected(String(value).toLowerCase() as SelectedIconType),
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
