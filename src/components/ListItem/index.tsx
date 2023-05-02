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
      <Image testID="list-item-image" source={{ uri: data.image }} />
      <Name testID="list-item-name">{data.name}</Name>
    </Container>
  );
}
