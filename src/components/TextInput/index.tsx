import React from 'react';

import { Container, SearchInput, SearchLabel } from './styles';

interface Props {
  value: string;
  label: string;
  onChangeText?: (args: any) => any | void;
  onEndEditing?: (args: any) => any | void;
}

export function TextInput({ label, value, onChangeText, onEndEditing }: Props) {
  return (
    <Container>
      <SearchLabel>{label}</SearchLabel>
      <SearchInput
        value={value}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        returnKeyType="done"
      />
    </Container>
  );
}
