import React from 'react';
import { Container, Image, Name } from './styles';

export interface ListItemProps {
  id: string;
  image: string;
  name: string;
}

interface Props {
  data: ListItemProps;
}

export function ListItem({ data }: Props) {
  return (
    <Container>
      <Image source={{ uri: data.image }} />
      <Name>{data.name}</Name>
    </Container>
  );
}
