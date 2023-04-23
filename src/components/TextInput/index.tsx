import React from 'react';

import { Container, SearchInput, SearchLabel } from './styles';

interface Props {
  label: string;
}

export function TextInput({ label }: Props) {
  return (
    <Container>
      <SearchLabel>{label}</SearchLabel>
      <SearchInput />
    </Container>
  );
}
