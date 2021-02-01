import { Box, HStack, useRadio, useRadioGroup } from '@chakra-ui/react';
import * as React from 'react';

// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
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

type SquareRadioProps = {
  options: string[];
  onChange: (value: string) => void;
};

export function SquareRadio({ options, onChange }: SquareRadioProps) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'icon-type',
    defaultValue: 'react',
    onChange: value => onChange(String(value)),
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map(value => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}
