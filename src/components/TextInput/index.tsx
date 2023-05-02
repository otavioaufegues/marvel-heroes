import React from 'react';

import { Container, SearchInput, SearchLabel } from './styles';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  value: string;
  label: string;
  onChangeText?: (args: any) => any | void;
  onEndEditing?: (args: any) => any | void;
  placeholder: string;
}

export function TextInput({
  label,
  value,
  onChangeText,
  onEndEditing,
  placeholder,
  testID,
}: Props) {
  return (
    <Container>
      <SearchLabel>{label}</SearchLabel>
      <SearchInput
        testID={testID}
        value={value}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        returnKeyType="done"
        placeholder={placeholder}
      />
    </Container>
  );
}
