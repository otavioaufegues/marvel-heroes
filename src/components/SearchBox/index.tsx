import React from 'react';

import { Container, SearchInput, SearchLabel } from './styles';

interface Props {
  title: string;
}

export function SearchBox({ title }: Props) {
  return (
    <Container>
      <SearchLabel>{title}</SearchLabel>
      <SearchInput />
    </Container>
  );
}
